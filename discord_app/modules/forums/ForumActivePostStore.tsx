// discord_app/modules/forums/ForumActivePostStore.tsx
import handleThreadCreateOrUpdate from "handleThreadCreateOrUpdate";
import updateState from "updateState";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import handleConnectionOpen from "handleConnectionOpen";
import importDefaultResult from "areSetsEqual";
import { Store } from "initialize";
import set from "fetchFingerprint";
import { apply } from "../../../_runtime/00012_apply.js";
import { set } from "../../../discord_common/js/shared/shared-constants/ThreadSearchTagSetting.tsx";
import { set } from "../../../discord_common/js/shared/shared-constants/ThreadSortOrder.tsx";
import { areSetsEqual } from "../../../discord_common/js/shared/utils/SetUtils.tsx";
import { getCreationDefaultFormatter } from "ForumUtils.tsx";

const require = arg1;
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
  let closure_17 = [];
  let c3 = null;
  let c12 = null;
  const set = new Set();
  const LATEST_ACTIVITY = set.ThreadSortOrder.LATEST_ACTIVITY;
  const MATCH_SOME = set.ThreadSearchTagSetting.MATCH_SOME;
  let c16 = 0;
  let closure_19 = [];
  let closure_20 = apply.chain(items);
  const obj2 = apply;
  let closure_21 = apply.chain(items);
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
      let closure_19 = values.map((id) => id.id);
      let c16 = 0;
      let c18 = true;
    }
    if (0 !== set1.size) {
      closure_19 = closure_19.filter((arg0) => !set.has(arg0));
      obj.clear();
    }
    if (0 !== set2.size) {
      const _Array = Array;
      const _Set = Set;
      const items = [];
      HermesBuiltin.arraySpread(obj2, HermesBuiltin.arraySpread(closure_19, 0));
      const set = new Set(items);
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
      const obj3 = apply;
      _require = _set.ThreadSortOrder.LATEST_ACTIVITY;
      let closure_21 = apply.chain(closure_19).sort((id, id) => {
        let compare = outer1_2;
        let num = -1;
        if (!obj.isForumPostPinned(id)) {
          let lastMessageIdResult1 = id;
          if (tmpResult.isForumPostPinned(id)) {
            num = 1;
          } else if (callback === tmp(compare[6]).ThreadSortOrder.LATEST_ACTIVITY) {
            compare = outer1_1(compare[10]).compare;
            let lastMessageIdResult = outer1_8.lastMessageId(lastMessageIdResult1);
            if (lastMessageIdResult == null) {
              lastMessageIdResult = lastMessageIdResult1;
            }
            lastMessageIdResult1 = outer1_8.lastMessageId(id);
            if (lastMessageIdResult1 == null) {
              lastMessageIdResult1 = id;
            }
            let compareResult = compare(lastMessageIdResult, lastMessageIdResult1);
            const obj4 = outer1_8;
            const tmp8 = outer1_1(compare[10]);
          } else {
            compareResult = outer1_1(compare[10]).compare(lastMessageIdResult1, id);
            const obj3 = outer1_1(compare[10]);
          }
          tmpResult = tmp(compare[9]);
        }
        return num;
      });
      const chainResult = apply.chain(closure_19);
      const obj5 = apply;
      _require = _set.ThreadSortOrder.CREATION_DATE;
      let closure_20 = apply.chain(closure_19).sort((id, id) => {
        let compare = outer1_2;
        let num = -1;
        if (!obj.isForumPostPinned(id)) {
          let lastMessageIdResult1 = id;
          if (tmpResult.isForumPostPinned(id)) {
            num = 1;
          } else if (callback === tmp(compare[6]).ThreadSortOrder.LATEST_ACTIVITY) {
            compare = outer1_1(compare[10]).compare;
            let lastMessageIdResult = outer1_8.lastMessageId(lastMessageIdResult1);
            if (lastMessageIdResult == null) {
              lastMessageIdResult = lastMessageIdResult1;
            }
            lastMessageIdResult1 = outer1_8.lastMessageId(id);
            if (lastMessageIdResult1 == null) {
              lastMessageIdResult1 = id;
            }
            let compareResult = compare(lastMessageIdResult, lastMessageIdResult1);
            const obj4 = outer1_8;
            const tmp8 = outer1_1(compare[10]);
          } else {
            compareResult = outer1_1(compare[10]).compare(lastMessageIdResult1, id);
            const obj3 = outer1_1(compare[10]);
          }
          tmpResult = tmp(compare[9]);
        }
        return num;
      });
      const chainResult1 = apply.chain(closure_19);
    }
    const valueResult = LATEST_ACTIVITY === _set.ThreadSortOrder.LATEST_ACTIVITY ? closure_21 : closure_20.value();
    let found = valueResult;
    if (0 !== set.size) {
      _require = set;
      importDefault = MATCH_SOME;
      found = valueResult.filter((arg0) => {
        const channel = outer1_7.getChannel(arg0);
        let appliedTags;
        if (channel != null) {
          appliedTags = channel.appliedTags;
        }
        if (null != appliedTags) {
          if (0 !== appliedTags.length) {
            if (closure_1 === lib(outer1_2[7]).ThreadSearchTagSetting.MATCH_SOME) {
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
    const found1 = found.find((arg0) => {
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
    let closure_3 = tmp33;
    const iter = LATEST_ACTIVITY === _set.ThreadSortOrder.LATEST_ACTIVITY ? closure_21 : closure_20;
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
let closure_20 = require("areSetsEqual").chain(items);
let closure_21 = require("areSetsEqual").chain(items);
const set1 = new Set();
const set2 = new Set();
class ForumActivePostStore extends Store {
}
const prototype = ForumActivePostStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(handleThreadCreateOrUpdate, fetchFingerprint, ensureGuildLoaded, generateOldThreadCutoff, handleConnectionOpen, updateState);
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
  let closure_12 = id;
  closure_13 = closure_2;
  let closure_14 = closure_1;
  let closure_15 = closure_3;
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
  let c11 = null;
  return c11;
};
prototype["getFirstNoReplyThreadId"] = function getFirstNoReplyThreadId() {
  return closure_3;
};
ForumActivePostStore.displayName = "ForumActivePostStore";
const forumActivePostStore = new ForumActivePostStore(require("dispatcher"), {
  CONNECTION_OPEN: maybeRebuildState,
  OVERLAY_INITIALIZE: maybeRebuildState,
  GUILD_CREATE: maybeRebuildState,
  CHANNEL_SELECT: maybeRebuildState,
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    if (null != channel.parent_id) {
      if (channel.parent_id === c12) {
        let closure_17 = [];
        let c3 = null;
        c12 = null;
        const _Set = Set;
        const set = new Set();
        const LATEST_ACTIVITY = set.ThreadSortOrder.LATEST_ACTIVITY;
        const MATCH_SOME = set.ThreadSearchTagSetting.MATCH_SOME;
        let c16 = 0;
        let closure_19 = [];
        let closure_20 = apply.chain(items);
        const obj = apply;
        let closure_21 = apply.chain(items);
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
        let closure_16 = tmp6 + 1;
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
        let c18 = false;
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
    let items = [];
  } else {
    const _Object = Object;
    const values = Object.values(store.getThreadsForParent(channel.guild_id, channel.id));
    const mapped = values.map((id) => id.id);
    let closure_0 = LATEST_ACTIVITY;
    items = mapped.sort((id, id) => {
      let compare = outer1_2;
      let num = -1;
      if (!obj.isForumPostPinned(id)) {
        let lastMessageIdResult1 = id;
        if (tmpResult.isForumPostPinned(id)) {
          num = 1;
        } else if (callback === tmp(compare[6]).ThreadSortOrder.LATEST_ACTIVITY) {
          compare = outer1_1(compare[10]).compare;
          let lastMessageIdResult = outer1_8.lastMessageId(lastMessageIdResult1);
          if (lastMessageIdResult == null) {
            lastMessageIdResult = lastMessageIdResult1;
          }
          lastMessageIdResult1 = outer1_8.lastMessageId(id);
          if (lastMessageIdResult1 == null) {
            lastMessageIdResult1 = id;
          }
          let compareResult = compare(lastMessageIdResult, lastMessageIdResult1);
          const obj4 = outer1_8;
          const tmp8 = outer1_1(compare[10]);
        } else {
          compareResult = outer1_1(compare[10]).compare(lastMessageIdResult1, id);
          const obj3 = outer1_1(compare[10]);
        }
        tmpResult = tmp(compare[9]);
      }
      return num;
    });
  }
  return items;
};