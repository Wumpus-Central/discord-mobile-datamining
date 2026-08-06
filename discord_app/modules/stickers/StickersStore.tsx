// discord_app/modules/stickers/StickersStore.tsx
import items from "items";
import allGuildIds from "allGuildIds";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import parseServerGuildSticker from "parseServerGuildSticker";
import parseServerPackSticker from "parseServerPackSticker";
import { Store } from "initialize";

const require = arg1;
function loadSavedGuildStickers() {
  const self = this;
  const apply = _loadSavedGuildStickers.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadSavedGuildStickers() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let callback = tmp2;
            let c0 = tmp5;
            c0 = undefined;
            callback = undefined;
            if (outer1_9 === outer1_8.Unloaded) {
              let obj1 = outer1_1(1936);
              const databaseResult = obj1.database();
              c0 = databaseResult;
              if (null != databaseResult) {
                outer1_9 = tmp28.Loaded;
                let obj2 = outer1_0(1955);
                dependencyMap = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj2.tryLoadOrResetCacheGatewayAsync("StickerStore.loadSavedGuildStickers", () => callback(table[7]).timeAsync("\u{1F4BE}", "loadSavedGuildStickers", () => outer1_1(outer1_2[8]).getAsync(closure_0)));
                return obj1;
              }
            }
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          callback = arg1;
          if (null != callback) {
            obj2 = { type: "CACHED_STICKERS_LOADED", stickers: null };
            obj2[1] = callback;
            callback(709).dispatch(obj2);
            const obj7 = callback(709);
          }
        }
        c3 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp15) {
        c3 = tmp;
        throw tmp15;
      }
    }
  });
  const _loadSavedGuildStickers = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let obj = { Unloaded: 0, [0]: "Unloaded", Loaded: 1, [1]: "Loaded" };
let Unloaded = obj.Unloaded;
class StickersStore extends Store {
}
const prototype = StickersStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(allGuildIds, parseServerGuildSticker, createGuildRecordFromRust, parseServerPackSticker);
  const items = [parseServerGuildSticker, parseServerPackSticker];
  this.syncWith(items, () => true);
};
Object.defineProperty(prototype, "isLoaded", {
  get: function isLoaded() {
    return Unloaded !== obj.Unloaded;
  },
  set: undefined
});
Object.defineProperty(prototype, "loadState", {
  get: function loadState() {
    return Unloaded;
  },
  set: undefined
});
prototype["getStickerMetadataArrays"] = function getStickerMetadataArrays() {
  loadSavedGuildStickers();
  const items = [store.getStickerMetadataMap(), store2.getStickerMetadataMap()];
  return items;
};
Object.defineProperty(prototype, "hasLoadedStickerPacks", {
  get: function hasLoadedStickerPacks() {
    return store2.hasLoadedStickerPacks;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingStickerPacks", {
  get: function isFetchingStickerPacks() {
    return store2.isFetchingStickerPacks;
  },
  set: undefined
});
prototype["getStickerById"] = function getStickerById(arg0) {
  loadSavedGuildStickers();
  let stickerById = store.getStickerById(arg0);
  if (stickerById == null) {
    stickerById = store2.getStickerById(arg0);
  }
  return stickerById;
};
prototype["getStickerPack"] = function getStickerPack(arg0) {
  return store2.getStickerPack(arg0);
};
prototype["getPremiumPacks"] = function getPremiumPacks() {
  return store2.getPremiumPacks();
};
prototype["isPremiumPack"] = function isPremiumPack(arg0) {
  return store2.isPremiumPack(arg0);
};
prototype["getRawStickersByGuild"] = function getRawStickersByGuild() {
  return store.getAllGuildStickers();
};
prototype["getAllGuildStickers"] = function getAllGuildStickers() {
  loadSavedGuildStickers();
  return store.getAllGuildStickers();
};
prototype["getAllPackStickers"] = function getAllPackStickers() {
  return store2.getAllPackStickers();
};
prototype["getStickersByGuildId"] = function getStickersByGuildId(closure_0) {
  loadSavedGuildStickers();
  return store.getStickersByGuildId(closure_0);
};
StickersStore.displayName = "StickersStore";
obj = {
  BACKGROUND_SYNC: function handleBackgroundSync() {
    const Unloaded = obj.Unloaded;
  },
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    if (0 === guilds.unavailableGuilds.length) {
      if (guilds.every((stickers) => "full_sync" === stickers.stickers.op)) {
        let Unloaded = obj.Loaded;
      }
    }
    Unloaded = obj.Unloaded;
  },
  LOGOUT: function handleLogout() {
    const Unloaded = obj.Unloaded;
  }
};
const stickersStore = new StickersStore(require("dispatcher"), obj);
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/stickers/StickersStore.tsx");

export default stickersStore;