// === Module 6118: maybeRebuildState ===

// Module 6118 (maybeRebuildState)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import set3 from "set" /* 1396 */;
import set4 from "set" /* 1398 */;
import areSetsEqual from "areSetsEqual" /* 1429 */;
import getCreationDefaultFormatter from "getCreationDefaultFormatter" /* 6120 */;
import closure_4 from "handleThreadCreateOrUpdate" /* 5417 */;
import closure_5 from "updateState" /* 6119 */;
import closure_6 from "fetchFingerprint" /* 1218 */;
import closure_7 from "ensureGuildLoaded" /* 1387 */;
import closure_8 from "generateOldThreadCutoff" /* 4463 */;
import closure_9 from "handleConnectionOpen" /* 1981 */;
import importDefaultResult from "apply" /* 12 */;
import set from "set" /* 2 */;

require = arg1;
function maybeRebuildState() {
  channelId = channelId.getChannelId();
  if (null != channelId) {
    const channel = store2.getChannel(channelId);
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
  LATEST_ACTIVITY = set3.ThreadSortOrder.LATEST_ACTIVITY;
  MATCH_SOME = set4.ThreadSearchTagSetting.MATCH_SOME;
  c16 = 0;
  closure_19 = [];
  closure_20 = importDefaultResult.chain(items);
  const obj2 = importDefaultResult;
  closure_21 = importDefaultResult.chain(items);
  set2.clear();
  set1.clear();
  return false;
}
function rebuildState(refreshThreadIds) {
  let channel = store2.getChannel(c12);
  if (null != channel) {
    refreshThreadIds = undefined;
    if (refreshThreadIds != null) {
      refreshThreadIds = refreshThreadIds.refreshThreadIds;
    }
    if (refreshThreadIds) {
      const _Object = Object;
      let values = Object.values(store.getThreadsForParent(channel.guild_id, channel.id));
      closure_19 = values.map((id) => id.id);
      c16 = 0;
      c18 = true;
    }
    if (0 !== set1.size) {
      closure_19 = closure_19.filter((arg0) => !set.has(arg0));
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
      const obj3 = importDefaultResult;
      _require = _require(1396).ThreadSortOrder.LATEST_ACTIVITY;
      closure_21 = importDefaultResult.chain(closure_19).sort((id, id) => {
        let compare = closure_1_2;
        let num = -1;
        if (!obj.isForumPostPinned(id)) {
          let lastMessageIdResult1 = id;
          if (tmpResult.isForumPostPinned(id)) {
            num = 1;
          } else if (callback === tmp(compare[6]).ThreadSortOrder.LATEST_ACTIVITY) {
            compare = closure_1_1(compare[10]).compare;
            let lastMessageIdResult = closure_1_8.lastMessageId(lastMessageIdResult1);
            if (lastMessageIdResult == null) {
              lastMessageIdResult = lastMessageIdResult1;
            }
            lastMessageIdResult1 = closure_1_8.lastMessageId(id);
            if (lastMessageIdResult1 == null) {
              lastMessageIdResult1 = id;
            }
            let compareResult = compare(lastMessageIdResult, lastMessageIdResult1);
            const obj4 = closure_1_8;
            const tmp8 = closure_1_1(compare[10]);
          } else {
            compareResult = closure_1_1(compare[10]).compare(lastMessageIdResult1, id);
            const obj3 = closure_1_1(compare[10]);
          }
          tmpResult = tmp(compare[9]);
        }
        return num;
      });
      const chainResult = importDefaultResult.chain(closure_19);
      const obj5 = importDefaultResult;
      _require = _require(1396).ThreadSortOrder.CREATION_DATE;
      closure_20 = importDefaultResult.chain(closure_19).sort((id, id) => {
        let compare = closure_1_2;
        let num = -1;
        if (!obj.isForumPostPinned(id)) {
          let lastMessageIdResult1 = id;
          if (tmpResult.isForumPostPinned(id)) {
            num = 1;
          } else if (callback === tmp(compare[6]).ThreadSortOrder.LATEST_ACTIVITY) {
            compare = closure_1_1(compare[10]).compare;
            let lastMessageIdResult = closure_1_8.lastMessageId(lastMessageIdResult1);
            if (lastMessageIdResult == null) {
              lastMessageIdResult = lastMessageIdResult1;
            }
            lastMessageIdResult1 = closure_1_8.lastMessageId(id);
            if (lastMessageIdResult1 == null) {
              lastMessageIdResult1 = id;
            }
            let compareResult = compare(lastMessageIdResult, lastMessageIdResult1);
            const obj4 = closure_1_8;
            const tmp8 = closure_1_1(compare[10]);
          } else {
            compareResult = closure_1_1(compare[10]).compare(lastMessageIdResult1, id);
            const obj3 = closure_1_1(compare[10]);
          }
          tmpResult = tmp(compare[9]);
        }
        return num;
      });
      const chainResult1 = importDefaultResult.chain(closure_19);
    }
    const valueResult = LATEST_ACTIVITY === _require(1396).ThreadSortOrder.LATEST_ACTIVITY ? closure_21 : closure_20.value();
    let found = valueResult;
    if (0 !== set.size) {
      _require = set;
      importDefault = MATCH_SOME;
      found = valueResult.filter((arg0) => {
        const channel = closure_1_7.getChannel(arg0);
        let appliedTags;
        if (channel != null) {
          appliedTags = channel.appliedTags;
        }
        if (null != appliedTags) {
          if (0 !== appliedTags.length) {
            if (closure_1 === lib(closure_1_2[7]).ThreadSearchTagSetting.MATCH_SOME) {
              return appliedTags.some((arg0) => set.has(arg0));
            } else {
              const values = lib.values();
              for (const item10014 of values) {
                if (appliedTags.includes(item10014)) {
                  continue;
                } else {
                  let tmp7 = obj;
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
    let found1 = found.find((arg0) => {
      count = count.getCount(arg0);
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
    const iter = LATEST_ACTIVITY === _require(1396).ThreadSortOrder.LATEST_ACTIVITY ? closure_21 : closure_20;
    obj = set1;
  }
}
let items = [];
let c11 = null;
let c12 = null;
let set = new Set();
let LATEST_ACTIVITY = require("set").ThreadSortOrder.LATEST_ACTIVITY;
let MATCH_SOME = require("set").ThreadSearchTagSetting.MATCH_SOME;
let c16 = 0;
let closure_17 = [];
let c18 = false;
let closure_19 = [];
let closure_20 = importDefaultResult.chain(items);
let closure_21 = importDefaultResult.chain(items);
const set1 = new Set();
const set2 = new Set();
const Store = initializeDefault.Store;
class ForumActivePostStore extends Store {
}
const prototype = ForumActivePostStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_4, closure_6, closure_7, closure_8, closure_9, closure_5);
};
prototype["getNewThreadCount"] = function getNewThreadCount() {
  return c16;
};
prototype["getCanAckThreads"] = function getCanAckThreads() {
  return c18;
};
prototype["getThreadIds"] = function getThreadIds(id, closure_1, closure_2, closure_3) {
  const areSetsEqualResult = areSetsEqual.areSetsEqual(closure_2, closure_13);
  let tmp2 = !areSetsEqualResult;
  closure_12 = id;
  closure_13 = closure_2;
  closure_14 = closure_1;
  closure_15 = closure_3;
  if (id !== closure_12) {
    rebuildState({ refreshThreadIds: true });
  } else if (closure_1 !== tmp3) {
    rebuildState({ sortThreadIds: true });
  } else {
    if (areSetsEqualResult) {
      tmp2 = closure_3 !== tmp4;
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
  c11 = null;
  return c11;
};
prototype["getFirstNoReplyThreadId"] = function getFirstNoReplyThreadId() {
  return closure_3;
};
ForumActivePostStore.displayName = "ForumActivePostStore";
const forumActivePostStore = new ForumActivePostStore(dispatcherDefault, {
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
        LATEST_ACTIVITY = set3.ThreadSortOrder.LATEST_ACTIVITY;
        MATCH_SOME = set4.ThreadSearchTagSetting.MATCH_SOME;
        c16 = 0;
        closure_19 = [];
        closure_20 = importDefaultResult.chain(items);
        const obj = importDefaultResult;
        closure_21 = importDefaultResult.chain(items);
        set2.clear();
        set1.clear();
      }
    }
    return false;
  },
  THREAD_LIST_SYNC: function handleThreadListSync(arg0) {
    let tmp2 = null != c12;
    if (tmp2) {
      const channel = store2.getChannel(c12);
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
      } else if (channel.ownerId !== id.getId()) {
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
        const isForumPostPinnedResult = getCreationDefaultFormatter.isForumPostPinned(channel.id);
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
const result = set.fileFinishedImporting("modules/forums/ForumActivePostStore.tsx");

export default forumActivePostStore;
export const computeThreadIdsSnapshot = function computeThreadIdsSnapshot(id) {
  const channel = store2.getChannel(id);
  if (null == channel) {
    items = [];
  } else {
    const _Object = Object;
    const values = Object.values(store.getThreadsForParent(channel.guild_id, channel.id));
    const mapped = values.map((id) => id.id);
    closure_0 = LATEST_ACTIVITY;
    items = mapped.sort((id, id) => {
      let compare = closure_1_2;
      let num = -1;
      if (!obj.isForumPostPinned(id)) {
        let lastMessageIdResult1 = id;
        if (tmpResult.isForumPostPinned(id)) {
          num = 1;
        } else if (callback === tmp(compare[6]).ThreadSortOrder.LATEST_ACTIVITY) {
          compare = closure_1_1(compare[10]).compare;
          let lastMessageIdResult = closure_1_8.lastMessageId(lastMessageIdResult1);
          if (lastMessageIdResult == null) {
            lastMessageIdResult = lastMessageIdResult1;
          }
          lastMessageIdResult1 = closure_1_8.lastMessageId(id);
          if (lastMessageIdResult1 == null) {
            lastMessageIdResult1 = id;
          }
          let compareResult = compare(lastMessageIdResult, lastMessageIdResult1);
          const obj4 = closure_1_8;
          const tmp8 = closure_1_1(compare[10]);
        } else {
          compareResult = closure_1_1(compare[10]).compare(lastMessageIdResult1, id);
          const obj3 = closure_1_1(compare[10]);
        }
        tmpResult = tmp(compare[9]);
      }
      return num;
    });
  }
  return items;
};