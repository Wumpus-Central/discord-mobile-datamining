// === Module 7478: SaveableChannelsStore ===

// Module 7478 (SaveableChannelsStore)
import ExtendedMemoryLru from "ExtendedMemoryLru" /* 7480 */;
import Lru from "Lru" /* 7481 */;
import isPrivateChannel from "isPrivateChannel" /* 7483 */;
import isReadableChannel from "isReadableChannel" /* 7484 */;
import withFallbacks from "withFallbacks" /* 7486 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4480 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1073 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import FileSystemStore from "FileSystemStore" /* 7479 */;

require = fn;
function handleSelectedChannelStoreChanged() {
  const channelId = SelectedChannelStore.getChannelId();
  if (null != channelId) {
    SaveableChannelsStore.recordChannel(channelId);
  }
}
function handleConnectionOpenSupplemental() {
  const result = SaveableChannelsStore.dropUnreachableChannels();
  SaveableChannelsStore.replaceLru(withFallbacks.withFallbacks(global, 1250));
}
function handleChannelUpdate(id) {
  id = id.id;
  const isReadableChannelResult = isReadableChannel.isReadableChannel(id);
  let tmp2 = isReadableChannelResult;
  if (isReadableChannelResult) {
    tmp2 = id === SelectedChannelStore.getChannelId();
  }
  if (tmp2) {
    SaveableChannelsStore.recordChannel(id);
  }
  if (!isReadableChannelResult) {
    SaveableChannelsStore.deleteChannel(id);
  }
}
function handleChannelUpdates(arg0) {
  while (tmp !== undefined) {
    let tmp4 = handleChannelUpdate(tmp2);
    continue;
  }
}
function handleChannelDelete(channel) {
  SaveableChannelsStore.deleteChannel(channel.channel.id);
}
function handleThreadUpdate(channel) {
  channel = channel.channel;
  const id = channel.id;
  const isReadableChannelResult = isReadableChannel.isReadableChannel(channel);
  let tmp2 = isReadableChannelResult;
  if (isReadableChannelResult) {
    tmp2 = id === SelectedChannelStore.getChannelId();
  }
  if (tmp2) {
    SaveableChannelsStore.recordChannel(id);
  }
  if (!isReadableChannelResult) {
    SaveableChannelsStore.deleteChannel(id);
  }
}
function handleThreadDelete(channel) {
  SaveableChannelsStore.deleteChannel(channel.channel.id);
}
function handleGuildDelete(guild) {
  const unavailable = guild.guild.unavailable;
  let flag = !unavailable;
  if (!unavailable) {
    SaveableChannelsStore.deleteGuild(guild.guild.id);
    flag = true;
  }
  return flag;
}
function handleLoginSuccess() {
  global.clear();
  lru.clear();
  c9 = false;
}
function handleCacheLoadedLazyNoCache() {
  c9 = true;
}
let obj = null;
const bound = Math.max(25, 25, 1);
let extendedMemoryLru = new fn(7480).ExtendedMemoryLru(750, 500);
let global = extendedMemoryLru;
let lru = new fn(7481).Lru(15);
let c9 = false;
let SaveableChannelsStore;
class SaveableChannelsStore extends tmp3 {
  constructor() {
    closure_0 = undefined;
    obj = {
      CACHE_LOADED_LAZY_NO_CACHE: handleCacheLoadedLazyNoCache,
      CACHE_LOADED_LAZY() {
            return closure_0.loadCache();
          },
      CHANNEL_DELETE: handleChannelDelete,
      CHANNEL_UPDATES: handleChannelUpdates,
      CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpenSupplemental,
      GUILD_DELETE: handleGuildDelete,
      LOGIN_SUCCESS: handleLoginSuccess,
      THREAD_DELETE: handleThreadDelete,
      THREAD_UPDATE: handleThreadUpdate
    };
    tmp = new tmp(obj, handleThreadDelete, new.target, tmp);
    closure_0 = tmp;
    return tmp;
  }
}
let prototype = SaveableChannelsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ChannelStore);
  this.waitFor(SelectedChannelStore);
  this.waitFor(GuildMemberCountStore);
  const items = [FileSystemStore];
  this.syncWith(items, () => true);
  const items1 = [SelectedChannelStore];
  this.syncWith(items1, handleSelectedChannelStoreChanged);
};
prototype["loadCache"] = function loadCache() {
  const snapshot = this.readSnapshot(SaveableChannelsStore.LATEST_SNAPSHOT_VERSION);
  if (null != snapshot) {
    c9 = true;
    SaveableChannelsStore.mergeSnapshot(snapshot);
  }
};
prototype["canEvictOrphans"] = function canEvictOrphans() {
  return c9;
};
prototype["saveLimit"] = function saveLimit(channelId) {
  const basicChannel = ChannelStore.getBasicChannel(channelId);
  if (null == basicChannel) {
    if (null == basicChannel) {
      let num3 = 1;
    } else {
      num3 = 25;
      if (SelectedChannelStore.getChannelId() !== channelId) {
        num3 = 25;
      }
    }
    let num = num3;
  } else {
    num = 25;
  }
  return num;
};
prototype["getSaveableChannels"] = function getSaveableChannels() {
  const channelIds = ChannelStore.getChannelIds(null);
  const mapped = channelIds.map((channelId) => ({ guildId: null, channelId }));
  if (FileSystemStore.isLowDisk) {
    let tmp9 = mapped;
    if (null != obj) {
      const items = [];
      items[HermesBuiltin.arraySpread(mapped, 0)] = obj;
      tmp9 = items;
    }
    let items1 = tmp9;
  } else {
    items1 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(mapped, 0);
    arraySpreadResult = HermesBuiltin.arraySpread(global.values(), arraySpreadResult);
  }
  return items1;
};
prototype["takeSnapshot"] = function takeSnapshot() {
  let data = { version: SaveableChannelsStore.LATEST_SNAPSHOT_VERSION, data: null };
  data = { channels: null, penalized: [...lru.keys()], lastChannel: data };
  const items = [...global.allValues()];
  data.channels = items.filter((fallback) => !fallback.fallback);
  data.data = data;
  return data;
};
SaveableChannelsStore["mergeSnapshot"] = function mergeSnapshot(snapshot) {
  obj = global;
  const extendedMemoryLru = new ExtendedMemoryLru.ExtendedMemoryLru(global.primaryCapacity, global.extendedCapacity);
  global = extendedMemoryLru;
  lru = new Lru.Lru(lru.capacity);
  let lastChannel = obj;
  if (obj == null) {
    lastChannel = snapshot.lastChannel;
  }
  obj = lastChannel;
  const items = [snapshot.channels, obj.values()];
  for (const item10036 of items) {
    for (const item10041 of item10036) {
      let tmp5 = item10041;
      if (!item10041.fallback) {
        let putResult = global.put(tmp5.channelId, tmp5);
      }
      continue;
    }
    continue;
  }
  const items1 = [snapshot.penalized, lru.keys()];
  for (const item10059 of items1) {
    for (const item10064 of item10059) {
      let putResult1 = lru.put(item10064, null);
      continue;
    }
    continue;
  }
};
SaveableChannelsStore["recordChannel"] = function recordChannel(id) {
  const basicChannel = ChannelStore.getBasicChannel(id);
  if (null != basicChannel) {
    if (obj3.isReadableChannel(basicChannel)) {
      let guild_id = basicChannel.guild_id;
      if (guild_id == null) {
        guild_id = null;
      }
      obj = { guildId: guild_id, channelId: id, channelType: basicChannel.type };
      global.put(id, obj);
      if (tmp8Result.isLimitedChannel(basicChannel)) {
        if (null != lru.put(id, null)) {
          global.delete(id);
        }
      }
      tmp8Result = tmp8(7485);
    }
    obj3 = isReadableChannel;
    tmp8 = require;
  }
};
SaveableChannelsStore["deleteChannel"] = function deleteChannel(arg0) {
  global.delete(arg0);
};
SaveableChannelsStore["deleteGuild"] = function deleteGuild(arg0) {
  for (const item10009 of allValuesResult) {
    if (item10009.guildId === arg0) {
      let deleteResult = global.delete(tmp2.channelId);
    }
    continue;
  }
};
SaveableChannelsStore["dropUnreachableChannels"] = function dropUnreachableChannels() {
  const keys = global.keys();
  for (const item10008 of keys) {
    let tmp2 = item10008;
    let basicChannel = ChannelStore.getBasicChannel(item10008);
    obj = isReadableChannel;
    if (!obj.isReadableChannel(basicChannel)) {
      let deleteChannelResult = SaveableChannelsStore.deleteChannel(tmp2);
    }
    continue;
  }
};
SaveableChannelsStore["deleteUnreadableGuildChannels"] = function deleteUnreadableGuildChannels(arg0) {
  const values = global.values();
  for (const item10009 of values) {
    let tmp2 = item10009;
    let isReadableChannelIdResult = arg0 !== item10009.guildId;
    if (!isReadableChannelIdResult) {
      obj = isReadableChannel;
      isReadableChannelIdResult = obj.isReadableChannelId(tmp2.channelId);
    }
    if (!isReadableChannelIdResult) {
      let deleteChannelResult = SaveableChannelsStore.deleteChannel(tmp2.channelId);
    }
    continue;
  }
};
SaveableChannelsStore["replaceLru"] = function replaceLru(arg0) {
  global = arg0;
};
SaveableChannelsStore.displayName = "SaveableChannelsStore";
SaveableChannelsStore.LATEST_SNAPSHOT_VERSION = 1;
let closure_129_0;
obj = { CACHE_LOADED_LAZY_NO_CACHE: handleCacheLoadedLazyNoCache, CACHE_LOADED_LAZY: null, CHANNEL_DELETE: null, CHANNEL_UPDATES: null, CONNECTION_OPEN_SUPPLEMENTAL: null, GUILD_DELETE: null, LOGIN_SUCCESS: null, THREAD_DELETE: null, THREAD_UPDATE: null };
class CACHE_LOADED_LAZY {
  constructor() {
    return closure_0.loadCache();
  }
}
obj.CACHE_LOADED_LAZY = CACHE_LOADED_LAZY;
obj.CHANNEL_DELETE = handleChannelDelete;
obj.CHANNEL_UPDATES = handleChannelUpdates;
obj.CONNECTION_OPEN_SUPPLEMENTAL = handleConnectionOpenSupplemental;
obj.GUILD_DELETE = handleGuildDelete;
obj.LOGIN_SUCCESS = handleLoginSuccess;
obj.THREAD_DELETE = handleThreadDelete;
obj.THREAD_UPDATE = handleThreadUpdate;
prototype = new prototype(obj, 500, tmp, Object, CACHE_LOADED_LAZY, handleChannelDelete, handleChannelUpdates, handleConnectionOpenSupplemental, handleGuildDelete, handleLoginSuccess, handleThreadDelete, SaveableChannelsStore, prototype, new.target);
closure_129_0 = prototype;
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/modules/messages/SaveableChannelsStore.tsx");

export default prototype;
export const MAXIMUM_MESSAGES_PER_CHANNEL_DM = 25;
export const MAXIMUM_MESSAGES_PER_CHANNEL_NON_DM = 25;
export const MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT = 1;
export const MAXIMUM_MESSAGES_PER_CHANNEL_EVER = bound;