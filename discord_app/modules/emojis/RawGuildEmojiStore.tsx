// === Module 5647: RawGuildEmojiStore ===

// Module 5647 (RawGuildEmojiStore)
import libdiscoreExperiments from "libdiscoreExperiments" /* 559 */;
import js_shim_PlainRecord from "js_shim/PlainRecord" /* 2068 */;
import LibdiscoreStore2 from "LibdiscoreStore" /* 2075 */;
import EmojiTypes from "EmojiTypes" /* 4532 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let set;

function fromServer(guildId, arg1) {
  const obj = {};
  const iter = arg1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj3 = { guildId, type: EmojiTypes.EmojiTypes.GUILD };
    obj3[TypeTag] = "RawGuildEmoji";
    ({ id: obj2.id, animated: obj2.animated, name: obj2.name, require_colons: obj2.require_colons, available: obj2.available, roles: obj2.roles, managed: obj2.managed, version: obj2.version } = nextResult);
    let id = nextResult.id;
    obj[id] = obj3;
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
        delete obj[item10016];
        continue;
      }
      const writes = emojis.writes;
      const tmp7 = writes[Symbol.iterator]();
      while (tmp7 !== undefined) {
        let _Object = Object;
        let items = [tmp10];
        let merged1 = Object.assign(obj, fromServer(id, items));
        continue;
      }
      setPartition.setPartition(id, obj);
    }
  }
}
const TypeTag = js_shim_PlainRecord.TypeTag;
const LibdiscoreStore = LibdiscoreStore2.LibdiscoreStore;
class RawGuildEmojiStore extends LibdiscoreStore {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.database = applyArgumentsResult.addKKVDatabase("guild_emojis");
    return applyArgumentsResult;
  }
  stateWrapper() {
    return this.database;
  }
  getGuildEmojis(guildId) {
    const database = this.database;
    return database.getNullablePartition(guildId);
  }
}
const prototype = RawGuildEmojiStore.prototype;
RawGuildEmojiStore.displayName = "RawGuildEmojiStore";
let obj = {
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
    let guilds;
    let unavailableGuilds;
    ({ guilds, unavailableGuilds } = arg0);
    set = new Set(guilds.map((id) => id.id));
    for (const item10017 of unavailableGuilds) {
      let addResult = set.add(item10017);
      continue;
    }
    const partitionKeys = getPartitionKeys.getPartitionKeys();
    for (const item10028 of partitionKeys) {
      if (!set.has(item10028)) {
        let removePartitionResult = getPartitionKeys.removePartition(item10028);
      }
      continue;
    }
    const iter = guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp8 = syncEmojis(nextResult.id, nextResult.emojis, getPartitionKeys);
      continue;
    }
  },
  OVERLAY_INITIALIZE(emojis, clear) {
    clear.clear();
    const entries = Object.entries(emojis.emojis);
    const item = entries.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      clear.setPartition(tmp, fromServer(tmp, tmp2));
    });
  },
  CACHED_EMOJIS_LOADED(arg0, setPartition) {
    const tmp = arg0.emojis[Symbol.iterator]();
    while (tmp !== undefined) {
      let tmp4 = _slicedToArray(tmp2, 2);
      let first = tmp4[0];
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
};
const LibdiscoreBatchStoreRefactorExperiment = libdiscoreExperiments.LibdiscoreBatchStoreRefactorExperiment;
const rawGuildEmojiStore = new RawGuildEmojiStore(obj, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
const result = size.fileFinishedImporting("modules/emojis/RawGuildEmojiStore.tsx");

export default rawGuildEmojiStore;