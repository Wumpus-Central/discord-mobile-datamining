// discord_app/modules/favorites/FavoritesActionCreators.tsx
import { resetFatigueCooldown } from "withContent";
import { THREAD_CHANNEL_TYPES } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import handleConnectionOpen from "handleConnectionOpen";
import closure_8 from "handleConnectionOpen";
import initializeFromUserSettings from "initializeFromUserSettings";
import { Routes } from "ME";
import { Permissions } from "sum";
import date from "date";
import { apply } from "../../../_runtime/00012_apply.js";
import { create } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import { set } from "../../actions/AlertActionCreators.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";
import { handleDCShownToUser } from "../dismissible_content/DismissibleContentFrameworkActionCreators.tsx";
import { updateUserGuildSettings } from "../user_settings/UserSettingsProtoActionCreators.tsx";
import { useFavoritesAccess } from "FavoritesHooks.tsx";

let c10;
let unpackModuleId;
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
      if (tmp12.type === create.FavoriteChannelType.CATEGORY) {
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
    if (tmp.parentId !== closure_10) {
      let tmp3 = null;
      if (null != tmp.parentId) {
        tmp3 = arg0[tmp.parentId];
      }
      let tmp4 = null != tmp3;
      if (tmp4) {
        tmp4 = tmp3.type === create.FavoriteChannelType.CATEGORY;
      }
      if (!tmp4) {
        tmp.parentId = tmp2;
      }
    }
  }
}
function getReachedLimit(arg0, arg1) {
  cleanFavoriteChannels(arg0);
  let obj = apply;
  if (obj.size(arg0) >= closure_11) {
    obj = { limit: null, canUpsell: false };
    obj[0] = tmp4;
    return obj;
  } else {
    const favoritesAccess = useFavoritesAccess.getFavoritesAccess();
    const favoriteLimit = favoritesAccess.favoriteLimit;
    let tmp6 = null;
    if (favoriteLimit > 0) {
      tmp6 = null;
      if (arg1 !== create.FavoriteChannelType.CATEGORY) {
        tmp6 = null;
        if (tmp2Result.filter(arg0, (type) => type.type !== callback(table[10]).FavoriteChannelType.CATEGORY).length >= favoriteLimit) {
          obj = { limit: null, canUpsell: null };
          obj[0] = favoriteLimit;
          obj[1] = tmp9;
          tmp6 = obj;
        }
        tmp2Result = tmp2(12);
      }
    }
    return tmp6;
  }
  tmp2 = importDefault;
}
function showLimitReachedAlert(limit) {
  limit = limit.limit;
  if (limit.canUpsell) {
    tmp(9714)(limit);
  } else {
    let obj = { title: null, body: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["+XYXtZ"]);
    const intl2 = getSystemLocale.intl;
    obj = { count: null };
    obj[0] = limit;
    obj[1] = intl2.formatToPlainString(getSystemLocale.t.JaIyFi, obj);
    tmp(4642).show(obj);
    const tmpResult = tmp(4642);
  }
}
function onSaveFailed() {
  let obj = set;
  obj = { title: null, body: null, onCloseCallback: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.iufib1);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.eAn6z2);
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
  if (arg1 !== create.FavoriteChannelType.CATEGORY) {
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
  favorite = store3.getFavorite(closure_0);
  if (null != favorite) {
    let tmp8 = null;
    if (flag) {
      let tmp4 = null;
      if (favorite.type !== _require(favorite[10]).FavoriteChannelType.CATEGORY) {
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
    const PreloadedUserSettingsActionCreators = _require(favorite[18]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      delete tmp2[tmp];
      if (favorite.type === callback(favorite[10]).FavoriteChannelType.CATEGORY) {
        for (const key10014 in arg0.favoriteChannels) {
          let tmp10 = key10014;
          let tmp11 = callback;
          if (arg0.favoriteChannels[key10014].parentId !== callback) {
            continue;
          } else {
            let tmp3 = outer1_10;
            arg0.favoriteChannels[key10014].parentId = outer1_10;
            continue;
          }
          continue;
        }
      }
      outer1_15(favoriteChannels.favoriteChannels);
      if (flag) {
        const _Object = Object;
        const result = callback(favorite[19]).trackFavoritesGuildRemoveFromFavorites(c3, Object.keys(favoriteChannels.favoriteChannels).length);
        const obj = callback(favorite[19]);
      }
    }, _require(favorite[18]).UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
    const guildId = store2.getGuildId();
    let isFavoritesGuildIdResult = _require(favorite[20]).isFavoritesGuildId(guildId);
    if (isFavoritesGuildIdResult) {
      isFavoritesGuildIdResult = channelId.getChannelId() === closure_0;
    }
    if (isFavoritesGuildIdResult) {
      tmp9(tmp10[21]).transitionTo(Routes.CHANNEL(guildId));
      const tmp9Result = tmp9(tmp10[21]);
    }
    const obj2 = _require(favorite[20]);
    tmp10 = favorite;
    tmp9 = _require;
  }
}
({ FAVORITES_UNCATEGORIZED_PARENT_ID: c10, MAX_FAVORITE_CHANNELS: unpackModuleId } = require("date"));
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
  let closure_3;
  found = items.filter((arg0) => !favorite.isFavorite(arg0));
  if (0 !== found.length) {
    closure_3 = !_require(found[17]).getIsFavoritesGuildEnabled();
    const PreloadedUserSettingsActionCreators = _require(found[18]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      let flag = false;
      const iter = found[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        let tmp4 = outer1_17;
        let tmp5 = callback;
        let tmp6 = found;
        let tmp7 = outer1_17(favoriteChannels.favoriteChannels, callback(found[10]).FavoriteChannelType.REFERENCE_ORIGINAL);
        let tmp8 = tmp7;
        if (null != tmp7) {
          let tmp29 = outer1_18;
          let tmp30 = outer1_18(tmp7);
          let tmp31 = flag;
          if (flag) {
            let tmp33 = iter;
            iter.return();
            break;
          } else {
            let tmp32 = iter;
            iter.return();
            return false;
          }
        } else {
          let tmp40 = outer1_5;
          let tmp41 = nextResult;
          let channel = outer1_5.getChannel(tmp3);
          let tmp44 = callback;
          let tmp45 = found;
          let tmp43 = channel;
          let FavoriteChannel = callback(found[10]).FavoriteChannel;
          let obj = { nickname: "", type: null, channelType: null, position: null, parentId: null };
          let tmp46 = callback;
          let tmp47 = found;
          obj[1] = callback(found[10]).FavoriteChannelType.REFERENCE_ORIGINAL;
          obj = undefined;
          if (null != channel) {
            let tmp9 = callback;
            let tmp10 = found;
            let UInt32Value = callback(found[11]).UInt32Value;
            obj = { value: null };
            let tmp11 = channel;
            obj[0] = tmp43.type;
            obj = UInt32Value.create(obj);
          }
          obj[2] = obj;
          let tmp13 = outer1_14;
          obj[3] = outer1_14(favoriteChannels.favoriteChannels);
          let tmp14 = callback;
          if (callback == null) {
            tmp14 = outer1_10;
          }
          obj[4] = tmp14;
          favoriteChannels.favoriteChannels[tmp3] = FavoriteChannel.create(obj);
          let tmp15 = outer1_15;
          let tmp16 = outer1_15(favoriteChannels.favoriteChannels);
          let tmp17 = outer1_16;
          let tmp18 = nextResult;
          let tmp19 = outer1_16(favoriteChannels.favoriteChannels, tmp3);
          flag = true;
          let tmp20 = callback;
          let tmp21 = found;
          let obj2 = callback(found[19]);
          let tmp22 = str;
          let tmp23 = outer1_21;
          let tmp24 = callback;
          let tmp25 = found;
          let tmp27 = outer1_20;
          let tmp26 = outer1_21(tmp3, callback(found[10]).FavoriteChannelType.REFERENCE_ORIGINAL);
          let result = obj2.trackFavoritesGuildAddToFavorites(str, tmp26, outer1_20(favoriteChannels.favoriteChannels));
          continue;
        }
        if (flag) {
          flag = closure_3;
        }
        if (flag) {
          let tmp34 = callback;
          let tmp35 = found;
          let BoolValue = callback(found[11]).BoolValue;
          favoriteChannels.guildVisible = BoolValue.create({ value: true });
          let tmp36 = callback;
          let tmp37 = found;
          let obj3 = callback(found[19]);
          let tmp38 = str;
          let result1 = obj3.trackFavoritesGuildVisibilitySettingToggled(str, true);
        }
      }
    }, _require(found[18]).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
    let obj = _require(found[17]);
  }
};
export const addFavoriteChannels = function addFavoriteChannels(arr, c0, modal) {
  const _require = c0;
  let str = modal;
  if (modal === undefined) {
    str = "channel_context_menu";
  }
  let found;
  let closure_3;
  found = arr.filter((arg0) => !favorite.isFavorite(arg0));
  if (0 !== found.length) {
    closure_3 = !_require(found[17]).getIsFavoritesGuildEnabled();
    const PreloadedUserSettingsActionCreators = _require(found[18]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      let flag = false;
      const iter = found[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        let tmp4 = outer1_17;
        let tmp5 = callback;
        let tmp6 = found;
        let tmp7 = outer1_17(favoriteChannels.favoriteChannels, callback(found[10]).FavoriteChannelType.REFERENCE_ORIGINAL);
        let tmp8 = tmp7;
        if (null != tmp7) {
          let tmp29 = outer1_18;
          let tmp30 = outer1_18(tmp7);
          let tmp31 = flag;
          if (flag) {
            let tmp33 = iter;
            iter.return();
            break;
          } else {
            let tmp32 = iter;
            iter.return();
            return false;
          }
        } else {
          let tmp40 = outer1_5;
          let tmp41 = nextResult;
          let channel = outer1_5.getChannel(tmp3);
          let tmp44 = callback;
          let tmp45 = found;
          let tmp43 = channel;
          let FavoriteChannel = callback(found[10]).FavoriteChannel;
          let obj = { nickname: "", type: null, channelType: null, position: null, parentId: null };
          let tmp46 = callback;
          let tmp47 = found;
          obj[1] = callback(found[10]).FavoriteChannelType.REFERENCE_ORIGINAL;
          obj = undefined;
          if (null != channel) {
            let tmp9 = callback;
            let tmp10 = found;
            let UInt32Value = callback(found[11]).UInt32Value;
            obj = { value: null };
            let tmp11 = channel;
            obj[0] = tmp43.type;
            obj = UInt32Value.create(obj);
          }
          obj[2] = obj;
          let tmp13 = outer1_14;
          obj[3] = outer1_14(favoriteChannels.favoriteChannels);
          let tmp14 = callback;
          if (callback == null) {
            tmp14 = outer1_10;
          }
          obj[4] = tmp14;
          favoriteChannels.favoriteChannels[tmp3] = FavoriteChannel.create(obj);
          let tmp15 = outer1_15;
          let tmp16 = outer1_15(favoriteChannels.favoriteChannels);
          let tmp17 = outer1_16;
          let tmp18 = nextResult;
          let tmp19 = outer1_16(favoriteChannels.favoriteChannels, tmp3);
          flag = true;
          let tmp20 = callback;
          let tmp21 = found;
          let obj2 = callback(found[19]);
          let tmp22 = str;
          let tmp23 = outer1_21;
          let tmp24 = callback;
          let tmp25 = found;
          let tmp27 = outer1_20;
          let tmp26 = outer1_21(tmp3, callback(found[10]).FavoriteChannelType.REFERENCE_ORIGINAL);
          let result = obj2.trackFavoritesGuildAddToFavorites(str, tmp26, outer1_20(favoriteChannels.favoriteChannels));
          continue;
        }
        if (flag) {
          flag = closure_3;
        }
        if (flag) {
          let tmp34 = callback;
          let tmp35 = found;
          let BoolValue = callback(found[11]).BoolValue;
          favoriteChannels.guildVisible = BoolValue.create({ value: true });
          let tmp36 = callback;
          let tmp37 = found;
          let obj3 = callback(found[19]);
          let tmp38 = str;
          let result1 = obj3.trackFavoritesGuildVisibilitySettingToggled(str, true);
        }
      }
    }, _require(found[18]).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
    const obj = _require(found[17]);
  }
};
export { removeFavoriteChannel };
export const setFavoriteChannelNickname = function setFavoriteChannelNickname(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  if (store3.isFavorite(arg0)) {
    const PreloadedUserSettingsActionCreators = _updateUserGuildSettings.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
      let str = closure_1;
      if (closure_1 == null) {
        str = "";
      }
      arg0.favoriteChannels[closure_0].nickname = str;
    }, _updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
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
    dependencyMap = DISCORD_EPOCH.fromTimestamp(Date.now());
    const PreloadedUserSettingsActionCreators = tmp(1355).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      favoriteChannels = favoriteChannels.favoriteChannels;
      outer1_15(favoriteChannels);
      let obj = callback(12);
      if (obj.size(favoriteChannels) >= outer1_11) {
        obj = { limit: null, canUpsell: false };
        obj[0] = tmp6;
        let tmp7 = obj;
      } else {
        const favoritesAccess = tmp2(9711).getFavoritesAccess();
        const favoriteLimit = favoritesAccess.favoriteLimit;
        tmp7 = null;
        if (favoriteLimit > 0) {
          tmp7 = null;
          if (str(1306).FavoriteChannelType.CATEGORY !== tmp2(1306).FavoriteChannelType.CATEGORY) {
            let tmp5Result = tmp5(12);
            tmp7 = null;
            if (tmp5Result.filter(favoriteChannels, (type) => type.type !== callback(table[10]).FavoriteChannelType.CATEGORY).length >= favoriteLimit) {
              obj = { limit: null, canUpsell: null };
              obj[0] = favoriteLimit;
              obj[1] = tmp23;
              tmp7 = obj;
            }
          }
        }
        const tmp2Result = tmp2(9711);
      }
      if (null != tmp7) {
        const limit = tmp7.limit;
        if (tmp7.canUpsell) {
          tmp5(9714)(limit);
        } else {
          tmp5Result = tmp5(4642);
          const obj1 = { title: null, body: null };
          const intl = tmp2(1236).intl;
          obj1[0] = intl.string(tmp2(1236).t["+XYXtZ"]);
          const intl2 = tmp2(1236).intl;
          const obj2 = { count: null };
          obj2[0] = limit;
          obj1[1] = intl2.formatToPlainString(tmp2(1236).t.JaIyFi, obj2);
          tmp5Result.show(obj1);
        }
        return false;
      } else {
        const FavoriteChannel = tmp2(1306).FavoriteChannel;
        let obj3 = { nickname: null, type: null, position: null, parentId: null };
        obj3[0] = callback;
        obj3[1] = tmp2(1306).FavoriteChannelType.CATEGORY;
        const favoriteChannels2 = favoriteChannels.favoriteChannels;
        let num2 = 0;
        let num = 0;
        const keys = Object.keys();
        if (keys !== undefined) {
          num = num2;
          while (keys[tmp] !== undefined) {
            let tmp29 = tmp9;
            let tmp30 = favoriteChannels2[tmp9];
            let tmp10 = null != tmp30 && null != tmp30.position;
            if (!tmp10) {
              continue;
            } else {
              let _Math = Math;
              num2 = Math.max(tmp8, tmp30.position);
              continue;
            }
            continue;
          }
        }
        obj3[2] = num + 1;
        obj3[3] = outer1_10;
        favoriteChannels.favoriteChannels[dependencyMap] = FavoriteChannel.create(obj3);
        obj3 = str(9716);
        let tmp15 = null;
        if (str(1306).FavoriteChannelType.CATEGORY !== str(1306).FavoriteChannelType.CATEGORY) {
          const channel = outer1_5.getChannel(tmp24);
          let type;
          if (channel != null) {
            type = channel.type;
          }
          if (type == null) {
            type = null;
          }
          tmp15 = type;
        }
        const _Object = Object;
        const result = obj3.trackFavoritesGuildAddToFavorites(str, tmp15, Object.keys(favoriteChannels.favoriteChannels).length);
      }
    }, tmp(1355).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
    let obj2 = DISCORD_EPOCH;
  }
};
export const removeFavoriteCategory = function removeFavoriteCategory(closure_0) {
  removeFavoriteChannel(closure_0);
};
export const setFavoriteCategoryCollapsed = function setFavoriteCategoryCollapsed(id, arg1) {
  let f83590 = id;
  let closure_1 = arg1;
  const favorite = store3.getFavorite(id);
  let tmp2 = null != favorite;
  if (tmp2) {
    tmp2 = favorite.type === f83590(1306).FavoriteChannelType.CATEGORY;
  }
  if (tmp2) {
    f83590 = (arg0) => {
      let flag = null != tmp;
      if (flag) {
        flag = tmp.type === f83590(outer1_2[10]).FavoriteChannelType.CATEGORY;
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
    const PreloadedUserSettingsActionCreators = f83590(1355).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
      if (!f83591(arg0)) {
        return false;
      }
    }, f83590(1355).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
  }
};
export const setAllFavoriteCategoriesCollapsed = function setAllFavoriteCategoriesCollapsed(arg0) {
  const f83591 = (favoriteChannels) => {
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp7 = tmp4;
        let tmp8 = favoriteChannels.favoriteChannels[tmp4];
        let tmp9 = f83591;
        let flag3 = null != tmp8;
        if (flag3) {
          let tmp5 = f83591;
          let tmp6 = outer1_2;
          flag3 = tmp8.type === f83591(outer1_2[10]).FavoriteChannelType.CATEGORY;
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
  const PreloadedUserSettingsActionCreators = f83591(1355).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
    if (!f83591(arg0)) {
      return false;
    }
  }, f83591(1355).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
};
export const updateFavoriteChannels = function updateFavoriteChannels(dnDUpdates) {
  const _require = dnDUpdates;
  if (0 !== dnDUpdates.length) {
    const PreloadedUserSettingsActionCreators = _updateUserGuildSettings.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      const iter = dnDUpdates[Symbol.iterator]();
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
            parent_id = outer1_10;
          }
          favoriteChannels.favoriteChannels[id].parentId = parent_id;
          let tmp9 = outer1_16;
          let tmp10 = id;
          let tmp11 = outer1_16(favoriteChannels.favoriteChannels, id);
        }
        continue;
      }
      const result = dnDUpdates(outer1_2[19]).trackFavoritesGuildOrderUpdated();
    }, _updateUserGuildSettings.UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
  }
};
export const updateFavoriteChannelParent = function updateFavoriteChannelParent(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const PreloadedUserSettingsActionCreators = _updateUserGuildSettings.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
    let tmp2 = closure_1;
    if (closure_1 == null) {
      tmp2 = outer1_10;
    }
    favoriteChannels.favoriteChannels[callback].parentId = tmp2;
    favoriteChannels = favoriteChannels.favoriteChannels;
    if (null != favoriteChannels[callback]) {
      if (tmp3.parentId !== outer1_10) {
        let tmp5 = null;
        if (null != tmp3.parentId) {
          tmp5 = favoriteChannels[tmp3.parentId];
        }
        let tmp6 = null != tmp5;
        if (tmp6) {
          tmp6 = tmp5.type === callback(outer1_2[10]).FavoriteChannelType.CATEGORY;
        }
        if (!tmp6) {
          tmp3.parentId = tmp4;
        }
      }
    }
  }, _updateUserGuildSettings.UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
};
export const toggleFavoriteGuildMuted = function toggleFavoriteGuildMuted() {
  const PreloadedUserSettingsActionCreators = updateUserGuildSettings.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (muted) => {
    muted.muted = !muted.muted;
  }, updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
};
export const resetFavoritesGuild = function resetFavoritesGuild() {
  const PreloadedUserSettingsActionCreators = updateUserGuildSettings.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (arg0) => {
    arg0.favoriteChannels = {};
    arg0.guildVisible = undefined;
    arg0.muted = false;
  }, updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
  const result = handleDCShownToUser.resetDismissibleContentFrameworkStore();
  resetFatigueCooldown();
  for (const item10028 of tmp4) {
    let tmp5 = require;
    let tmp6 = dependencyMap;
    let obj2 = updateUserGuildSettings;
    let result1 = obj2.removeDismissedContent(item10028);
    continue;
  }
};
export const setFavoritesGuildVisibility = function setFavoritesGuildVisibility(arg0, auto_hide_empty_guild) {
  const _require = arg0;
  let str = auto_hide_empty_guild;
  if (auto_hide_empty_guild === undefined) {
    str = "settings_page";
  }
  const PreloadedUserSettingsActionCreators = _updateUserGuildSettings.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (guildVisible) => {
    let value;
    if (guildVisible.guildVisible != null) {
      value = iter.value;
    }
    if (value === callback) {
      return false;
    } else {
      const BoolValue = callback(outer1_2[11]).BoolValue;
      const obj = { value: null };
      obj[0] = tmp2;
      guildVisible.guildVisible = BoolValue.create(obj);
      const result = callback(outer1_2[19]).trackFavoritesGuildVisibilitySettingToggled(settings_page, tmp2);
    }
  }, _updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
};
export const setFavoritesGuildVisibilityFromSettings = function setFavoritesGuildVisibilityFromSettings(arg0) {
  const _require = arg0;
  const settings_page = "settings_page";
  const PreloadedUserSettingsActionCreators = _updateUserGuildSettings.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (guildVisible) => {
    let value;
    if (guildVisible.guildVisible != null) {
      value = iter.value;
    }
    if (value === callback) {
      return false;
    } else {
      const BoolValue = callback(outer1_2[11]).BoolValue;
      const obj = { value: null };
      obj[0] = tmp2;
      guildVisible.guildVisible = BoolValue.create(obj);
      const result = callback(outer1_2[19]).trackFavoritesGuildVisibilitySettingToggled(settings_page, tmp2);
    }
  }, _updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
  let isFavoritesGuildIdResult = !arg0;
  if (!arg0) {
    let tmpResult = tmp(1894);
    isFavoritesGuildIdResult = tmpResult.isFavoritesGuildId(store2.getGuildId());
  }
  if (isFavoritesGuildIdResult) {
    tmpResult = tmp(1222);
    tmpResult.transitionTo(Routes.ME);
  }
};