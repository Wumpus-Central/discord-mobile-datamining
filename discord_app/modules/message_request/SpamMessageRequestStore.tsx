// === Module 7220: processChannel ===

// Module 7220 (processChannel)
import clearAllDefault from "clearAll" /* 1073 */;
import prototype from "ensureGuildLoaded" /* 1957 */;
import set from "set" /* 2 */;

function processChannel(isSpam) {
  isSpam = isSpam.isSpam;
  if (isSpam) {
    isSpam = !set.has(isSpam.id);
  }
  let flag = false;
  if (isSpam) {
    set.add(isSpam.id);
    flag = true;
  }
  const isSpam2 = isSpam.isSpam;
  let hasItem = !isSpam2;
  if (!isSpam2) {
    hasItem = set.has(isSpam.id);
  }
  if (hasItem) {
    set.delete(isSpam.id);
    flag = true;
  }
  const isSpam3 = isSpam.isSpam;
  let hasItem1 = !isSpam3;
  if (!isSpam3) {
    hasItem1 = set1.has(isSpam.id);
  }
  if (hasItem1) {
    set1.delete(isSpam.id);
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
  c3 = true;
}
function handleSpamAcceptOptimistic(channelId) {
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
  let flag = false;
  if (set.has(channel.id)) {
    set.delete(channel.id);
    flag = true;
  }
  return flag;
}
clearAllDefault;
let set = new Set();
const set1 = new Set();
let c3 = false;
let SpamMessageRequestStore;
class SpamMessageRequestStore extends tmp4 {
  constructor() {
    closure_0 = undefined;
    obj = {
      CONNECTION_OPEN: handleConnectionOpen,
      CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
      CACHE_LOADED_LAZY() {
            return obj.loadCache();
          },
      CHANNEL_CREATE: handleChannelCreate,
      CHANNEL_UPDATES: handleChannelUpdates,
      CHANNEL_DELETE: handleChannelDelete,
      MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: handleSpamAcceptOptimistic
    };
    tmp = new tmp(obj, handleChannelDelete, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp;
    return tmp;
  }
}
prototype = SpamMessageRequestStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(prototype);
};
prototype["loadCache"] = function loadCache() {
  const snapshot = this.readSnapshot(SpamMessageRequestStore.LATEST_SNAPSHOT_VERSION);
  if (null != snapshot) {
    const _Set = Set;
    set = new Set(snapshot);
  }
};
prototype["takeSnapshot"] = function takeSnapshot() {
  return { version: SpamMessageRequestStore.LATEST_SNAPSHOT_VERSION, data: Array.from(set) };
};
prototype["getSpamChannelIds"] = function getSpamChannelIds() {
  return set;
};
prototype["getSpamChannelsCount"] = function getSpamChannelsCount() {
  return set.size;
};
prototype["isSpam"] = function isSpam(arg0) {
  return set.has(arg0);
};
prototype["isAcceptedOptimistic"] = function isAcceptedOptimistic(arg0) {
  return set1.has(arg0);
};
prototype["isReady"] = function isReady() {
  return c3;
};
SpamMessageRequestStore.displayName = "SpamMessageRequestStore";
SpamMessageRequestStore.LATEST_SNAPSHOT_VERSION = 1;
prototype = undefined;
const obj = { CONNECTION_OPEN: handleConnectionOpen, CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen, CACHE_LOADED_LAZY: null, CHANNEL_CREATE: null, CHANNEL_UPDATES: null, CHANNEL_DELETE: null, MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: null };
class CACHE_LOADED_LAZY {
  constructor() {
    return obj.loadCache();
  }
}
obj[2] = CACHE_LOADED_LAZY;
obj[3] = handleChannelCreate;
obj[4] = handleChannelUpdates;
obj[5] = handleChannelDelete;
obj[6] = handleSpamAcceptOptimistic;
prototype = new prototype(obj, tmp2, tmp, Object, defineProperty, CACHE_LOADED_LAZY, handleChannelCreate, handleChannelUpdates, handleChannelDelete);
// ThrowIfThisInitialized (0x7c)
const result = set.fileFinishedImporting("modules/message_request/SpamMessageRequestStore.tsx");

export default prototype;