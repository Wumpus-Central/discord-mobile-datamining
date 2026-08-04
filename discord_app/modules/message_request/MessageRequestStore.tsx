// discord_app/modules/message_request/MessageRequestStore.tsx
import prototype from "ensureGuildLoaded";
import "clearAll";
import set from "set";

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
  const values = Object.values(prototype.getMutablePrivateChannels());
  const item = values.forEach((arg0) => {
    callback(arg0);
  });
  let c3 = true;
}
function handleMessageRequestAcceptOptimistic(channelId) {
  set1.add(channelId.channelId);
}
function handleChannelCreate(channel) {
  return processChannel(channel.channel);
}
function handleChannelUpdates(arg0) {
  while (tmp !== undefined) {
    let tmp3 = processChannel;
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
  const item = prop.forEach((arg0) => set.add(arg0));
}
let set = new Set();
const set1 = new Set();
let c3 = false;
let MessageRequestStore;
class MessageRequestStore extends tmp4 {
  constructor() {
    c0 = undefined;
    obj = {
      CONNECTION_OPEN: handleConnectionOpen,
      CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
      CACHE_LOADED_LAZY() {
            return obj.loadCache();
          },
      OVERLAY_INITIALIZE: handleOverlayInitialize,
      CHANNEL_CREATE: handleChannelCreate,
      CHANNEL_UPDATES: handleChannelUpdates,
      CHANNEL_DELETE: handleChannelDelete,
      MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: handleMessageRequestAcceptOptimistic
    };
    tmp = new tmp(obj, handleChannelDelete, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    c0 = tmp;
    return tmp;
  }
}
prototype = MessageRequestStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(prototype);
};
prototype["loadCache"] = function loadCache() {
  const snapshot = this.readSnapshot(MessageRequestStore.LATEST_SNAPSHOT_VERSION);
  if (null != snapshot) {
    const _Set = Set;
    const set = new Set(snapshot);
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
prototype = undefined;
const obj = { CONNECTION_OPEN: handleConnectionOpen, CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen, CACHE_LOADED_LAZY: null, OVERLAY_INITIALIZE: null, CHANNEL_CREATE: null, CHANNEL_UPDATES: null, CHANNEL_DELETE: null, MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: null };
class CACHE_LOADED_LAZY {
  constructor() {
    return obj.loadCache();
  }
}
obj[2] = CACHE_LOADED_LAZY;
obj[3] = handleOverlayInitialize;
obj[4] = handleChannelCreate;
obj[5] = handleChannelUpdates;
obj[6] = handleChannelDelete;
obj[7] = handleMessageRequestAcceptOptimistic;
prototype = new prototype(obj, tmp2, tmp, Object, defineProperty, CACHE_LOADED_LAZY, handleOverlayInitialize, handleChannelCreate, handleChannelUpdates);
// ThrowIfThisInitialized (0x7c)
const result = set.fileFinishedImporting("modules/message_request/MessageRequestStore.tsx");

export default prototype;