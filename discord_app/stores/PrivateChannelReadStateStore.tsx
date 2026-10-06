// discord_app/stores/PrivateChannelReadStateStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import FunctionUtils from "../utils/FunctionUtils.tsx";
import ChannelRecord from "../records/ChannelRecord.tsx";
import ChannelStore from "ChannelStore.tsx";
import ReadStateStore from "ReadStateStore.tsx";
import SelectedChannelStore from "SelectedChannelStore.tsx";
import PrivateChannelSortStore from "views/PrivateChannelSortStore.tsx";
import size from "../../_runtime/metro/00002__.js";

const f115182 = (item) => mentionCount.getMentionCount(item) > 0;
function rebuildUnreads() {
  const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
  found = privateChannelIds.filter(f115182);
  if (found.length > 20) {
    found.length = 20;
  }
  const obj = FunctionUtils;
  const result = obj.areArraysShallowlyEqual(found, found);
  let flag = !result;
  if (flag) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    new Set(found);
    flag = true;
  }
  return flag;
}
function handleConnectionOpen() {
  const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
  found = privateChannelIds.filter(f115182);
  if (found.length > 20) {
    found.length = 20;
  }
  const obj = FunctionUtils;
  const result = obj.areArraysShallowlyEqual(found, found);
  let flag = !result;
  if (flag) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    new Set(found);
    flag = true;
  }
  return flag;
}
function handleGenericUpdate(channelId) {
  const channel = ChannelStore.getChannel(channelId.channelId);
  let tmp4 = !(null == channel || !isPrivate(channel.type));
  const tmp2 = null == channel || !isPrivate(channel.type);
  if (tmp4) {
    const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
    found = privateChannelIds.filter(f115182);
    if (found.length > 20) {
      found.length = 20;
    }
    const obj = FunctionUtils;
    const result = obj.areArraysShallowlyEqual(found, found);
    let flag = !result;
    if (flag) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      flag = true;
      new Set(found);
    }
    tmp4 = flag;
  }
  return tmp4;
}
const isPrivate = ChannelRecord.isPrivate;
let found = [];
let set = new Set();
const Store = get_initializedDefault.Store;
class PrivateChannelReadStateStore extends Store {
  initialize() {
    this.waitFor(PrivateChannelSortStore, ChannelStore, SelectedChannelStore, ReadStateStore);
  }
  getUnreadPrivateChannelIds() {
    return found;
  }
}
const prototype = PrivateChannelReadStateStore.prototype;
PrivateChannelReadStateStore.displayName = "PrivateChannelReadStateStore";
let obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  MESSAGE_CREATE: handleGenericUpdate,
  MESSAGE_ACK: handleGenericUpdate,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let tmp4 = !(null == channel || !isPrivate(channel.type));
    const tmp2 = null == channel || !isPrivate(channel.type);
    if (tmp4) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      found = privateChannelIds.filter(f115182);
      if (found.length > 20) {
        found.length = 20;
      }
      const obj = FunctionUtils;
      const result = obj.areArraysShallowlyEqual(found, found);
      let flag = !result;
      if (flag) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        flag = true;
        new Set(found);
      }
      tmp4 = flag;
    }
    return tmp4;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    let hasItem = set.has(channel.channel.id);
    if (hasItem) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      found = privateChannelIds.filter(f115182);
      if (found.length > 20) {
        found.length = 20;
      }
      const obj = FunctionUtils;
      const result = obj.areArraysShallowlyEqual(found, found);
      let flag = !result;
      if (flag) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        flag = true;
        set = new Set(found);
      }
      hasItem = flag;
    }
    return hasItem;
  },
  WINDOW_FOCUS: function handleWindowFocus() {
    const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
    let tmp4 = !(null == channel || !isPrivate(channel.type));
    const tmp2 = null == channel || !isPrivate(channel.type);
    if (tmp4) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      found = privateChannelIds.filter(f115182);
      if (found.length > 20) {
        found.length = 20;
      }
      const obj = FunctionUtils;
      const result = obj.areArraysShallowlyEqual(found, found);
      let flag = !result;
      if (flag) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        flag = true;
        new Set(found);
      }
      tmp4 = flag;
    }
    return tmp4;
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    let mentionCount;
    channel = ChannelStore.getChannel(channel.channel.id);
    let tmp4 = !(null == channel || !isPrivate(channel.type));
    const tmp2 = null == channel || !isPrivate(channel.type);
    if (tmp4) {
      const privateChannelIds = PrivateChannelSortStore.getPrivateChannelIds();
      found = privateChannelIds.filter(f115182);
      if (found.length > 20) {
        found.length = 20;
      }
      const obj = FunctionUtils;
      const result = obj.areArraysShallowlyEqual(found, found);
      let flag = !result;
      if (flag) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        flag = true;
        new Set(found);
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
    const tmp7 = flag && rebuildUnreads();
    return tmp7;
  },
};
const privateChannelReadStateStore = new PrivateChannelReadStateStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/PrivateChannelReadStateStore.tsx");

export default privateChannelReadStateStore;
