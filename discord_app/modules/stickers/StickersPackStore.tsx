// discord_app/modules/stickers/StickersPackStore.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import StickersTypes from "StickersTypes.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";

require = fn;
function parseServerPackSticker(id) {
  const obj = {
    id: id.id,
    tags: id.tags,
    type: id.type,
    name: id.name,
    description: id.description,
    format_type: id.format_type,
    pack_id: id.pack_id,
  };
  obj[TypeTag] = "PackSticker";
  return obj;
}
function deriveStickerMetadata(name, name2) {
  const items = [];
  let obj = { type: StickersTypes.StickerMetadataTypes.STICKER_NAME, value: null };
  const trimmed = name.name.trim();
  obj.value = trimmed.toLocaleLowerCase();
  items.push(obj);
  if (null != name2) {
    obj = { type: StickersTypes.StickerMetadataTypes.PACK_NAME, value: name2.name };
    items.push(obj);
  }
  return items;
}
function ingestStickerPack(item10017, packStickersDatabase, packsDatabase, premiumPacksDatabase, arg4) {
  const result = packsDatabase.set(item10017.id, item10017);
  const result1 = premiumPacksDatabase.set(item10017.id, item10017);
  packStickersDatabase.setPartition(
    item10017.id,
    (function parsePackStickers(stickers) {
      const obj = {};
      const iter = stickers[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        obj[nextResult.id] = parseServerPackSticker(nextResult);
        continue;
      }
      return obj;
    })(item10017.stickers),
  );
}
const TypeTag = fn(1973).TypeTag;
const LibdiscoreStore = fn(1980).LibdiscoreStore;
let c4 = false;
let closure_5 = null;
const HOUR = DurationsDefault.Millis.HOUR;
class StickersPackStore extends LibdiscoreStore {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.packsDatabase = applyArgumentsResult.addKVDatabase("stickerPacks");
    applyArgumentsResult.packStickersDatabase = applyArgumentsResult.addKKVDatabase("packStickers");
    packStickersDatabase = applyArgumentsResult.packStickersDatabase;
    applyArgumentsResult.packStickerByIdIndex = packStickersDatabase.addSecondaryKVIndex("id");
    applyArgumentsResult.premiumPacksDatabase = applyArgumentsResult.addKVDatabase("premiumPacks");
    packStickersDatabase2 = applyArgumentsResult.packStickersDatabase;
    applyArgumentsResult.getAllPackStickers = packStickersDatabase2.memoized((obj) => {
      const map = new Map();
      for (const key10009 in arg0) {
        let _Object = Object;
        let result = map.set(key10009, Object.values(arg0[key10009].root));
        continue;
      }
      return map;
    });
    packStickersDatabase3 = applyArgumentsResult.packStickersDatabase;
    applyArgumentsResult.getStickerMetadataMap = packStickersDatabase3.memoized((obj) => {
      const map = new Map();
      for (const key10012 in arg0) {
        let _Object = Object;
        let entries = Object.entries(arg0[key10012].root);
        for (const item10014 of entries) {
          let tmp3 = _slicedToArray(item10014, 2);
          let packsDatabase = applyArgumentsResult.packsDatabase;
          [tmp4, tmp5] = tmp3;
          let result = map.set(tmp4, deriveStickerMetadata(tmp5, packsDatabase.get(key10012)));
          continue;
        }
      }
      return map;
    });
    premiumPacksDatabase = applyArgumentsResult.premiumPacksDatabase;
    applyArgumentsResult.getPremiumPacks = premiumPacksDatabase.memoized((arg0) => Object.values(arg0));
    return applyArgumentsResult;
  }
}
const prototype = StickersPackStore.prototype;
prototype["stateWrapper"] = function stateWrapper() {
  const self = this;
  return {
    packsDatabase: this.packsDatabase,
    packStickersDatabase: this.packStickersDatabase,
    premiumPacksDatabase: this.premiumPacksDatabase,
    markDirty() {
      return self.markDirty();
    },
    clearAllDBs() {
      return self.clearAllDatabases();
    },
  };
};
Object.defineProperty(prototype, "isFetchingStickerPacks", {
  get: function isFetchingStickerPacks() {
    return c4;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasLoadedStickerPacks", {
  get: function hasLoadedStickerPacks() {
    let tmp = null != closure_5;
    if (tmp) {
      const _performance = performance;
      const sum = closure_5 + HOUR;
      tmp = sum > performance.now();
    }
    return tmp;
  },
  set: undefined,
});
prototype["getStickerById"] = function getStickerById(arg0) {
  const packStickerByIdIndex = this.packStickerByIdIndex;
  return packStickerByIdIndex.get(arg0);
};
prototype["isPremiumPack"] = function isPremiumPack(arg0) {
  const premiumPacksDatabase = this.premiumPacksDatabase;
  return null != premiumPacksDatabase.get(arg0);
};
prototype["getStickerPack"] = function getStickerPack(arg0) {
  const packsDatabase = this.packsDatabase;
  return packsDatabase.get(arg0);
};
StickersPackStore.displayName = "StickersPackStore";
const stickersPackStore = new StickersPackStore({
  LOGOUT(arg0, clearAllDBs) {
    clearAllDBs.clearAllDBs();
  },
  STICKER_PACK_FETCH_SUCCESS(pack, arg1) {
    pack = pack.pack;
    ({ packStickersDatabase, packsDatabase, premiumPacksDatabase } = arg1);
    const result = packsDatabase.set(pack.id, pack);
    packStickersDatabase.setPartition(
      pack.id,
      (function parsePackStickers(stickers) {
        const obj = {};
        const iter = stickers[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          obj[nextResult.id] = parseServerPackSticker(nextResult);
          continue;
        }
        return obj;
      })(pack.stickers),
    );
  },
  STICKER_PACKS_FETCH_START(arg0, markDirty) {
    c4 = true;
    markDirty.markDirty();
  },
  STICKER_PACKS_FETCH_SUCCESS(arg0, markDirty) {
    ({ packStickersDatabase, packsDatabase, premiumPacksDatabase } = markDirty);
    c4 = false;
    markDirty.markDirty();
    closure_5 = performance.now();
    for (const item10017 of tmp) {
      let flag = true;
      let tmp8 = ingestStickerPack(item10017, packStickersDatabase, packsDatabase, premiumPacksDatabase, true);
      continue;
    }
  },
  PACK_STICKER_FETCH_SUCCESS(sticker, packStickersDatabase) {
    sticker = sticker.sticker;
    packStickersDatabase = packStickersDatabase.packStickersDatabase;
    const obj = {
      id: sticker.id,
      tags: sticker.tags,
      type: sticker.type,
      name: sticker.name,
      description: sticker.description,
      format_type: sticker.format_type,
      pack_id: sticker.pack_id,
    };
    obj[TypeTag] = "PackSticker";
    packStickersDatabase.setRecord(sticker.pack_id, sticker.id, obj);
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/StickersPackStore.tsx");

export default stickersPackStore;
