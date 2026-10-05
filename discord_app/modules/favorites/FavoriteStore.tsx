// discord_app/modules/favorites/FavoriteStore.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import FavoritesConstants from "FavoritesConstants.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let value2;

let metroImportDefault;
let metroRequire;
function initializeFromUserSettings() {
  let channelType;
  let nickname;
  let parentId;
  let value;
  const favorites = UserSettingsProtoStore.settings.favorites;
  flag = undefined;
  if (favorites != null) {
    flag = favorites.muted;
  }
  if (flag == null) {
    flag = false;
  }
  let favoriteChannels;
  if (favorites != null) {
    favoriteChannels = favorites.favoriteChannels;
  }
  obj = {};
  if (null != favoriteChannels) {
    let num4 = 0;
    let num5 = 0;
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp24 = favoriteChannels[tmp7];
        let sum = num4;
        if (tmp24.type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
          sum = num4 + 1;
        }
        let obj5 = { id: tmp7, nickname, type: null, channelType: value, order: tmp24.position, parentId };
        nickname = null;
        if ("" !== tmp24.nickname) {
          nickname = tmp24.nickname;
        }
        ({ type: obj2.type, channelType } = tmp24);
        value = undefined;
        if (channelType != null) {
          value = channelType.value;
        }
        parentId = null;
        if (tmp24.parentId !== closure_5) {
          parentId = tmp24.parentId;
        }
        num5 = num5 + 1;
        obj[tmp7] = obj5;
        num4 = sum;
        continue;
      }
    }
  }
  value2 = undefined;
  if (favorites != null) {
    if (favorites.guildVisible != null) {
      value2 = iter.value;
    }
  }
  let tmp14 = value2;
  if (value2 == null) {
    const obj3 = _mod12;
    tmp14 = !obj3.isEmpty(obj);
  }
  flag2 = undefined;
  if (favorites != null) {
    flag2 = favorites.autoAddJoinedThreads;
  }
  if (flag2 == null) {
    flag2 = false;
  }
  let flag3 = flag !== flag || closure_12 !== tmp14 || value2 !== value2 || flag2 !== flag2;
  if (!flag3) {
    const obj4 = _mod12;
    flag3 = !obj4.isEqual(obj, obj);
  }
  if (flag3) {
    closure_12 = tmp14;
    flag3 = true;
  }
  return flag3;
}
const createChannelRecord = ChannelRecord.createChannelRecord;
let closure_5 = FavoritesConstants.FAVORITES_UNCATEGORIZED_PARENT_ID;
({ ChannelTypes: metroRequire, FAVORITES: metroImportDefault } = Constants);
let obj = {};
const num2 = 0;
const num = 0;
let flag = false;
let closure_12 = false;
let flag2 = false;
const Store = get_initializedDefault.Store;
class FavoriteStore extends Store {
  initialize() {
    this.waitFor(UserSettingsProtoStore);
    initializeFromUserSettings();
    const items = [UserSettingsProtoStore];
    this.syncWith(items, initializeFromUserSettings);
  }
  getFavoriteChannels() {
    return obj;
  }
  isFavorite(arg0) {
    return null != arg0 && null != obj[arg0];
  }
  isChannelOrParentFavorited(channel) {
    const self = this;
    let isFavoriteResult = this.isFavorite(channel.id);
    if (!isFavoriteResult) {
      isFavoriteResult = channel.isThread() && self.isFavorite(channel.parent_id);
      channel.isThread() && self.isFavorite(channel.parent_id);
    }
    return isFavoriteResult;
  }
  getFavorite(categoryId) {
    if (null != categoryId) {
      return obj[categoryId];
    }
  }
  getCategoryRecord(categoryId) {
    let nickname;
    let tmp = null;
    if (categoryId in obj) {
      tmp = null;
      if (obj[categoryId].type === preloaded_user_settings.FavoriteChannelType.CATEGORY) {
        obj = {
          id: null,
          name: nickname,
          type: metroRequire.GUILD_CATEGORY,
          position: obj[categoryId].order,
          guild_id: metroImportDefault,
        };
        ({ id: obj.id, nickname } = obj[categoryId]);
        if (nickname == null) {
          nickname = "";
        }
        tmp = createChannelRecord(obj);
      }
    }
    return tmp;
  }
  getNickname(categoryId) {
    const favorite = this.getFavorite(categoryId);
    let nickname;
    if (favorite != null) {
      nickname = favorite.nickname;
    }
    return nickname;
  }
  getFavoritesCount() {
    return num2;
  }
  getFavoritesCountAgainstLimit() {
    return num;
  }
  hasStoredFavorites() {
    obj = _mod12;
    return !obj.isEmpty(this.getFavoriteChannels());
  }
}
const prototype = FavoriteStore.prototype;
Object.defineProperty(prototype, "favoriteGuildMuted", {
  get: function favoriteGuildMuted() {
    return flag;
  },
  set: undefined,
});
Object.defineProperty(prototype, "favoriteGuildEnabled", {
  get: function favoriteGuildEnabled() {
    return closure_12;
  },
  set: undefined,
});
Object.defineProperty(prototype, "favoriteGuildVisibleSetting", {
  get: function favoriteGuildVisibleSetting() {
    return value2;
  },
  set: undefined,
});
Object.defineProperty(prototype, "autoAddJoinedThreads", {
  get: function autoAddJoinedThreads() {
    return flag2 && closure_12;
  },
  set: undefined,
});
FavoriteStore.displayName = "FavoriteStore";
const favoriteStore = new FavoriteStore(DispatcherDefault, {});
const result = size.fileFinishedImporting("modules/favorites/FavoriteStore.tsx");

export default favoriteStore;
