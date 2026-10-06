// === Module 6734: MessageRequestStore ===

// Module 6734 (MessageRequestStore)
import ChannelStore from "ChannelStore" /* 2051 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1084 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp2;
function processChannel(isMessageRequest) {
  let flag = false;
  const tmp = isMessageRequest.isMessageRequest && !isMessageRequest.isSpam && !set.has(isMessageRequest.id);
  if (tmp) {
    set.add(isMessageRequest.id);
    flag = true;
  }
  let hasItem = !(isMessageRequest.isMessageRequest && !isMessageRequest.isSpam);
  if (hasItem) {
    hasItem = set.has(isMessageRequest.id);
  }
  if (hasItem) {
    set.delete(isMessageRequest.id);
    flag = true;
  }
  let hasItem1 = !(isMessageRequest.isMessageRequest && !isMessageRequest.isSpam);
  if (hasItem1) {
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
  const tmp = arg0.channels[Symbol.iterator]();
  while (tmp !== undefined) {
    let tmp4 = processChannel(tmp2);
    continue;
  }
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
const set = new Set();
const set1 = new Set();
let c3 = false;
class MessageRequestStore extends MobileCacheSnapshotStore {
  constructor() {
    const obj = {
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
    const tmp2 = new tmp(obj, handleChannelDelete, new.target, tmp);
    let closure_0 = tmp2;
    return tmp2;
  }
  initialize() {
    this.waitFor(ChannelStore);
  }
  loadCache() {
    const snapshot = this.readSnapshot(MessageRequestStore.LATEST_SNAPSHOT_VERSION);
    if (null != snapshot) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      new Set(snapshot);
    }
  }
  takeSnapshot() {
    const obj = { version: MessageRequestStore.LATEST_SNAPSHOT_VERSION, data: Array.from(set) };
    return obj;
  }
  getMessageRequestChannelIds() {
    return set;
  }
  getMessageRequestsCount() {
    return set.size;
  }
  isMessageRequest(id) {
    return set.has(id);
  }
  isAcceptedOptimistic(arg0) {
    return set1.has(arg0);
  }
  isReady() {
    return c3;
  }
}
const prototype = MessageRequestStore.prototype;
MessageRequestStore.displayName = "MessageRequestStore";
MessageRequestStore.LATEST_SNAPSHOT_VERSION = 1;
let prototype1;
let obj = { CONNECTION_OPEN: handleConnectionOpen, CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen, CACHE_LOADED_LAZY, OVERLAY_INITIALIZE: handleOverlayInitialize, CHANNEL_CREATE: handleChannelCreate, CHANNEL_UPDATES: handleChannelUpdates, CHANNEL_DELETE: handleChannelDelete, MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: handleMessageRequestAcceptOptimistic };
class CACHE_LOADED_LAZY {
  constructor() {
    return closure_0.loadCache();
  }
}
prototype1 = new prototype(obj, tmp2, tmp, Object, defineProperty, CACHE_LOADED_LAZY, handleOverlayInitialize, handleChannelCreate, handleChannelUpdates);
const result = size.fileFinishedImporting("modules/message_request/MessageRequestStore.tsx");

export default prototype1;