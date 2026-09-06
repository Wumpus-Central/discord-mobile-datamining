// === Module 7219: MessageRequestStore ===

// Module 7219 (MessageRequestStore)
import ChannelStore from "ChannelStore" /* 1957 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1073 */;

function processChannel(isMessageRequest) {
  let tmp = isMessageRequest.isMessageRequest && !isMessageRequest.isSpam;
  if (tmp) {
    tmp = !set.has(isMessageRequest.id);
  }
  let flag = false;
  if (tmp) {
    set.add(isMessageRequest.id);
    flag = true;
  }
  let hasItem = !tmp5;
  if (!(isMessageRequest.isMessageRequest && !isMessageRequest.isSpam)) {
    hasItem = set.has(isMessageRequest.id);
  }
  if (hasItem) {
    set.delete(isMessageRequest.id);
    flag = true;
  }
  let hasItem1 = !tmp10;
  if (!(isMessageRequest.isMessageRequest && !isMessageRequest.isSpam)) {
    hasItem1 = set1.has(isMessageRequest.id);
  }
  if (hasItem1) {
    set1.delete(isMessageRequest.id);
    flag = true;
  }
  return flag;
}
function handleConnectionOpen() {
  set.clear();
  set1.clear();
  const values = Object.values(ChannelStore.getMutablePrivateChannels());
  const item = values.forEach((item) => {
    processChannel(item);
  });
  c3 = true;
}
function handleMessageRequestAcceptOptimistic(channelId) {
  set1.add(channelId.channelId);
}
function handleChannelCreate(channel) {
  return processChannel(channel.channel);
}
function handleChannelUpdates(arg0) {
  while (tmp !== undefined) {
    let tmp4 = processChannel(tmp2);
    continue;
  }
  tmp = arg0.channels[Symbol.iterator]();
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  let flag = set.has(channel.id);
  if (flag) {
    set.delete(channel.id);
    flag = true;
  }
  return flag;
}
function handleOverlayInitialize(messageRequestChannelIds) {
  const prop = messageRequestChannelIds.messageRequestChannelIds;
  const item = prop.forEach((item) => set.add(item));
}
let set = new Set();
const set1 = new Set();
let c3 = false;
let MessageRequestStore;
class MessageRequestStore extends tmp4 {
  constructor() {
    closure_0 = undefined;
    obj = {
      CONNECTION_OPEN: handleConnectionOpen,
      CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
      CACHE_LOADED_LAZY() {
            return closure_0.loadCache();
          },
      OVERLAY_INITIALIZE: handleOverlayInitialize,
      CHANNEL_CREATE: handleChannelCreate,
      CHANNEL_UPDATES: handleChannelUpdates,
      CHANNEL_DELETE: handleChannelDelete,
      MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: handleMessageRequestAcceptOptimistic
    };
    tmp = new tmp(obj, handleChannelDelete, new.target, tmp);
    closure_0 = tmp;
    return tmp;
  }
}
let prototype = MessageRequestStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore);
};
prototype["loadCache"] = function loadCache() {
  const snapshot = this.readSnapshot(MessageRequestStore.LATEST_SNAPSHOT_VERSION);
  if (null != snapshot) {
    const _Set = Set;
    set = new Set(snapshot);
  }
};
prototype["takeSnapshot"] = function takeSnapshot() {
  return { version: MessageRequestStore.LATEST_SNAPSHOT_VERSION, data: Array.from(set) };
};
prototype["getMessageRequestChannelIds"] = function getMessageRequestChannelIds() {
  return set;
};
prototype["getMessageRequestsCount"] = function getMessageRequestsCount() {
  return set.size;
};
prototype["isMessageRequest"] = function isMessageRequest(id) {
  return set.has(id);
};
prototype["isAcceptedOptimistic"] = function isAcceptedOptimistic(arg0) {
  return set1.has(arg0);
};
prototype["isReady"] = function isReady() {
  return c3;
};
MessageRequestStore.displayName = "MessageRequestStore";
MessageRequestStore.LATEST_SNAPSHOT_VERSION = 1;
let closure_129_0;
const obj = { CONNECTION_OPEN: handleConnectionOpen, CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen, CACHE_LOADED_LAZY: null, OVERLAY_INITIALIZE: null, CHANNEL_CREATE: null, CHANNEL_UPDATES: null, CHANNEL_DELETE: null, MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: null };
class CACHE_LOADED_LAZY {
  constructor() {
    return closure_0.loadCache();
  }
}
obj.CACHE_LOADED_LAZY = CACHE_LOADED_LAZY;
obj.OVERLAY_INITIALIZE = handleOverlayInitialize;
obj.CHANNEL_CREATE = handleChannelCreate;
obj.CHANNEL_UPDATES = handleChannelUpdates;
obj.CHANNEL_DELETE = handleChannelDelete;
obj.MESSAGE_REQUEST_ACCEPT_OPTIMISTIC = handleMessageRequestAcceptOptimistic;
prototype = new prototype(obj, tmp2, tmp, Object, defineProperty, CACHE_LOADED_LAZY, handleOverlayInitialize, handleChannelCreate, handleChannelUpdates);
closure_129_0 = prototype;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/MessageRequestStore.tsx");

export default prototype;