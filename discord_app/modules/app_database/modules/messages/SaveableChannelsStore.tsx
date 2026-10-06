// === Module 7000: SaveableChannelsStore ===

// Module 7000 (SaveableChannelsStore)
import ExtendedMemoryLru from "ExtendedMemoryLru" /* 7002 */;
import Lru from "Lru" /* 7003 */;
import isPrivateChannel from "isPrivateChannel" /* 7005 */;
import isReadableChannel from "isReadableChannel" /* 7006 */;
import isLimitedChannel from "isLimitedChannel" /* 7007 */;
import withFallbacks from "withFallbacks" /* 7008 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4786 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1084 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import FileSystemStore from "FileSystemStore" /* 7001 */;
import size from "module_2" /* 2 */;

let tmp;
function handleSelectedChannelStoreChanged() {
  const channelId = SelectedChannelStore.getChannelId();
  if (null != channelId) {
    SaveableChannelsStore.recordChannel(channelId);
  }
}
function handleConnectionOpenSupplemental() {
  const result = SaveableChannelsStore.dropUnreachableChannels();
  const replaceLru = SaveableChannelsStore.replaceLru;
  const obj = withFallbacks;
  replaceLru(obj.withFallbacks(extendedMemoryLru, 1250));
}
function handleChannelUpdate(id) {
  id = id.id;
  const obj = isReadableChannel;
  const isReadableChannelResult = obj.isReadableChannel(id);
  const tmp2 = isReadableChannelResult && id === SelectedChannelStore.getChannelId();
  if (tmp2) {
    SaveableChannelsStore.recordChannel(id);
  }
  if (!isReadableChannelResult) {
    SaveableChannelsStore.deleteChannel(id);
  }
}
function handleChannelUpdates(arg0) {
  const tmp = arg0.channels[Symbol.iterator]();
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
  const obj = isReadableChannel;
  const isReadableChannelResult = obj.isReadableChannel(channel);
  const tmp2 = isReadableChannelResult && id === SelectedChannelStore.getChannelId();
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
  let flag = !guild.guild.unavailable;
  if (flag) {
    SaveableChannelsStore.deleteGuild(guild.guild.id);
    flag = true;
  }
  return flag;
}
function handleLoginSuccess() {
  extendedMemoryLru.clear();
  lru.clear();
  c9 = false;
}
function handleCacheLoadedLazyNoCache() {
  c9 = true;
}
let lastChannel = null;
const bound = Math.max(25, 25, 1);
let extendedMemoryLru = new ExtendedMemoryLru.ExtendedMemoryLru(750, 500);
let lru = new Lru.Lru(15);
let c9 = false;
class SaveableChannelsStore extends MobileCacheSnapshotStore {
  constructor() {
    const obj = {
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
    const tmp2 = new tmp(obj, handleThreadDelete, new.target, tmp);
    let closure_0 = tmp2;
    return tmp2;
  }
  initialize() {
    this.waitFor(ChannelStore);
    this.waitFor(SelectedChannelStore);
    this.waitFor(GuildMemberCountStore);
    const items = [FileSystemStore];
    this.syncWith(items, () => true);
    const items1 = [SelectedChannelStore];
    this.syncWith(items1, handleSelectedChannelStoreChanged);
  }
  loadCache() {
    const snapshot = this.readSnapshot(SaveableChannelsStore.LATEST_SNAPSHOT_VERSION);
    if (null != snapshot) {
      c9 = true;
      SaveableChannelsStore.mergeSnapshot(snapshot);
    }
  }
  canEvictOrphans() {
    return c9;
  }
  saveLimit(channelId) {
    let num;
    const basicChannel = ChannelStore.getBasicChannel(channelId);
    if (null == basicChannel) {
      let num3;
      if (null == basicChannel) {
        num3 = 1;
      } else {
        num3 = 25;
        if (SelectedChannelStore.getChannelId() !== channelId) {
          num3 = 25;
        }
      }
      num = num3;
    } else {
      isPrivateChannel;
      num = 25;
    }
    return num;
  }
  getSaveableChannels() {
    let items1;
    const channelIds = ChannelStore.getChannelIds(null);
    const mapped = channelIds.map((channelId) => ({ guildId: null, channelId }));
    if (FileSystemStore.isLowDisk) {
      let tmp10 = mapped;
      if (null != lastChannel) {
        const items = [];
        items[HermesBuiltin.arraySpread(items, mapped, 0)] = lastChannel;
        tmp10 = items;
      }
      items1 = tmp10;
    } else {
      items1 = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items1, mapped, 0);
      HermesBuiltin.arraySpread(items1, extendedMemoryLru.values(), arraySpreadResult);
    }
    return items1;
  }
  takeSnapshot() {
    let items;
    let obj2;
    const obj = { version: SaveableChannelsStore.LATEST_SNAPSHOT_VERSION, data: obj2 };
    obj2 = { channels: items.filter((fallback) => !fallback.fallback), penalized: [...lru.keys()], lastChannel };
    items = [...extendedMemoryLru.allValues()];
    return obj;
  }
  static mergeSnapshot(snapshot) {
    const obj = extendedMemoryLru;
    extendedMemoryLru = new ExtendedMemoryLru.ExtendedMemoryLru(extendedMemoryLru.primaryCapacity, extendedMemoryLru.extendedCapacity);
    const obj2 = lru;
    lru = new Lru.Lru(lru.capacity);
    if (lastChannel == null) {
      lastChannel = snapshot.lastChannel;
    }
    const items = [snapshot.channels, obj.values()];
    for (const item10036 of items) {
      for (const item10041 of item10036) {
        if (!item10041.fallback) {
          let putResult = extendedMemoryLru.put(item10041.channelId, item10041);
        }
        continue;
      }
      continue;
    }
    const items1 = [snapshot.penalized, obj2.keys()];
    for (const item10059 of items1) {
      for (const item10064 of item10059) {
        let putResult1 = lru.put(item10064, null);
        continue;
      }
      continue;
    }
  }
  static recordChannel(id) {
    const basicChannel = ChannelStore.getBasicChannel(id);
    if (null != basicChannel) {
      const obj3 = isReadableChannel;
      if (obj3.isReadableChannel(basicChannel)) {
        let guild_id = basicChannel.guild_id;
        if (guild_id == null) {
          guild_id = null;
        }
        const obj = { guildId: guild_id, channelId: id, channelType: basicChannel.type };
        lastChannel = obj;
        extendedMemoryLru.put(id, obj);
        const tmp8Result = isLimitedChannel;
        if (tmp8Result.isLimitedChannel(basicChannel)) {
          if (null != lru.put(id, null)) {
            extendedMemoryLru.delete(id);
          }
        }
      }
    }
  }
  static deleteChannel(arg0) {
    extendedMemoryLru.delete(arg0);
  }
  static deleteGuild(arg0) {
    const allValuesResult = extendedMemoryLru.allValues();
    for (const item10009 of allValuesResult) {
      if (item10009.guildId === arg0) {
        let deleteResult = extendedMemoryLru.delete(tmp2.channelId);
      }
      continue;
    }
  }
  static dropUnreachableChannels() {
    const keys = extendedMemoryLru.keys();
    for (const item10008 of keys) {
      let basicChannel = ChannelStore.getBasicChannel(item10008);
      let obj = isReadableChannel;
      if (!obj.isReadableChannel(basicChannel)) {
        let deleteChannelResult = SaveableChannelsStore.deleteChannel(item10008);
      }
      continue;
    }
  }
  static deleteUnreadableGuildChannels(arg0) {
    const values = extendedMemoryLru.values();
    for (const item10009 of values) {
      let isReadableChannelIdResult = arg0 !== item10009.guildId;
      if (!isReadableChannelIdResult) {
        let obj = isReadableChannel;
        isReadableChannelIdResult = obj.isReadableChannelId(item10009.channelId);
      }
      if (!isReadableChannelIdResult) {
        let deleteChannelResult = SaveableChannelsStore.deleteChannel(item10009.channelId);
      }
      continue;
    }
  }
  static replaceLru(arg0) {
    extendedMemoryLru = arg0;
  }
}
const prototype = SaveableChannelsStore.prototype;
SaveableChannelsStore.displayName = "SaveableChannelsStore";
SaveableChannelsStore.LATEST_SNAPSHOT_VERSION = 1;
let prototype1;
let obj = { CACHE_LOADED_LAZY_NO_CACHE: handleCacheLoadedLazyNoCache, CACHE_LOADED_LAZY, CHANNEL_DELETE: handleChannelDelete, CHANNEL_UPDATES: handleChannelUpdates, CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpenSupplemental, GUILD_DELETE: handleGuildDelete, LOGIN_SUCCESS: handleLoginSuccess, THREAD_DELETE: handleThreadDelete, THREAD_UPDATE: handleThreadUpdate };
class CACHE_LOADED_LAZY {
  constructor() {
    return closure_0.loadCache();
  }
}
prototype1 = new prototype(obj, 500, tmp, Object, CACHE_LOADED_LAZY, handleChannelDelete, handleChannelUpdates, handleConnectionOpenSupplemental, handleGuildDelete, handleLoginSuccess, handleThreadDelete, SaveableChannelsStore, prototype, this);
let result = size.fileFinishedImporting("modules/app_database/modules/messages/SaveableChannelsStore.tsx");

export default prototype1;
export const MAXIMUM_MESSAGES_PER_CHANNEL_DM = 25;
export const MAXIMUM_MESSAGES_PER_CHANNEL_NON_DM = 25;
export const MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT = 1;
export const MAXIMUM_MESSAGES_PER_CHANNEL_EVER = bound;