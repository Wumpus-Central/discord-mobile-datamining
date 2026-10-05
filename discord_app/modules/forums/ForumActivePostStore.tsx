// === Module 6808: ForumActivePostStore ===

// Module 6808 (ForumActivePostStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ThreadSortOrder from "ThreadSortOrder" /* 2061 */;
import ThreadSearchTagSetting from "ThreadSearchTagSetting" /* 2063 */;
import SetUtils from "SetUtils" /* 2069 */;
import ForumUtils from "ForumUtils" /* 6810 */;
import ActiveThreadsStore from "ActiveThreadsStore" /* 5692 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6809 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import module_12_mod from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let c3, count;

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
  new Set();
  LATEST_ACTIVITY = ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY;
  MATCH_SOME = ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME;
  closure_16 = 0;
  closure_19 = [];
  const obj2 = module_12;
  closure_20 = obj2.chain(items);
  const obj3 = module_12;
  closure_21 = obj3.chain(items);
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
      let c16 = 0;
      let flag = true;
      c18 = true;
    }
    if (0 !== set1.size) {
      closure_19 = closure_19.filter((item) => !set.has(item));
      set1.clear();
    }
    if (0 !== set2.size) {
      const _Array = Array;
      const _Set = Set;
      items = [];
      HermesBuiltin.arraySpread(items, set2, HermesBuiltin.arraySpread(items, closure_19, 0));
      const self = this;
      const self2 = this;
      set = new Set(items);
      closure_19 = from(set);
      set2.clear();
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
      const obj3 = module_12;
      const sort = obj3.chain(closure_19).sort;
      obj3.chain(closure_19);
      LATEST_ACTIVITY = LATEST_ACTIVITY(2061).ThreadSortOrder.LATEST_ACTIVITY;
      closure_21 = sort((id, id2) => {
        let num = -1;
        const obj = ForumUtils;
        if (!obj.isForumPostPinned(id)) {
          let num2 = 1;
          const tmpResult = ForumUtils;
          if (!tmpResult.isForumPostPinned(id)) {
            let compareResult;
            if (closure_0 === ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY) {
              const compare = SnowflakeUtilsDefault.compare;
              SnowflakeUtilsDefault;
              let lastMessageIdResult = ReadStateStore.lastMessageId(id);
              if (lastMessageIdResult == null) {
                lastMessageIdResult = id;
              }
              let lastMessageIdResult1 = ReadStateStore.lastMessageId(id);
              if (lastMessageIdResult1 == null) {
                lastMessageIdResult1 = id;
              }
              compareResult = compare(lastMessageIdResult, lastMessageIdResult1);
            } else {
              const obj3 = SnowflakeUtilsDefault;
              compareResult = obj3.compare(id, id);
            }
            num2 = compareResult;
          }
          num = num2;
        }
        return num;
      });
      const obj4 = module_12;
      const sort2 = obj4.chain(closure_19).sort;
      obj4.chain(closure_19);
      const CREATION_DATE = LATEST_ACTIVITY(2061).ThreadSortOrder.CREATION_DATE;
      closure_20 = sort2((id, id2) => {
        let num = -1;
        const obj = ForumUtils;
        if (!obj.isForumPostPinned(id)) {
          let num2 = 1;
          const tmpResult = ForumUtils;
          if (!tmpResult.isForumPostPinned(id)) {
            let compareResult;
            if (closure_0 === ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY) {
              const compare = SnowflakeUtilsDefault.compare;
              SnowflakeUtilsDefault;
              let lastMessageIdResult = ReadStateStore.lastMessageId(id);
              if (lastMessageIdResult == null) {
                lastMessageIdResult = id;
              }
              let lastMessageIdResult1 = ReadStateStore.lastMessageId(id);
              if (lastMessageIdResult1 == null) {
                lastMessageIdResult1 = id;
              }
              compareResult = compare(lastMessageIdResult, lastMessageIdResult1);
            } else {
              const obj3 = SnowflakeUtilsDefault;
              compareResult = obj3.compare(id, id);
            }
            num2 = compareResult;
          }
          num = num2;
        }
        return num;
      });
    }
    const iter = LATEST_ACTIVITY === LATEST_ACTIVITY(2061).ThreadSortOrder.LATEST_ACTIVITY ? closure_21 : closure_20;
    const valueResult = iter.value();
    let found = valueResult;
    if (0 !== set.size) {
      let closure_0 = set;
      let closure_1 = MATCH_SOME;
      found = valueResult.filter((item) => {
        channel = channel.getChannel(item);
        let appliedTags;
        if (channel != null) {
          appliedTags = channel.appliedTags;
        }
        if (null != appliedTags) {
          if (0 !== appliedTags.length) {
            if (closure_1 === LATEST_ACTIVITY(dependencyMap[7]).ThreadSearchTagSetting.MATCH_SOME) {
              return appliedTags.some((item) => set.has(item));
            } else {
              const values = set.values();
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
      return null === count || 0 === count;
    });
    let tmp34 = null;
    if (null != found1) {
      tmp34 = found1;
    }
    found1 = tmp34;
  }
}
let items = [];
let id = null;
let c12 = null;
let set = new Set();
let LATEST_ACTIVITY = ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY;
let MATCH_SOME = ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME;
let closure_16 = 0;
let closure_17 = [];
let c18 = false;
let closure_19 = [];
let module_12 = module_12_mod;
let closure_20 = module_12.chain(items);
module_12 = module_12_mod;
let closure_21 = module_12.chain(items);
const set1 = new Set();
const set2 = new Set();
const Store = get_initializedDefault.Store;
class ForumActivePostStore extends Store {
  initialize() {
    this.waitFor(ActiveThreadsStore, AuthenticationStore, ChannelStore, ReadStateStore, SelectedChannelStore, ThreadMessageStore);
  }
  getNewThreadCount() {
    return closure_16;
  }
  getCanAckThreads() {
    return c18;
  }
  getThreadIds(id, sortOrder, tagFilter, tagSetting) {
    const obj = SetUtils;
    const areSetsEqualResult = obj.areSetsEqual(tagFilter, set);
    let tmp2 = !areSetsEqualResult;
    c12 = id;
    LATEST_ACTIVITY = sortOrder;
    MATCH_SOME = tagSetting;
    set = tagFilter;
    if (id !== c12) {
      rebuildState({ refreshThreadIds: true });
    } else if (sortOrder !== tmp3) {
      rebuildState({ sortThreadIds: true });
    } else {
      if (areSetsEqualResult) {
        tmp2 = tagSetting !== tmp4;
      }
      if (tmp2) {
        rebuildState();
      }
    }
    return closure_17;
  }
  getCurrentThreadIds() {
    return closure_17;
  }
  getAndDeleteMostRecentUserCreatedThreadId() {
    id = null;
    return id;
  }
  getFirstNoReplyThreadId() {
    return c3;
  }
}
const prototype = ForumActivePostStore.prototype;
ForumActivePostStore.displayName = "ForumActivePostStore";
let obj = {
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
        const self = this;
        const self2 = this;
        new Set();
        LATEST_ACTIVITY = ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY;
        MATCH_SOME = ThreadSearchTagSetting.ThreadSearchTagSetting.MATCH_SOME;
        closure_16 = 0;
        closure_19 = [];
        const obj = module_12;
        closure_20 = obj.chain(items);
        const obj2 = module_12;
        closure_21 = obj2.chain(items);
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
    const isNewlyCreated = channel.isNewlyCreated;
    if (tmp) {
      tmp = channel.parent_id === c12;
    }
    if (tmp) {
      if (isNewlyCreated) {
        if (channel.ownerId !== AuthenticationStore.getId()) {
          closure_16 = tmp6 + 1;
        } else {
          id = channel.id;
        }
      }
      tmp = tmp3;
    }
    return tmp;
  },
  THREAD_UPDATE: function handleThreadUpdate(channel) {
    channel = channel.channel;
    if (null != channel.parent_id) {
      if (channel.parent_id === c12) {
        const obj = ForumUtils;
        const isForumPostPinnedResult = obj.isForumPostPinned(channel.id);
        const hasItem = set2.has(channel.id);
        if (isForumPostPinnedResult) {
          if (!hasItem) {
            set2.add(channel.id);
            rebuildState({ sortThreadIds: true });
          }
        }
        if (!isForumPostPinnedResult) {
          if (hasItem) {
            set2.delete(channel.id);
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
};
const forumActivePostStore = new ForumActivePostStore(DispatcherDefault, obj);
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
    let closure_0 = LATEST_ACTIVITY;
    items = mapped.sort((id, id2) => {
      let num = -1;
      const obj = ForumUtils;
      if (!obj.isForumPostPinned(id)) {
        let num2 = 1;
        const tmpResult = ForumUtils;
        if (!tmpResult.isForumPostPinned(id)) {
          let compareResult;
          if (closure_0 === ThreadSortOrder.ThreadSortOrder.LATEST_ACTIVITY) {
            const compare = SnowflakeUtilsDefault.compare;
            SnowflakeUtilsDefault;
            let lastMessageIdResult = ReadStateStore.lastMessageId(id);
            if (lastMessageIdResult == null) {
              lastMessageIdResult = id;
            }
            let lastMessageIdResult1 = ReadStateStore.lastMessageId(id);
            if (lastMessageIdResult1 == null) {
              lastMessageIdResult1 = id;
            }
            compareResult = compare(lastMessageIdResult, lastMessageIdResult1);
          } else {
            const obj3 = SnowflakeUtilsDefault;
            compareResult = obj3.compare(id, id);
          }
          num2 = compareResult;
        }
        num = num2;
      }
      return num;
    });
  }
  return items;
};