// === Module 11028: FavoritesCleanup ===

// Module 11028 (FavoritesCleanup)
import DurationsDefault from "Durations" /* 1089 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import getThreadAutoArchiveTimeOnce from "getThreadAutoArchiveTimeOnce" /* 7032 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 7626 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 4992 */;
import PermissionStore from "PermissionStore" /* 5075 */;
import ReadStateStore from "ReadStateStore" /* 6980 */;
import FavoriteStore from "FavoriteStore" /* 4995 */;

require = fn;
function getFavoriteThreadIdsForCleanup(categoryId) {
  closure_0 = categoryId;
  const values = Object.values(FavoriteStore.getFavoriteChannels());
  const found = values.filter((type) => {
    if (type.type !== preloaded_user_settings.FavoriteChannelType.REFERENCE_ORIGINAL) {
      return false;
    } else {
      if (null != closure_0) {
        if (type.parentId !== tmp) {
          return false;
        }
      }
      const channel = ChannelStore.getChannel(type.id);
      if (null != channel) {
        let isThreadResult = channel.isThread();
      } else {
        isThreadResult = null != type.channelType;
        if (isThreadResult) {
          isThreadResult = THREAD_CHANNEL_TYPES.has(type.channelType);
        }
      }
      return isThreadResult;
    }
  });
  return found.map((id) => id.id);
}
let closure_13 = async function _loadFavoriteThreadsForCleanup(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c2 = 1;
          c1 = 1;
          const obj5 = { value: LazyLoadedThreadManagerDefault.loadThreadsBulk(getFavoriteThreadIdsForCleanup(closure_0)), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c1 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
    }
  }
};
const THREAD_CHANNEL_TYPES = fn(4996).THREAD_CHANNEL_TYPES;
const FavoritesConstants = fn(5005);
({ FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME: closure_9, FAVORITES_PRUNE_WHEN_ARCHIVED: closure_10 } = FavoritesConstants);
const Permissions = fn(1083).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoritesCleanup.tsx");

export { getFavoriteThreadIdsForCleanup };
export function getAutoAddedThreadsCategoryId() {
  closure_0 = closure_9.toLowerCase();
  const values = Object.values(FavoriteStore.getFavoriteChannels());
  const found = values.find((type) => {
    let tmp = type.type === preloaded_user_settings.FavoriteChannelType.CATEGORY;
    if (tmp) {
      let formatted;
      if (type.nickname != null) {
        formatted = str.trim().toLowerCase();
        const str2 = str.trim();
      }
      tmp = formatted === closure_0;
    }
    return tmp;
  });
  let id;
  if (found != null) {
    id = found.id;
  }
  if (id == null) {
    id = null;
  }
  return id;
}
export function loadFavoriteThreadsForCleanup() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function getFavoritesCleanupCandidates(days) {
  days = days.days;
  if (Number.isSafeInteger(days)) {
    if (days >= 0) {
      const _Date = Date;
      const timestamp = Date.now();
      items = [];
      const diff = timestamp - days * DurationsDefault.Millis.DAY;
      const tmp29 = getFavoriteThreadIdsForCleanup(days.categoryId);
      const iter = tmp29[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let channel = ChannelStore.getChannel(nextResult);
        let tmp7 = channel;
        if (null != channel) {
          if (null != tmp7.threadMetadata) {
            if (PermissionStore.can(Permissions.VIEW_CHANNEL, tmp7)) {
              if (!ReadStateStore.hasUnreadOrMentions(tmp4)) {
                if (tmp7.threadMetadata.archived) {
                  let arr = items.push(tmp7);
                } else if (days !== closure_1_10) {
                  let obj = getThreadAutoArchiveTimeOnce;
                  let threadLastActivityTime = obj.getThreadLastActivityTime(tmp7);
                  let tmp16 = threadLastActivityTime;
                  let _Number = Number;
                  let isFiniteResult = Number.isFinite(threadLastActivityTime);
                  if (isFiniteResult) {
                    isFiniteResult = tmp16 > 0;
                  }
                  if (isFiniteResult) {
                    isFiniteResult = tmp16 < diff;
                  }
                  if (isFiniteResult) {
                    let arr2 = items.push(tmp7);
                  }
                }
              }
            }
          }
        }
        continue;
      }
      const mapped = items.map((channel) => {
        let POSITIVE_INFINITY = getThreadAutoArchiveTimeOnce.getThreadLastActivityTime(channel);
        const obj2 = { channel, activity: null };
        if (!Number.isFinite(POSITIVE_INFINITY)) {
          const _Number = Number;
          POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
        }
        obj2.activity = POSITIVE_INFINITY;
        return obj2;
      });
      const sorted = mapped.sort((activity, activity2) => activity.activity - activity2.activity);
      return sorted.map((channel) => channel.channel);
    }
  }
  return [];
}