// discord_app/modules/user_settings/FrecencySettingsMigrations.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage4 from "../../../discord_common/js/packages/storage/Storage.tsx";
import Constants from "../../Constants.tsx";
import frecency_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx";
import user_settings_UserSettingsUtils from "UserSettingsUtils.tsx";
import UserSettingsConstants from "UserSettingsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let format, importDefault, set;

let c3;
let closure_4;
function readFavoriteGIFs(arg0) {
  let state;
  let c0 = 1;
  importDefault = { IMAGE: "IMAGE", VIDEO: "VIDEO" };
  const PersistedStore = require("get initialized").PersistedStore;
  const items = [
    (favorites) => {
      let tmp2;
      if (null == favorites) {
        tmp2 = { favorites: [], timesFavorited: 0 };
        const obj2 = { favorites: [], timesFavorited: 0 };
      } else {
        const _Array = Array;
        tmp2 = favorites;
        if (Array.isArray(favorites)) {
          tmp2 = { favorites, timesFavorited: 0 };
          const obj = { favorites, timesFavorited: 0 };
        }
      }
      return tmp2;
    },
    (favorites) => {
      let tmp = favorites;
      if (!Array.isArray(favorites.favorites)) {
        tmp = { favorites: [], timesFavorited: 0 };
        const obj = { favorites: [], timesFavorited: 0 };
      }
      return tmp;
    },
  ];
  state = PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", items).state;
  if (null != state) {
    if (0 !== state.favorites.length) {
      const favorites = state.favorites;
      const mapped = favorites.map((format, index) => {
        let NONE;
        const FavoriteGIF = frecency_user_settings.FavoriteGIF;
        const obj2 = FavoriteGIF.create();
        format = format.format;
        if (constants.IMAGE === format) {
          NONE = frecency_user_settings.GIFType.IMAGE;
        } else if (tmp4.VIDEO === format) {
          NONE = frecency_user_settings.GIFType.VIDEO;
        } else {
          const format2 = format.format;
          NONE = frecency_user_settings.GIFType.NONE;
        }
        obj2.format = NONE;
        ({ src: tmp3.src, width: tmp3.width, height: tmp3.height } = format);
        obj2.order = state.favorites.length - index + c0;
        return { url: format.url, favorite: obj2 };
      });
    }
    return [];
  }
}
({ MAX_FAVORITES: c3, MAX_FAVORITE_GIFS_SIZE: closure_4 } = UserSettingsConstants);
const ID_REGEX = Constants.ID_REGEX;
const selectedChannelGuildFrecency = "selectedChannelGuildFrecency";
let obj = {
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
        favoriteGifs.favoriteGifs.gifs[item10019.url] = item10019.favorite;
        continue;
      }
      favoriteGifs.favoriteGifs.hideTooltip = arr.length > 2;
      return true;
    }
  },
  cleanup() {},
};
let items = [
  obj,
  {
    version: 3,
    run(favoriteStickers) {
      const PersistedStore = get_initializedDefault.PersistedStore;
      const items = [
        (arg0) => {
          let tmp = arg0;
          if (null == arg0) {
            tmp = { usageHistory: {}, favorites: [] };
            const obj = { usageHistory: {}, favorites: [] };
          } else {
            const _Object = Object;
          }
          return tmp;
        },
        (favorites) => {
          if (null != favorites) {
            let obj;
            const _Object = Object;
            if (0 !== Object.keys(favorites).length) {
              obj = favorites;
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
          favoriteStickers = favoriteStickers.favoriteStickers;
          const tmpResult = _modDef12;
          const uniqResult = tmpResult.uniq(state.favorites);
          favoriteStickers.stickerIds = uniqResult.slice(0, _false);
          flag = true;
        }
        const tmpResult2 = _modDef12;
        if (tmpResult2.size(state.usageHistory) > 0) {
          const StickerFrecency = frecency_user_settings.StickerFrecency;
          favoriteStickers.stickerFrecency = StickerFrecency.create();
          const stickerFrecency = favoriteStickers.stickerFrecency;
          const obj3 = user_settings_UserSettingsUtils;
          stickerFrecency.stickers = obj3.serializeUsageHistory(state.usageHistory, 100);
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
      const PersistedStore = get_initializedDefault.PersistedStore;
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
        let flag = false;
        const tmp3 = null != state.favorites && state.favorites.length > 0;
        if (tmp3) {
          const FavoriteEmojis = frecency_user_settings.FavoriteEmojis;
          favoriteEmojis.favoriteEmojis = FavoriteEmojis.create();
          favoriteEmojis = favoriteEmojis.favoriteEmojis;
          const tmpResult = _modDef12;
          const uniqResult = tmpResult.uniq(state.favorites);
          favoriteEmojis.emojis = uniqResult.slice(0, _false);
          flag = true;
        }
        const tmpResult2 = _modDef12;
        if (tmpResult2.size(state.usageHistory) > 0) {
          const EmojiFrecency = frecency_user_settings.EmojiFrecency;
          favoriteEmojis.emojiFrecency = EmojiFrecency.create();
          const emojiFrecency = favoriteEmojis.emojiFrecency;
          const obj3 = user_settings_UserSettingsUtils;
          emojiFrecency.emojis = obj3.serializeUsageHistory(state.usageHistory, 100);
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
        let tmp;
        const obj = _modDef12(favoriteGifs.favoriteGifs.gifs);
        const values = obj.values();
        const sortByResult = values.sortBy("order");
        const item = sortByResult.forEach((item, index) => {
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
          let tmp7 = favorite;
          favorite.order = arr.length - num;
          num = num + 1;
          if (url in favoriteGifs.favoriteGifs.gifs) {
            favoriteGifs.favoriteGifs.gifs[arr2].order = tmp7.order;
          } else {
            let FavoriteGIF = frecency_user_settings.FavoriteGIF;
            let sum = FavoriteGIF.toBinary(tmp7).length + arr2.length + 7;
            tmp = sum;
            if (length + sum <= React3) {
              length = length + tmp;
              favoriteGifs.favoriteGifs.gifs[arr2] = tmp7;
            }
          }
          continue;
        }
        const FavoriteGIFs2 = frecency_user_settings.FavoriteGIFs;
        const length2 = FavoriteGIFs2.toBinary(favoriteGifs.favoriteGifs).length;
        if (length2 > React3) {
          do {
            let num3 = 0;
            let keys = Object.keys();
            if (keys !== undefined) {
              let tmp28 = keys[tmp];
              while (tmp28 !== undefined) {
                delete favoriteGifs.favoriteGifs.gifs[tmp28];
                num3 = num3 + 1;
                if (10 <= num3) {
                  break;
                }
              }
            }
            let FavoriteGIFs3 = frecency_user_settings.FavoriteGIFs;
            length3 = FavoriteGIFs3.toBinary(favoriteGifs.favoriteGifs).length;
          } while (length3 > React3);
        }
        return true;
      }
    },
    cleanup() {},
  },
  {
    version: 7,
    run(applicationCommandFrecency) {
      const PersistedStore = get_initializedDefault.PersistedStore;
      const state = PersistedStore.migrateAndReadStoreState("ApplicationCommandFrecency", []).state;
      if (null == state) {
        return false;
      } else {
        let flag = false;
        const tmpResult = _modDef12;
        if (tmpResult.size(state.usageHistory) > 0) {
          const ApplicationCommandFrecency = frecency_user_settings.ApplicationCommandFrecency;
          applicationCommandFrecency.applicationCommandFrecency = ApplicationCommandFrecency.create();
          applicationCommandFrecency = applicationCommandFrecency.applicationCommandFrecency;
          const obj = user_settings_UserSettingsUtils;
          applicationCommandFrecency.applicationCommands = obj.serializeUsageHistory(state.usageHistory, 500);
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
      let closure_0 = arg0;
      const PersistedStore = get_initializedDefault.PersistedStore;
      const state = PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []).state;
      if (null == state) {
        return false;
      } else {
        let flag = false;
        const tmpResult = _modDef12;
        if (tmpResult.size(state.favoriteSounds) > 0) {
          const FavoriteSoundboardSounds = frecency_user_settings.FavoriteSoundboardSounds;
          arg0.favoriteSoundboardSounds = FavoriteSoundboardSounds.create();
          const tmpResult2 = SnowflakeUtilsDefault;
          const keys = tmpResult2.keys(state.favoriteSounds);
          let item = keys.forEach((item) => {
            set = new Set(state.favoriteSounds[item]);
            item = set.forEach((item) => {
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
      const value = Storage.get(selectedChannelGuildFrecency);
      if (null == value) {
        return false;
      } else {
        for (const key10010 in value) {
          if (ID_REGEX.test(key10010)) {
            continue;
          } else {
            delete tmp[key10010];
            continue;
          }
          continue;
        }
        const GuildAndChannelFrecency = frecency_user_settings.GuildAndChannelFrecency;
        guildAndChannelFrecency.guildAndChannelFrecency = GuildAndChannelFrecency.create();
        guildAndChannelFrecency = guildAndChannelFrecency.guildAndChannelFrecency;
        const obj = user_settings_UserSettingsUtils;
        guildAndChannelFrecency.guildAndChannels = obj.serializeUsageHistory(value, 100);
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
        const obj2 = _modDef12;
        if (obj2.size(emojis) > 0) {
          const EmojiFrecency = frecency_user_settings.EmojiFrecency;
          const obj = EmojiFrecency.create();
          const EmojiFrecency2 = frecency_user_settings.EmojiFrecency;
          EmojiFrecency2.mergePartial(obj, emojiFrecency.emojiFrecency);
          if (null != emojiFrecency.emojiReactionFrecency) {
            const EmojiFrecency3 = frecency_user_settings.EmojiFrecency;
            EmojiFrecency3.mergePartial(obj, emojiFrecency.emojiReactionFrecency);
          }
          emojiFrecency.emojiReactionFrecency = obj;
          flag = true;
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
                let isMatch = tmp9.format !== frecency_user_settings.GIFType.IMAGE;
                if (isMatch) {
                  let obj = /\.(webp|avif|gif)(\?|$)/i;
                  isMatch = obj.test(tmp9.src);
                }
                if (isMatch) {
                  tmp9.format = frecency_user_settings.GIFType.IMAGE;
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
  {
    version: 12,
    run(favoriteSoundboardSounds) {
      if (null == favoriteSoundboardSounds.favoriteSoundboardSounds) {
        return false;
      } else {
        favoriteSoundboardSounds = favoriteSoundboardSounds.favoriteSoundboardSounds;
        const soundIds = favoriteSoundboardSounds.soundIds;
        const orderedSoundIds = favoriteSoundboardSounds.orderedSoundIds;
        const obj = _modDef12;
        let tmp4 = 0 === obj.size(soundIds);
        if (!tmp4) {
          const tmp2Result = _modDef12;
          tmp4 = tmp2Result.size(orderedSoundIds) > 0;
        }
        let flag = !tmp4;
        if (flag) {
          const items = [];
          const favoriteSoundboardSounds2 = favoriteSoundboardSounds.favoriteSoundboardSounds;
          HermesBuiltin.arraySpread(items, soundIds, 0);
          favoriteSoundboardSounds2.orderedSoundIds = items;
          flag = true;
        }
        return flag;
      }
    },
    cleanup() {},
  },
];
const result = size.fileFinishedImporting("modules/user_settings/FrecencySettingsMigrations.tsx");

export default items;
