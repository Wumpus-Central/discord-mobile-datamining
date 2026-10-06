// discord_app/modules/stickers/GuildStickersStore.tsx
import libdiscoreExperiments from "../libdiscore/libdiscoreExperiments.tsx";
import js_shim_PlainRecord from "../../../discord_common/js/packages/libdiscore/js_shim/js/PlainRecord.tsx";
import LibdiscoreStore2 from "../libdiscore/stores/LibdiscoreStore.tsx";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import StickersTypes from "StickersTypes.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import GuildStore from "../../stores/GuildStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let map, set;

function parseServerGuildSticker(item10023) {
  const obj = {
    id: item10023.id,
    tags: item10023.tags,
    type: item10023.type,
    name: item10023.name,
    description: item10023.description,
    format_type: item10023.format_type,
    guild_id: item10023.guild_id,
    available: item10023.available,
    version: item10023.version,
    user_id: item10023.user_id,
  };
  obj[TypeTag] = "GuildSticker";
  return obj;
}
function parseServerGuildStickers(stickers) {
  const obj = {};
  const iter = stickers[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    obj[nextResult.id] = parseServerGuildSticker(nextResult);
    continue;
  }
  return obj;
}
function deriveStickerMetadata(arg0, tags) {
  let trimmed;
  let trimmed1;
  const items = [];
  let obj = { type: items(5436).StickerMetadataTypes.STICKER_NAME, value: trimmed.toLocaleLowerCase() };
  const str2 = tags.name;
  trimmed = str2.trim();
  items.push(obj);
  if (null != tags.tags) {
    const obj2 = { type: items(5436).StickerMetadataTypes.TAG, value: trimmed1.toLocaleLowerCase() };
    trimmed1 = str.trim();
    items.push(obj2);
    const guild = GuildStore.getGuild(arg0);
    if (null != guild) {
      const str3 = guild.name;
      const trimmed2 = str3.trim();
      const toLocaleLowerCaseResult = trimmed2.toLocaleLowerCase();
      const tmp5 = null != toLocaleLowerCaseResult && "" !== toLocaleLowerCaseResult;
      if (tmp5) {
        const push = items.push;
        const obj3 = { type: items(5436).StickerMetadataTypes.GUILD_NAME, value: toLocaleLowerCaseResult };
        push(obj3);
      }
    }
    const obj5 = UnicodeEmojisDefault;
    const byName = obj5.getByName(str);
    if (null != byName) {
      const push2 = items.push;
      const obj4 = { type: items(5436).StickerMetadataTypes.CORRELATED_EMOJI, value: byName.surrogates };
      push2(obj4);
      byName.forEachDiversity((surrogates) => {
        const obj = { type: StickersTypes.StickerMetadataTypes.CORRELATED_EMOJI, value: surrogates.surrogates };
        return items.push(obj);
      });
    }
  }
  return items;
}
function syncStickers(id, stickers, setPartition) {
  if ("full_sync" === stickers.op) {
    setPartition.setPartition(id, parseServerGuildStickers(stickers.items));
  } else {
    const nullablePartition = setPartition.getNullablePartition(id);
    if (null == nullablePartition) {
      setPartition.setPartition(id, parseServerGuildStickers(stickers.writes));
    } else if (stickers.writes.length > 0) {
      const obj = {};
      const merged = Object.assign(nullablePartition);
      const deletes = stickers.deletes;
      for (const item10016 of deletes) {
        delete obj[item10016];
        continue;
      }
      const writes = stickers.writes;
      for (const item10023 of writes) {
        obj[item10023.id] = parseServerGuildSticker(item10023);
        continue;
      }
      setPartition.setPartition(id, obj);
    }
  }
}
const TypeTag = js_shim_PlainRecord.TypeTag;
const LibdiscoreStore = LibdiscoreStore2.LibdiscoreStore;
class GuildStickersStore extends LibdiscoreStore {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.database = applyArgumentsResult.addKKVDatabase("guildStickers");
    const database = applyArgumentsResult.database;
    applyArgumentsResult.stickerByIdIndex = database.addSecondaryKVIndex("id");
    const database2 = applyArgumentsResult.database;
    applyArgumentsResult.getAllGuildStickers = database2.memoized((obj) => {
      map = new Map();
      for (const key10009 in obj) {
        let _Object = Object;
        let result = map.set(key10009, Object.values(obj[key10009].root));
        continue;
      }
      return map;
    });
    const database3 = applyArgumentsResult.database;
    applyArgumentsResult.getStickerMetadataMap = database3.memoized((obj) => {
      map = new Map();
      for (const key10012 in obj) {
        let _Object = Object;
        let entries = Object.entries(obj[key10012].root);
        for (const item10014 of entries) {
          let tmp3 = _slicedToArray(item10014, 2);
          let result = map.set(tmp3[0], deriveStickerMetadata(key10012, tmp3[1]));
          continue;
        }
      }
      return map;
    });
    const database4 = applyArgumentsResult.database;
    applyArgumentsResult.getStickersByGuildId = database4.memoizedPartition((arg0, arg1) => Object.values(arg1));
    return applyArgumentsResult;
  }
  getStickerById(arg0) {
    const stickerByIdIndex = this.stickerByIdIndex;
    const value = stickerByIdIndex.get(arg0);
    return value;
  }
  stateWrapper() {
    return this.database;
  }
}
const prototype = GuildStickersStore.prototype;
GuildStickersStore.displayName = "GuildStickersStore";
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
      let tmp8 = syncStickers(nextResult.id, nextResult.stickers, getPartitionKeys);
      continue;
    }
  },
  GUILD_CREATE(guild, setPartition) {
    if (null == guild.guild.joined_at) {
      return false;
    } else {
      syncStickers(guild.guild.id, guild.guild.stickers, setPartition);
    }
  },
  GUILD_DELETE(guild, removePartition) {
    removePartition.removePartition(guild.guild.id);
  },
  GUILD_STICKERS_CREATE_SUCCESS(sticker, setRecord) {
    sticker = sticker.sticker;
    const obj = {
      id: sticker.id,
      tags: sticker.tags,
      type: sticker.type,
      name: sticker.name,
      description: sticker.description,
      format_type: sticker.format_type,
      guild_id: sticker.guild_id,
      available: sticker.available,
      version: sticker.version,
      user_id: sticker.user_id,
    };
    obj[TypeTag] = "GuildSticker";
    setRecord.setRecord(sticker.guildId, sticker.sticker.id, obj);
  },
  GUILD_STICKER_FETCH_SUCCESS(sticker, setRecord) {
    sticker = sticker.sticker;
    const obj = {
      id: sticker.id,
      tags: sticker.tags,
      type: sticker.type,
      name: sticker.name,
      description: sticker.description,
      format_type: sticker.format_type,
      guild_id: sticker.guild_id,
      available: sticker.available,
      version: sticker.version,
      user_id: sticker.user_id,
    };
    obj[TypeTag] = "GuildSticker";
    setRecord.setRecord(sticker.sticker.guild_id, sticker.sticker.id, obj);
  },
  GUILD_STICKERS_UPDATE(guildId, getPartition) {
    const partition = getPartition.getPartition(guildId.guildId);
    const tmp2 = parseServerGuildStickers(guildId.stickers);
    if (null != partition) {
      for (const key10012 in tmp2) {
        let tmp10 = tmp2[key10012];
        let tmp11 = partition[key10012];
        let tmp4 = null != tmp11 && null == tmp10.user_id && null != tmp11.user_id;
        if (!tmp4) {
          continue;
        } else {
          let obj = { user_id: tmp11.user_id };
          let merged = Object.assign(tmp10);
          tmp2[key10012] = obj;
          continue;
        }
        continue;
      }
    }
    getPartition.setPartition(guildId.guildId, tmp2);
  },
  CACHED_STICKERS_LOADED(arg0, setPartition) {
    const tmp = arg0.stickers[Symbol.iterator]();
    while (tmp !== undefined) {
      let tmp4 = _slicedToArray(tmp2, 2);
      let setPartitionResult = setPartition.setPartition(tmp4[0], parseServerGuildStickers(tmp4[1]));
      continue;
    }
  },
  GUILD_STICKERS_FETCH_SUCCESS(guildId, setPartition) {
    setPartition.setPartition(guildId.guildId, parseServerGuildStickers(guildId.stickers));
  },
};
const LibdiscoreBatchStoreRefactorExperiment = libdiscoreExperiments.LibdiscoreBatchStoreRefactorExperiment;
const guildStickersStore = new GuildStickersStore(
  obj,
  LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode(),
);
let result = size.fileFinishedImporting("modules/stickers/GuildStickersStore.tsx");

export default guildStickersStore;
