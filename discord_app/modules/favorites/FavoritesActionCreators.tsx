import { resetFatigueCooldown } from "withContent";
import { THREAD_CHANNEL_TYPES } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import initializeFromUserSettings from "initializeFromUserSettings";
import { Permissions } from "sum";
import date from "date";

let c9;
let metroImportAll;
function getNextPositionFromChannels(arg0) {
  let num = 0;
  let num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
      let tmp6 = tmp4;
      let tmp7 = arg0[tmp4];
      let tmp5 = null != tmp7 && null != tmp7.position;
      if (!tmp5) {
        continue;
      } else {
        let _Math = Math;
        num = Math.max(tmp3, tmp7.position);
        continue;
      }
      continue;
    }
  }
  return num2 + 1;
}
function cleanFavoriteChannels(obj) {
  for (const key10005 in arg0) {
    let tmp11 = key10005;
    let tmp12 = arg0[key10005];
    if (null != tmp12) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      if (tmp12.type === require(1306) /* create */.FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        let tmp5 = store;
        let channel = store.getChannel(key10005);
        if (null != channel) {
          if (null == tmp12.channelType) {
            let UInt32Value = tmp3(1337).UInt32Value;
            obj = { value: null };
            obj[0] = channel.type;
            tmp12.channelType = UInt32Value.create(obj);
          }
          let isPrivateResult = channel.isPrivate();
          if (!isPrivateResult) {
            let tmp9 = getUncachedChannelPermissions;
            let tmp10 = Permissions;
            isPrivateResult = getUncachedChannelPermissions.can(Permissions.VIEW_CHANNEL, channel);
          }
          if (isPrivateResult) {
            continue;
          } else {
            delete tmp[tmp2];
            continue;
          }
          continue;
        } else {
          let iter = tmp12.channelType;
          let value;
          if (iter != null) {
            value = iter.value;
          }
          if (null == value) {
            delete tmp[tmp2];
            continue;
          } else {
            let tmp7 = THREAD_CHANNEL_TYPES;
          }
          continue;
        }
        continue;
      }
      continue;
    } else {
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
}
function cleanupChannelParentId(arg0, arg1) {
  if (null != arg0[arg1]) {
    if (tmp.parentId !== closure_8) {
      let tmp3 = null;
      if (null != tmp.parentId) {
        tmp3 = arg0[tmp.parentId];
      }
      let tmp4 = null != tmp3;
      if (tmp4) {
        tmp4 = tmp3.type === require(1306) /* create */.FavoriteChannelType.CATEGORY;
      }
      if (!tmp4) {
        tmp.parentId = tmp2;
      }
    }
  }
}
function getReachedLimit(arg0, arg1) {
  cleanFavoriteChannels(arg0);
  if (obj.size(arg0) >= closure_9) {
    return closure_9;
  } else {
    const favoriteLimit = require(10367) /* useFavoritesAccess */.getFavoritesAccess().favoriteLimit;
    let tmp5 = null;
    if (favoriteLimit > 0) {
      tmp5 = null;
      if (arg1 !== require(1306) /* create */.FavoriteChannelType.CATEGORY) {
        let tmp7 = null;
        if (tmp2Result.filter(arg0, (type) => type.type !== callback(table[7]).FavoriteChannelType.CATEGORY).length >= favoriteLimit) {
          tmp7 = favoriteLimit;
        }
        tmp5 = tmp7;
        tmp2Result = tmp2(12);
      }
    }
    return tmp5;
  }
  obj = importDefault(12);
  tmp2 = importDefault;
}
function showLimitReachedAlert(count) {
  let obj = importDefault(4594);
  obj = { title: null, body: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["+XYXtZ"]);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj = { count };
  obj[1] = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t.JaIyFi, obj);
  obj.show(obj);
}
function onSaveFailed() {
  let obj = importDefault(4594);
  obj = { title: null, body: null, onCloseCallback: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.iufib1);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.eAn6z2);
  obj[2] = function onCloseCallback(arg0) {
    const _location = window.location;
    _location.reload();
  };
  obj.show(obj);
}
function getFavoritesCount(arg0) {
  return Object.keys(arg0).length;
}
function getAnalyticsChannelType(arg0, arg1) {
  let tmp = null;
  if (arg1 !== require(1306) /* create */.FavoriteChannelType.CATEGORY) {
    const channel = store.getChannel(arg0);
    let type;
    if (channel != null) {
      type = channel.type;
    }
    if (type == null) {
      type = null;
    }
    tmp = type;
  }
  return tmp;
}
function removeFavoriteChannel(closure_0, arg1) {
  const _require = closure_0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.trackAnalytics;
  if (flag === undefined) {
    flag = true;
  }
  let favorite;
  let c3;
  favorite = store2.getFavorite(closure_0);
  if (null != favorite) {
    let tmp8 = null;
    if (flag) {
      let tmp4 = null;
      if (favorite.type !== _require(favorite[7]).FavoriteChannelType.CATEGORY) {
        const channel = store.getChannel(closure_0);
        let type;
        if (channel != null) {
          type = channel.type;
        }
        if (type == null) {
          type = null;
        }
        tmp4 = type;
      }
      tmp8 = tmp4;
    }
    c3 = tmp8;
    const PreloadedUserSettingsActionCreators = _require(favorite[13]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      delete tmp2[tmp];
      if (favorite.type === callback(favorite[7]).FavoriteChannelType.CATEGORY) {
        for (const key10014 in arg0.favoriteChannels) {
          let tmp10 = key10014;
          let tmp11 = callback;
          if (arg0.favoriteChannels[key10014].parentId !== callback) {
            continue;
          } else {
            let tmp3 = outer1_8;
            arg0.favoriteChannels[key10014].parentId = outer1_8;
            continue;
          }
          continue;
        }
      }
      outer1_12(favoriteChannels.favoriteChannels);
      if (flag) {
        const _Object = Object;
        const result = callback(favorite[14]).trackFavoritesGuildRemoveFromFavorites(c3, Object.keys(favoriteChannels.favoriteChannels).length);
        const obj = callback(favorite[14]);
      }
    }, _require(favorite[13]).UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
  }
}
({ FAVORITES_UNCATEGORIZED_PARENT_ID: metroImportAll, MAX_FAVORITE_CHANNELS: c9 } = require("date"));
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/favorites/FavoritesActionCreators.tsx");

