// === Module 14077: readFavoriteGIFs ===

// Module 14077 (readFavoriteGIFs)
import set from "set" /* 2 */;
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import Storage4 from "Storage" /* 595 */;
import ME from "ME" /* 676 */;
import create from "create" /* 1341 */;
import b64ToProto from "b64ToProto" /* 1342 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 685 */;

function readFavoriteGIFs(arg0) {
  c0 = 1;
  importDefault = { IMAGE: "IMAGE", VIDEO: "VIDEO" };
  const PersistedStore = importDefault(state[2]).PersistedStore;
  const items = [
    (arg0) => {
      if (null == arg0) {
        let obj = { favorites: null, timesFavorited: 0 };
        obj[0] = [];
        let tmp2 = obj;
      } else {
        const _Array = Array;
        tmp2 = arg0;
        if (Array.isArray(arg0)) {
          obj = { favorites: null, timesFavorited: 0 };
          obj[0] = arg0;
          tmp2 = obj;
        }
      }
      return tmp2;
    },
    (favorites) => {
      let tmp = favorites;
      if (!Array.isArray(favorites.favorites)) {
        const obj = { favorites: null, timesFavorited: 0 };
        obj[0] = [];
        tmp = obj;
      }
      return tmp;
    }
  ];
  state = PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", items).state;
  if (null != state) {
    if (0 !== state.favorites.length) {
      const favorites = state.favorites;
      const mapped = favorites.map((format) => {
        const FavoriteGIF = v1(state[3]).FavoriteGIF;
        let obj = FavoriteGIF.create();
        format = format.format;
        if (constants.IMAGE === format) {
          let NONE = tmp(tmp2[3]).GIFType.IMAGE;
        } else if (tmp4.VIDEO === format) {
          NONE = tmp(tmp2[3]).GIFType.VIDEO;
        } else {
          const format2 = format.format;
          NONE = tmp(tmp2[3]).GIFType.NONE;
        }
        obj.format = NONE;
        ({ src: tmp3.src, width: tmp3.width, height: tmp3.height } = format);
        obj.order = state.favorites.length - arg1 + v1;
        obj = { url: format.url, favorite: obj };
        return obj;
      });
    }
    return [];
  }
}
({ MAX_FAVORITES: c3, MAX_FAVORITE_GIFS_SIZE: c4 } = MAX_FAVORITES);
const ID_REGEX = ME.ID_REGEX;
const selectedChannelGuildFrecency = "selectedChannelGuildFrecency";
let items = [
  {
    version: 2,
    run(favoriteGifs) {
      const arr = readFavoriteGIFs(1);
      if (0 === arr.length) {
        return false;
      } else {
        if (null == favoriteGifs.favoriteGifs) {
          const FavoriteGIFs = create.FavoriteGIFs;
          favoriteGifs.favoriteGifs = FavoriteGIFs.create();
        }
        favoriteGifs.favoriteGifs.gifs = {};
        for (const item10019 of arr) {
          arg0.favoriteGifs.gifs[item10019.url] = item10019.favorite;
          continue;
        }
        favoriteGifs.favoriteGifs.hideTooltip = arr.length > 2;
        return true;
      }
    },
    cleanup() {

    }
  },
  {
    version: 3,
    run(favoriteStickers) {
      const PersistedStore = initializeDefault.PersistedStore;
      const items = [
        (arg0) => {
          let tmp = arg0;
          if (null == arg0) {
            const obj = { usageHistory: null, favorites: null };
            obj[0] = {};
            obj[1] = [];
            tmp = obj;
          } else {
            const _Object = Object;
          }
          return tmp;
        },
        (favorites) => {
          if (null != favorites) {
            const _Object = Object;
            if (0 !== Object.keys(favorites).length) {
              let obj = favorites;
              if (null == favorites.favorites) {
                favorites.favorites = [];
                obj = favorites;
              }
            }
            return obj;
          }
          obj = { usageHistory: {}, favorites: [] };
        }
      ];
      const state = PersistedStore.migrateAndReadStoreState("StickersPersistedStore", items).state;
      if (null == state) {
        return false;
      } else {
        let flag = false;
        if (state.favorites.length > 0) {
          const FavoriteStickers = create.FavoriteStickers;
          favoriteStickers.favoriteStickers = FavoriteStickers.create();
          let tmpResult = tmp(12);
          favoriteStickers.favoriteStickers.stickerIds = tmpResult.uniq(state.favorites).slice(0, closure_3);
          flag = true;
          const uniqResult = tmpResult.uniq(state.favorites);
        }
        tmpResult = tmp(12);
        if (tmpResult.size(state.usageHistory) > 0) {
          const StickerFrecency = create.StickerFrecency;
          favoriteStickers.stickerFrecency = StickerFrecency.create();
          favoriteStickers.stickerFrecency.stickers = b64ToProto.serializeUsageHistory(state.usageHistory, 100);
          flag = true;
          const obj3 = b64ToProto;
        }
        return flag;
      }
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("StickersPersistedStore");
    }
  },
  {
    version: 4,
    run(favoriteEmojis) {
      const PersistedStore = initializeDefault.PersistedStore;
      const items = [
        () => {
          const Storage = callback(table[6]).Storage;
          const usageHistory = Storage.get("EmojiUsageHistory") || {};
          return { usageHistory };
        }
      ];
      const state = PersistedStore.migrateAndReadStoreState("EmojiStore", items).state;
      if (null == state) {
        return false;
      } else {
        let tmp3 = null != state.favorites;
        if (tmp3) {
          tmp3 = state.favorites.length > 0;
        }
        let flag = false;
        if (tmp3) {
          const FavoriteEmojis = create.FavoriteEmojis;
          favoriteEmojis.favoriteEmojis = FavoriteEmojis.create();
          let tmpResult = tmp(12);
          favoriteEmojis.favoriteEmojis.emojis = tmpResult.uniq(state.favorites).slice(0, closure_3);
          flag = true;
          const uniqResult = tmpResult.uniq(state.favorites);
        }
        tmpResult = tmp(12);
        if (tmpResult.size(state.usageHistory) > 0) {
          const EmojiFrecency = create.EmojiFrecency;
          favoriteEmojis.emojiFrecency = EmojiFrecency.create();
          favoriteEmojis.emojiFrecency.emojis = b64ToProto.serializeUsageHistory(state.usageHistory, 100);
          flag = true;
          const obj3 = b64ToProto;
        }
        return flag;
      }
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("EmojiStore");
      const Storage2 = Storage4.Storage;
      Storage2.remove("EmojiUsageHistory");
      const Storage3 = Storage4.Storage;
      Storage3.remove("EmojiDiversitySurrogate");
    }
  },
  {
    version: 6,
    run(favoriteGifs) {
      let length3;
      if (null == favoriteGifs.favoriteGifs) {
        const FavoriteGIFs = arr(1341).FavoriteGIFs;
        favoriteGifs.favoriteGifs = FavoriteGIFs.create();
      }
      if (null == favoriteGifs.favoriteGifs.gifs) {
        favoriteGifs.favoriteGifs.gifs = {};
      }
      arr = readFavoriteGIFs(1);
      if (0 === arr.length) {
        return false;
      } else {
        const values = applyDefault(favoriteGifs.favoriteGifs.gifs).values();
        const obj = applyDefault(favoriteGifs.favoriteGifs.gifs);
        const item = values.sortBy("order").forEach((arg0, arg1) => {
          const sum = arr.length + 1 + arg1;
          arg0.order = sum;
          return sum;
        });
        const FavoriteGIFs4 = arr(1341).FavoriteGIFs;
        let length = FavoriteGIFs4.toBinary(favoriteGifs.favoriteGifs).length;
        let num = 0;
        const iter = arr[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let url = nextResult.url;
          let arr2 = url;
          let favorite = nextResult.favorite;
          let tmp9 = favorite;
          let tmp10 = num;
          favorite.order = arr.length - num;
          num = num + 1;
          if (url in favoriteGifs.favoriteGifs.gifs) {
            let tmp22 = url;
            let tmp23 = favorite;
            favoriteGifs.favoriteGifs.gifs[arr2].order = tmp9.order;
          } else {
            let tmp11 = arr;
            let tmp12 = dependencyMap;
            let FavoriteGIF = arr(1341).FavoriteGIF;
            let tmp13 = favorite;
            let tmp14 = url;
            let sum = FavoriteGIF.toBinary(tmp9).length + arr2.length + 7;
            let tmp3 = sum;
            let tmp16 = length;
            let tmp17 = closure_4;
            if (length + sum <= closure_4) {
              let tmp18 = length;
              let tmp19 = tmp3;
              length = length + tmp3;
              let tmp20 = url;
              let tmp21 = favorite;
              favoriteGifs.favoriteGifs.gifs[arr2] = tmp9;
            }
          }
          continue;
        }
        const FavoriteGIFs2 = arr(1341).FavoriteGIFs;
        const length2 = FavoriteGIFs2.toBinary(favoriteGifs.favoriteGifs).length;
        if (length2 > closure_4) {
          do {
            let num3 = 0;
            let keys = Object.keys();
            if (keys !== undefined) {
              let tmp29 = num3;
              let tmp30 = keys[tmp3];
              while (tmp30 !== undefined) {
                let tmp40 = tmp30;
                let gifs = favoriteGifs.favoriteGifs.gifs;
                delete tmp[tmp2];
                num3 = num3 + 1;
                if (10 <= num3) {
                  break;
                }
              }
            }
            let tmp31 = arr;
            let tmp32 = dependencyMap;
            let FavoriteGIFs3 = arr(1341).FavoriteGIFs;
            length3 = FavoriteGIFs3.toBinary(favoriteGifs.favoriteGifs).length;
            let tmp33 = length3;
            let tmp34 = closure_4;
          } while (length3 > closure_4);
        }
        return true;
      }
    },
    cleanup() {

    }
  },
  {
    version: 7,
    run(applicationCommandFrecency) {
      const PersistedStore = initializeDefault.PersistedStore;
      const state = PersistedStore.migrateAndReadStoreState("ApplicationCommandFrecency", []).state;
      if (null == state) {
        return false;
      } else {
        let flag = false;
        if (tmpResult.size(state.usageHistory) > 0) {
          const ApplicationCommandFrecency = create.ApplicationCommandFrecency;
          applicationCommandFrecency.applicationCommandFrecency = ApplicationCommandFrecency.create();
          applicationCommandFrecency.applicationCommandFrecency.applicationCommands = b64ToProto.serializeUsageHistory(state.usageHistory, 500);
          flag = true;
          const obj = b64ToProto;
        }
        return flag;
      }
      const tmp = importDefault;
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("ApplicationCommandFrecency");
    }
  },
  {
    version: 8,
    run(arg0) {
      const _require = arg0;
      const PersistedStore = state(589).PersistedStore;
      state = PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []).state;
      if (null == state) {
        return false;
      } else {
        let tmpResult = tmp(12);
        let flag = false;
        if (tmpResult.size(state.favoriteSounds) > 0) {
          const FavoriteSoundboardSounds = _require(1341).FavoriteSoundboardSounds;
          arg0.favoriteSoundboardSounds = FavoriteSoundboardSounds.create();
          tmpResult = tmp(11);
          const keys = tmpResult.keys(state.favoriteSounds);
          let item = keys.forEach((arg0) => {
            const item = new Set(state.favoriteSounds[arg0]).forEach((arg0) => {
              const favoriteSoundboardSounds = obj.favoriteSoundboardSounds;
              if (favoriteSoundboardSounds != null) {
                const soundIds = favoriteSoundboardSounds.soundIds;
                soundIds.push(arg0);
              }
            });
          });
          flag = true;
        }
        return flag;
      }
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("SoundboardFavoriteStore");
    }
  },
  {
    version: 9,
    run(guildAndChannelFrecency) {
      const Storage = Storage4.Storage;
      const value = Storage.get(selectedChannelGuildFrecency);
      if (null == value) {
        return false;
      } else {
        for (const key10010 in value) {
          let tmp8 = key10010;
          let tmp9 = ID_REGEX;
          if (ID_REGEX.test(key10010)) {
            continue;
          } else {
            delete tmp[tmp2];
            continue;
          }
          continue;
        }
        const GuildAndChannelFrecency = create.GuildAndChannelFrecency;
        guildAndChannelFrecency.guildAndChannelFrecency = GuildAndChannelFrecency.create();
        guildAndChannelFrecency.guildAndChannelFrecency.guildAndChannels = b64ToProto.serializeUsageHistory(value, 100);
        return true;
      }
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove(selectedChannelGuildFrecency);
    }
  },
  {
    version: 10,
    run(emojiFrecency) {
      if (null == emojiFrecency.emojiFrecency) {
        return false;
      } else {
        let emojis = emojiFrecency.emojiFrecency.emojis;
        if (emojis == null) {
          emojis = {};
        }
        let flag = false;
        if (obj2.size(emojis) > 0) {
          const EmojiFrecency = create.EmojiFrecency;
          const obj = EmojiFrecency.create();
          const EmojiFrecency2 = create.EmojiFrecency;
          EmojiFrecency2.mergePartial(obj, emojiFrecency.emojiFrecency);
          if (null != emojiFrecency.emojiReactionFrecency) {
            const EmojiFrecency3 = tmp3(1341).EmojiFrecency;
            EmojiFrecency3.mergePartial(obj, emojiFrecency.emojiReactionFrecency);
          }
          emojiFrecency.emojiReactionFrecency = obj;
          flag = true;
          tmp3 = require;
        }
        return flag;
      }
    },
    cleanup() {

    }
  },
  {
    version: 11,
    run(favoriteGifs) {
      if (null != favoriteGifs.favoriteGifs) {
        if (null != favoriteGifs.favoriteGifs.gifs) {
          let flag3 = false;
          let flag2 = false;
          const keys = Object.keys();
          if (keys !== undefined) {
            let flag = flag3;
            flag2 = flag3;
            while (keys[tmp] !== undefined) {
              let tmp8 = tmp2;
              let tmp9 = favoriteGifs.favoriteGifs.gifs[tmp2];
              flag3 = flag;
              if (null == tmp9) {
                continue;
              } else {
                let src = tmp9.src;
                if (src.startsWith("//")) {
                  let _HermesInternal = HermesInternal;
                  tmp9.src = "https:" + tmp9.src;
                  flag = true;
                }
                let tmp3 = require;
                let tmp4 = dependencyMap;
                let isMatch = tmp9.format !== create.GIFType.IMAGE;
                if (isMatch) {
                  let obj = /\.(webp|avif|gif)(\?|$)/i;
                  isMatch = obj.test(tmp9.src);
                }
                if (isMatch) {
                  tmp9.format = tmp3(1341).GIFType.IMAGE;
                  flag = true;
                }
                flag3 = flag;
                continue;
              }
              continue;
            }
          }
          return flag2;
        }
      }
      return false;
    },
    cleanup() {

    }
  }
];
const result = set.fileFinishedImporting("modules/user_settings/FrecencySettingsMigrations.tsx");

export default items;