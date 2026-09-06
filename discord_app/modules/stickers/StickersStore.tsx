// === Module 5502: StickersStore ===

// Module 5502 (StickersStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 1986 */;
import TryLoad from "TryLoad" /* 2006 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildMembershipStore from "GuildMembershipStore" /* 1959 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildStickersStore from "GuildStickersStore" /* 5503 */;
import StickersPackStore from "StickersPackStore" /* 5504 */;

require = fn;
function loadSavedGuildStickers() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _loadSavedGuildStickers() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_0 = tmp5;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          if (Loaded === Unloaded.Unloaded) {
            let obj1 = DatabaseDaosDefault;
            const databaseResult = obj1.database();
            closure_128_0 = databaseResult;
            if (null != databaseResult) {
              Loaded = tmp27.Loaded;
              let obj2 = TryLoad;
              c2 = 1;
              c3 = 1;
              obj1 = { value: obj2.tryLoadOrResetCacheGatewayAsync("StickerStore.loadSavedGuildStickers", async () => closure_1(10).timeAsync("\u{1F4BE}", "loadSavedGuildStickers", async () => closure_2_1(5505).getAsync(closure_1_0))), done: false };
              return obj1;
            }
          }
          c3 = 3;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_1 = value;
        if (null != closure_128_1) {
          obj2 = { type: "CACHED_STICKERS_LOADED", stickers: closure_128_1 };
          closure_129_1(closure_129_2[9]).dispatch(obj2);
          const obj7 = closure_129_1(closure_129_2[9]);
        }
      }
      c3 = 3;
      obj = { value, done: true };
      return obj;
    } catch (tmp15) {
      c3 = tmp;
      throw tmp15;
    }
  }
};
let obj = { Unloaded: 0, [0]: "Unloaded", Loaded: 1, [1]: "Loaded" };
let Unloaded = obj.Unloaded;
const Store = initializeDefault.Store;
class StickersStore extends Store {
}
const prototype = StickersStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildMembershipStore, GuildStickersStore, GuildStore, StickersPackStore);
  const items = [GuildStickersStore, StickersPackStore];
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
  const items = [GuildStickersStore.getStickerMetadataMap(), StickersPackStore.getStickerMetadataMap()];
  return items;
};
Object.defineProperty(prototype, "hasLoadedStickerPacks", {
  get: function hasLoadedStickerPacks() {
    return StickersPackStore.hasLoadedStickerPacks;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingStickerPacks", {
  get: function isFetchingStickerPacks() {
    return StickersPackStore.isFetchingStickerPacks;
  },
  set: undefined
});
prototype["getStickerById"] = function getStickerById(arg0) {
  loadSavedGuildStickers();
  let stickerById = GuildStickersStore.getStickerById(arg0);
  if (stickerById == null) {
    stickerById = StickersPackStore.getStickerById(arg0);
  }
  return stickerById;
};
prototype["getStickerPack"] = function getStickerPack(arg0) {
  return StickersPackStore.getStickerPack(arg0);
};
prototype["getPremiumPacks"] = function getPremiumPacks() {
  return StickersPackStore.getPremiumPacks();
};
prototype["isPremiumPack"] = function isPremiumPack(arg0) {
  return StickersPackStore.isPremiumPack(arg0);
};
prototype["getRawStickersByGuild"] = function getRawStickersByGuild() {
  return GuildStickersStore.getAllGuildStickers();
};
prototype["getAllGuildStickers"] = function getAllGuildStickers() {
  loadSavedGuildStickers();
  return GuildStickersStore.getAllGuildStickers();
};
prototype["getAllPackStickers"] = function getAllPackStickers() {
  return StickersPackStore.getAllPackStickers();
};
prototype["getStickersByGuildId"] = function getStickersByGuildId(guild_id) {
  loadSavedGuildStickers();
  return GuildStickersStore.getStickersByGuildId(guild_id);
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
const stickersStore = new StickersStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/StickersStore.tsx");

export default stickersStore;