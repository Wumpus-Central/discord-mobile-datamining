// discord_app/modules/favorites/FavoritesActionCreators.tsx
import handleConnectionOpen from "handleConnectionOpen";
import { resetFatigueCooldown } from "withContent";
import { THREAD_CHANNEL_TYPES } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import closure_8 from "handleConnectionOpen";
import closure_9 from "handleConnectionOpen";
import initializeFromUserSettings from "initializeFromUserSettings";
import { Routes } from "ME";
import { Permissions } from "sum";
import date from "date";
import { apply } from "../../../_runtime/00012_apply.js";
import { create } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import { set } from "../../actions/AlertActionCreators.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { handleDCShownToUser } from "../dismissible_content/DismissibleContentFrameworkActionCreators.tsx";
import { updateUserGuildSettings } from "../user_settings/UserSettingsProtoActionCreators.tsx";
import { useFavoritesAccess } from "FavoritesHooks.tsx";

let closure_12;
let unpackModuleId;
const require = arg1;
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
    if (tmp.parentId !== closure_11) {
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
  if (obj.size(arg0) >= closure_12) {
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
        if (tmp2Result.filter(arg0, (type) => type.type !== callback(table[11]).FavoriteChannelType.CATEGORY).length >= favoriteLimit) {
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
function addFavoriteChannels(arg0) {
  let channelIds;
  let importDefault;
  let require;
  ({ channelIds, parentId: require, source: importDefault } = arg0);
  let found;
  let handleConnectionOpen;
  found = channelIds.filter((arg0) => !favorite.isFavorite(arg0));
  if (0 !== found.length) {
    handleConnectionOpen = !require(found[18]).getIsFavoritesGuildEnabled();
    const PreloadedUserSettingsActionCreators = require(found[19]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      let flag = false;
      const iter = found[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        let tmp4 = outer1_18;
        let tmp5 = outer1_0;
        let tmp6 = found;
        let tmp7 = outer1_18(favoriteChannels.favoriteChannels, outer1_0(found[11]).FavoriteChannelType.REFERENCE_ORIGINAL);
        let tmp8 = tmp7;
        if (null != tmp7) {
          let tmp29 = outer1_19;
          let tmp30 = outer1_19(tmp7);
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
          let tmp39 = outer1_6;
          let tmp40 = nextResult;
          let channel = outer1_6.getChannel(tmp3);
          let tmp43 = outer1_0;
          let tmp44 = found;
          let tmp42 = channel;
          let FavoriteChannel = outer1_0(found[11]).FavoriteChannel;
          let obj = { nickname: "", type: null, channelType: null, position: null, parentId: null };
          let tmp45 = outer1_0;
          let tmp46 = found;
          obj[1] = outer1_0(found[11]).FavoriteChannelType.REFERENCE_ORIGINAL;
          obj = undefined;
          if (null != channel) {
            let tmp9 = outer1_0;
            let tmp10 = found;
            let UInt32Value = outer1_0(found[12]).UInt32Value;
            obj = { value: null };
            let tmp11 = channel;
            obj[0] = tmp42.type;
            obj = UInt32Value.create(obj);
          }
          obj[2] = obj;
          let tmp13 = outer1_15;
          obj[3] = outer1_15(favoriteChannels.favoriteChannels);
          let tmp14 = closure_0;
          if (closure_0 == null) {
            tmp14 = outer1_11;
          }
          obj[4] = tmp14;
          favoriteChannels.favoriteChannels[tmp3] = FavoriteChannel.create(obj);
          let tmp15 = outer1_16;
          let tmp16 = outer1_16(favoriteChannels.favoriteChannels);
          let tmp17 = outer1_17;
          let tmp18 = nextResult;
          let tmp19 = outer1_17(favoriteChannels.favoriteChannels, tmp3);
          flag = true;
          let tmp20 = outer1_0;
          let tmp21 = found;
          let obj2 = outer1_0(found[20]);
          let tmp22 = closure_1;
          let tmp23 = outer1_22;
          let tmp24 = outer1_0;
          let tmp25 = found;
          let tmp27 = outer1_21;
          let tmp26 = outer1_22(tmp3, outer1_0(found[11]).FavoriteChannelType.REFERENCE_ORIGINAL);
          let result = obj2.trackFavoritesGuildAddToFavorites(closure_1, tmp26, outer1_21(favoriteChannels.favoriteChannels));
          continue;
        }
        if (flag) {
          flag = handleConnectionOpen;
        }
        if (flag) {
          let tmp34 = outer1_0;
          let tmp35 = found;
          let BoolValue = outer1_0(found[12]).BoolValue;
          favoriteChannels.guildVisible = BoolValue.create({ value: true });
          let tmp36 = outer1_0;
          let tmp37 = found;
          let obj3 = outer1_0(found[20]);
          let str = "auto";
          let result1 = obj3.trackFavoritesGuildVisibilitySettingToggled("auto", true);
        }
      }
    }, require(found[19]).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
    let obj = require(found[18]);
  }
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
  favorite = initializeFromUserSettings.getFavorite(closure_0);
  if (null != favorite) {
    let tmp8 = null;
    if (flag) {
      let tmp4 = null;
      if (favorite.type !== _require(favorite[11]).FavoriteChannelType.CATEGORY) {
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
    const PreloadedUserSettingsActionCreators = _require(favorite[19]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      delete tmp2[tmp];
      if (favorite.type === callback(favorite[11]).FavoriteChannelType.CATEGORY) {
        for (const key10014 in arg0.favoriteChannels) {
          let tmp10 = key10014;
          let tmp11 = callback;
          if (arg0.favoriteChannels[key10014].parentId !== callback) {
            continue;
          } else {
            let tmp3 = outer1_11;
            arg0.favoriteChannels[key10014].parentId = outer1_11;
            continue;
          }
          continue;
        }
      }
      outer1_16(favoriteChannels.favoriteChannels);
      if (flag) {
        const _Object = Object;
        const result = callback(favorite[20]).trackFavoritesGuildRemoveFromFavorites(c3, Object.keys(favoriteChannels.favoriteChannels).length);
        const obj = callback(favorite[20]);
      }
    }, _require(favorite[19]).UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
    const guildId = store2.getGuildId();
    let isFavoritesGuildIdResult = _require(favorite[21]).isFavoritesGuildId(guildId);
    if (isFavoritesGuildIdResult) {
      isFavoritesGuildIdResult = channelId.getChannelId() === closure_0;
    }
    if (isFavoritesGuildIdResult) {
      tmp9(tmp10[22]).transitionTo(Routes.CHANNEL(guildId));
      const tmp9Result = tmp9(tmp10[22]);
    }
    const obj2 = _require(favorite[21]);
    tmp10 = favorite;
    tmp9 = _require;
  }
}
function addFavoriteCategory(first, modal) {
  const self = this;
  const apply = _addFavoriteCategory.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _addFavoriteCategory() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let handleConnectionOpen = tmp2;
              let closure_2 = tmp5;
              const callback = callback2;
              callback2 = undefined;
              closure_2 = undefined;
              if (obj7.isFavoritesGuildCategoryNameValid(callback)) {
                callback2 = str3.trim();
                let obj2 = callback2(tmp24[23]);
                const _Date = Date;
                closure_2 = obj2.fromTimestamp(Date.now());
                const PreloadedUserSettingsActionCreators = tmp23(tmp24[19]).PreloadedUserSettingsActionCreators;
                c4 = 1;
                c5 = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
                  favoriteChannels = favoriteChannels.favoriteChannels;
                  outer1_16(favoriteChannels);
                  let obj = callback2(12);
                  if (obj.size(favoriteChannels) >= outer1_12) {
                    obj = { limit: null, canUpsell: false };
                    obj[0] = tmp6;
                    let tmp7 = obj;
                  } else {
                    const favoritesAccess = tmp2(9711).getFavoritesAccess();
                    const favoriteLimit = favoritesAccess.favoriteLimit;
                    tmp7 = null;
                    if (favoriteLimit > 0) {
                      tmp7 = null;
                      if (callback(1306).FavoriteChannelType.CATEGORY !== tmp2(1306).FavoriteChannelType.CATEGORY) {
                        let tmp5Result = tmp5(12);
                        tmp7 = null;
                        if (tmp5Result.filter(favoriteChannels, (type) => type.type !== callback(table[11]).FavoriteChannelType.CATEGORY).length >= favoriteLimit) {
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
                    obj3[0] = callback2;
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
                    obj3[3] = outer1_11;
                    favoriteChannels.favoriteChannels[dependencyMap] = FavoriteChannel.create(obj3);
                    obj3 = callback(9717);
                    let tmp15 = null;
                    if (callback(1306).FavoriteChannelType.CATEGORY !== callback(1306).FavoriteChannelType.CATEGORY) {
                      const channel = outer1_6.getChannel(tmp24);
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
                    const result = obj3.trackFavoritesGuildAddToFavorites(callback, tmp15, Object.keys(favoriteChannels.favoriteChannels).length);
                  }
                }, tmp23(tmp24[19]).UserSettingsDelay.FREQUENT_USER_ACTION, outer1_20);
                return obj1;
              } else {
                c5 = 3;
                return { value: null, done: true };
              }
              obj7 = callback(outer1_2[21]);
              str3 = callback;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            let tmp10 = null;
            if (null != favorite.getFavorite(closure_2)) {
              tmp10 = closure_2;
            }
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = tmp10;
            return obj;
          }
        } catch (tmp16) {
          c5 = tmp;
          throw tmp16;
        }
      }
    })();
  });
  const _addFavoriteCategory = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _addFavoriteChannelsToCategory() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c2;
      let closure_1;
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === closure_4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let length = tmp4;
              c2 = 0;
              c0 = undefined;
              closure_1 = undefined;
              c2 = undefined;
              ({ channelIds: c0, categoryName: closure_1, source: c2 } = c0);
              length = undefined;
              closure_4 = undefined;
              closure_4 = 1;
              c5 = 1;
              return { value: "ct", done: "Array" };
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                length = c0.filter((arg0) => !favorite.isFavorite(arg0));
                if (0 !== length.length) {
                  categoryIdByName = categoryIdByName.getCategoryIdByName(closure_1);
                  closure_1 = categoryIdByName;
                  if (categoryIdByName == null) {
                    closure_4 = 2;
                    c5 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = callback2(closure_1, c2);
                    return obj2;
                  }
                }
                c5 = 3;
                return { value: "HermesInternal", done: null };
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = arg1;
            }
            closure_4 = closure_1;
            if (null != closure_4) {
              const obj3 = { channelIds: null, parentId: null, source: null };
              obj3[0] = length;
              obj3[1] = closure_4;
              obj3[2] = c2;
              callback(obj3);
            }
          }
        } catch (tmp28) {
          c5 = tmp;
          throw tmp28;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _addFavoriteChannelsToCategory = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ FAVORITES_UNCATEGORIZED_PARENT_ID: unpackModuleId, MAX_FAVORITE_CHANNELS: closure_12 } = require("date"));
