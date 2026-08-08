// discord_app/modules/favorites/FavoriteStore.tsx
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { createChannelRecord } from "createChannelRecord";
import { FAVORITES_UNCATEGORIZED_PARENT_ID as closure_5 } from "date";
import ME from "ME";
import { Store } from "initialize";
import { apply } from "../../../_runtime/00012_apply.js";
import { create } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";

let closure_6;
let error;
const require = arg1;
function initializeFromUserSettings() {
  let channelType;
  const favorites = settings.settings.favorites;
  let flag;
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
  let obj = {};
  let num = 0;
  if (null != favoriteChannels) {
    let num3 = 0;
    num = 0;
    const keys = Object.keys();
    if (keys !== undefined) {
      num = num3;
      while (keys[tmp] !== undefined) {
        let tmp21 = tmp6;
        let tmp22 = favoriteChannels[tmp6];
        let tmp23 = require;
        let tmp24 = dependencyMap;
        let sum = num3;
        if (tmp22.type !== create.FavoriteChannelType.CATEGORY) {
          sum = num3 + 1;
        }
        obj = { id: null, nickname: null, type: null, channelType: null, order: null, parentId: null };
        obj[0] = tmp6;
        let nickname = null;
        if ("" !== tmp22.nickname) {
          nickname = tmp22.nickname;
        }
        obj[1] = nickname;
        ({ type: obj2[2], channelType } = tmp22);
        let value;
        if (channelType != null) {
          value = channelType.value;
        }
        obj[3] = value;
        obj[4] = tmp22.position;
        let tmp10 = closure_5;
        let parentId = null;
        if (tmp22.parentId !== closure_5) {
          parentId = tmp22.parentId;
        }
        obj[5] = parentId;
        obj[tmp6] = obj;
        num3 = sum;
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
  let tmp13 = value;
  if (value == null) {
    tmp13 = !apply.isEmpty(obj);
    const obj3 = apply;
  }
  let flag2 = flag !== flag;
  if (!flag2) {
    flag2 = c11 !== tmp13;
  }
  if (!flag2) {
    flag2 = closure_2 !== value;
  }
  if (!flag2) {
    flag2 = !apply.isEqual(obj, obj);
    const obj4 = apply;
  }
  if (flag2) {
    c11 = tmp13;
    closure_2 = value;
    flag2 = true;
  }
  return flag2;
}
({ ChannelTypes: closure_6, FAVORITES: error } = ME);
let closure_8 = {};
let c9 = 0;
let c10 = false;
let c11 = false;
class FavoriteStore extends Store {
}
const prototype = FavoriteStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(handleConnectionClosedOrResumed);
  initializeFromUserSettings();
  const items = [handleConnectionClosedOrResumed];
  this.syncWith(items, initializeFromUserSettings);
};
prototype["getFavoriteChannels"] = function getFavoriteChannels() {
  return closure_8;
};
Object.defineProperty(prototype, "favoriteGuildMuted", {
  get: function favoriteGuildMuted() {
    return c10;
  },
  set: undefined
});
Object.defineProperty(prototype, "favoriteGuildEnabled", {
  get: function favoriteGuildEnabled() {
    return c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "favoriteGuildVisibleSetting", {
  get: function favoriteGuildVisibleSetting() {
    return closure_2;
  },
  set: undefined
});
prototype["isFavorite"] = function isFavorite(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = null != dependencyMap[arg0];
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
prototype["getFavorite"] = function getFavorite(closure_0) {
  if (null != closure_0) {
    return dependencyMap[closure_0];
  }
};
prototype["getCategoryRecord"] = function getCategoryRecord(id) {
  let nickname;
  let tmp = null;
  if (id in dependencyMap) {
    tmp = null;
    if (dependencyMap[id].type === create.FavoriteChannelType.CATEGORY) {
      const obj = { id: null, name: null, type: null, position: null, guild_id: null };
      ({ id: obj[0], nickname } = dependencyMap[id]);
      if (nickname == null) {
        nickname = "";
      }
      obj[1] = nickname;
      obj[2] = constants.GUILD_CATEGORY;
      obj[3] = dependencyMap[id].order;
      obj[4] = closure_7;
      tmp = createChannelRecord(obj);
      const tmp7 = createChannelRecord;
    }
  }
  return tmp;
};
prototype["getNickname"] = function getNickname(closure_0) {
  const favorite = this.getFavorite(closure_0);
  let nickname;
  if (favorite != null) {
    nickname = favorite.nickname;
  }
  return nickname;
};
prototype["getFavoritesCount"] = function getFavoritesCount() {
  return Object.keys(this.getFavoriteChannels()).length;
};
prototype["getFavoritesCountAgainstLimit"] = function getFavoritesCountAgainstLimit() {
  return c9;
};
prototype["hasStoredFavorites"] = function hasStoredFavorites() {
  return !apply.isEmpty(this.getFavoriteChannels());
};
FavoriteStore.displayName = "FavoriteStore";
const favoriteStore = new FavoriteStore(require("dispatcher"), {});
const result = require("date").fileFinishedImporting("modules/favorites/FavoriteStore.tsx");

export default favoriteStore;