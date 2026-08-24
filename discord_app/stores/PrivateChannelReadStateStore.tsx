// === Module 13360: rebuildUnreads ===

// Module 13360 (rebuildUnreads)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import areArraysShallowlyEqual from "areArraysShallowlyEqual" /* 1990 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "generateOldThreadCutoff" /* 4777 */;
import closure_5 from "handleConnectionOpen" /* 1980 */;
import closure_6 from "makeSortedChannel" /* 5393 */;
import set from "set" /* 2 */;

function rebuildUnreads() {
  const privateChannelIds = store2.getPrivateChannelIds();
  const found = privateChannelIds.filter((arg0) => mentionCount.getMentionCount(arg0) > 0);
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
  const found = privateChannelIds.filter((arg0) => mentionCount.getMentionCount(arg0) > 0);
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
    const found = privateChannelIds.filter((arg0) => mentionCount.getMentionCount(arg0) > 0);
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
    tmp4 = flag;
    const obj = areArraysShallowlyEqual;
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
      const found = privateChannelIds.filter((arg0) => mentionCount.getMentionCount(arg0) > 0);
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
      tmp4 = flag;
      const obj = areArraysShallowlyEqual;
    }
    return tmp4;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    let hasItem = set.has(channel.channel.id);
    if (hasItem) {
      const privateChannelIds = store2.getPrivateChannelIds();
      const found = privateChannelIds.filter((arg0) => mentionCount.getMentionCount(arg0) > 0);
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
      const obj = areArraysShallowlyEqual;
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
      const found = privateChannelIds.filter((arg0) => mentionCount.getMentionCount(arg0) > 0);
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
      tmp4 = flag;
      const obj = areArraysShallowlyEqual;
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
      const found = privateChannelIds.filter((arg0) => mentionCount.getMentionCount(arg0) > 0);
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
      tmp4 = flag;
      const obj = areArraysShallowlyEqual;
    }
    return tmp4;
  },
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    let flag = false;
    const iter = arg0.channels[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp = store;
      let channel = store.getChannel(iter.next().id);
      let tmp4 = null != channel;
      if (tmp4) {
        let tmp5 = isPrivate;
        let tmp6 = channel;
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
let result = set.fileFinishedImporting("stores/PrivateChannelReadStateStore.tsx");

export default privateChannelReadStateStore;