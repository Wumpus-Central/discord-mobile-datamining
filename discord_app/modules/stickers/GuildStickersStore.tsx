// discord_app/modules/stickers/GuildStickersStore.tsx
import parseRawEmojiObjectDefault from "../emojis/UnicodeEmojis.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import { TypeTag } from "../../../discord_common/js/packages/libdiscore/js_shim/js/PlainRecord.tsx";
import { LibdiscoreStore } from "../libdiscore/stores/LibdiscoreStore.tsx";
import closure_5 from "../../stores/GuildStore.tsx";
import { LibdiscoreBatchStoreRefactorExperiment } from "../libdiscore/libdiscoreExperiments.tsx";

const require = arg1;
function parseServerGuildSticker(item10023) {
  const obj = { id: item10023.id, tags: item10023.tags, type: item10023.type, name: item10023.name, description: item10023.description, format_type: item10023.format_type, guild_id: item10023.guild_id, available: item10023.available, version: item10023.version, user_id: item10023.user_id };
  obj[TypeTag] = "GuildSticker";
  return obj;
}
function parseServerGuildStickers(stickers) {
  const obj = {};
  const iter = stickers[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = parseServerGuildSticker;
    obj[nextResult.id] = parseServerGuildSticker(nextResult);
    continue;
  }
  return obj;
}
function deriveStickerMetadata(arg0, tags) {
  const items = [];
  let obj = { type: items(5093).StickerMetadataTypes.STICKER_NAME, value: null };
  const trimmed = tags.name.trim();
  obj[1] = trimmed.toLocaleLowerCase();
  items.push(obj);
  if (null != tags.tags) {
    obj = { type: null, value: null };
    obj[0] = tmp(5093).StickerMetadataTypes.TAG;
    const trimmed1 = str.trim();
    obj[1] = trimmed1.toLocaleLowerCase();
    items.push(obj);
    guild = guild.getGuild(arg0);
    if (null != guild) {
      const trimmed2 = guild.name.trim();
      const toLocaleLowerCaseResult = trimmed2.toLocaleLowerCase();
      let tmp5 = null != toLocaleLowerCaseResult;
      if (tmp5) {
        tmp5 = "" !== toLocaleLowerCaseResult;
      }
      if (tmp5) {
        obj = { type: null, value: null };
        obj[0] = tmp(5093).StickerMetadataTypes.GUILD_NAME;
        obj[1] = toLocaleLowerCaseResult;
        items.push(obj);
      }
      const str3 = guild.name;
    }
    const byName = parseRawEmojiObjectDefault.getByName(str);
    if (null != byName) {
      obj1 = { type: null, value: null };
      obj1[0] = tmp(5093).StickerMetadataTypes.CORRELATED_EMOJI;
      obj1[1] = byName.surrogates;
      items.push(obj1);
      byName.forEachDiversity((surrogates) => items.push({ type: items(closure_1_2[4]).StickerMetadataTypes.CORRELATED_EMOJI, value: surrogates.surrogates }));
    }
    const obj5 = parseRawEmojiObjectDefault;
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
        delete tmp[tmp2];
        continue;
      }
      const writes = stickers.writes;
      for (const item10023 of writes) {
        let tmp10 = parseServerGuildSticker;
        obj[item10023.id] = parseServerGuildSticker(item10023);
        continue;
      }
      setPartition.setPartition(id, obj);
    }
  }
}
class GuildStickersStore extends LibdiscoreStore {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.database = applyArgumentsResult.addKKVDatabase("guildStickers");
    database = applyArgumentsResult.database;
    applyArgumentsResult.stickerByIdIndex = database.addSecondaryKVIndex("id");
    database2 = applyArgumentsResult.database;
    applyArgumentsResult.getAllGuildStickers = database2.memoized((obj) => {
      const map = new Map();
      for (const key10009 in arg0) {
        let tmp = key10009;
        let _Object = Object;
        let result = map.set(key10009, Object.values(arg0[key10009].root));
        continue;
      }
      return map;
    });
    database3 = applyArgumentsResult.database;
    applyArgumentsResult.getStickerMetadataMap = database3.memoized((obj) => {
      const map = new Map();
      for (const key10012 in arg0) {
        let tmp6 = key10012;
        let _Object = Object;
        let entries = Object.entries(arg0[key10012].root);
        let tmp8 = entries;
        let tmp = entries;
        for (const item10014 of entries) {
          let tmp2 = callback;
          let tmp3 = callback(item10014, 2);
          let tmp4 = callback2;
          let result = map.set(tmp3[0], callback2(key10012, tmp3[1]));
          continue;
        }
      }
      return map;
    });
    database4 = applyArgumentsResult.database;
    applyArgumentsResult.getStickersByGuildId = database4.memoizedPartition((arg0, arg1) => Object.values(arg1));
    return applyArgumentsResult;
  }
}
const prototype = GuildStickersStore.prototype;
prototype["getStickerById"] = function getStickerById(arg0) {
  const stickerByIdIndex = this.stickerByIdIndex;
  const value = stickerByIdIndex.get(arg0);
  return value;
};
prototype["stateWrapper"] = function stateWrapper() {
  return this.database;
};
GuildStickersStore.displayName = "GuildStickersStore";
const guildStickersStore = new GuildStickersStore({
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
      let tmp7 = syncStickers;
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
    const obj = { id: sticker.id, tags: sticker.tags, type: sticker.type, name: sticker.name, description: sticker.description, format_type: sticker.format_type, guild_id: sticker.guild_id, available: sticker.available, version: sticker.version, user_id: sticker.user_id };
    obj[TypeTag] = "GuildSticker";
    setRecord.setRecord(sticker.guildId, sticker.sticker.id, obj);
  },
  GUILD_STICKER_FETCH_SUCCESS(sticker, setRecord) {
    sticker = sticker.sticker;
    const obj = { id: sticker.id, tags: sticker.tags, type: sticker.type, name: sticker.name, description: sticker.description, format_type: sticker.format_type, guild_id: sticker.guild_id, available: sticker.available, version: sticker.version, user_id: sticker.user_id };
    obj[TypeTag] = "GuildSticker";
    setRecord.setRecord(sticker.sticker.guild_id, sticker.sticker.id, obj);
  },
  GUILD_STICKERS_UPDATE(guildId, getPartition) {
    const partition = getPartition.getPartition(guildId.guildId);
    const tmp2 = parseServerGuildStickers(guildId.stickers);
    if (null != partition) {
      for (const key10012 in tmp2) {
        let tmp9 = key10012;
        let tmp10 = tmp2[key10012];
        let tmp11 = partition[key10012];
        let tmp4 = null != tmp11;
        if (tmp4) {
          tmp4 = null == tmp10.user_id;
        }
        if (tmp4) {
          tmp4 = null != tmp11.user_id;
        }
        if (!tmp4) {
          continue;
        } else {
          let obj = {};
          let tmp5 = obj;
          let tmp6 = tmp10;
          let merged = Object.assign(tmp10);
          obj.user_id = tmp11.user_id;
          tmp2[key10012] = obj;
          continue;
        }
        continue;
      }
    }
    getPartition.setPartition(guildId.guildId, tmp2);
  },
  CACHED_STICKERS_LOADED(arg0, setPartition) {
    while (tmp !== undefined) {
      let tmp3 = callback;
      let tmp4 = callback(tmp2, 2);
      let tmp5 = parseServerGuildStickers;
      let setPartitionResult = setPartition.setPartition(tmp4[0], parseServerGuildStickers(tmp4[1]));
      continue;
    }
  },
  GUILD_STICKERS_FETCH_SUCCESS(guildId, setPartition) {
    setPartition.setPartition(guildId.guildId, parseServerGuildStickers(guildId.stickers));
  }
}, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
let result = require("set").fileFinishedImporting("modules/stickers/GuildStickersStore.tsx");

export default guildStickersStore;