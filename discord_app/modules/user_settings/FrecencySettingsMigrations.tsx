// discord_app/modules/user_settings/FrecencySettingsMigrations.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage4 from "../../../discord_common/js/packages/storage/Storage.tsx";
import Constants from "../../Constants.tsx";
import frecency_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx";
import user_settings_UserSettingsUtils from "UserSettingsUtils.tsx";
import UserSettingsConstants from "UserSettingsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function readFavoriteGIFs(arg0) {
  c0 = 1;
  importDefault = { IMAGE: "IMAGE", VIDEO: "VIDEO" };
  const PersistedStore = require("initialize").PersistedStore;
  const items = [
    (favorites) => {
      if (null == favorites) {
        let obj = { favorites: [], timesFavorited: 0 };
        let tmp2 = obj;
      } else {
        const _Array = Array;
        tmp2 = favorites;
        if (Array.isArray(favorites)) {
          obj = { favorites, timesFavorited: 0 };
          tmp2 = obj;
        }
      }
      return tmp2;
    },
    (favorites) => {
      let tmp = favorites;
      if (!Array.isArray(favorites.favorites)) {
        const obj = { favorites: [], timesFavorited: 0 };
        tmp = obj;
      }
      return tmp;
    },
  ];
  state = PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", items).state;
  if (null != state) {
    if (0 !== state.favorites.length) {
      const favorites = state.favorites;
      const mapped = favorites.map((format, index) => {
        const FavoriteGIF = frecency_user_settings.FavoriteGIF;
        let obj = FavoriteGIF.create();
        format = format.format;
        if (constants.IMAGE === format) {
          let NONE = tmp(1222).GIFType.IMAGE;
        } else if (tmp4.VIDEO === format) {
          NONE = tmp(1222).GIFType.VIDEO;
        } else {
          const format2 = format.format;
          NONE = tmp(1222).GIFType.NONE;
        }
        obj.format = NONE;
        ({ src: tmp3.src, width: tmp3.width, height: tmp3.height } = format);
        obj.order = state.favorites.length - index + c0;
        obj = { url: format.url, favorite: obj };
        return obj;
      });
    }
    return [];
  }
}
({ MAX_FAVORITES: c3, MAX_FAVORITE_GIFS_SIZE: closure_4 } = UserSettingsConstants);
const ID_REGEX = Constants.ID_REGEX;
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
          const FavoriteGIFs = frecency_user_settings.FavoriteGIFs;
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
    cleanup() {},
  },
  {
    version: 3,
    run(favoriteStickers) {
      const PersistedStore = initializeDefault.PersistedStore;
      const items = [
        (arg0) => {
          let tmp = arg0;
          if (null == arg0) {
            const obj = { usageHistory: {}, favorites: [] };
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
        },
      ];
      const state = PersistedStore.migrateAndReadStoreState("StickersPersistedStore", items).state;
      if (null == state) {
        return false;
      } else {
        let flag = false;
        if (state.favorites.length > 0) {
          const FavoriteStickers = frecency_user_settings.FavoriteStickers;
          favoriteStickers.favoriteStickers = FavoriteStickers.create();
          let tmpResult = tmp(12);
          favoriteStickers.favoriteStickers.stickerIds = tmpResult.uniq(state.favorites).slice(0, React3);
          flag = true;
          const uniqResult = tmpResult.uniq(state.favorites);
        }
        tmpResult = tmp(12);
        if (tmpResult.size(state.usageHistory) > 0) {
          const StickerFrecency = frecency_user_settings.StickerFrecency;
          favoriteStickers.stickerFrecency = StickerFrecency.create();
          favoriteStickers.stickerFrecency.stickers = user_settings_UserSettingsUtils.serializeUsageHistory(
            state.usageHistory,
            100,
          );
          flag = true;
        }
        return flag;
      }
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("StickersPersistedStore");
    },
  },
  {
    version: 4,
    run(favoriteEmojis) {
      const PersistedStore = initializeDefault.PersistedStore;
      const items = [
        () => {
          const Storage = Storage4.Storage;
          const usageHistory = Storage.get("EmojiUsageHistory") || {};
          return { usageHistory };
        },
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
          const FavoriteEmojis = frecency_user_settings.FavoriteEmojis;
          favoriteEmojis.favoriteEmojis = FavoriteEmojis.create();
          let tmpResult = tmp(12);
          favoriteEmojis.favoriteEmojis.emojis = tmpResult.uniq(state.favorites).slice(0, React3);
          flag = true;
          const uniqResult = tmpResult.uniq(state.favorites);
        }
        tmpResult = tmp(12);
        if (tmpResult.size(state.usageHistory) > 0) {
          const EmojiFrecency = frecency_user_settings.EmojiFrecency;
          favoriteEmojis.emojiFrecency = EmojiFrecency.create();
          favoriteEmojis.emojiFrecency.emojis = user_settings_UserSettingsUtils.serializeUsageHistory(
            state.usageHistory,
            100,
          );
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
    },
  },
  {
    version: 6,
    run(favoriteGifs) {
      let length3;
      if (null == favoriteGifs.favoriteGifs) {
        const FavoriteGIFs = frecency_user_settings.FavoriteGIFs;
        favoriteGifs.favoriteGifs = FavoriteGIFs.create();
      }
      if (null == favoriteGifs.favoriteGifs.gifs) {
        favoriteGifs.favoriteGifs.gifs = {};
      }
      const arr = readFavoriteGIFs(1);
      if (0 === arr.length) {
        return false;
      } else {
        const values = _modDef12(favoriteGifs.favoriteGifs.gifs).values();
        const obj = _modDef12(favoriteGifs.favoriteGifs.gifs);
        const item = values.sortBy("order").forEach((item, index) => {
          const sum = arr.length + 1 + index;
          item.order = sum;
          return sum;
        });
        const FavoriteGIFs4 = frecency_user_settings.FavoriteGIFs;
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
            let FavoriteGIF = frecency_user_settings.FavoriteGIF;
            let sum = FavoriteGIF.toBinary(tmp9).length + arr2.length + 7;
            let tmp3 = sum;
            if (length + sum <= React4) {
              length = length + tmp3;
              favoriteGifs.favoriteGifs.gifs[arr2] = tmp9;
            }
          }
          continue;
        }
        const FavoriteGIFs2 = frecency_user_settings.FavoriteGIFs;
        const length2 = FavoriteGIFs2.toBinary(favoriteGifs.favoriteGifs).length;
        if (length2 > React4) {
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
            let FavoriteGIFs3 = frecency_user_settings.FavoriteGIFs;
            length3 = FavoriteGIFs3.toBinary(favoriteGifs.favoriteGifs).length;
          } while (length3 > React4);
        }
        return true;
      }
    },
    cleanup() {},
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
          const ApplicationCommandFrecency = frecency_user_settings.ApplicationCommandFrecency;
          applicationCommandFrecency.applicationCommandFrecency = ApplicationCommandFrecency.create();
          applicationCommandFrecency.applicationCommandFrecency.applicationCommands =
            user_settings_UserSettingsUtils.serializeUsageHistory(state.usageHistory, 500);
          flag = true;
        }
        return flag;
      }
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove("ApplicationCommandFrecency");
    },
  },
  {
    version: 8,
    run(arg0) {
      closure_0 = arg0;
      const PersistedStore = initializeDefault.PersistedStore;
      const state = PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []).state;
      if (null == state) {
        return false;
      } else {
        let tmpResult = tmp(12);
        let flag = false;
        if (tmpResult.size(state.favoriteSounds) > 0) {
          const FavoriteSoundboardSounds = frecency_user_settings.FavoriteSoundboardSounds;
          arg0.favoriteSoundboardSounds = FavoriteSoundboardSounds.create();
          tmpResult = tmp(11);
          const keys = tmpResult.keys(state.favoriteSounds);
          let item = keys.forEach((item) => {
            item = new Set(state.favoriteSounds[item]).forEach((item) => {
              const favoriteSoundboardSounds = closure_1_0.favoriteSoundboardSounds;
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
    },
  },
  {
    version: 9,
    run(guildAndChannelFrecency) {
      const Storage = Storage4.Storage;
      value = Storage.get(selectedChannelGuildFrecency);
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
        const GuildAndChannelFrecency = frecency_user_settings.GuildAndChannelFrecency;
        guildAndChannelFrecency.guildAndChannelFrecency = GuildAndChannelFrecency.create();
        guildAndChannelFrecency.guildAndChannelFrecency.guildAndChannels =
          user_settings_UserSettingsUtils.serializeUsageHistory(value, 100);
        return true;
      }
    },
    cleanup() {
      const Storage = Storage4.Storage;
      Storage.remove(selectedChannelGuildFrecency);
    },
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
          const EmojiFrecency = frecency_user_settings.EmojiFrecency;
          const obj = EmojiFrecency.create();
          const EmojiFrecency2 = frecency_user_settings.EmojiFrecency;
          EmojiFrecency2.mergePartial(obj, emojiFrecency.emojiFrecency);
          if (null != emojiFrecency.emojiReactionFrecency) {
            const EmojiFrecency3 = tmp3(1222).EmojiFrecency;
            EmojiFrecency3.mergePartial(obj, emojiFrecency.emojiReactionFrecency);
          }
          emojiFrecency.emojiReactionFrecency = obj;
          flag = true;
          tmp3 = require;
        }
        return flag;
      }
    },
    cleanup() {},
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
                let tmp3 = require;
                let isMatch = tmp9.format !== frecency_user_settings.GIFType.IMAGE;
                if (isMatch) {
                  let obj = /\.(webp|avif|gif)(\?|$)/i;
                  isMatch = obj.test(tmp9.src);
                }
                if (isMatch) {
                  tmp9.format = tmp3(1222).GIFType.IMAGE;
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
    cleanup() {},
  },
];
const result = size.fileFinishedImporting("modules/user_settings/FrecencySettingsMigrations.tsx");

export default items;
