// discord_app/modules/user_settings/FrecencySettingsMigrations.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import applyDefault from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage4 from "../../../discord_common/js/packages/storage/Storage.tsx";
import ME from "../../Constants.tsx";
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx";
import b64ToProto from "UserSettingsUtils.tsx";
import MAX_FAVORITES from "UserSettingsConstants.tsx";

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
      const mapped = favorites.map((item, index) => {
        const FavoriteGIF = v1(state[3]).FavoriteGIF;
        let obj = FavoriteGIF.create();
        const format = item.format;
        if (constants.IMAGE === format) {
          let NONE = v1(state[3]).GIFType.IMAGE;
        } else if (tmp4.VIDEO === format) {
          NONE = v1(state[3]).GIFType.VIDEO;
        } else {
          const format2 = item.format;
          NONE = v1(state[3]).GIFType.NONE;
        }
        obj.format = NONE;
        ({ src: tmp3.src, width: tmp3.width, height: tmp3.height } = item);
        obj.order = state.favorites.length - index + v1;
        obj = { url: item.url, favorite: obj };
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
          let tmpResult = applyDefault;
          favoriteStickers.favoriteStickers.stickerIds = tmpResult.uniq(state.favorites).slice(0, closure_3);
          flag = true;
          const uniqResult = tmpResult.uniq(state.favorites);
        }
        tmpResult = applyDefault;
        if (tmpResult.size(state.usageHistory) > 0) {
          const StickerFrecency = create.StickerFrecency;
          favoriteStickers.stickerFrecency = StickerFrecency.create();
          favoriteStickers.stickerFrecency.stickers = b64ToProto.serializeUsageHistory(state.usageHistory, 100);
          flag = true;
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
          let tmpResult = applyDefault;
          favoriteEmojis.favoriteEmojis.emojis = tmpResult.uniq(state.favorites).slice(0, closure_3);
          flag = true;
          const uniqResult = tmpResult.uniq(state.favorites);
        }
        tmpResult = applyDefault;
        if (tmpResult.size(state.usageHistory) > 0) {
          const EmojiFrecency = create.EmojiFrecency;
          favoriteEmojis.emojiFrecency = EmojiFrecency.create();
          favoriteEmojis.emojiFrecency.emojis = b64ToProto.serializeUsageHistory(state.usageHistory, 100);
          flag = true;
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
        const item = values.sortBy("order").forEach((item, index) => {
          const sum = arr.length + 1 + index;
          item.order = sum;
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
          favorite.order = arr.length - num;
          num = num + 1;
          if (url in favoriteGifs.favoriteGifs.gifs) {
            favoriteGifs.favoriteGifs.gifs[arr2].order = tmp9.order;
          } else {
            let FavoriteGIF = arr(1341).FavoriteGIF;
            let sum = FavoriteGIF.toBinary(tmp9).length + arr2.length + 7;
            let tmp3 = sum;
            if (length + sum <= closure_4) {
              length = length + tmp3;
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
              let tmp30 = keys[tmp3];
              while (tmp30 !== undefined) {
                let gifs = favoriteGifs.favoriteGifs.gifs;
                delete tmp[tmp2];
                num3 = num3 + 1;
                if (10 <= num3) {
                  break;
                }
              }
            }
            let FavoriteGIFs3 = arr(1341).FavoriteGIFs;
            length3 = FavoriteGIFs3.toBinary(favoriteGifs.favoriteGifs).length;
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
        }
        return flag;
      }
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
          const FavoriteSoundboardSounds = require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx").FavoriteSoundboardSounds;
          arg0.favoriteSoundboardSounds = FavoriteSoundboardSounds.create();
          tmpResult = tmp(11);
          const keys = tmpResult.keys(state.favoriteSounds);
          let item = keys.forEach((item, index) => {
            item = new Set(state.favoriteSounds[item]).forEach((item, index) => {
              const favoriteSoundboardSounds = obj.favoriteSoundboardSounds;
              if (favoriteSoundboardSounds != null) {
                const soundIds = favoriteSoundboardSounds.soundIds;
                soundIds.push(item);
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
            const EmojiFrecency3 = create.EmojiFrecency;
            EmojiFrecency3.mergePartial(obj, emojiFrecency.emojiReactionFrecency);
          }
          emojiFrecency.emojiReactionFrecency = obj;
          flag = true;
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
                let isMatch = tmp9.format !== create.GIFType.IMAGE;
                if (isMatch) {
                  let obj = /\.(webp|avif|gif)(\?|$)/i;
                  isMatch = obj.test(tmp9.src);
                }
                if (isMatch) {
                  tmp9.format = create.GIFType.IMAGE;
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
const result = obj132.fileFinishedImporting("modules/user_settings/FrecencySettingsMigrations.tsx");

export default items;