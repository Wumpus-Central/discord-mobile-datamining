// === Module 13753: PrivateChannelReadStateStore ===

// Module 13753 (PrivateChannelReadStateStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import FunctionUtils from "FunctionUtils" /* 1933 */;
import ChannelRecord from "ChannelRecord" /* 1961 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import PrivateChannelSortStore from "PrivateChannelSortStore" /* 7218 */;
import size from "module_2" /* 2 */;

function rebuildUnreads() {
  const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
  found = privateChannelIds.filter((item) => mentionCount.getMentionCount(item) > 0);
  if (found.length > 20) {
    found.length = 20;
  }
  const result = FunctionUtils.areArraysShallowlyEqual(found, found);
  let flag = !result;
  if (!result) {
    const _Set = Set;
    set = new Set(found);
    flag = true;
  }
  return flag;
}
function handleConnectionOpen() {
  const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
  found = privateChannelIds.filter((item) => mentionCount.getMentionCount(item) > 0);
  if (found.length > 20) {
    found.length = 20;
  }
  const result = FunctionUtils.areArraysShallowlyEqual(found, found);
  let flag = !result;
  if (!result) {
    const _Set = Set;
    set = new Set(found);
    flag = true;
  }
  return flag;
}
function handleGenericUpdate(channelId) {
  const channel = ChannelStore.getChannel(channelId.channelId);
  let tmp2 = null == channel;
  if (!tmp2) {
    tmp2 = !isPrivate(channel.type);
  }
  let tmp4 = !tmp2;
  if (!tmp2) {
    const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
    found = privateChannelIds.filter((item) => mentionCount.getMentionCount(item) > 0);
    if (found.length > 20) {
      found.length = 20;
    }
    const result = FunctionUtils.areArraysShallowlyEqual(found, found);
    let flag = !result;
    if (!result) {
      const _Set = Set;
      set = new Set(found);
      flag = true;
    }
    tmp4 = flag;
  }
  return tmp4;
}
const isPrivate = ChannelRecord.isPrivate;
let found = [];
let set = new Set();
const Store = initializeDefault.Store;
class PrivateChannelReadStateStore extends Store {
}
const prototype = PrivateChannelReadStateStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(PrivateChannelSortStore, ChannelStore, SelectedChannelStore, ReadStateStore);
};
prototype["getUnreadPrivateChannelIds"] = function getUnreadPrivateChannelIds() {
  return found;
};
PrivateChannelReadStateStore.displayName = "PrivateChannelReadStateStore";
const privateChannelReadStateStore = new PrivateChannelReadStateStore(DispatcherDefault, {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  MESSAGE_CREATE: handleGenericUpdate,
  MESSAGE_ACK: handleGenericUpdate,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let tmp2 = null == channel;
    if (!tmp2) {
      tmp2 = !isPrivate(channel.type);
    }
    let tmp4 = !tmp2;
    if (!tmp2) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      found = privateChannelIds.filter((item) => mentionCount.getMentionCount(item) > 0);
      if (found.length > 20) {
        found.length = 20;
      }
      const result = FunctionUtils.areArraysShallowlyEqual(found, found);
      let flag = !result;
      if (!result) {
        const _Set = Set;
        set = new Set(found);
        flag = true;
      }
      tmp4 = flag;
    }
    return tmp4;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    let hasItem = set.has(channel.channel.id);
    if (hasItem) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      found = privateChannelIds.filter((item) => mentionCount.getMentionCount(item) > 0);
      if (found.length > 20) {
        found.length = 20;
      }
      const result = FunctionUtils.areArraysShallowlyEqual(found, found);
      let flag = !result;
      if (!result) {
        const _Set = Set;
        set = new Set(found);
        flag = true;
      }
      hasItem = flag;
    }
    return hasItem;
  },
  WINDOW_FOCUS: function handleWindowFocus() {
    const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
    let tmp2 = null == channel;
    if (!tmp2) {
      tmp2 = !isPrivate(channel.type);
    }
    let tmp4 = !tmp2;
    if (!tmp2) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      found = privateChannelIds.filter((item) => mentionCount.getMentionCount(item) > 0);
      if (found.length > 20) {
        found.length = 20;
      }
      const result = FunctionUtils.areArraysShallowlyEqual(found, found);
      let flag = !result;
      if (!result) {
        const _Set = Set;
        set = new Set(found);
        flag = true;
      }
      tmp4 = flag;
    }
    return tmp4;
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = ChannelStore.getChannel(channel.channel.id);
    let tmp2 = null == channel;
    if (!tmp2) {
      tmp2 = !isPrivate(channel.type);
    }
    let tmp4 = !tmp2;
    if (!tmp2) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      found = privateChannelIds.filter((item) => mentionCount.getMentionCount(item) > 0);
      if (found.length > 20) {
        found.length = 20;
      }
      const result = FunctionUtils.areArraysShallowlyEqual(found, found);
      let flag = !result;
      if (!result) {
        const _Set = Set;
        set = new Set(found);
        flag = true;
      }
      tmp4 = flag;
    }
    return tmp4;
  },
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    let flag = false;
    const iter = arg0.channels[Symbol.iterator]();
    while (iter !== undefined) {
      let channel = ChannelStore.getChannel(iter.next().id);
      let tmp4 = null != channel;
      if (tmp4) {
        tmp4 = isPrivate(tmp3.type);
      }
      if (tmp4) {
        flag = true;
      }
      continue;
    }
    let tmp7 = flag;
    if (tmp7) {
      tmp7 = rebuildUnreads();
    }
    return tmp7;
  }
});
let result = size.fileFinishedImporting("stores/PrivateChannelReadStateStore.tsx");

export default privateChannelReadStateStore;