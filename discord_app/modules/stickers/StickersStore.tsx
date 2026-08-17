// discord_app/modules/stickers/StickersStore.tsx
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "allGuildIds" /* 1393 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "parseServerGuildSticker" /* 6770 */;
import closure_7 from "parseServerPackSticker" /* 6771 */;

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
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
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
            c0 = tmp5;
            c0 = undefined;
            callback = undefined;
            if (Loaded === closure_1_8.Unloaded) {
              obj1 = closure_1_1(1955);
              const databaseResult = obj1.database();
              c0 = databaseResult;
              if (null != databaseResult) {
                Loaded = tmp28.Loaded;
                let obj2 = closure_1_0(1974);
                dependencyMap = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj2.tryLoadOrResetCacheGatewayAsync("StickerStore.loadSavedGuildStickers", () => callback(table[7]).timeAsync("\u{1F4BE}", "loadSavedGuildStickers", () => closure_1_1(closure_1_2[8]).getAsync(closure_0)));
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
  closure_11 = tmp;
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
const Store = initializeDefault.Store;
class StickersStore extends Store {
}
const prototype = StickersStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_4, closure_6, closure_5, closure_7);
  const items = [closure_6, closure_7];
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
    Unloaded = obj.Unloaded;
  },
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    if (0 === guilds.unavailableGuilds.length) {
      if (guilds.every((stickers) => "full_sync" === stickers.stickers.op)) {
        Unloaded = obj.Loaded;
      }
    }
    Unloaded = obj.Unloaded;
  },
  LOGOUT: function handleLogout() {
    Unloaded = obj.Unloaded;
  }
};
const stickersStore = new StickersStore(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting("modules/stickers/StickersStore.tsx");

export default stickersStore;