let result = require("createChannelRecord").fileFinishedImporting("modules/favorites/FavoritesActionCreators.tsx");

export { addFavoriteChannels };
export { removeFavoriteChannel };
export const setFavoriteChannelNickname = function setFavoriteChannelNickname(categoryId, trimmed) {
  const _require = categoryId;
  let closure_1 = trimmed;
  if (initializeFromUserSettings.isFavorite(categoryId)) {
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
export { addFavoriteCategory };
export const addFavoriteChannelsToCategory = function addFavoriteChannelsToCategory() {
  const self = this;
  const apply = _addFavoriteChannelsToCategory.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeFavoriteCategory = function removeFavoriteCategory(closure_0) {
  removeFavoriteChannel(closure_0);
};
export const setFavoriteCategoriesCollapsed = function setFavoriteCategoriesCollapsed(arg0, id) {
  const _require = arg0;
  let closure_1 = id;
  const PreloadedUserSettingsActionCreators = _updateUserGuildSettings.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
    let tmp = closure_1;
    if (null != closure_1) {
      const items = [tmp];
      let keys = items;
    } else {
      const _Object = Object;
      keys = Object.keys(favoriteChannels.favoriteChannels);
    }
    tmp = keys[Symbol.iterator]();
  }, _updateUserGuildSettings.UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
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
            parent_id = outer1_11;
          }
          favoriteChannels.favoriteChannels[id].parentId = parent_id;
          let tmp9 = outer1_17;
          let tmp10 = id;
          let tmp11 = outer1_17(favoriteChannels.favoriteChannels, id);
        }
        continue;
      }
      const result = dnDUpdates(outer1_2[20]).trackFavoritesGuildOrderUpdated();
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
      tmp2 = outer1_11;
    }
    favoriteChannels.favoriteChannels[callback].parentId = tmp2;
    favoriteChannels = favoriteChannels.favoriteChannels;
    if (null != favoriteChannels[callback]) {
      if (tmp3.parentId !== outer1_11) {
        let tmp5 = null;
        if (null != tmp3.parentId) {
          tmp5 = favoriteChannels[tmp3.parentId];
        }
        let tmp6 = null != tmp5;
        if (tmp6) {
          tmp6 = tmp5.type === callback(outer1_2[11]).FavoriteChannelType.CATEGORY;
        }
        if (!tmp6) {
          tmp3.parentId = tmp4;
        }
      }
    }
    const result = callback(outer1_2[20]).trackFavoritesGuildOrderUpdated();
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
export const setFavoritesGuildVisibility = function setFavoritesGuildVisibility(arg0, auto) {
  const _require = arg0;
  let str = auto;
  if (auto === undefined) {
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
      const BoolValue = callback(outer1_2[12]).BoolValue;
      const obj = { value: null };
      obj[0] = tmp2;
      guildVisible.guildVisible = BoolValue.create(obj);
      const result = callback(outer1_2[20]).trackFavoritesGuildVisibilitySettingToggled(settings_page, tmp2);
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
      const BoolValue = callback(outer1_2[12]).BoolValue;
      const obj = { value: null };
      obj[0] = tmp2;
      guildVisible.guildVisible = BoolValue.create(obj);
      const result = callback(outer1_2[20]).trackFavoritesGuildVisibilitySettingToggled(settings_page, tmp2);
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