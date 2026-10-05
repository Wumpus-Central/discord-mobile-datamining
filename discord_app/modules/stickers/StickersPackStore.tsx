// discord_app/modules/stickers/StickersPackStore.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import js_shim_PlainRecord from "../../../discord_common/js/packages/libdiscore/js_shim/js/PlainRecord.tsx";
import LibdiscoreStore2 from "../libdiscore/stores/LibdiscoreStore.tsx";
import StickersTypes from "StickersTypes.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../_runtime/metro/00002__.js";

let map;

function parsePackStickers(stickers) {
  const obj = {};
  const iter = stickers[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    obj[nextResult.id] = parseServerPackSticker(nextResult);
    continue;
  }
  return obj;
}
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
  let trimmed;
  const items = [];
  const obj = { type: StickersTypes.StickerMetadataTypes.STICKER_NAME, value: trimmed.toLocaleLowerCase() };
  const str = name.name;
  trimmed = str.trim();
  items.push(obj);
  if (null != name2) {
    const push = items.push;
    const obj2 = { type: StickersTypes.StickerMetadataTypes.PACK_NAME, value: name2.name };
    push(obj2);
  }
  return items;
}
function ingestStickerPack(item10017, packStickersDatabase, packsDatabase, premiumPacksDatabase, arg4) {
  const result = packsDatabase.set(item10017.id, item10017);
  const result1 = premiumPacksDatabase.set(item10017.id, item10017);
  packStickersDatabase.setPartition(item10017.id, parsePackStickers(item10017.stickers));
}
const TypeTag = js_shim_PlainRecord.TypeTag;
const LibdiscoreStore = LibdiscoreStore2.LibdiscoreStore;
let c4 = false;
let closure_5 = null;
const HOUR = DurationsDefault.Millis.HOUR;
class StickersPackStore extends LibdiscoreStore {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.packsDatabase = applyArgumentsResult.addKVDatabase("stickerPacks");
    applyArgumentsResult.packStickersDatabase = applyArgumentsResult.addKKVDatabase("packStickers");
    const packStickersDatabase = applyArgumentsResult.packStickersDatabase;
    applyArgumentsResult.packStickerByIdIndex = packStickersDatabase.addSecondaryKVIndex("id");
    applyArgumentsResult.premiumPacksDatabase = applyArgumentsResult.addKVDatabase("premiumPacks");
    const packStickersDatabase2 = applyArgumentsResult.packStickersDatabase;
    applyArgumentsResult.getAllPackStickers = packStickersDatabase2.memoized((obj) => {
      map = new Map();
      for (const key10009 in obj) {
        let _Object = Object;
        let result = map.set(key10009, Object.values(obj[key10009].root));
        continue;
      }
      return map;
    });
    const packStickersDatabase3 = applyArgumentsResult.packStickersDatabase;
    applyArgumentsResult.getStickerMetadataMap = packStickersDatabase3.memoized((obj) => {
      let tmp4;
      let tmp5;
      map = new Map();
      for (const key10012 in obj) {
        let _Object = Object;
        let entries = Object.entries(obj[key10012].root);
        for (const item10014 of entries) {
          let tmp3 = _slicedToArray(item10014, 2);
          let packsDatabase = require.packsDatabase;
          [tmp4, tmp5] = tmp3;
          let result = map.set(tmp4, deriveStickerMetadata(tmp5, packsDatabase.get(key10012)));
          continue;
        }
      }
      return map;
    });
    const premiumPacksDatabase = applyArgumentsResult.premiumPacksDatabase;
    applyArgumentsResult.getPremiumPacks = premiumPacksDatabase.memoized((arg0) => Object.values(arg0));
    return applyArgumentsResult;
  }
  stateWrapper() {
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
  }
  getStickerById(arg0) {
    const packStickerByIdIndex = this.packStickerByIdIndex;
    return packStickerByIdIndex.get(arg0);
  }
  isPremiumPack(arg0) {
    const premiumPacksDatabase = this.premiumPacksDatabase;
    return null != premiumPacksDatabase.get(arg0);
  }
  getStickerPack(arg0) {
    const packsDatabase = this.packsDatabase;
    return packsDatabase.get(arg0);
  }
}
const prototype = StickersPackStore.prototype;
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
StickersPackStore.displayName = "StickersPackStore";
let obj = {
  LOGOUT(arg0, clearAllDBs) {
    clearAllDBs.clearAllDBs();
  },
  STICKER_PACK_FETCH_SUCCESS(pack, arg1) {
    let packStickersDatabase;
    let packsDatabase;
    let premiumPacksDatabase;
    pack = pack.pack;
    ({ packStickersDatabase, packsDatabase, premiumPacksDatabase } = arg1);
    const result = packsDatabase.set(pack.id, pack);
    packStickersDatabase.setPartition(pack.id, parsePackStickers(pack.stickers));
  },
  STICKER_PACKS_FETCH_START(arg0, markDirty) {
    c4 = true;
    markDirty.markDirty();
  },
  STICKER_PACKS_FETCH_SUCCESS(packs, markDirty) {
    let packStickersDatabase;
    let packsDatabase;
    let premiumPacksDatabase;
    packs = packs.packs;
    ({ packStickersDatabase, packsDatabase, premiumPacksDatabase } = markDirty);
    c4 = false;
    markDirty.markDirty();
    closure_5 = performance.now();
    for (const item10017 of packs) {
      let flag = true;
      let tmp7 = ingestStickerPack(item10017, packStickersDatabase, packsDatabase, premiumPacksDatabase, true);
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
};
const stickersPackStore = new StickersPackStore(obj);
let result = size.fileFinishedImporting("modules/stickers/StickersPackStore.tsx");

export default stickersPackStore;
