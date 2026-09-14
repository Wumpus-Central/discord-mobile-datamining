// === Module 10352: FavoritesActionCreators ===

// Module 10352 (FavoritesActionCreators)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1185 */;
import wrappers from "wrappers" /* 1216 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 1940 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4980 */;
import FavoritesHooks from "FavoritesHooks" /* 10353 */;
import openFavoritesGuildLimitUpsellDefault from "openFavoritesGuildLimitUpsell" /* 10356 */;
import FavoritesGuildAnalytics from "FavoritesGuildAnalytics" /* 10362 */;
import DismissibleContentFrameworkActionCreators from "DismissibleContentFrameworkActionCreators" /* 10366 */;
import FavoritesGuildIntroPopover from "FavoritesGuildIntroPopover" /* 10367 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4275 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4458 */;
import FavoriteStore from "FavoriteStore" /* 1960 */;

const require = globalThis.__r;

require = fn;
function getNextPositionFromChannels(arg0) {
  let num = 0;
  let num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
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
function cleanFavoriteChannels(favoriteChannels) {
  for (const key10005 in arg0) {
    let tmp12 = arg0[key10005];
    if (null != tmp12) {
      if (tmp12.type === preloaded_user_settings.FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        let channel = ChannelStore.getChannel(key10005);
        if (null != channel) {
          if (null == tmp12.channelType) {
            let UInt32Value = wrappers.UInt32Value;
            let obj = { value: channel.type };
            tmp12.channelType = UInt32Value.create(obj);
          }
          let isPrivateResult = channel.isPrivate();
          if (!isPrivateResult) {
            isPrivateResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
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
          value = undefined;
          if (iter != null) {
            value = iter.value;
          }
          if (null == value) {
            delete tmp[tmp2];
            continue;
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
function cleanupChannelParentId(favoriteChannels, id) {
  if (null != favoriteChannels[id]) {
    if (tmp.parentId !== parentId) {
      let tmp3 = null;
      if (null != tmp.parentId) {
        tmp3 = favoriteChannels[tmp.parentId];
      }
      let tmp4 = null != tmp3;
      if (tmp4) {
        tmp4 = tmp3.type === preloaded_user_settings.FavoriteChannelType.CATEGORY;
      }
      if (!tmp4) {
        tmp.parentId = tmp2;
      }
    }
  }
}
function countFavoritesAgainstLimit(arg0) {
  return _modDef12.filter(arg0, (type) => type.type !== closure_1_0(dependencyMap[11]).FavoriteChannelType.CATEGORY).length;
}
function getReachedLimit(favoriteChannels, arg1) {
  cleanFavoriteChannels(favoriteChannels);
  if (obj.size(favoriteChannels) >= map1) {
    const obj2 = { limit: tmp4, canUpsell: false };
    return obj2;
  } else {
    const favoritesAccess = FavoritesHooks.getFavoritesAccess();
    const favoriteLimit = favoritesAccess.favoriteLimit;
    let tmp6 = null;
    if (favoriteLimit > 0) {
      tmp6 = null;
      if (arg1 !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
        tmp6 = null;
        if (tmp2Result.filter(favoriteChannels, (type) => type.type !== closure_1_0(dependencyMap[11]).FavoriteChannelType.CATEGORY).length >= favoriteLimit) {
          const obj3 = { limit: favoriteLimit, canUpsell: tmp9 };
          tmp6 = obj3;
        }
        tmp2Result = _modDef12;
      }
    }
    return tmp6;
  }
  obj = _modDef12;
}
function showLimitReachedAlert(limit) {
  limit = limit.limit;
  if (limit.canUpsell) {
    openFavoritesGuildLimitUpsellDefault(limit);
  } else {
    const obj = { title: null, body: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["+XYXtZ"]);
    const intl2 = util.intl;
    const obj2 = { count: limit };
    obj.body = intl2.formatToPlainString(util.t.JaIyFi, obj2);
    AlertActionCreatorsDefault.show(obj);
    const tmpResult = AlertActionCreatorsDefault;
  }
}
function onSaveFailed(status) {
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  if (403 === status) {
    const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
    const ifNecessary = PreloadedUserSettingsActionCreators.loadIfNecessary(true);
    ifNecessary.catch(closure_1_14);
    const obj2 = { title: null, body: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.iufib1);
    const intl2 = util.intl;
    obj2.body = intl2.string(util.t.eAn6z2);
    AlertActionCreatorsDefault.show(obj2);
  }
}
function updateFavoritesProto(arg0) {
  ({ update, batched } = arg0);
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = UserSettingsProtoActionCreators.UserSettingsDelay;
  return PreloadedUserSettingsActionCreators.updateAsync("favorites", update, batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
}
function createFavoriteCategory(favoriteChannels, nickname) {
  let fromTimestampResult = arg2;
  if (arg2 === undefined) {
    const _Date = Date;
    fromTimestampResult = SnowflakeUtilsDefault.fromTimestamp(Date.now());
  }
  const FavoriteChannel = preloaded_user_settings.FavoriteChannel;
  const obj2 = { nickname, type: preloaded_user_settings.FavoriteChannelType.CATEGORY, position: null, parentId: null };
  let num = 0;
  let num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
      let tmp11 = favoriteChannels[tmp8];
      let tmp9 = null != tmp11 && null != tmp11.position;
      if (!tmp9) {
        continue;
      } else {
        let _Math = Math;
        num = Math.max(tmp7, tmp11.position);
        continue;
      }
      continue;
    }
  }
  obj2.position = num2 + 1;
  obj2.parentId = parentId;
  favoriteChannels[fromTimestampResult] = FavoriteChannel.create(obj2);
  return fromTimestampResult;
}
function findCategoryIdByName(obj, str) {
  const trimmed = str.trim();
  for (const key10009 in arg0) {
    let tmp4 = arg0[key10009];
    if (tmp4.type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
      continue;
    } else {
      str = tmp4.nickname;
      let str2 = str.trim();
      if (str2.toLowerCase() !== tmp2) {
        continue;
      } else {
        return key10009;
      }
    }
    continue;
  }
}
function addFavoriteChannelsToParent() {
  const self = this;
  const apply = closure_28.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_28 = async function _addFavoriteChannelsToParent(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp5;
          const dependencyMap2 = tmp2;
          closure_132_3 = undefined;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = dependencyMap;
          let obj4 = closure_3;
          if (closure_3 === undefined) {
            obj4 = {};
          }
          let flag = obj4.silent;
          if (flag === undefined) {
            flag = false;
          }
          closure_132_3 = flag;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_132_4 = closure_132_0.filter((item) => !closure_1_10.isFavorite(item));
            if (0 !== closure_132_4.length) {
              closure_132_5 = !closure_133_10.favoriteGuildEnabled;
              let obj6 = {
                update(favoriteChannels) {
                              let flag = false;
                              parentId = null;
                              if ("parentId" in closure_1_1) {
                                parentId = tmp.parentId;
                              }
                              if (parentId == null) {
                                parentId = closure_2_12;
                              }
                              let tmp4 = parentId;
                              const iter = dependencyMap2[Symbol.iterator]();
                              const nextResult = iter.next();
                              while (iter !== undefined) {
                                let tmp7 = nextResult;
                                let tmp11 = closure_2_21(favoriteChannels.favoriteChannels, closure_0(1185).FavoriteChannelType.REFERENCE_ORIGINAL);
                                if (null != tmp11) {
                                  if (!closure_1_3) {
                                    let tmp56 = closure_2_22(tmp11);
                                  }
                                  if (flag) {
                                    iter.return();
                                    break;
                                  } else {
                                    iter.return();
                                    return false;
                                  }
                                } else {
                                  if ("categoryName" in closure_1_1) {
                                    if (!flag) {
                                      let tmp16 = closure_2_26(favoriteChannels.favoriteChannels, closure_1_1.categoryName);
                                      if (tmp16 == null) {
                                        tmp16 = closure_2_25(favoriteChannels.favoriteChannels, closure_1_1.categoryName);
                                      }
                                      tmp4 = tmp16;
                                      let tmp8Result = closure_2_21(favoriteChannels.favoriteChannels, closure_0(1185).FavoriteChannelType.REFERENCE_ORIGINAL);
                                      if (null != tmp8Result) {
                                        if (!closure_1_3) {
                                          let tmp26 = closure_2_22(tmp22);
                                        }
                                        iter.return();
                                        return false;
                                      }
                                    }
                                  }
                                  channel = channel.getChannel(tmp7);
                                  let tmp31 = channel;
                                  let FavoriteChannel = closure_0(1185).FavoriteChannel;
                                  let obj = { nickname: "", type: closure_0(1185).FavoriteChannelType.REFERENCE_ORIGINAL, channelType: null, position: null, parentId: null };
                                  let obj6;
                                  if (null != channel) {
                                    let UInt32Value = closure_0(1216).UInt32Value;
                                    let obj2 = { value: null };
                                    obj2.value = tmp31.type;
                                    obj6 = UInt32Value.create(obj2);
                                  }
                                  obj.channelType = obj6;
                                  obj.position = closure_2_17(favoriteChannels.favoriteChannels);
                                  obj.parentId = tmp4;
                                  favoriteChannels.favoriteChannels[tmp7] = FavoriteChannel.create(obj);
                                  let tmp43 = closure_2_18(favoriteChannels.favoriteChannels);
                                  let tmp46 = closure_2_19(favoriteChannels.favoriteChannels, tmp7);
                                  flag = true;
                                  let obj3 = closure_0(10362);
                                  let type;
                                  if (tmp31 != null) {
                                    type = tmp31.type;
                                  }
                                  if (type == null) {
                                    type = null;
                                  }
                                  let result = obj3.trackFavoritesGuildAddToFavorites(dependencyMap, type, closure_2_20(favoriteChannels.favoriteChannels));
                                  continue;
                                }
                                if (flag) {
                                  flag = closure_1_5;
                                }
                                if (flag) {
                                  flag = !closure_1_3;
                                }
                                if (flag) {
                                  let BoolValue = closure_0(1216).BoolValue;
                                  favoriteChannels.guildVisible = BoolValue.create({ value: true });
                                  let obj4 = closure_0(10362);
                                  let str = "auto";
                                  let result1 = obj4.trackFavoritesGuildVisibilitySettingToggled("auto", true);
                                }
                              }
                            }
              };
              c6 = 2;
              c7 = 1;
              const obj7 = { value: closure_133_24(obj6), done: false };
              return obj7;
            } else {
              c7 = 3;
            }
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          let someResult = !closure_132_3;
          if (!closure_132_3) {
            someResult = closure_132_4.some((item) => closure_1_10.isFavorite(item));
          }
          if (someResult) {
            closure_133_1(closure_133_2[21])();
          }
        }
        c7 = 3;
        let obj = { value, done: true };
        return obj;
      }
    } catch (tmp22) {
      c7 = tmp;
      throw tmp22;
    }
  }
};
let closure_29 = async function _addFavoriteChannels() {
  parentId = closure_130_1;
  if (closure_130_1 == null) {
    parentId = null;
  }
  await closure_131_27(closure_130_0, { parentId }, closure_130_2);
  await "HermesInternal";
  closure_2 = tmp2;
  ({ channelIds: closure_130_0, parentId: closure_130_1, source: closure_130_2 } = closure_0);
  return "PX_16";
};
function removeFavoriteChannel(id, arg1) {
  _require = id;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.trackAnalytics;
  if (flag === undefined) {
    flag = true;
  }
  const favorite = FavoriteStore.getFavorite(id);
  if (null != favorite) {
    const obj2 = {
      update(favoriteChannels) {
          delete tmp2[tmp];
          if (favorite.type === preloaded_user_settings.FavoriteChannelType.CATEGORY) {
            for (const key10014 in arg0.favoriteChannels) {
              if (arg0.favoriteChannels[key10014].parentId !== closure_0) {
                continue;
              } else {
                arg0.favoriteChannels[key10014].parentId = parentId;
                continue;
              }
              continue;
            }
          }
          cleanFavoriteChannels(favoriteChannels.favoriteChannels);
          if (flag) {
            let tmp9 = null;
            if (favorite.type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
              const channel = ChannelStore.getChannel(closure_0);
              let type;
              if (channel != null) {
                type = channel.type;
              }
              if (type == null) {
                type = null;
              }
              tmp9 = type;
            }
            const obj = FavoritesGuildAnalytics;
            const result = obj.trackFavoritesGuildRemoveFromFavorites(tmp9, _modDef12.filter(favoriteChannels.favoriteChannels, (type) => type.type !== closure_1_0(dependencyMap[11]).FavoriteChannelType.CATEGORY).length);
          }
        }
    };
    ({ update, batched } = obj2);
    if (batched === undefined) {
      batched = false;
    }
    const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
    const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
    const tmp4 = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", update, tmp4, onSaveFailed);
    const guildId = SelectedGuildStore.getGuildId();
    let isFavoritesGuildIdResult = require("FavoritesUtils").isFavoritesGuildId(guildId);
    if (isFavoritesGuildIdResult) {
      isFavoritesGuildIdResult = SelectedChannelStore.getChannelId() === id;
    }
    if (isFavoritesGuildIdResult) {
      tmp2(tmp3[23]).transitionTo(closure_15.CHANNEL(guildId));
      const tmp2Result2 = tmp2(tmp3[23]);
    }
    const tmp2Result = require("FavoritesUtils");
  }
}
let closure_31 = async function _addFavoriteCategory(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          dependencyMap = tmp2;
          closure_1 = tmp3;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          if (obj8.isFavoritesGuildCategoryNameValid(_require)) {
            closure_129_0 = _require.trim();
            const _Date = Date;
            closure_129_1 = SnowflakeUtilsDefault.fromTimestamp(Date.now());
            let obj5 = {
              update(favoriteChannels) {
                          favoriteChannels = favoriteChannels.favoriteChannels;
                          closure_2_18(favoriteChannels);
                          if (obj.size(favoriteChannels) >= closure_2_13) {
                            const obj2 = { limit: tmp5, canUpsell: false };
                            let tmp6 = obj2;
                          } else {
                            const favoritesAccess = closure_0(10353).getFavoritesAccess();
                            const favoriteLimit = favoritesAccess.favoriteLimit;
                            tmp6 = null;
                            if (favoriteLimit > 0) {
                              tmp6 = null;
                              if (closure_0(1185).FavoriteChannelType.CATEGORY !== closure_0(1185).FavoriteChannelType.CATEGORY) {
                                tmp6 = null;
                                if (tmp4Result.filter(favoriteChannels, (type) => type.type !== closure_1_0(dependencyMap[11]).FavoriteChannelType.CATEGORY).length >= favoriteLimit) {
                                  const obj3 = { limit: favoriteLimit, canUpsell: tmp14 };
                                  tmp6 = obj3;
                                }
                                tmp4Result = closure_1(12);
                              }
                            }
                            const tmpResult = closure_0(10353);
                          }
                          if (null != tmp6) {
                            const limit = tmp6.limit;
                            if (tmp6.canUpsell) {
                              closure_1(10356)(limit);
                            } else {
                              const obj4 = { title: null, body: null };
                              const intl = closure_0(1114).intl;
                              obj4.title = intl.string(closure_0(1114).t["+XYXtZ"]);
                              const intl2 = closure_0(1114).intl;
                              const obj5 = { count: limit };
                              obj4.body = intl2.formatToPlainString(closure_0(1114).t.JaIyFi, obj5);
                              closure_1(4980).show(obj4);
                              const tmp4Result2 = closure_1(4980);
                            }
                            return false;
                          } else {
                            closure_2_25(favoriteChannels.favoriteChannels, closure_1_0, closure_1_1);
                          }
                          obj = closure_1(12);
                        }
            };
            c3 = 1;
            c4 = 1;
            const obj6 = { value: updateFavoritesProto(obj5), done: false };
            return obj6;
          } else {
            c4 = 3;
            return { value: null, done: true };
          }
          obj8 = require("FavoritesUtils");
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        let tmp11 = null;
        if (null != closure_130_10.getFavorite(closure_129_1)) {
          tmp11 = closure_129_1;
        }
        c4 = 3;
        let obj = { value: tmp11, done: true };
        return obj;
      }
    } catch (tmp16) {
      c4 = tmp;
      throw tmp16;
    }
  }
};
let closure_32 = async function _addFavoriteChannelsToCategory() {
  await closure_130_27(closure_129_0, { categoryName: closure_129_1 }, closure_129_2);
  await "HermesInternal";
  closure_1 = tmp2;
  ({ channelIds: closure_129_0, categoryName: closure_129_1, source: closure_129_2 } = closure_0);
  return "PX_16";
};
let closure_33 = async function _autoAddJoinedThreadToFavorites(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (autoAddJoinedThreads.autoAddJoinedThreads) {
          if (!autoAddJoinedThreads.isFavorite(closure_0)) {
            channel = channel.getChannel(closure_0);
            if (null != channel) {
              if (channel.isThread()) {
                let hasAccess = channel.isPrivate();
                if (!hasAccess) {
                  hasAccess = PermissionStore.can(constants.VIEW_CHANNEL, channel);
                }
                if (hasAccess) {
                  hasAccess = require("FavoritesHooks").getFavoritesAccess().hasAccess;
                  const obj3 = require("FavoritesHooks");
                }
                if (hasAccess) {
                  const items = [closure_0];
                  const obj5 = { categoryName };
                  c2 = 1;
                  c1 = 1;
                  const obj6 = { value: addFavoriteChannelsToParent(items, obj5, "auto_thread_join", { silent: true }), done: false };
                  return obj6;
                }
              }
            }
          }
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp15) {
      c1 = tmp;
      throw tmp15;
    }
  }
};
const resetFatigueCooldown = fn(1949).resetFatigueCooldown;
const THREAD_CHANNEL_TYPES = fn(1961).THREAD_CHANNEL_TYPES;
const FavoritesConstants = fn(1970);
({ FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME: closure_11, FAVORITES_UNCATEGORIZED_PARENT_ID: closure_12, MAX_FAVORITE_CHANNELS: map1 } = FavoritesConstants);
const Constants = fn(1074);
({ NOOP: closure_14, Routes: closure_15 } = Constants);
const Permissions = fn(1085).Permissions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/FavoritesActionCreators.tsx");

