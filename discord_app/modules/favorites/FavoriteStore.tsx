// discord_app/modules/favorites/FavoriteStore.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";

require = fn;
function initializeFromUserSettings() {
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
        obj = { id: tmp7, nickname: null, type: null, channelType: null, order: null, parentId: null };
        let nickname = null;
        if ("" !== tmp24.nickname) {
          nickname = tmp24.nickname;
        }
        obj.nickname = nickname;
        ({ type: obj2.type, channelType } = tmp24);
        value = undefined;
        if (channelType != null) {
          value = channelType.value;
        }
        obj.channelType = value;
        obj.order = tmp24.position;
        let parentId = null;
        if (tmp24.parentId !== closure_5) {
          parentId = tmp24.parentId;
        }
        num5 = num5 + 1;
        obj.parentId = parentId;
        obj[tmp7] = obj;
        num4 = sum;
        continue;
      }
    }
  }
  value = undefined;
  if (favorites != null) {
    if (favorites.guildVisible != null) {
      value = iter.value;
    }
  }
  let tmp14 = value;
  if (value == null) {
    tmp14 = !_mod12.isEmpty(obj);
  }
  flag2 = undefined;
  if (favorites != null) {
    flag2 = favorites.autoAddJoinedThreads;
  }
  if (flag2 == null) {
    flag2 = false;
  }
  let flag3 = flag !== flag;
  if (!flag3) {
    flag3 = closure_12 !== tmp14;
  }
  if (!flag3) {
    flag3 = value !== value;
  }
  if (!flag3) {
    flag3 = flag2 !== flag2;
  }
  if (!flag3) {
    flag3 = !_mod12.isEqual(obj, obj);
  }
  if (flag3) {
    closure_12 = tmp14;
    flag3 = true;
  }
  return flag3;
}
const createChannelRecord = fn(1961).createChannelRecord;
let closure_5 = fn(1970).FAVORITES_UNCATEGORIZED_PARENT_ID;
const Constants = fn(1074);
({ ChannelTypes: metroRequire, FAVORITES: closure_7 } = Constants);
let closure_12 = false;
const Store = initializeDefault.Store;
class FavoriteStore extends Store {}
const prototype = FavoriteStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserSettingsProtoStore);
  initializeFromUserSettings();
  const items = [UserSettingsProtoStore];
  this.syncWith(items, initializeFromUserSettings);
};
prototype["getFavoriteChannels"] = function getFavoriteChannels() {
  return obj;
};
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
    return value;
  },
  set: undefined,
});
Object.defineProperty(prototype, "autoAddJoinedThreads", {
  get: function autoAddJoinedThreads() {
    let tmp = flag2;
    if (flag2) {
      tmp = closure_12;
    }
    return tmp;
  },
  set: undefined,
});
prototype["isFavorite"] = function isFavorite(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = null != obj[arg0];
  }
  return tmp;
};
prototype["isChannelOrParentFavorited"] = function isChannelOrParentFavorited(channel) {
  const self = this;
  let isFavoriteResult = this.isFavorite(channel.id);
  if (!isFavoriteResult) {
    isFavoriteResult = channel.isThread() && self.isFavorite(channel.parent_id);
    const tmp2 = channel.isThread() && self.isFavorite(channel.parent_id);
  }
  return isFavoriteResult;
};
prototype["getFavorite"] = function getFavorite(categoryId) {
  if (null != categoryId) {
    return obj[categoryId];
  }
};
prototype["getCategoryRecord"] = function getCategoryRecord(categoryId) {
  let tmp = null;
  if (categoryId in obj) {
    tmp = null;
    if (obj[categoryId].type === preloaded_user_settings.FavoriteChannelType.CATEGORY) {
      obj = { id: null, name: null, type: null, position: null, guild_id: null };
      ({ id: obj.id, nickname } = obj[categoryId]);
      if (nickname == null) {
        nickname = "";
      }
      obj.name = nickname;
      obj.type = constants.GUILD_CATEGORY;
      obj.position = obj[categoryId].order;
      obj.guild_id = guild_id;
      tmp = createChannelRecord(obj);
    }
  }
  return tmp;
};
prototype["getNickname"] = function getNickname(categoryId) {
  const favorite = this.getFavorite(categoryId);
  let nickname;
  if (favorite != null) {
    nickname = favorite.nickname;
  }
  return nickname;
};
prototype["getFavoritesCount"] = function getFavoritesCount() {
  return num2;
};
prototype["getFavoritesCountAgainstLimit"] = function getFavoritesCountAgainstLimit() {
  return num;
};
prototype["hasStoredFavorites"] = function hasStoredFavorites() {
  return !_mod12.isEmpty(this.getFavoriteChannels());
};
FavoriteStore.displayName = "FavoriteStore";
const favoriteStore = new FavoriteStore(DispatcherDefault, {});
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoriteStore.tsx");

export default favoriteStore;
