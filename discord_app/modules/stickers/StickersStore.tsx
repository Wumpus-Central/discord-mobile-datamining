// === Module 5687: StickersStore ===

// Module 5687 (StickersStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 2078 */;
import TryLoad from "TryLoad" /* 2098 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildMembershipStore from "GuildMembershipStore" /* 2053 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildStickersStore from "GuildStickersStore" /* 5688 */;
import StickersPackStore from "StickersPackStore" /* 5689 */;
import size from "module_2" /* 2 */;

let Loaded, c2, c3;

function loadSavedGuildStickers() {
  return obj(...arguments);
}
let obj = function _loadSavedGuildStickers() {
  obj = _asyncToGenerator(async () => {
    let obj3;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let stickers;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_0 = tmp4;
            let c0;
            stickers = undefined;
            if (Loaded === Unloaded.Unloaded) {
              const obj2 = DatabaseDaosDefault;
              const databaseResult = obj2.database();
              c0 = databaseResult;
              if (null != databaseResult) {
                Loaded = tmp25.Loaded;
                c2 = 1;
                c3 = 1;
                const obj6 = {
                  value: obj3.tryLoadOrResetCacheGatewayAsync("StickerStore.loadSavedGuildStickers", async () => {
                                obj = stickers(closure_2_2[7]);
                                return obj.timeAsync("\u{1F4BE}", "loadSavedGuildStickers", async () => {
                                  obj = closure_2_1(closure_2_2[8]);
                                  return obj.getAsync(closure_1_0);
                                });
                              }),
                  done: false
                };
                obj3 = TryLoad;
                return obj6;
              }
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          stickers = value;
          if (null != stickers) {
            const obj8 = { type: "CACHED_STICKERS_LOADED", stickers };
            const obj7 = closure_129_1(closure_129_2[9]);
            obj7.dispatch(obj8);
          }
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  });
  return obj(...arguments);
};
obj = { Unloaded: 0, [0]: "Unloaded", Loaded: 1, [1]: "Loaded" };
let Unloaded = obj.Unloaded;
const Store = get_initializedDefault.Store;
class StickersStore extends Store {
  initialize() {
    this.waitFor(GuildMembershipStore, GuildStickersStore, GuildStore, StickersPackStore);
    const items = [GuildStickersStore, StickersPackStore];
    this.syncWith(items, () => true);
  }
  getStickerMetadataArrays() {
    loadSavedGuildStickers();
    const items = [GuildStickersStore.getStickerMetadataMap(), StickersPackStore.getStickerMetadataMap()];
    return items;
  }
  getStickerById(arg0) {
    loadSavedGuildStickers();
    let stickerById = GuildStickersStore.getStickerById(arg0);
    if (stickerById == null) {
      stickerById = StickersPackStore.getStickerById(arg0);
    }
    return stickerById;
  }
  getStickerPack(arg0) {
    return StickersPackStore.getStickerPack(arg0);
  }
  getPremiumPacks() {
    return StickersPackStore.getPremiumPacks();
  }
  isPremiumPack(arg0) {
    return StickersPackStore.isPremiumPack(arg0);
  }
  getRawStickersByGuild() {
    return GuildStickersStore.getAllGuildStickers();
  }
  getAllGuildStickers() {
    loadSavedGuildStickers();
    return GuildStickersStore.getAllGuildStickers();
  }
  getAllPackStickers() {
    return StickersPackStore.getAllPackStickers();
  }
  getStickersByGuildId(guild_id) {
    loadSavedGuildStickers();
    return GuildStickersStore.getStickersByGuildId(guild_id);
  }
}
const prototype = StickersStore.prototype;
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
StickersStore.displayName = "StickersStore";
let obj2 = {
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
const stickersStore = new StickersStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/stickers/StickersStore.tsx");

export default stickersStore;