// discord_app/stores/PrivateChannelReadStateStore.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import createChannelRecord from "../records/ChannelRecord.tsx";
import areArraysShallowlyEqual from "../utils/FunctionUtils.tsx";
import ensureGuildLoaded from "ChannelStore.tsx";
import generateOldThreadCutoff from "ReadStateStore.tsx";
import handleConnectionOpen2 from "SelectedChannelStore.tsx";
import makeSortedChannel from "views/PrivateChannelSortStore.tsx";

function rebuildUnreads() {
  const privateChannelIds = store2.getPrivateChannelIds();
  const found = privateChannelIds.filter((item, index) => mentionCount.getMentionCount(item) > 0);
  if (found.length > 20) {
    found.length = 20;
  }
  const result = areArraysShallowlyEqual.areArraysShallowlyEqual(found, found);
  let flag = !result;
  if (!result) {
    const _Set = Set;
    set = new Set(found);
    flag = true;
  }
  return flag;
}
function handleConnectionOpen() {
  const privateChannelIds = store2.getPrivateChannelIds();
  const found = privateChannelIds.filter((item, index) => mentionCount.getMentionCount(item) > 0);
  if (found.length > 20) {
    found.length = 20;
  }
  const result = areArraysShallowlyEqual.areArraysShallowlyEqual(found, found);
  let flag = !result;
  if (!result) {
    const _Set = Set;
    set = new Set(found);
    flag = true;
  }
  return flag;
}
function handleGenericUpdate(channelId) {
  const channel = store.getChannel(channelId.channelId);
  let tmp2 = null == channel;
  if (!tmp2) {
    tmp2 = !isPrivate(channel.type);
  }
  let tmp4 = !tmp2;
  if (!tmp2) {
    const privateChannelIds = store2.getPrivateChannelIds();
    const found = privateChannelIds.filter((item, index) => mentionCount.getMentionCount(item) > 0);
    if (found.length > 20) {
      found.length = 20;
    }
    const result = areArraysShallowlyEqual.areArraysShallowlyEqual(found, found);
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
const isPrivate = createChannelRecord.isPrivate;
let closure_7 = [];
let set = new Set();
const Store = initializeDefault.Store;
class PrivateChannelReadStateStore extends Store {
}
const prototype = PrivateChannelReadStateStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_6, closure_3, closure_5, closure_4);
};
prototype["getUnreadPrivateChannelIds"] = function getUnreadPrivateChannelIds() {
  return closure_7;
};
PrivateChannelReadStateStore.displayName = "PrivateChannelReadStateStore";
const privateChannelReadStateStore = new PrivateChannelReadStateStore(dispatcherDefault, {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  MESSAGE_CREATE: handleGenericUpdate,
  MESSAGE_ACK: handleGenericUpdate,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    const channel = store.getChannel(channelId.channelId);
    let tmp2 = null == channel;
    if (!tmp2) {
      tmp2 = !isPrivate(channel.type);
    }
    let tmp4 = !tmp2;
    if (!tmp2) {
      const privateChannelIds = store2.getPrivateChannelIds();
      const found = privateChannelIds.filter((item, index) => mentionCount.getMentionCount(item) > 0);
      if (found.length > 20) {
        found.length = 20;
      }
      const result = areArraysShallowlyEqual.areArraysShallowlyEqual(found, found);
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
      const privateChannelIds = store2.getPrivateChannelIds();
      const found = privateChannelIds.filter((item, index) => mentionCount.getMentionCount(item) > 0);
      if (found.length > 20) {
        found.length = 20;
      }
      const result = areArraysShallowlyEqual.areArraysShallowlyEqual(found, found);
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
    const channel = store.getChannel(channelId.getChannelId());
    let tmp2 = null == channel;
    if (!tmp2) {
      tmp2 = !isPrivate(channel.type);
    }
    let tmp4 = !tmp2;
    if (!tmp2) {
      const privateChannelIds = store2.getPrivateChannelIds();
      const found = privateChannelIds.filter((item, index) => mentionCount.getMentionCount(item) > 0);
      if (found.length > 20) {
        found.length = 20;
      }
      const result = areArraysShallowlyEqual.areArraysShallowlyEqual(found, found);
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
    channel = store.getChannel(channel.channel.id);
    let tmp2 = null == channel;
    if (!tmp2) {
      tmp2 = !isPrivate(channel.type);
    }
    let tmp4 = !tmp2;
    if (!tmp2) {
      const privateChannelIds = store2.getPrivateChannelIds();
      const found = privateChannelIds.filter((item, index) => mentionCount.getMentionCount(item) > 0);
      if (found.length > 20) {
        found.length = 20;
      }
      const result = areArraysShallowlyEqual.areArraysShallowlyEqual(found, found);
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
      let channel = store.getChannel(iter.next().id);
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
let result = obj132.fileFinishedImporting("stores/PrivateChannelReadStateStore.tsx");

export default privateChannelReadStateStore;