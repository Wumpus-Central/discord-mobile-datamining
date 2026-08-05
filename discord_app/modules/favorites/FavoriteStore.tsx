// discord_app/modules/favorites/FavoriteStore.tsx
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { createChannelRecord } from "createChannelRecord";
import { FAVORITES_UNCATEGORIZED_PARENT_ID as closure_4 } from "date";
import ME from "ME";
import { Store } from "initialize";
import { apply } from "../../../_runtime/00012_apply.js";
import { create } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";

let c5;
let closure_6;
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
  if (null != favoriteChannels) {
    for (const key10010 in favoriteChannels) {
      let tmp17 = key10010;
      let tmp18 = favoriteChannels[key10010];
      obj = { id: null, nickname: null, type: null, channelType: null, order: null, parentId: null };
      obj[0] = key10010;
      let nickname = null;
      if ("" !== tmp18.nickname) {
        nickname = tmp18.nickname;
      }
      obj[1] = nickname;
      ({ type: obj4[2], channelType } = tmp18);
      let value;
      if (channelType != null) {
        value = channelType.value;
      }
      obj[3] = value;
      obj[4] = tmp18.position;
      let tmp4 = closure_4;
      let parentId = null;
      if (tmp18.parentId !== closure_4) {
        parentId = tmp18.parentId;
      }
      obj[5] = parentId;
      obj[key10010] = obj;
      continue;
    }
  }
  value = undefined;
  if (favorites != null) {
    if (favorites.guildVisible != null) {
      value = iter.value;
    }
  }
  let tmp7 = value;
  if (value == null) {
    tmp7 = !apply.isEmpty(obj);
    const obj2 = apply;
  }
  let flag2 = flag !== flag;
  if (!flag2) {
    flag2 = c9 !== tmp7;
  }
  if (!flag2) {
    flag2 = c10 !== tmp11;
  }
  if (!flag2) {
    flag2 = !apply.isEqual(obj, obj);
    const obj3 = apply;
  }
  if (flag2) {
    c9 = tmp7;
    c10 = tmp11;
    flag2 = true;
  }
  return flag2;
}
({ ChannelTypes: c5, FAVORITES: closure_6 } = ME);
let closure_7 = {};
let c8 = false;
let c9 = false;
let c10 = false;
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
  return closure_7;
};
Object.defineProperty(prototype, "favoriteGuildMuted", {
  get: function favoriteGuildMuted() {
    return c8;
  },
  set: undefined
});
Object.defineProperty(prototype, "favoriteGuildEnabled", {
  get: function favoriteGuildEnabled() {
    return c9;
  },
  set: undefined
});
Object.defineProperty(prototype, "favoriteGuildExplicitlyHidden", {
  get: function favoriteGuildExplicitlyHidden() {
    return c10;
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
      obj[4] = closure_6;
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
prototype["hasStoredFavorites"] = function hasStoredFavorites() {
  return !apply.isEmpty(this.getFavoriteChannels());
};
FavoriteStore.displayName = "FavoriteStore";
const favoriteStore = new FavoriteStore(require("dispatcher"), {});
const result = require("date").fileFinishedImporting("modules/favorites/FavoriteStore.tsx");

export default favoriteStore;