import ensureGuildLoaded from "ensureGuildLoaded";
import handleInviteData from "handleInviteData";
import "clearAll";
import handleConnectionOpen from "handleConnectionOpen";
import result from "result";
import bound from "module_25";

let prototype = arg1;
function handleSelectedChannelStoreChanged() {
  const channelId = store2.getChannelId();
  if (null != channelId) {
    SaveableChannelsStore.recordChannel(channelId);
  }
}
function handleConnectionOpenSupplemental() {
  const result = SaveableChannelsStore.dropUnreachableChannels();
  SaveableChannelsStore.replaceLru(prototype(6842).withFallbacks(extendedMemoryLru, 1250));
}
function handleChannelUpdate(id) {
  id = id.id;
  const isReadableChannelResult = prototype(6840).isReadableChannel(id);
  let tmp2 = isReadableChannelResult;
  if (isReadableChannelResult) {
    tmp2 = id === store2.getChannelId();
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
    let tmp3 = handleChannelUpdate;
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
  const isReadableChannelResult = prototype(6840).isReadableChannel(channel);
  let tmp2 = isReadableChannelResult;
  if (isReadableChannelResult) {
    tmp2 = id === store2.getChannelId();
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
  extendedMemoryLru.clear();
  lru.clear();
  let c9 = false;
}
function handleCacheLoadedLazyNoCache() {
  let c9 = true;
}
let c6 = null;
let extendedMemoryLru = new require("totalLength").ExtendedMemoryLru(750, 500);
let lru = new require("length").Lru(15);
let c9 = false;
let SaveableChannelsStore;
class SaveableChannelsStore extends tmp3 {
  constructor() {
    c0 = undefined;
    obj = {
      CACHE_LOADED_LAZY_NO_CACHE: handleCacheLoadedLazyNoCache,
      CACHE_LOADED_LAZY() {
            return obj.loadCache();
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
    // ThrowIfThisInitialized (0x7c)
    c0 = tmp;
    return tmp;
  }
}
prototype = SaveableChannelsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(ensureGuildLoaded);
  this.waitFor(handleConnectionOpen);
  this.waitFor(handleInviteData);
  const items = [result];
  this.syncWith(items, () => true);
  const items1 = [handleConnectionOpen];
  this.syncWith(items1, handleSelectedChannelStoreChanged);
};
prototype["loadCache"] = function loadCache() {
  const snapshot = this.readSnapshot(SaveableChannelsStore.LATEST_SNAPSHOT_VERSION);
  if (null != snapshot) {
    let c9 = true;
    SaveableChannelsStore.mergeSnapshot(snapshot);
  }
};
prototype["canEvictOrphans"] = function canEvictOrphans() {
  return c9;
};
prototype["saveLimit"] = function saveLimit(channelId) {
  const basicChannel = store.getBasicChannel(channelId);
  if (null == basicChannel) {
    if (null == basicChannel) {
      let num3 = 1;
    } else {
      num3 = 25;
      if (store2.getChannelId() !== channelId) {
        num3 = 25;
      }
    }
    let num = num3;
  } else {
    num = 25;
    const obj = prototype(6839);
  }
  return num;
};
prototype["getSaveableChannels"] = function getSaveableChannels() {
  const channelIds = store.getChannelIds(null);
  const mapped = channelIds.map((channelId) => ({ guildId: null, channelId }));
  if (isLowDisk.isLowDisk) {
    let tmp9 = mapped;
    if (null != c6) {
      const items = [];
      items[HermesBuiltin.arraySpread(mapped, 0)] = c6;
      tmp9 = items;
    }
    let items1 = tmp9;
  } else {
    items1 = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(mapped, 0);
    arraySpreadResult = HermesBuiltin.arraySpread(extendedMemoryLru.values(), arraySpreadResult);
  }
  return items1;
};
prototype["takeSnapshot"] = function takeSnapshot() {
  let obj = { version: SaveableChannelsStore.LATEST_SNAPSHOT_VERSION, data: null };
  obj = { channels: null, penalized: null, lastChannel: null };
  const items = [...extendedMemoryLru.allValues()];
  obj[0] = items.filter((fallback) => !fallback.fallback);
  obj[1] = [...lru.keys()];
  obj[2] = c6;
  obj[1] = obj;
  return obj;
};
SaveableChannelsStore["mergeSnapshot"] = function mergeSnapshot(snapshot) {
  extendedMemoryLru = new prototype(6836).ExtendedMemoryLru(extendedMemoryLru.primaryCapacity, extendedMemoryLru.extendedCapacity);
  lru = new prototype(6837).Lru(lru.capacity);
  if (lastChannel == null) {
    lastChannel = snapshot.lastChannel;
  }
  const items = [snapshot.channels, extendedMemoryLru.values()];
  for (const item10036 of items) {
    let tmp3 = item10036;
    let tmp4 = item10036;
    for (const item10041 of item10036) {
      let tmp5 = item10041;
      if (!item10041.fallback) {
        let tmp6 = extendedMemoryLru;
        let tmp7 = item10041;
        let putResult = extendedMemoryLru.put(tmp5.channelId, tmp5);
      }
      continue;
    }
    continue;
  }
  const items1 = [snapshot.penalized, lru.keys()];
  for (const item10059 of items1) {
    let tmp9 = item10059;
    let tmp10 = item10059;
    for (const item10064 of item10059) {
      let tmp11 = lru;
      let putResult1 = lru.put(item10064, null);
      continue;
    }
    continue;
  }
};
SaveableChannelsStore["recordChannel"] = function recordChannel(id) {
  const basicChannel = store.getBasicChannel(id);
  if (null != basicChannel) {
    if (obj3.isReadableChannel(basicChannel)) {
      let guild_id = basicChannel.guild_id;
      if (guild_id == null) {
        guild_id = null;
      }
      const obj = { guildId: null, channelId: null, channelType: null };
      obj[0] = guild_id;
      obj[1] = id;
      obj[2] = basicChannel.type;
      extendedMemoryLru.put(id, obj);
      if (tmp8Result.isLimitedChannel(basicChannel)) {
        if (null != lru.put(id, null)) {
          extendedMemoryLru.delete(id);
        }
      }
      tmp8Result = tmp8(6841);
    }
    obj3 = prototype(6840);
    tmp8 = prototype;
  }
};
SaveableChannelsStore["deleteChannel"] = function deleteChannel(arg0) {
  extendedMemoryLru.delete(arg0);
};
SaveableChannelsStore["deleteGuild"] = function deleteGuild(arg0) {
  for (const item10009 of allValuesResult) {
    if (item10009.guildId === arg0) {
      let tmp3 = extendedMemoryLru;
      let tmp4 = item10009;
      let deleteResult = extendedMemoryLru.delete(tmp2.channelId);
    }
    continue;
  }
};
SaveableChannelsStore["dropUnreachableChannels"] = function dropUnreachableChannels() {
  const keys = extendedMemoryLru.keys();
  for (const item10008 of keys) {
    let tmp3 = store;
    let tmp2 = item10008;
    let tmp5 = prototype;
    let tmp6 = dependencyMap;
    let basicChannel = store.getBasicChannel(item10008);
    let obj = prototype(6840);
    if (!obj.isReadableChannel(basicChannel)) {
      let tmp7 = SaveableChannelsStore;
      let tmp8 = item10008;
      let deleteChannelResult = SaveableChannelsStore.deleteChannel(tmp2);
    }
    continue;
  }
};
SaveableChannelsStore["deleteUnreadableGuildChannels"] = function deleteUnreadableGuildChannels(arg0) {
  const values = extendedMemoryLru.values();
  for (const item10009 of values) {
    let tmp2 = item10009;
    let isReadableChannelIdResult = arg0 !== item10009.guildId;
    if (!isReadableChannelIdResult) {
      let tmp4 = prototype;
      let tmp5 = dependencyMap;
      let obj = prototype(6840);
      let tmp6 = item10009;
      isReadableChannelIdResult = obj.isReadableChannelId(tmp2.channelId);
    }
    if (!isReadableChannelIdResult) {
      let tmp7 = SaveableChannelsStore;
      let tmp8 = item10009;
      let deleteChannelResult = SaveableChannelsStore.deleteChannel(tmp2.channelId);
    }
    continue;
  }
};
SaveableChannelsStore["replaceLru"] = function replaceLru(arg0) {
  let closure_7 = arg0;
};
SaveableChannelsStore.displayName = "SaveableChannelsStore";
SaveableChannelsStore.LATEST_SNAPSHOT_VERSION = 1;
prototype = undefined;
let obj = { CACHE_LOADED_LAZY_NO_CACHE: handleCacheLoadedLazyNoCache, CACHE_LOADED_LAZY: null, CHANNEL_DELETE: null, CHANNEL_UPDATES: null, CONNECTION_OPEN_SUPPLEMENTAL: null, GUILD_DELETE: null, LOGIN_SUCCESS: null, THREAD_DELETE: null, THREAD_UPDATE: null };
class CACHE_LOADED_LAZY {
  constructor() {
    return obj.loadCache();
  }
}
obj[1] = CACHE_LOADED_LAZY;
obj[2] = handleChannelDelete;
obj[3] = handleChannelUpdates;
obj[4] = handleConnectionOpenSupplemental;
obj[5] = handleGuildDelete;
obj[6] = handleLoginSuccess;
obj[7] = handleThreadDelete;
obj[8] = handleThreadUpdate;
prototype = new prototype(obj, 500, tmp, Object, CACHE_LOADED_LAZY, handleChannelDelete, handleChannelUpdates, handleConnectionOpenSupplemental, handleGuildDelete, handleLoginSuccess, handleThreadDelete, SaveableChannelsStore, prototype, new.target);
// ThrowIfThisInitialized (0x7c)
let result = require("clearAll").fileFinishedImporting("modules/app_database/modules/messages/SaveableChannelsStore.tsx");

export default prototype;
export const MAXIMUM_MESSAGES_PER_CHANNEL_DM = 25;
export const MAXIMUM_MESSAGES_PER_CHANNEL_NON_DM = 25;
export const MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT = 1;
export const MAXIMUM_MESSAGES_PER_CHANNEL_EVER = bound;