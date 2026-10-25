// === Module 10855: FavoritesCleanup ===

// Module 10855 (FavoritesCleanup)
import DurationsDefault from "Durations" /* 1104 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1211 */;
import getThreadAutoArchiveTimeOnce from "getThreadAutoArchiveTimeOnce" /* 6822 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 7410 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import PermissionStore from "PermissionStore" /* 4903 */;
import ReadStateStore from "ReadStateStore" /* 6771 */;
import FavoriteStore from "FavoriteStore" /* 4826 */;

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
let closure_11 = async function _loadFavoriteThreadsForCleanup(arg0) {
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
      return { value: "IconComponent", done: null };
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
        return { value: "IconComponent", done: null };
      }
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
    }
  }
};
const THREAD_CHANNEL_TYPES = fn(4827).THREAD_CHANNEL_TYPES;
const Permissions = fn(1098).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoritesCleanup.tsx");

export { getFavoriteThreadIdsForCleanup };
export const loadFavoriteThreadsForCleanup = function loadFavoriteThreadsForCleanup() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getFavoritesCleanupCandidates = function getFavoritesCleanupCandidates(days) {
  days = days.days;
  if (Number.isSafeInteger(days)) {
    if (days >= 1) {
      const _Date = Date;
      const timestamp = Date.now();
      const items = [];
      const diff = timestamp - days * DurationsDefault.Millis.DAY;
      const tmp28 = getFavoriteThreadIdsForCleanup(days.categoryId);
      const iter = tmp28[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let channel = ChannelStore.getChannel(nextResult);
        let tmp7 = channel;
        if (null != channel) {
          if (null != tmp7.threadMetadata) {
            if (PermissionStore.can(Permissions.VIEW_CHANNEL, tmp7)) {
              if (tmp7.threadMetadata.archived) {
                let arr = items.push(tmp7);
              } else if (!ReadStateStore.hasUnreadOrMentions(tmp4)) {
                let obj = getThreadAutoArchiveTimeOnce;
                let threadLastActivityTime = obj.getThreadLastActivityTime(tmp7);
                let tmp15 = threadLastActivityTime;
                let _Number = Number;
                let isFiniteResult = Number.isFinite(threadLastActivityTime);
                if (isFiniteResult) {
                  isFiniteResult = tmp15 > 0;
                }
                if (isFiniteResult) {
                  isFiniteResult = tmp15 < diff;
                }
                if (isFiniteResult) {
                  let arr2 = items.push(tmp7);
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
};