// === Module 7305: ForumActivePostStore ===

// Module 7305 (ForumActivePostStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ThreadSortOrder from "ThreadSortOrder" /* 1966 */;
import ThreadSearchTagSetting from "ThreadSearchTagSetting" /* 1968 */;
import SetUtils from "SetUtils" /* 1974 */;
import ForumUtils from "ForumUtils" /* 7307 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5507 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7306 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import apply from "module_12" /* 12 */;

require = fn;
function maybeRebuildState() {
  const channelId = SelectedChannelStore.getChannelId();
  if (null != channelId) {
    const channel = ChannelStore.getChannel(channelId);
    let isForumLikeChannelResult;
    if (channel != null) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    if (isForumLikeChannelResult) {
      rebuildState({ refreshThreadIds: true });
    }
  }
  closure_17 = [];
  c3 = null;
  c12 = null;
  set = new Set();
  LATEST_ACTIVITY = ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY;
  MATCH_SOME = ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME;
  closure_16 = 0;
  closure_19 = [];
  closure_20 = apply.chain(items);
  closure_21 = apply.chain(items);
  set2.clear();
  set1.clear();
  return false;
}
function rebuildState(refreshThreadIds) {
  let channel = ChannelStore.getChannel(c12);
  if (null != channel) {
    refreshThreadIds = undefined;
    if (refreshThreadIds != null) {
      refreshThreadIds = refreshThreadIds.refreshThreadIds;
    }
    if (refreshThreadIds) {
      const _Object = Object;
      let values = Object.values(ActiveThreadsStore.getThreadsForParent(channel.guild_id, channel.id));
      closure_19 = values.map((id) => id.id);
      c16 = 0;
      c18 = true;
    }
    if (0 !== set1.size) {
      closure_19 = closure_19.filter((item) => !set.has(item));
      obj.clear();
    }
    if (0 !== set2.size) {
      const _Array = Array;
      const _Set = Set;
      items = [];
      HermesBuiltin.arraySpread(obj2, HermesBuiltin.arraySpread(closure_19, 0));
      set = new Set(items);
      closure_19 = Array.from(set);
      obj2.clear();
    }
    let refreshThreadIds1;
    if (refreshThreadIds != null) {
      refreshThreadIds1 = refreshThreadIds.refreshThreadIds;
    }
    if (!refreshThreadIds1) {
      let sortThreadIds;
      if (refreshThreadIds != null) {
        sortThreadIds = refreshThreadIds.sortThreadIds;
      }
      refreshThreadIds1 = sortThreadIds;
    }
    if (refreshThreadIds1) {
      LATEST_ACTIVITY = LATEST_ACTIVITY(1966).ThreadSortOrder.LATEST_ACTIVITY;
      closure_21 = apply.chain(closure_19).sort((id, id) => {
        let compare = dependencyMap;
        let num = -1;
        if (!obj.isForumPostPinned(id)) {
          let lastMessageIdResult1 = id;
          if (tmpResult.isForumPostPinned(id)) {
            num = 1;
          } else if (closure_0 === tmp(1966).ThreadSortOrder.LATEST_ACTIVITY) {
            compare = SnowflakeUtilsDefault.compare;
            let lastMessageIdResult = ReadStateStore.lastMessageId(lastMessageIdResult1);
            if (lastMessageIdResult == null) {
              lastMessageIdResult = lastMessageIdResult1;
            }
            lastMessageIdResult1 = ReadStateStore.lastMessageId(id);
            if (lastMessageIdResult1 == null) {
              lastMessageIdResult1 = id;
            }
            let compareResult = compare(lastMessageIdResult, lastMessageIdResult1);
          } else {
            compareResult = SnowflakeUtilsDefault.compare(lastMessageIdResult1, id);
          }
          tmpResult = tmp(7307);
        }
        return num;
      });
      const chainResult = apply.chain(closure_19);
      const CREATION_DATE = LATEST_ACTIVITY(1966).ThreadSortOrder.CREATION_DATE;
      closure_20 = apply.chain(closure_19).sort((id, id) => {
        let compare = dependencyMap;
        let num = -1;
        if (!obj.isForumPostPinned(id)) {
          let lastMessageIdResult1 = id;
          if (tmpResult.isForumPostPinned(id)) {
            num = 1;
          } else if (closure_0 === tmp(1966).ThreadSortOrder.LATEST_ACTIVITY) {
            compare = SnowflakeUtilsDefault.compare;
            let lastMessageIdResult = ReadStateStore.lastMessageId(lastMessageIdResult1);
            if (lastMessageIdResult == null) {
              lastMessageIdResult = lastMessageIdResult1;
            }
            lastMessageIdResult1 = ReadStateStore.lastMessageId(id);
            if (lastMessageIdResult1 == null) {
              lastMessageIdResult1 = id;
            }
            let compareResult = compare(lastMessageIdResult, lastMessageIdResult1);
          } else {
            compareResult = SnowflakeUtilsDefault.compare(lastMessageIdResult1, id);
          }
          tmpResult = tmp(7307);
        }
        return num;
      });
      const chainResult1 = apply.chain(closure_19);
    }
    const valueResult = LATEST_ACTIVITY === LATEST_ACTIVITY(1966).ThreadSortOrder.LATEST_ACTIVITY ? closure_21 : closure_20.value();
    let found = valueResult;
    if (0 !== set.size) {
      closure_130_0 = set;
      closure_130_1 = MATCH_SOME;
      found = valueResult.filter((item) => {
        const channel = ChannelStore.getChannel(item);
        let appliedTags;
        if (channel != null) {
          appliedTags = channel.appliedTags;
        }
        if (null != appliedTags) {
          if (0 !== appliedTags.length) {
            if (importDefault === ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME) {
              return appliedTags.some((item) => set.has(item));
            } else {
              const values = LATEST_ACTIVITY.values();
              for (const item10014 of values) {
                if (appliedTags.includes(item10014)) {
                  continue;
                } else {
                  obj.return();
                  let flag = false;
                  return false;
                }
              }
              return true;
            }
          }
        }
        return false;
      });
    }
    let found1 = found.find((item) => {
      count = count.getCount(item);
      let tmp2 = null === count;
      if (!tmp2) {
        tmp2 = 0 === count;
      }
      return tmp2;
    });
    let tmp33 = null;
    if (null != found1) {
      tmp33 = found1;
    }
    found1 = tmp33;
    const iter = LATEST_ACTIVITY === LATEST_ACTIVITY(1966).ThreadSortOrder.LATEST_ACTIVITY ? closure_21 : closure_20;
    obj = set1;
  }
}
let items = [];
let id = null;
let c12 = null;
let set = new Set();
let LATEST_ACTIVITY = fn(1966).ThreadSortOrder.LATEST_ACTIVITY;
let MATCH_SOME = fn(1968).ThreadSearchTagSetting.MATCH_SOME;
let closure_16 = 0;
let closure_17 = [];
let c18 = false;
let closure_19 = [];
let closure_20 = apply.chain(items);
let closure_21 = apply.chain(items);
const set1 = new Set();
const set2 = new Set();
const Store = initializeDefault.Store;
class ForumActivePostStore extends Store {
}
const prototype = ForumActivePostStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ActiveThreadsStore, AuthenticationStore, ChannelStore, ReadStateStore, SelectedChannelStore, ThreadMessageStore);
};
prototype["getNewThreadCount"] = function getNewThreadCount() {
  return closure_16;
};
prototype["getCanAckThreads"] = function getCanAckThreads() {
  return c18;
};
prototype["getThreadIds"] = function getThreadIds(id, arg1, set, arg3) {
  const areSetsEqualResult = SetUtils.areSetsEqual(set, set);
  let tmp2 = !areSetsEqualResult;
  c12 = id;
  LATEST_ACTIVITY = arg1;
  MATCH_SOME = arg3;
  if (id !== c12) {
    rebuildState({ refreshThreadIds: true });
  } else if (arg1 !== tmp3) {
    rebuildState({ sortThreadIds: true });
  } else {
    if (areSetsEqualResult) {
      tmp2 = arg3 !== tmp4;
    }
    if (tmp2) {
      rebuildState();
    }
  }
  return closure_17;
};
prototype["getCurrentThreadIds"] = function getCurrentThreadIds() {
  return closure_17;
};
prototype["getAndDeleteMostRecentUserCreatedThreadId"] = function getAndDeleteMostRecentUserCreatedThreadId() {
  id = null;
  return id;
};
prototype["getFirstNoReplyThreadId"] = function getFirstNoReplyThreadId() {
  return c3;
};
ForumActivePostStore.displayName = "ForumActivePostStore";
const forumActivePostStore = new ForumActivePostStore(DispatcherDefault, {
  CONNECTION_OPEN: maybeRebuildState,
  OVERLAY_INITIALIZE: maybeRebuildState,
  GUILD_CREATE: maybeRebuildState,
  CHANNEL_SELECT: maybeRebuildState,
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != channel.parent_id) {
      if (channel.parent_id === c12) {
        closure_17 = [];
        c3 = null;
        c12 = null;
        const _Set = Set;
        set = new Set();
        LATEST_ACTIVITY = ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY;
        MATCH_SOME = ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME;
        closure_16 = 0;
        closure_19 = [];
        closure_20 = apply.chain(items);
        closure_21 = apply.chain(items);
        set2.clear();
        set1.clear();
      }
    }
    return false;
  },
  THREAD_LIST_SYNC: function handleThreadListSync(arg0) {
    let tmp2 = null != c12;
    if (tmp2) {
      const channel = ChannelStore.getChannel(c12);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (tmp === guild_id) {
        rebuildState({ refreshThreadIds: true });
      }
      tmp2 = tmp7;
    }
    return tmp2;
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    channel = channel.channel;
    let tmp = null != channel.parent_id;
    if (tmp) {
      tmp = channel.parent_id === c12;
    }
    if (tmp) {
      const isNewlyCreated = channel.isNewlyCreated;
      if (!isNewlyCreated) {
        tmp = isNewlyCreated;
      } else if (channel.ownerId !== AuthenticationStore.getId()) {
        closure_16 = tmp6 + 1;
      } else {
        id = channel.id;
      }
    }
    return tmp;
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    channel = channel.channel;
    if (null != channel.parent_id) {
      if (channel.parent_id === c12) {
        const isForumPostPinnedResult = ForumUtils.isForumPostPinned(channel.id);
        const hasItem = set2.has(channel.id);
        if (isForumPostPinnedResult) {
          if (!hasItem) {
            obj2.add(channel.id);
            rebuildState({ sortThreadIds: true });
          }
        }
        if (!isForumPostPinnedResult) {
          if (hasItem) {
            obj2.delete(channel.id);
            rebuildState({ sortThreadIds: true });
          }
        }
        return false;
      }
    }
    return false;
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    channel = channel.channel;
    if (null != channel.parent_id) {
      if (channel.parent_id === c12) {
        set1.add(channel.id);
        rebuildState({ sortThreadIds: true });
      }
    }
    return false;
  },
  RESORT_THREADS: function handleResortThreads(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (channelId === c12) {
        rebuildState({ refreshThreadIds: true });
      }
    }
    return false;
  },
  CHANNEL_ACK: function handleChannelAck(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (channelId === c12) {
        c18 = false;
      }
    }
    return false;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/ForumActivePostStore.tsx");