export const addFavoriteChannel = function addFavoriteChannel(closure_0, arg1, channel_context_menu) {
  let str = channel_context_menu;
  if (channel_context_menu === undefined) {
    str = "channel_context_menu";
  }
  const items = [closure_0];
  const _require = arg1;
  if (str === undefined) {
    str = "channel_context_menu";
  }
  let found;
  found = items.filter((arg0) => !favorite.isFavorite(arg0));
  if (0 !== found.length) {
    const PreloadedUserSettingsActionCreators = _require(found[13]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      let flag = false;
      const iter = found[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        let tmp4 = outer1_14;
        let tmp5 = callback;
        let tmp6 = found;
        let tmp7 = outer1_14(favoriteChannels.favoriteChannels, callback(found[7]).FavoriteChannelType.REFERENCE_ORIGINAL);
        let tmp8 = tmp7;
        if (null != tmp7) {
          let tmp23 = outer1_15;
          let tmp24 = outer1_15(tmp7);
          if (flag) {
            let tmp26 = iter;
            iter.return();
            break;
          } else {
            let tmp25 = iter;
            iter.return();
            return false;
          }
        } else {
          let tmp27 = outer1_5;
          let tmp28 = nextResult;
          let channel = outer1_5.getChannel(tmp3);
          let tmp30 = channel;
          let FavoriteChannel = tmp5(tmp6[7]).FavoriteChannel;
          let obj = { nickname: "", type: null, channelType: null, position: null, parentId: null };
          obj[1] = tmp5(tmp6[7]).FavoriteChannelType.REFERENCE_ORIGINAL;
          obj = undefined;
          if (null != channel) {
            let UInt32Value = tmp5(tmp6[8]).UInt32Value;
            obj = { value: null };
            let tmp9 = channel;
            obj[0] = tmp30.type;
            obj = UInt32Value.create(obj);
          }
          obj[2] = obj;
          let tmp11 = outer1_11;
          obj[3] = outer1_11(favoriteChannels.favoriteChannels);
          let tmp12 = callback;
          if (callback == null) {
            tmp12 = outer1_8;
          }
          obj[4] = tmp12;
          favoriteChannels.favoriteChannels[tmp3] = FavoriteChannel.create(obj);
          let tmp13 = outer1_12;
          let tmp14 = outer1_12(favoriteChannels.favoriteChannels);
          let tmp15 = outer1_13;
          let tmp16 = nextResult;
          let tmp17 = outer1_13(favoriteChannels.favoriteChannels, tmp3);
          flag = true;
          let tmp5Result = tmp5(tmp6[14]);
          let tmp18 = str;
          let tmp19 = outer1_18;
          let tmp21 = outer1_17;
          let tmp20 = outer1_18(tmp3, tmp5(tmp6[7]).FavoriteChannelType.REFERENCE_ORIGINAL);
          let result = tmp5Result.trackFavoritesGuildAddToFavorites(str, tmp20, outer1_17(favoriteChannels.favoriteChannels));
          continue;
        }
      }
    }, _require(found[13]).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
  }
};
export const addFavoriteChannels = function addFavoriteChannels(arr, c0, modal) {
  const _require = c0;
  let str = modal;
  if (modal === undefined) {
    str = "channel_context_menu";
  }
  let found;
  found = arr.filter((arg0) => !favorite.isFavorite(arg0));
  if (0 !== found.length) {
    const PreloadedUserSettingsActionCreators = _require(found[13]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      let flag = false;
      const iter = found[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        let tmp4 = outer1_14;
        let tmp5 = callback;
        let tmp6 = found;
        let tmp7 = outer1_14(favoriteChannels.favoriteChannels, callback(found[7]).FavoriteChannelType.REFERENCE_ORIGINAL);
        let tmp8 = tmp7;
        if (null != tmp7) {
          let tmp23 = outer1_15;
          let tmp24 = outer1_15(tmp7);
          if (flag) {
            let tmp26 = iter;
            iter.return();
            break;
          } else {
            let tmp25 = iter;
            iter.return();
            return false;
          }
        } else {
          let tmp27 = outer1_5;
          let tmp28 = nextResult;
          let channel = outer1_5.getChannel(tmp3);
          let tmp30 = channel;
          let FavoriteChannel = tmp5(tmp6[7]).FavoriteChannel;
          let obj = { nickname: "", type: null, channelType: null, position: null, parentId: null };
          obj[1] = tmp5(tmp6[7]).FavoriteChannelType.REFERENCE_ORIGINAL;
          obj = undefined;
          if (null != channel) {
            let UInt32Value = tmp5(tmp6[8]).UInt32Value;
            obj = { value: null };
            let tmp9 = channel;
            obj[0] = tmp30.type;
            obj = UInt32Value.create(obj);
          }
          obj[2] = obj;
          let tmp11 = outer1_11;
          obj[3] = outer1_11(favoriteChannels.favoriteChannels);
          let tmp12 = callback;
          if (callback == null) {
            tmp12 = outer1_8;
          }
          obj[4] = tmp12;
          favoriteChannels.favoriteChannels[tmp3] = FavoriteChannel.create(obj);
          let tmp13 = outer1_12;
          let tmp14 = outer1_12(favoriteChannels.favoriteChannels);
          let tmp15 = outer1_13;
          let tmp16 = nextResult;
          let tmp17 = outer1_13(favoriteChannels.favoriteChannels, tmp3);
          flag = true;
          let tmp5Result = tmp5(tmp6[14]);
          let tmp18 = str;
          let tmp19 = outer1_18;
          let tmp21 = outer1_17;
          let tmp20 = outer1_18(tmp3, tmp5(tmp6[7]).FavoriteChannelType.REFERENCE_ORIGINAL);
          let result = tmp5Result.trackFavoritesGuildAddToFavorites(str, tmp20, outer1_17(favoriteChannels.favoriteChannels));
          continue;
        }
      }
    }, _require(found[13]).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
  }
};
export { removeFavoriteChannel };
export const setFavoriteChannelNickname = function setFavoriteChannelNickname(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  if (store2.isFavorite(arg0)) {
    const PreloadedUserSettingsActionCreators = _require(1355).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
      let str = closure_1;
      if (closure_1 == null) {
        str = "";
      }
      arg0.favoriteChannels[closure_0].nickname = str;
    }, _require(1355).UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
  }
};
export const addFavoriteCategory = function addFavoriteCategory(first, modal) {
  let str = modal;
  if (modal === undefined) {
    str = "modal";
  }
  let importDefault;
  let dependencyMap;
  if (obj.isFavoritesGuildCategoryNameValid(first)) {
    importDefault = first.trim();
    const _Date = Date;
    dependencyMap = importDefault(11).fromTimestamp(Date.now());
    const PreloadedUserSettingsActionCreators = tmp(1355).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      favoriteChannels = favoriteChannels.favoriteChannels;
      outer1_12(favoriteChannels);
      let obj = callback(12);
      let tmp6 = outer1_9;
      if (obj.size(favoriteChannels) < outer1_9) {
        const favoriteLimit = tmp2(10367).getFavoritesAccess().favoriteLimit;
        let tmp7 = null;
        if (favoriteLimit > 0) {
          tmp7 = null;
          if (str(1306).FavoriteChannelType.CATEGORY !== tmp2(1306).FavoriteChannelType.CATEGORY) {
            let tmp5Result = tmp5(12);
            let tmp8 = null;
            if (tmp5Result.filter(favoriteChannels, (type) => type.type !== callback(table[7]).FavoriteChannelType.CATEGORY).length >= favoriteLimit) {
              tmp8 = favoriteLimit;
            }
            tmp7 = tmp8;
          }
        }
        tmp6 = tmp7;
        const tmp2Result = tmp2(10367);
      }
      if (null != tmp6) {
        tmp5Result = tmp5(4594);
        obj = { title: null, body: null };
        const intl = tmp2(1236).intl;
        obj[0] = intl.string(tmp2(1236).t["+XYXtZ"]);
        const intl2 = tmp2(1236).intl;
        obj = { count: null };
        obj[0] = tmp6;
        obj[1] = intl2.formatToPlainString(tmp2(1236).t.JaIyFi, obj);
        tmp5Result.show(obj);
        return false;
      } else {
        const FavoriteChannel = tmp2(1306).FavoriteChannel;
        const obj1 = { nickname: null, type: null, position: null, parentId: null };
        obj1[0] = callback;
        obj1[1] = tmp2(1306).FavoriteChannelType.CATEGORY;
        const favoriteChannels2 = favoriteChannels.favoriteChannels;
        let num2 = 0;
        let num = 0;
        const keys = Object.keys();
        if (keys !== undefined) {
          num = num2;
          while (keys[tmp] !== undefined) {
            let tmp27 = tmp10;
            let tmp28 = favoriteChannels2[tmp10];
            let tmp11 = null != tmp28 && null != tmp28.position;
            if (!tmp11) {
              continue;
            } else {
              let _Math = Math;
              num2 = Math.max(tmp9, tmp28.position);
              continue;
            }
            continue;
          }
        }
        obj1[2] = num + 1;
        obj1[3] = outer1_8;
        favoriteChannels.favoriteChannels[dependencyMap] = FavoriteChannel.create(obj1);
        let tmp16 = null;
        if (str(1306).FavoriteChannelType.CATEGORY !== str(1306).FavoriteChannelType.CATEGORY) {
          const channel = outer1_5.getChannel(tmp22);
          let type;
          if (channel != null) {
            type = channel.type;
          }
          if (type == null) {
            type = null;
          }
          tmp16 = type;
        }
        const _Object = Object;
        const result = str(10371).trackFavoritesGuildAddToFavorites(str, tmp16, Object.keys(favoriteChannels.favoriteChannels).length);
      }
    }, tmp(1355).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
    const obj2 = importDefault(11);
  }
};
export const removeFavoriteCategory = function removeFavoriteCategory(closure_0) {
  removeFavoriteChannel(closure_0);
};
export const setFavoriteCategoryCollapsed = function setFavoriteCategoryCollapsed(id, arg1) {
  let f84682 = id;
  let closure_1 = arg1;
  const favorite = store2.getFavorite(id);
  let tmp2 = null != favorite;
  if (tmp2) {
    tmp2 = favorite.type === f84682(1306).FavoriteChannelType.CATEGORY;
  }
  if (tmp2) {
    f84682 = (arg0) => {
      let flag = null != tmp;
      if (flag) {
        flag = tmp.type === f84682(outer1_2[7]).FavoriteChannelType.CATEGORY;
      }
      if (flag) {
        flag = tmp.collapsed !== tmp2;
      }
      if (flag) {
        tmp.collapsed = tmp2;
        flag = true;
      }
      return flag;
    };
    const PreloadedUserSettingsActionCreators = f84682(1355).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
      if (!f84683(arg0)) {
        return false;
      }
    }, f84682(1355).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
  }
};
export const setAllFavoriteCategoriesCollapsed = function setAllFavoriteCategoriesCollapsed(arg0) {
  const f84683 = (favoriteChannels) => {
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp7 = tmp4;
        let tmp8 = favoriteChannels.favoriteChannels[tmp4];
        let tmp9 = f84683;
        let flag3 = null != tmp8;
        if (flag3) {
          let tmp5 = f84683;
          let tmp6 = outer1_2;
          flag3 = tmp8.type === f84683(outer1_2[7]).FavoriteChannelType.CATEGORY;
        }
        if (flag3) {
          flag3 = tmp8.collapsed !== tmp9;
        }
        if (flag3) {
          tmp8.collapsed = tmp9;
          flag3 = true;
        }
        if (!flag3) {
          continue;
        } else {
          flag = true;
          continue;
        }
        continue;
      }
    }
    return flag2;
  };
  const PreloadedUserSettingsActionCreators = f84683(1355).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
    if (!f84683(arg0)) {
      return false;
    }
  }, f84683(1355).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
};
export const updateFavoriteChannels = function updateFavoriteChannels(arg0) {
  const _require = arg0;
  if (0 !== arg0.length) {
    const PreloadedUserSettingsActionCreators = _require(1355).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      const iter = dependencyMap[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        let id = nextResult.id;
        if (null != nextResult.position) {
          let tmp4 = id;
          let tmp5 = nextResult;
          favoriteChannels.favoriteChannels[id].position = tmp3.position;
        }
        let tmp6 = nextResult;
        if (undefined !== tmp3.parent_id) {
          let tmp7 = id;
          let tmp8 = nextResult;
          let parent_id = tmp3.parent_id;
          if (parent_id == null) {
            parent_id = outer1_8;
          }
          favoriteChannels.favoriteChannels[id].parentId = parent_id;
          let tmp9 = outer1_13;
          let tmp10 = id;
          let tmp11 = outer1_13(favoriteChannels.favoriteChannels, id);
        }
        continue;
      }
      const result = dependencyMap(outer1_2[14]).trackFavoritesGuildOrderUpdated();
    }, _require(1355).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
  }
};
export const updateFavoriteChannelParent = function updateFavoriteChannelParent(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const PreloadedUserSettingsActionCreators = _require(1355).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
    let tmp2 = closure_1;
    if (closure_1 == null) {
      tmp2 = outer1_8;
    }
    favoriteChannels.favoriteChannels[callback].parentId = tmp2;
    favoriteChannels = favoriteChannels.favoriteChannels;
    if (null != favoriteChannels[callback]) {
      if (tmp3.parentId !== outer1_8) {
        let tmp5 = null;
        if (null != tmp3.parentId) {
          tmp5 = favoriteChannels[tmp3.parentId];
        }
        let tmp6 = null != tmp5;
        if (tmp6) {
          tmp6 = tmp5.type === callback(outer1_2[7]).FavoriteChannelType.CATEGORY;
        }
        if (!tmp6) {
          tmp3.parentId = tmp4;
        }
      }
    }
  }, _require(1355).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
};
export const toggleFavoriteGuildMuted = function toggleFavoriteGuildMuted() {
  const PreloadedUserSettingsActionCreators = require(1355) /* updateUserGuildSettings */.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (muted) => {
    muted.muted = !muted.muted;
  }, require(1355) /* updateUserGuildSettings */.UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
};
export const resetFavoritesGuild = function resetFavoritesGuild() {
  const PreloadedUserSettingsActionCreators = require(1355) /* updateUserGuildSettings */.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
    arg0.favoriteChannels = {};
    arg0.guildVisible = undefined;
    arg0.muted = false;
  }, require(1355) /* updateUserGuildSettings */.UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
  const result = require(10372) /* handleDCShownToUser */.resetDismissibleContentFrameworkStore();
  resetFatigueCooldown();
  for (const item10028 of tmp4) {
    let tmp5 = require;
    let tmp6 = dependencyMap;
    let obj2 = require(1355) /* updateUserGuildSettings */;
    let result1 = obj2.removeDismissedContent(item10028);
    continue;
  }
};
export const setFavoritesGuildVisibility = function setFavoritesGuildVisibility(arg0, channel_context_menu) {
  const _require = arg0;
  let str = channel_context_menu;
  if (channel_context_menu === undefined) {
    str = "settings_page";
  }
  const PreloadedUserSettingsActionCreators = _require(1355).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
    const BoolValue = callback(outer1_2[8]).BoolValue;
    arg0.guildVisible = BoolValue.create({ value: callback });
    const result = callback(outer1_2[14]).trackFavoritesGuildVisibilitySettingToggled(str, callback);
  }, _require(1355).UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
};