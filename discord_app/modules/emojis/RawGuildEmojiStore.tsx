// === Module 5411: fromServer ===

// Module 5411 (fromServer)
import EmojiTypes from "EmojiTypes" /* 4137 */;
import closure_2 from "_slicedToArray" /* 32 */;
import { TypeTag } from "TypeTag" /* 1427 */;
import { LibdiscoreStore } from "identity" /* 1909 */;
import { LibdiscoreBatchStoreRefactorExperiment } from "items" /* 1912 */;

require = arg1;
function fromServer(guildId) {
  let obj = {};
  const iter = arg1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    obj = {};
    let tmp2 = TypeTag;
    obj[TypeTag] = "RawGuildEmoji";
    obj.guildId = guildId;
    ({ id: obj2.id, animated: obj2.animated, name: obj2.name, require_colons: obj2.require_colons, available: obj2.available, roles: obj2.roles, managed: obj2.managed, version: obj2.version } = nextResult);
    let tmp3 = require;
    let tmp4 = dependencyMap;
    obj.type = EmojiTypes.EmojiTypes.GUILD;
    obj[nextResult.id] = obj;
    continue;
  }
  return obj;
}
function syncEmojis(id, emojis, setPartition) {
  if ("full_sync" === emojis.op) {
    setPartition.setPartition(id, fromServer(id, emojis.items));
  } else {
    const nullablePartition = setPartition.getNullablePartition(id);
    if (null == nullablePartition) {
      setPartition.setPartition(id, fromServer(id, emojis.writes));
    } else if (emojis.writes.length > 0) {
      const obj = {};
      const merged = Object.assign(nullablePartition);
      const deletes = emojis.deletes;
      for (const item10016 of deletes) {
        delete tmp[tmp2];
        continue;
      }
      const writes = emojis.writes;
      const tmp9 = writes[Symbol.iterator]();
      while (tmp9 !== undefined) {
        let _Object = Object;
        let tmp14 = fromServer;
        let items = [tmp12];
        let merged1 = Object.assign(obj, fromServer(id, items));
        continue;
      }
      setPartition.setPartition(id, obj);
    }
  }
}
class RawGuildEmojiStore extends LibdiscoreStore {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.database = applyArgumentsResult.addKKVDatabase("guild_emojis");
    return applyArgumentsResult;
  }
}
const prototype = RawGuildEmojiStore.prototype;
prototype["stateWrapper"] = function stateWrapper() {
  return this.database;
};
prototype["getGuildEmojis"] = function getGuildEmojis(guildId) {
  const database = this.database;
  return database.getNullablePartition(guildId);
};
RawGuildEmojiStore.displayName = "RawGuildEmojiStore";
const rawGuildEmojiStore = new RawGuildEmojiStore({
  LOGOUT(arg0, clear) {
    return clear.clear();
  },
  BACKGROUND_SYNC(arg0, clear) {
    return clear.clear();
  },
  RESET_SOCKET(arg0, clear) {
    return clear.clear();
  },
  CONNECTION_OPEN(arg0, getPartitionKeys) {
    ({ guilds, unavailableGuilds } = arg0);
    const set = new Set(guilds.map((id) => id.id));
    for (const item10017 of unavailableGuilds) {
      let addResult = set.add(item10017);
      continue;
    }
    const partitionKeys = getPartitionKeys.getPartitionKeys();
    for (const item10028 of partitionKeys) {
      let tmp3 = item10028;
      if (!set.has(item10028)) {
        let tmp4 = item10028;
        let removePartitionResult = arg1.removePartition(tmp3);
      }
      continue;
    }
    const iter = guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = syncEmojis;
      let tmp8 = syncEmojis(nextResult.id, nextResult.emojis, getPartitionKeys);
      continue;
    }
  },
  OVERLAY_INITIALIZE(emojis, clear) {
    closure_0 = clear;
    clear.clear();
    const entries = Object.entries(emojis.emojis);
    const item = entries.forEach((arg0) => {
      [tmp, tmp2] = arg0;
      partition.setPartition(tmp, closure_1_4(tmp, tmp2));
    });
  },
  CACHED_EMOJIS_LOADED(arg0, setPartition) {
    while (tmp !== undefined) {
      let tmp3 = callback;
      let tmp4 = callback(tmp2, 2);
      let first = tmp4[0];
      let tmp6 = fromServer;
      let setPartitionResult = setPartition.setPartition(first, fromServer(first, tmp4[1]));
      continue;
    }
  },
  GUILD_CREATE(guild, setPartition) {
    syncEmojis(guild.guild.id, guild.guild.emojis, setPartition);
  },
  GUILD_UPDATE(guild, setPartition) {
    setPartition.setPartition(guild.guild.id, fromServer(guild.guild.id, guild.guild.emojis));
  },
  GUILD_EMOJIS_UPDATE(guildId, setPartition) {
    setPartition.setPartition(guildId.guildId, fromServer(guildId.guildId, guildId.emojis));
  },
  GUILD_DELETE(guild, removePartition) {
    removePartition.removePartition(guild.guild.id);
  }
}, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
const result = require("set").fileFinishedImporting("modules/emojis/RawGuildEmojiStore.tsx");

export default rawGuildEmojiStore;