export const addFavoriteChannels = function addFavoriteChannels() {
  const self = this;
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { removeFavoriteChannel };
export const setFavoriteChannelNickname = function setFavoriteChannelNickname(categoryId, trimmed) {
  closure_0 = categoryId;
  closure_1 = trimmed;
  if (FavoriteStore.isFavorite(categoryId)) {
    const obj = {
      update(arg0) {
          let str = closure_1;
          if (closure_1 == null) {
            str = "";
          }
          arg0.favoriteChannels[closure_0].nickname = str;
        }
    };
    ({ update, batched } = obj);
    if (batched === undefined) {
      batched = false;
    }
    const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
    const UserSettingsDelay = UserSettingsProtoActionCreators.UserSettingsDelay;
    const tmp3 = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", update, tmp3, onSaveFailed);
  }
};
export const addFavoriteCategory = function addFavoriteCategory() {
  const self = this;
  const apply = closure_31.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const addFavoriteChannelsToCategory = function addFavoriteChannelsToCategory() {
  const self = this;
  const apply = closure_32.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeFavoriteCategory = function removeFavoriteCategory(id) {
  removeFavoriteChannel(id);
};
export const autoAddJoinedThreadToFavorites = function autoAddJoinedThreadToFavorites() {
  const self = this;
  const apply = closure_33.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setFavoritesAutoAddJoinedThreads = function setFavoritesAutoAddJoinedThreads(autoAddJoinedThreads) {
  _require = autoAddJoinedThreads;
  ({ update, batched } = {
    update(autoAddJoinedThreads) {
      let tmp3 = autoAddJoinedThreads.autoAddJoinedThreads !== autoAddJoinedThreads;
      if (tmp3) {
        if (!autoAddJoinedThreads) {
          if (tmp4) {
            autoAddJoinedThreads.autoAddJoinedThreads = autoAddJoinedThreads;
          }
          tmp3 = tmp4;
        } else {
          const favoriteChannels = autoAddJoinedThreads.favoriteChannels;
          let str = closure_2_11.trim();
          let tmp7 = favoriteChannels;
          let tmp8;
          const formatted = str.toLowerCase();
          const keys = Object.keys();
          if (keys !== undefined) {
            let favoritesAccess = keys[tmp];
            while (favoritesAccess !== undefined) {
              str = favoriteChannels[favoritesAccess];
              if (str.type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
                continue;
              } else {
                let str2 = str.nickname;
                let str3 = str2.trim();
                str = str3.toLowerCase();
                tmp8 = favoritesAccess;
                if (str === formatted) {
                  break;
                }
              }
              continue;
            }
          }
          if (null == tmp8) {
            str = dependencyMap;
            cleanFavoriteChannels(favoriteChannels);
            tmp7 = importDefault;
            if (obj5.size(favoriteChannels) >= map1) {
              favoritesAccess = { limit: tmp21, canUpsell: false };
              let tmp11 = favoritesAccess;
            } else {
              favoritesAccess = FavoritesHooks.getFavoritesAccess();
              const favoriteLimit = favoritesAccess.favoriteLimit;
              tmp11 = null;
              if (favoriteLimit > 0) {
                favoritesAccess = preloaded_user_settings.FavoriteChannelType.CATEGORY;
                tmp11 = null;
                if (preloaded_user_settings.FavoriteChannelType.CATEGORY !== favoritesAccess) {
                  favoritesAccess = tmp7(12).filter(favoriteChannels, (type) => type.type !== closure_1_0(dependencyMap[11]).FavoriteChannelType.CATEGORY).length;
                  tmp11 = null;
                  if (favoritesAccess >= favoriteLimit) {
                    favoritesAccess = { limit: favoriteLimit, canUpsell: tmp22 };
                    tmp11 = favoritesAccess;
                  }
                  const tmp7Result = tmp7(12);
                }
              }
              const tmp18Result = FavoritesHooks;
            }
            if (null == tmp11) {
              str = createFavoriteCategory;
              tmp8 = createFavoriteCategory(favoriteChannels, closure_2_11);
            } else if (!tmp11.canUpsell) {
              const obj = { title: null, body: null };
              const intl = util.intl;
              obj.title = intl.string(util.t["+XYXtZ"]);
              const intl2 = util.intl;
              const obj2 = { count: tmp11.limit };
              obj.body = intl2.formatToPlainString(util.t.JaIyFi, obj2);
              tmp7(4980).show(obj);
              const tmp7Result2 = tmp7(4980);
            }
            str = tmp7(10356)(favoritesAccess);
            obj5 = _modDef12;
          }
        }
      }
      return tmp3;
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", update, batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
};
export const setFavoriteCategoriesCollapsed = function setFavoriteCategoriesCollapsed(arg0, id) {
  _require = arg0;
  closure_1 = id;
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", async function update(favoriteChannels) {
    let tmp = closure_1;
    if (null != closure_1) {
      const items = [tmp];
      let keys = items;
    } else {
      const _Object = Object;
      keys = Object.keys(favoriteChannels.favoriteChannels);
    }
    tmp = keys[Symbol.iterator]();
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
};
export const updateFavoriteChannels = function updateFavoriteChannels(dnDUpdates) {
  _require = dnDUpdates;
  if (0 !== dnDUpdates.length) {
    let obj = {
      update(favoriteChannels) {
          const iter = dnDUpdates[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp3 = nextResult;
            let id = nextResult.id;
            if (null != nextResult.position) {
              favoriteChannels.favoriteChannels[id].position = tmp3.position;
            }
            if (undefined !== tmp3.parent_id) {
              let parent_id = tmp3.parent_id;
              if (parent_id == null) {
                parent_id = parentId;
              }
              favoriteChannels.favoriteChannels[id].parentId = parent_id;
              let tmp11 = cleanupChannelParentId(favoriteChannels.favoriteChannels, id);
            }
            continue;
          }
          const result = FavoritesGuildAnalytics.trackFavoritesGuildOrderUpdated();
        }
    };
    ({ update, batched } = obj);
    if (batched === undefined) {
      batched = false;
    }
    const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
    const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
    let tmp3 = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", update, tmp3, onSaveFailed);
  }
};
export const updateFavoriteChannelParent = function updateFavoriteChannelParent(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  ({ update, batched } = {
    update(favoriteChannels) {
      let tmp2 = closure_1;
      if (closure_1 == null) {
        tmp2 = parentId;
      }
      favoriteChannels.favoriteChannels[closure_0].parentId = tmp2;
      favoriteChannels = favoriteChannels.favoriteChannels;
      if (null != favoriteChannels[closure_0]) {
        if (tmp3.parentId !== parentId) {
          let tmp5 = null;
          if (null != tmp3.parentId) {
            tmp5 = favoriteChannels[tmp3.parentId];
          }
          let tmp6 = null != tmp5;
          if (tmp6) {
            tmp6 = tmp5.type === preloaded_user_settings.FavoriteChannelType.CATEGORY;
          }
          if (!tmp6) {
            tmp3.parentId = tmp4;
          }
        }
      }
      const result = FavoritesGuildAnalytics.trackFavoritesGuildOrderUpdated();
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", update, batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
};
export const toggleFavoriteGuildMuted = function toggleFavoriteGuildMuted() {
  ({ update, batched } = {
    update(muted) {
      muted.muted = !muted.muted;
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = UserSettingsProtoActionCreators.UserSettingsDelay;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", update, batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
};
export const resetFavoritesGuild = function resetFavoritesGuild() {
  updateFavoritesProto({
    update(arg0) {
      arg0.favoriteChannels = {};
      arg0.guildVisible = undefined;
      arg0.muted = false;
      arg0.autoAddJoinedThreads = false;
    }
  });
  const result = DismissibleContentFrameworkActionCreators.resetDismissibleContentFrameworkStore();
  resetFatigueCooldown();
  const obj = {
    update(arg0) {
      arg0.favoriteChannels = {};
      arg0.guildVisible = undefined;
      arg0.muted = false;
      arg0.autoAddJoinedThreads = false;
    }
  };
  const result1 = FavoritesGuildIntroPopover.resetHasOfferedFavoritesGuildOnboarding();
  for (const item10024 of tmp5) {
    let obj4 = UserSettingsProtoActionCreators;
    let result2 = obj4.removeDismissedContent(item10024);
    continue;
  }
};
export const setFavoritesGuildVisibility = function setFavoritesGuildVisibility(arg0) {
  _require = arg0;
  if (server_context_menu === undefined) {
    const str = "settings_page";
  }
  ({ update, batched } = {
    update(guildVisible) {
      value = undefined;
      if (guildVisible.guildVisible != null) {
        value = iter.value;
      }
      if (value === value) {
        return false;
      } else {
        const BoolValue = wrappers.BoolValue;
        const obj = { value };
        guildVisible.guildVisible = BoolValue.create(obj);
        const result = FavoritesGuildAnalytics.trackFavoritesGuildVisibilitySettingToggled(settings_page, value);
      }
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", update, batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
};
export const setFavoritesGuildVisibilityFromSettings = function setFavoritesGuildVisibilityFromSettings(value) {
  _require = value;
  const settings_page = "settings_page";
  ({ update, batched } = {
    update(guildVisible) {
      value = undefined;
      if (guildVisible.guildVisible != null) {
        value = iter.value;
      }
      if (value === value) {
        return false;
      } else {
        const BoolValue = wrappers.BoolValue;
        const obj = { value };
        guildVisible.guildVisible = BoolValue.create(obj);
        const result = FavoritesGuildAnalytics.trackFavoritesGuildVisibilitySettingToggled(settings_page, value);
      }
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", update, batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
  let isFavoritesGuildIdResult = !value;
  if (!value) {
    isFavoritesGuildIdResult = tmp(1982).isFavoritesGuildId(SelectedGuildStore.getGuildId());
    const tmpResult = tmp(1982);
  }
  if (isFavoritesGuildIdResult) {
    tmp(1100).transitionTo(closure_15.ME);
    const tmpResult2 = tmp(1100);
  }
  const tmp3 = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
};