export default forumActivePostStore;
export const computeThreadIdsSnapshot = function computeThreadIdsSnapshot(id) {
  const channel = ChannelStore.getChannel(id);
  if (null == channel) {
    items = [];
  } else {
    const _Object = Object;
    const values = Object.values(ActiveThreadsStore.getThreadsForParent(channel.guild_id, channel.id));
    const mapped = values.map((id) => id.id);
    closure_0 = LATEST_ACTIVITY;
    items = mapped.sort((id, id) => {
      let compare = dependencyMap;
      let num = -1;
      if (!obj.isForumPostPinned(id)) {
        let lastMessageIdResult1 = id;
        if (tmpResult.isForumPostPinned(id)) {
          num = 1;
        } else if (closure_0 === tmp(1966).ThreadSortOrder.LATEST_ACTIVITY) {
          compare = SnowflakeUtilsDefault.compare;
          let lastMessageIdResult = ReadStateStore.lastMessageId(lastMessageIdResult1);
          if (lastMessageIdResult == null) {
            lastMessageIdResult = lastMessageIdResult1;
          }
          lastMessageIdResult1 = ReadStateStore.lastMessageId(id);
          if (lastMessageIdResult1 == null) {
            lastMessageIdResult1 = id;
          }
          let compareResult = compare(lastMessageIdResult, lastMessageIdResult1);
        } else {
          compareResult = SnowflakeUtilsDefault.compare(lastMessageIdResult1, id);
        }
        tmpResult = tmp(7307);
      }
      return num;
    });
  }
  return items;
};