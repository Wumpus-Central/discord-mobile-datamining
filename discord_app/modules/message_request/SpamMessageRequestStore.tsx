// === Module 6721: SpamMessageRequestStore ===

// Module 6721 (SpamMessageRequestStore)
import ChannelStore from "ChannelStore" /* 2051 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1084 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp2;
function processChannel(isSpam) {
  isSpam = isSpam.isSpam && !set.has(isSpam.id);
  let flag = false;
  if (isSpam) {
    set.add(isSpam.id);
    flag = true;
  }
  const hasItem = !isSpam.isSpam && set.has(isSpam.id);
  if (hasItem) {
    set.delete(isSpam.id);
    flag = true;
  }
  const hasItem1 = !isSpam.isSpam && set1.has(isSpam.id);
  if (hasItem1) {
    set1.delete(isSpam.id);
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
function handleSpamAcceptOptimistic(channelId) {
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
  let flag = false;
  if (set.has(channel.id)) {
    set.delete(channel.id);
    flag = true;
  }
  return flag;
}
const set = new Set();
const set1 = new Set();
let c3 = false;
class SpamMessageRequestStore extends MobileCacheSnapshotStore {
  constructor() {
    const obj = {
      CONNECTION_OPEN: handleConnectionOpen,
      CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen,
      CACHE_LOADED_LAZY() {
        return closure_0.loadCache();
      },
      CHANNEL_CREATE: handleChannelCreate,
      CHANNEL_UPDATES: handleChannelUpdates,
      CHANNEL_DELETE: handleChannelDelete,
      MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: handleSpamAcceptOptimistic
    };
    const tmp2 = new tmp(obj, handleChannelDelete, new.target, tmp);
    let closure_0 = tmp2;
    return tmp2;
  }
  initialize() {
    this.waitFor(ChannelStore);
  }
  loadCache() {
    const snapshot = this.readSnapshot(SpamMessageRequestStore.LATEST_SNAPSHOT_VERSION);
    if (null != snapshot) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      new Set(snapshot);
    }
  }
  takeSnapshot() {
    const obj = { version: SpamMessageRequestStore.LATEST_SNAPSHOT_VERSION, data: Array.from(set) };
    return obj;
  }
  getSpamChannelIds() {
    return set;
  }
  getSpamChannelsCount() {
    return set.size;
  }
  isSpam(arg0) {
    return set.has(arg0);
  }
  isAcceptedOptimistic(arg0) {
    return set1.has(arg0);
  }
  isReady() {
    return c3;
  }
}
const prototype = SpamMessageRequestStore.prototype;
SpamMessageRequestStore.displayName = "SpamMessageRequestStore";
SpamMessageRequestStore.LATEST_SNAPSHOT_VERSION = 1;
let prototype1;
let obj = { CONNECTION_OPEN: handleConnectionOpen, CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpen, CACHE_LOADED_LAZY, CHANNEL_CREATE: handleChannelCreate, CHANNEL_UPDATES: handleChannelUpdates, CHANNEL_DELETE: handleChannelDelete, MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: handleSpamAcceptOptimistic };
class CACHE_LOADED_LAZY {
  constructor() {
    return closure_0.loadCache();
  }
}
prototype1 = new prototype(obj, tmp2, tmp, Object, defineProperty, CACHE_LOADED_LAZY, handleChannelCreate, handleChannelUpdates, handleChannelDelete);
const result = size.fileFinishedImporting("modules/message_request/SpamMessageRequestStore.tsx");

export default prototype1;