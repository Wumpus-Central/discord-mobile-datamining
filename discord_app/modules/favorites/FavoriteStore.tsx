// discord_app/modules/favorites/FavoriteStore.tsx
import apply from "../../../_runtime/00012_apply.js";
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
        let tmp32 = favoriteChannels[tmp7];
        let sum = num4;
        if (tmp32.type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
          sum = num4 + 1;
        }
        let obj5 = { id: tmp7, nickname: null, type: null, channelType: null, order: null, parentId: null };
        let nickname = null;
        if ("" !== tmp32.nickname) {
          nickname = tmp32.nickname;
        }
        obj5.nickname = nickname;
        ({ type: obj2.type, channelType } = tmp32);
        value = undefined;
        if (channelType != null) {
          value = channelType.value;
        }
        obj5.channelType = value;
        obj5.order = tmp32.position;
        let parentId = null;
        if (tmp32.parentId !== closure_10) {
          parentId = tmp32.parentId;
        }
        num5 = num5 + 1;
        obj5.parentId = parentId;
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
  if (value2 == null) {
    value2 = !apply.isEmpty(obj);
  }
  let autoAddJoinedThreads;
  if (favorites != null) {
    autoAddJoinedThreads = favorites.autoAddJoinedThreads;
  }
  if (true !== autoAddJoinedThreads) {
    flag2 = undefined;
    if (favorites != null) {
      if (favorites.pruneInactiveThreads != null) {
        flag2 = iter2.value;
      }
    }
    if (flag2 == null) {
      flag2 = true;
    }
    prop = undefined;
    if (favorites != null) {
      prop = favorites.pruneInactiveThreadsDays;
    }
    if (prop == null) {
      prop = FAVORITES_PRUNE_WHEN_ARCHIVED;
    }
    let prop1;
    if (favorites != null) {
      prop1 = favorites.pruneAllFavoritedThreads;
    }
    const tmp21 = true === prop1 ? metroImportDefault : FAVORITES_PRUNE_SCOPE_AUTO_ADDED;
    let flag3 = flag !== flag;
    if (!flag3) {
      flag3 = value2 !== value2;
    }
    if (!flag3) {
      flag3 = closure_18 !== FAVORITES_AUTO_ADD_THREADS_NEVER;
    }
    if (!flag3) {
      flag3 = flag2 !== flag2;
    }
    if (!flag3) {
      flag3 = prop !== prop;
    }
    if (!flag3) {
      flag3 = closure_21 !== tmp21;
    }
    if (!flag3) {
      flag3 = !apply.isEqual(obj, obj);
    }
    if (flag3) {
      closure_18 = FAVORITES_AUTO_ADD_THREADS_NEVER;
      closure_21 = tmp21;
      flag3 = true;
    }
    return flag3;
  }
}
const createChannelRecord = fn(5096).createChannelRecord;
const FavoritesConstants = fn(5105);
const FAVORITES_AUTO_ADD_THREADS_NEVER = FavoritesConstants.FAVORITES_AUTO_ADD_THREADS_NEVER;
({
  FAVORITES_AUTO_ADD_THREADS_OWN_CATEGORY: hasOwnProperty,
  FAVORITES_AUTO_ADD_THREADS_PER_GUILD: closure_6,
  FAVORITES_PRUNE_SCOPE_ALL: metroImportDefault,
  FAVORITES_PRUNE_SCOPE_AUTO_ADDED,
} = FavoritesConstants);
const FAVORITES_PRUNE_WHEN_ARCHIVED = FavoritesConstants.FAVORITES_PRUNE_WHEN_ARCHIVED;
let closure_10 = FavoritesConstants.FAVORITES_UNCATEGORIZED_PARENT_ID;
const Constants = fn(1072);
({ ChannelTypes: closure_11, FAVORITES: closure_12 } = Constants);
let value2 = false;
let closure_18 = FAVORITES_AUTO_ADD_THREADS_NEVER;
let prop = FAVORITES_PRUNE_WHEN_ARCHIVED;
let closure_21 = FAVORITES_PRUNE_SCOPE_AUTO_ADDED;
const Store = initializeDefault.Store;
class FavoriteStore extends Store {}
const prototype = FavoriteStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserSettingsProtoStore);
  initializeFromUserSettings();
  items = [UserSettingsProtoStore];
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
    return value2;
  },
  set: undefined,
});
Object.defineProperty(prototype, "autoAddThreadsMode", {
  get: function autoAddThreadsMode() {
    return value2 ? closure_18 : FAVORITES_AUTO_ADD_THREADS_NEVER;
  },
  set: undefined,
});
Object.defineProperty(prototype, "pruneInactiveThreads", {
  get: function pruneInactiveThreads() {
    let tmp = flag2;
    if (flag2) {
      tmp = value2;
    }
    return tmp;
  },
  set: undefined,
});
Object.defineProperty(prototype, "pruneInactiveThreadsDays", {
  get: function pruneInactiveThreadsDays() {
    return prop;
  },
  set: undefined,
});
Object.defineProperty(prototype, "pruneInactiveThreadsScope", {
  get: function pruneInactiveThreadsScope() {
    return closure_21;
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
  return !apply.isEmpty(this.getFavoriteChannels());
};
FavoriteStore.displayName = "FavoriteStore";
const favoriteStore = new FavoriteStore(DispatcherDefault, {});
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/FavoriteStore.tsx");

export default favoriteStore;
