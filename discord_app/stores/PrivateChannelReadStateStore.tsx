// discord_app/stores/PrivateChannelReadStateStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import FunctionUtils from "../utils/FunctionUtils.tsx";
import ChannelRecord from "../records/ChannelRecord.tsx";
import ChannelStore from "ChannelStore.tsx";
import ReadStateStore from "ReadStateStore.tsx";
import SelectedChannelStore from "SelectedChannelStore.tsx";
import PrivateChannelSortStore from "views/PrivateChannelSortStore.tsx";
import size from "../../_runtime/metro/00002__.js";

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
      flag = true;
      set = new Set(found);
    }
    tmp4 = flag;
  }
  return tmp4;
}
const isPrivate = ChannelRecord.isPrivate;
let found = [];
let set = new Set();
const Store = initializeDefault.Store;
class PrivateChannelReadStateStore extends Store {}
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
        flag = true;
        set = new Set(found);
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
        flag = true;
        set = new Set(found);
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
        flag = true;
        set = new Set(found);
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
  },
});
let result = size.fileFinishedImporting("stores/PrivateChannelReadStateStore.tsx");

export default privateChannelReadStateStore;
