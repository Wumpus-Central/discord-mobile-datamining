// discord_app/modules/favorites/FavoritesActionCreators.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import util from "../../intl/index.native.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import wrappers from "../../../discord_common/js/packages/protos/google/protobuf/wrappers.tsx";
import UserSettingsProtoActionCreators from "../user_settings/UserSettingsProtoActionCreators.tsx";
import AlertActionCreatorsDefault from "../../actions/AlertActionCreators.tsx";
import FavoritesHooks from "FavoritesHooks.tsx";
import FavoritesGuildAnalytics from "analytics/FavoritesGuildAnalytics.tsx";
import DismissibleContentFrameworkActionCreators from "../dismissible_content/DismissibleContentFrameworkActionCreators.tsx";
import FavoritesGuildIntroPopover from "onboarding/FavoritesGuildIntroPopover.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import FavoriteStore from "FavoriteStore.tsx";

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
      let tmp3 = require;
      if (tmp12.type === preloaded_user_settings.FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        let channel = ChannelStore.getChannel(key10005);
        if (null != channel) {
          if (null == tmp12.channelType) {
            let UInt32Value = tmp3(1218).UInt32Value;
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
  return _modDef12.filter(arg0, (type) => type.type !== closure_1_0(dependencyMap[11]).FavoriteChannelType.CATEGORY)
    .length;
}
function getReachedLimit(favoriteChannels, arg1) {
  cleanFavoriteChannels(favoriteChannels);
  let obj = _modDef12;
  if (obj.size(favoriteChannels) >= map1) {
    obj = { limit: tmp4, canUpsell: false };
    return obj;
  } else {
    const favoritesAccess = FavoritesHooks.getFavoritesAccess();
    const favoriteLimit = favoritesAccess.favoriteLimit;
    let tmp6 = null;
    if (favoriteLimit > 0) {
      tmp6 = null;
      if (arg1 !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
        tmp6 = null;
        if (
          tmp2Result.filter(
            favoriteChannels,
            (type) => type.type !== closure_1_0(dependencyMap[11]).FavoriteChannelType.CATEGORY,
          ).length >= favoriteLimit
        ) {
          obj = { limit: favoriteLimit, canUpsell: tmp9 };
          tmp6 = obj;
        }
        tmp2Result = _modDef12;
      }
    }
    return tmp6;
  }
}
function showLimitReachedAlert(limit) {
  limit = limit.limit;
  if (limit.canUpsell) {
    tmp(10227)(limit);
  } else {
    let obj = { title: null, body: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["+XYXtZ"]);
    const intl2 = util.intl;
    obj = { count: limit };
    obj.body = intl2.formatToPlainString(util.t.JaIyFi, obj);
    tmp(4904).show(obj);
    const tmpResult = tmp(4904);
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
    const obj = { title: null, body: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.iufib1);
    const intl2 = util.intl;
    obj.body = intl2.string(util.t.eAn6z2);
    obj.show(obj);
  }
}
function updateFavoritesProto(arg0) {
  ({ update, batched } = arg0);
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = UserSettingsProtoActionCreators.UserSettingsDelay;
  return PreloadedUserSettingsActionCreators.updateAsync(
    "favorites",
    update,
    batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION,
    onSaveFailed,
  );
}
function createFavoriteCategory(favoriteChannels, nickname) {
  let fromTimestampResult = arg2;
  if (arg2 === undefined) {
    let obj = SnowflakeUtilsDefault;
    const _Date = Date;
    fromTimestampResult = obj.fromTimestamp(Date.now());
  }
  const FavoriteChannel = preloaded_user_settings.FavoriteChannel;
  obj = { nickname, type: preloaded_user_settings.FavoriteChannelType.CATEGORY, position: null, parentId: null };
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
  obj.position = num2 + 1;
  obj.parentId = parentId;
  favoriteChannels[fromTimestampResult] = FavoriteChannel.create(obj);
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
let closure_28 = async function _addFavoriteChannelsToParent(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp5;
          const dependencyMap2 = tmp2;
          closure_132_3 = undefined;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = dependencyMap;
          let obj1 = closure_3;
          if (closure_3 === undefined) {
            obj1 = {};
          }
          let flag = obj1.silent;
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
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_132_4 = closure_132_0.filter((item) => !closure_1_10.isFavorite(item));
            if (0 !== closure_132_4.length) {
              closure_132_5 = !closure_133_10.favoriteGuildEnabled;
              let obj3 = {
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
                    let tmp8 = closure_2_21;
                    let tmp11 = closure_2_21(
                      favoriteChannels.favoriteChannels,
                      closure_0(1187).FavoriteChannelType.REFERENCE_ORIGINAL,
                    );
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
                      let tmp67 = closure_1_1;
                      if ("categoryName" in closure_1_1) {
                        if (!flag) {
                          let tmp16 = closure_2_26(favoriteChannels.favoriteChannels, tmp67.categoryName);
                          if (tmp16 == null) {
                            tmp16 = closure_2_25(favoriteChannels.favoriteChannels, tmp67.categoryName);
                          }
                          tmp4 = tmp16;
                          let tmp8Result = tmp8(
                            favoriteChannels.favoriteChannels,
                            closure_0(1187).FavoriteChannelType.REFERENCE_ORIGINAL,
                          );
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
                      let FavoriteChannel = closure_0(1187).FavoriteChannel;
                      let obj = { nickname: "", type: null, channelType: null, position: null, parentId: null };
                      obj.type = closure_0(1187).FavoriteChannelType.REFERENCE_ORIGINAL;
                      obj = undefined;
                      if (null != channel) {
                        let UInt32Value = closure_0(1218).UInt32Value;
                        obj = { value: null };
                        obj.value = tmp31.type;
                        obj = UInt32Value.create(obj);
                      }
                      obj.channelType = obj;
                      obj.position = closure_2_17(favoriteChannels.favoriteChannels);
                      obj.parentId = tmp4;
                      favoriteChannels.favoriteChannels[tmp7] = FavoriteChannel.create(obj);
                      let tmp43 = closure_2_18(favoriteChannels.favoriteChannels);
                      let tmp46 = closure_2_19(favoriteChannels.favoriteChannels, tmp7);
                      flag = true;
                      let obj3 = closure_0(10233);
                      let type;
                      let tmp49 = closure_1_2;
                      if (tmp31 != null) {
                        type = tmp31.type;
                      }
                      if (type == null) {
                        type = null;
                      }
                      let result = obj3.trackFavoritesGuildAddToFavorites(
                        tmp49,
                        type,
                        closure_2_20(favoriteChannels.favoriteChannels),
                      );
                      continue;
                    }
                    if (flag) {
                      flag = closure_1_5;
                    }
                    if (flag) {
                      flag = !closure_1_3;
                    }
                    if (flag) {
                      let BoolValue = closure_0(1218).BoolValue;
                      favoriteChannels.guildVisible = BoolValue.create({ value: true });
                      let obj4 = closure_0(10233);
                      let str = "auto";
                      let result1 = obj4.trackFavoritesGuildVisibilitySettingToggled("auto", true);
                    }
                  }
                },
              };
              c6 = 2;
              c7 = 1;
              let obj4 = { value: closure_133_24(obj3), done: false };
              return obj4;
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
        obj = { value, done: true };
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
    obj = {
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
          const result = obj.trackFavoritesGuildRemoveFromFavorites(
            tmp9,
            _modDef12.filter(
              favoriteChannels.favoriteChannels,
              (type) => type.type !== closure_1_0(dependencyMap[11]).FavoriteChannelType.CATEGORY,
            ).length,
          );
        }
      },
    };
    ({ update, batched } = obj);
    if (batched === undefined) {
      batched = false;
    }
    const PreloadedUserSettingsActionCreators =
      require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
    const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
    const tmp4 = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", update, tmp4, onSaveFailed);
    const guildId = SelectedGuildStore.getGuildId();
    let tmp2Result = tmp2(tmp3[22]);
    let isFavoritesGuildIdResult = tmp2Result.isFavoritesGuildId(guildId);
    if (isFavoritesGuildIdResult) {
      isFavoritesGuildIdResult = SelectedChannelStore.getChannelId() === id;
    }
    if (isFavoritesGuildIdResult) {
      tmp2Result = tmp2(tmp3[23]);
      tmp2Result.transitionTo(closure_15.CHANNEL(guildId));
    }
  }
}
let closure_31 = async function _addFavoriteCategory(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          dependencyMap = tmp2;
          closure_1 = tmp3;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          if (obj8.isFavoritesGuildCategoryNameValid(closure_0)) {
            closure_129_0 = str2.trim();
            let obj2 = require("SnowflakeUtils");
            const _Date = Date;
            closure_129_1 = obj2.fromTimestamp(Date.now());
            let obj1 = {
              update(favoriteChannels) {
                favoriteChannels = favoriteChannels.favoriteChannels;
                closure_2_18(favoriteChannels);
                let obj = closure_1(12);
                if (obj.size(favoriteChannels) >= closure_2_13) {
                  obj = { limit: tmp5, canUpsell: false };
                  let tmp6 = obj;
                } else {
                  const favoritesAccess = tmp(10224).getFavoritesAccess();
                  const favoriteLimit = favoritesAccess.favoriteLimit;
                  tmp6 = null;
                  if (favoriteLimit > 0) {
                    tmp6 = null;
                    if (closure_0(1187).FavoriteChannelType.CATEGORY !== tmp(1187).FavoriteChannelType.CATEGORY) {
                      let tmp4Result = tmp4(12);
                      tmp6 = null;
                      if (
                        tmp4Result.filter(
                          favoriteChannels,
                          (type) => type.type !== closure_1_0(dependencyMap[11]).FavoriteChannelType.CATEGORY,
                        ).length >= favoriteLimit
                      ) {
                        obj = { limit: favoriteLimit, canUpsell: tmp14 };
                        tmp6 = obj;
                      }
                    }
                  }
                  const tmpResult = tmp(10224);
                }
                if (null != tmp6) {
                  const limit = tmp6.limit;
                  if (tmp6.canUpsell) {
                    tmp4(10227)(limit);
                  } else {
                    tmp4Result = tmp4(4904);
                    const obj1 = { title: null, body: null };
                    const intl = tmp(1114).intl;
                    obj1.title = intl.string(tmp(1114).t["+XYXtZ"]);
                    const intl2 = tmp(1114).intl;
                    const obj2 = { count: limit };
                    obj1.body = intl2.formatToPlainString(tmp(1114).t.JaIyFi, obj2);
                    tmp4Result.show(obj1);
                  }
                  return false;
                } else {
                  closure_2_25(favoriteChannels.favoriteChannels, closure_1_0, closure_1_1);
                }
              },
            };
            c3 = 1;
            c4 = 1;
            obj2 = { value: updateFavoritesProto(obj1), done: false };
            return obj2;
          } else {
            c4 = 3;
            return { value: null, done: true };
          }
          obj8 = require("FavoritesUtils");
          str2 = closure_0;
          tmp22 = locale;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        let tmp11 = null;
        if (null != closure_130_10.getFavorite(closure_129_1)) {
          tmp11 = closure_129_1;
        }
        c4 = 3;
        obj = { value: tmp11, done: true };
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
let closure_33 = async function _autoAddJoinedThreadToFavorites(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          if (autoAddJoinedThreads.autoAddJoinedThreads) {
            if (!obj8.isFavorite(tmp20)) {
              channel = channel.getChannel(tmp20);
              if (null != channel) {
                if (channel.isThread()) {
                  let hasAccess = channel.isPrivate();
                  if (!hasAccess) {
                    hasAccess = PermissionStore.can(constants.VIEW_CHANNEL, channel);
                  }
                  if (hasAccess) {
                    let obj2 = require("FavoritesHooks");
                    hasAccess = obj2.getFavoritesAccess().hasAccess;
                  }
                  if (hasAccess) {
                    const items = [tmp20];
                    const obj1 = { categoryName };
                    c2 = 1;
                    c1 = 1;
                    obj2 = {
                      value: addFavoriteChannelsToParent(items, obj1, "auto_thread_join", { silent: true }),
                      done: false,
                    };
                    return obj2;
                  }
                }
              }
            }
          }
          obj8 = autoAddJoinedThreads;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
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
({
  FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME: closure_11,
  FAVORITES_UNCATEGORIZED_PARENT_ID: closure_12,
  MAX_FAVORITE_CHANNELS: map1,
} = FavoritesConstants);
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
      },
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
export const setFavoritesAutoAddJoinedThreads = function setFavoritesAutoAddJoinedThreads(arg0) {
  _require = arg0;
  ({ update, batched } = {
    update(autoAddJoinedThreads) {
      let tmp3 = autoAddJoinedThreads.autoAddJoinedThreads !== closure_0;
      if (tmp3) {
        if (!tmp2) {
          if (tmp4) {
            autoAddJoinedThreads.autoAddJoinedThreads = tmp2;
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
              favoritesAccess = tmp18(10224).getFavoritesAccess();
              const favoriteLimit = favoritesAccess.favoriteLimit;
              tmp11 = null;
              if (favoriteLimit > 0) {
                favoritesAccess = tmp18(1187).FavoriteChannelType.CATEGORY;
                tmp11 = null;
                if (preloaded_user_settings.FavoriteChannelType.CATEGORY !== favoritesAccess) {
                  let tmp7Result = tmp7(12);
                  favoritesAccess = tmp7Result.filter(
                    favoriteChannels,
                    (type) => type.type !== closure_1_0(dependencyMap[11]).FavoriteChannelType.CATEGORY,
                  ).length;
                  tmp11 = null;
                  if (favoritesAccess >= favoriteLimit) {
                    favoritesAccess = { limit: favoriteLimit, canUpsell: tmp22 };
                    tmp11 = favoritesAccess;
                  }
                }
              }
              const tmp18Result = tmp18(10224);
            }
            if (null == tmp11) {
              str = createFavoriteCategory;
              tmp8 = createFavoriteCategory(favoriteChannels, closure_2_11);
            } else if (!tmp11.canUpsell) {
              tmp7Result = tmp7(4904);
              let obj = { title: null, body: null };
              const intl = tmp18(1114).intl;
              obj.title = intl.string(tmp18(1114).t["+XYXtZ"]);
              const intl2 = tmp18(1114).intl;
              obj = { count: tmp11.limit };
              obj.body = intl2.formatToPlainString(tmp18(1114).t.JaIyFi, obj);
              tmp7Result.show(obj);
            }
            str = tmp7(10227)(favoritesAccess);
            obj5 = _modDef12;
          }
        }
      }
      return tmp3;
    },
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators =
    require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
  PreloadedUserSettingsActionCreators.updateAsync(
    "favorites",
    update,
    batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION,
    onSaveFailed,
  );
};
export const setFavoriteCategoriesCollapsed = function setFavoriteCategoriesCollapsed(arg0, id) {
  _require = arg0;
  closure_1 = id;
  const PreloadedUserSettingsActionCreators =
    require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync(
    "favorites",
    async function update(favoriteChannels) {
      let tmp = closure_1;
      if (null != closure_1) {
        const items = [tmp];
        let keys = items;
      } else {
        const _Object = Object;
        keys = Object.keys(favoriteChannels.favoriteChannels);
      }
      tmp = keys[Symbol.iterator]();
    },
    require("UserSettingsProtoActionCreators").UserSettingsDelay.FREQUENT_USER_ACTION,
    onSaveFailed,
  );
};
export const updateFavoriteChannels = function updateFavoriteChannels(dnDUpdates) {
  _require = dnDUpdates;
  if (0 !== dnDUpdates.length) {
    const obj = {
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
      },
    };
    ({ update, batched } = obj);
    if (batched === undefined) {
      batched = false;
    }
    const PreloadedUserSettingsActionCreators =
      require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
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
    },
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators =
    require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
  PreloadedUserSettingsActionCreators.updateAsync(
    "favorites",
    update,
    batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION,
    onSaveFailed,
  );
};
export const toggleFavoriteGuildMuted = function toggleFavoriteGuildMuted() {
  ({ update, batched } = {
    update(muted) {
      muted.muted = !muted.muted;
    },
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = UserSettingsProtoActionCreators.UserSettingsDelay;
  PreloadedUserSettingsActionCreators.updateAsync(
    "favorites",
    update,
    batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION,
    onSaveFailed,
  );
};
export const resetFavoritesGuild = function resetFavoritesGuild() {
  updateFavoritesProto({
    update(arg0) {
      arg0.favoriteChannels = {};
      arg0.guildVisible = undefined;
      arg0.muted = false;
      arg0.autoAddJoinedThreads = false;
    },
  });
  const result = DismissibleContentFrameworkActionCreators.resetDismissibleContentFrameworkStore();
  resetFatigueCooldown();
  const obj = {
    update(arg0) {
      arg0.favoriteChannels = {};
      arg0.guildVisible = undefined;
      arg0.muted = false;
      arg0.autoAddJoinedThreads = false;
    },
  };
  const result1 = FavoritesGuildIntroPopover.resetHasOfferedFavoritesGuildOnboarding();
  for (const item10024 of tmp5) {
    let obj4 = UserSettingsProtoActionCreators;
    let result2 = obj4.removeDismissedContent(item10024);
    continue;
  }
};
export const setFavoritesGuildVisibility = function setFavoritesGuildVisibility(arg0, server_context_menu) {
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
      if (value === closure_0) {
        return false;
      } else {
        const BoolValue = wrappers.BoolValue;
        const obj = { value: tmp2 };
        guildVisible.guildVisible = BoolValue.create(obj);
        const result = FavoritesGuildAnalytics.trackFavoritesGuildVisibilitySettingToggled(settings_page, tmp2);
      }
    },
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators =
    require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
  PreloadedUserSettingsActionCreators.updateAsync(
    "favorites",
    update,
    batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION,
    onSaveFailed,
  );
};
export const setFavoritesGuildVisibilityFromSettings = function setFavoritesGuildVisibilityFromSettings(arg0) {
  _require = arg0;
  const settings_page = "settings_page";
  ({ update, batched } = {
    update(guildVisible) {
      value = undefined;
      if (guildVisible.guildVisible != null) {
        value = iter.value;
      }
      if (value === closure_0) {
        return false;
      } else {
        const BoolValue = wrappers.BoolValue;
        const obj = { value: tmp2 };
        guildVisible.guildVisible = BoolValue.create(obj);
        const result = FavoritesGuildAnalytics.trackFavoritesGuildVisibilitySettingToggled(settings_page, tmp2);
      }
    },
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators =
    require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = require("UserSettingsProtoActionCreators").UserSettingsDelay;
  PreloadedUserSettingsActionCreators.updateAsync(
    "favorites",
    update,
    batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION,
    onSaveFailed,
  );
  let isFavoritesGuildIdResult = !arg0;
  if (!arg0) {
    let tmpResult = tmp(1982);
    isFavoritesGuildIdResult = tmpResult.isFavoritesGuildId(SelectedGuildStore.getGuildId());
  }
  if (isFavoritesGuildIdResult) {
    tmpResult = tmp(1100);
    tmpResult.transitionTo(closure_15.ME);
  }
};
