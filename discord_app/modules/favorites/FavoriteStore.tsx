// === Module 1394: initializeFromUserSettings ===

// Module 1394 (initializeFromUserSettings)
import apply from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import create from "create" /* 1306 */;
import closure_3 from "handleConnectionClosedOrResumed" /* 1340 */;
import { createChannelRecord } from "createChannelRecord" /* 1395 */;
import { FAVORITES_UNCATEGORIZED_PARENT_ID as closure_5 } from "date" /* 1429 */;
import ME from "ME" /* 676 */;

require = arg1;
function initializeFromUserSettings() {
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
  let num2 = 0;
  if (null != favoriteChannels) {
    let num4 = 0;
    let num5 = 0;
    num = 0;
    num2 = 0;
    const keys = Object.keys();
    if (keys !== undefined) {
      num = num4;
      num2 = num5;
      while (keys[tmp] !== undefined) {
        let tmp23 = tmp7;
        let tmp24 = favoriteChannels[tmp7];
        let tmp25 = require;
        let tmp26 = dependencyMap;
        let sum = num4;
        if (tmp24.type !== create.FavoriteChannelType.CATEGORY) {
          sum = num4 + 1;
        }
        obj = { id: null, nickname: null, type: null, channelType: null, order: null, parentId: null };
        obj[0] = tmp7;
        let nickname = null;
        if ("" !== tmp24.nickname) {
          nickname = tmp24.nickname;
        }
        obj[1] = nickname;
        ({ type: obj2[2], channelType } = tmp24);
        let value;
        if (channelType != null) {
          value = channelType.value;
        }
        obj[3] = value;
        obj[4] = tmp24.position;
        let tmp11 = closure_5;
        let parentId = null;
        if (tmp24.parentId !== closure_5) {
          parentId = tmp24.parentId;
        }
        num5 = num5 + 1;
        obj[5] = parentId;
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
    tmp14 = !apply.isEmpty(obj);
    const obj3 = apply;
  }
  let flag2;
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
    flag3 = closure_2 !== value;
  }
  if (!flag3) {
    flag3 = flag2 !== flag2;
  }
  if (!flag3) {
    flag3 = !apply.isEqual(obj, obj);
    const obj4 = apply;
  }
  if (flag3) {
    closure_12 = tmp14;
    closure_2 = value;
    flag3 = true;
  }
  return flag3;
}
({ ChannelTypes: closure_6, FAVORITES: error } = ME);
let closure_8 = {};
let c9 = 0;
let c10 = 0;
let c11 = false;
let c12 = false;
let c13 = false;
const Store = initializeDefault.Store;
class FavoriteStore extends Store {
}
const prototype = FavoriteStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3);
  initializeFromUserSettings();
  const items = [closure_3];
  this.syncWith(items, initializeFromUserSettings);
};
prototype["getFavoriteChannels"] = function getFavoriteChannels() {
  return closure_8;
};
Object.defineProperty(prototype, "favoriteGuildMuted", {
  get: function favoriteGuildMuted() {
    return c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "favoriteGuildEnabled", {
  get: function favoriteGuildEnabled() {
    return c12;
  },
  set: undefined
});
Object.defineProperty(prototype, "favoriteGuildVisibleSetting", {
  get: function favoriteGuildVisibleSetting() {
    return closure_2;
  },
  set: undefined
});
Object.defineProperty(prototype, "autoAddJoinedThreads", {
  get: function autoAddJoinedThreads() {
    let tmp = c13;
    if (c13) {
      tmp = c12;
    }
    return tmp;
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
prototype["getFavorite"] = function getFavorite(categoryId) {
  if (null != categoryId) {
    return dependencyMap[categoryId];
  }
};
prototype["getCategoryRecord"] = function getCategoryRecord(categoryId) {
  let tmp = null;
  if (categoryId in dependencyMap) {
    tmp = null;
    if (dependencyMap[categoryId].type === create.FavoriteChannelType.CATEGORY) {
      const obj = { id: null, name: null, type: null, position: null, guild_id: null };
      ({ id: obj[0], nickname } = dependencyMap[categoryId]);
      if (nickname == null) {
        nickname = "";
      }
      obj[1] = nickname;
      obj[2] = constants.GUILD_CATEGORY;
      obj[3] = dependencyMap[categoryId].order;
      obj[4] = closure_7;
      tmp = createChannelRecord(obj);
      const tmp7 = createChannelRecord;
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
  return c9;
};
prototype["getFavoritesCountAgainstLimit"] = function getFavoritesCountAgainstLimit() {
  return c10;
};
prototype["hasStoredFavorites"] = function hasStoredFavorites() {
  return !apply.isEmpty(this.getFavoriteChannels());
};
FavoriteStore.displayName = "FavoriteStore";
const favoriteStore = new FavoriteStore(dispatcherDefault, {});
const result = require("set").fileFinishedImporting("modules/favorites/FavoriteStore.tsx");

export default favoriteStore;