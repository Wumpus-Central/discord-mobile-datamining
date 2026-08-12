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
import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";
import { handleDCShownToUser } from "../dismissible_content/DismissibleContentFrameworkActionCreators.tsx";
import { updateUserGuildSettings } from "../user_settings/UserSettingsProtoActionCreators.tsx";
import { setNextFavoritesGuildViewSource } from "analytics/FavoritesGuildAnalytics.tsx";
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
        let tmp5 = channel;
        let channel = channel.getChannel(key10005);
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
    tmp(9758)(limit);
  } else {
    let obj = { title: null, body: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["+XYXtZ"]);
    const intl2 = getSystemLocale.intl;
    obj = { count: null };
    obj[0] = limit;
    obj[1] = intl2.formatToPlainString(getSystemLocale.t.JaIyFi, obj);
    tmp(4682).show(obj);
    const tmpResult = tmp(4682);
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
function createFavoriteCategory(arg0, nickname, source) {
  let fromTimestampResult = arg3;
  if (arg3 === undefined) {
    let obj = DISCORD_EPOCH;
    const _Date = Date;
    fromTimestampResult = obj.fromTimestamp(Date.now());
  }
  const FavoriteChannel = create.FavoriteChannel;
  obj = { nickname, type: create.FavoriteChannelType.CATEGORY, position: null, parentId: null };
  let num = 0;
  let num2 = 0;
  const keys = Object.keys();
  if (keys !== undefined) {
    num2 = num;
    while (keys[tmp] !== undefined) {
      let tmp13 = tmp10;
      let tmp14 = arg0[tmp10];
      let tmp11 = null != tmp14 && null != tmp14.position;
      if (!tmp11) {
        continue;
      } else {
        let _Math = Math;
        num = Math.max(tmp9, tmp14.position);
        continue;
      }
      continue;
    }
  }
  obj[2] = num2 + 1;
  obj[3] = closure_11;
  arg0[fromTimestampResult] = FavoriteChannel.create(obj);
  const result = setNextFavoritesGuildViewSource.trackFavoritesGuildAddToFavorites(source, null, Object.keys(arg0).length);
  return fromTimestampResult;
}
function addFavoriteChannelsToParent() {
  const self = this;
  const apply = _addFavoriteChannelsToParent.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _addFavoriteChannelsToParent() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let findCategoryIdByName = tmp3;
              let handleConnectionOpen = tmp2;
              const lib = callback;
              callback = found;
              found = undefined;
              handleConnectionOpen = undefined;
              findCategoryIdByName = function findCategoryIdByName(favoriteChannels, categoryName) {
                const trimmed = categoryName.trim();
                for (const key10009 in arg0) {
                  let tmp3 = key10009;
                  let tmp4 = arg0[key10009];
                  let tmp5 = callback;
                  let tmp6 = found;
                  if (tmp4.type !== callback(found[11]).FavoriteChannelType.CATEGORY) {
                    continue;
                  } else {
                    let str = tmp4.nickname;
                    let str2 = str.trim();
                    if (str2.toLowerCase() !== tmp2) {
                      continue;
                    } else {
                      return key10009;
                    }
                  }
                  continue;
                }
              };
              found = lib.filter((arg0) => !initializeFromUserSettings.isFavorite(arg0));
              if (0 !== found.length) {
                let obj1 = lib(9762);
                handleConnectionOpen = !obj1.getIsFavoritesGuildEnabled();
                const PreloadedUserSettingsActionCreators = lib(1374).PreloadedUserSettingsActionCreators;
                c5 = 1;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
                  let flag = false;
                  let parentId = null;
                  if ("parentId" in callback) {
                    parentId = tmp.parentId;
                  }
                  if (parentId == null) {
                    parentId = outer1_11;
                  }
                  let tmp4 = parentId;
                  const iter = found[Symbol.iterator]();
                  const nextResult = iter.next();
                  while (iter !== undefined) {
                    let tmp7 = nextResult;
                    let tmp9 = callback;
                    let tmp10 = found;
                    let tmp8 = outer1_18;
                    let tmp11 = outer1_18(favoriteChannels.favoriteChannels, callback(found[11]).FavoriteChannelType.REFERENCE_ORIGINAL);
                    let tmp12 = tmp11;
                    if (null != tmp11) {
                      let tmp54 = outer1_19;
                      let tmp55 = outer1_19(tmp11);
                      let tmp56 = flag;
                      if (flag) {
                        let tmp58 = iter;
                        iter.return();
                        break;
                      } else {
                        let tmp57 = iter;
                        iter.return();
                        return false;
                      }
                    } else {
                      let tmp64 = callback;
                      let tmp65 = callback;
                      if ("categoryName" in callback) {
                        let tmp13 = flag;
                        if (!flag) {
                          let tmp14 = findCategoryIdByName;
                          let tmp15 = tmp64;
                          let tmp16 = findCategoryIdByName(favoriteChannels.favoriteChannels, tmp65.categoryName);
                          if (tmp16 == null) {
                            let tmp17 = outer1_22;
                            let tmp18 = tmp64;
                            let tmp19 = closure_1;
                            tmp16 = outer1_22(favoriteChannels.favoriteChannels, tmp65.categoryName, closure_1);
                          }
                          tmp4 = tmp16;
                          let tmp20 = callback;
                          let tmp21 = found;
                          let tmp8Result = tmp8(favoriteChannels.favoriteChannels, callback(found[11]).FavoriteChannelType.REFERENCE_ORIGINAL);
                          if (null != tmp8Result) {
                            let tmp24 = outer1_19;
                            let tmp25 = tmp8Result;
                            let tmp26 = outer1_19(tmp23);
                            let tmp27 = iter;
                            iter.return();
                            return false;
                          }
                        }
                      }
                      let tmp28 = channel;
                      let tmp29 = nextResult;
                      channel = channel.getChannel(tmp7);
                      let tmp31 = channel;
                      let tmp32 = callback;
                      let tmp33 = found;
                      let FavoriteChannel = callback(found[11]).FavoriteChannel;
                      let obj = { nickname: "", type: null, channelType: null, position: null, parentId: null };
                      let tmp34 = callback;
                      let tmp35 = found;
                      obj[1] = callback(found[11]).FavoriteChannelType.REFERENCE_ORIGINAL;
                      obj = undefined;
                      if (null != channel) {
                        let tmp37 = callback;
                        let tmp38 = found;
                        let UInt32Value = callback(found[12]).UInt32Value;
                        obj = { value: null };
                        let tmp39 = channel;
                        obj[0] = tmp31.type;
                        obj = UInt32Value.create(obj);
                      }
                      obj[2] = obj;
                      let tmp40 = outer1_15;
                      obj[3] = outer1_15(favoriteChannels.favoriteChannels);
                      let tmp41 = tmp4;
                      obj[4] = tmp4;
                      favoriteChannels.favoriteChannels[tmp7] = FavoriteChannel.create(obj);
                      let tmp42 = outer1_16;
                      let tmp43 = outer1_16(favoriteChannels.favoriteChannels);
                      let tmp44 = outer1_17;
                      let tmp45 = nextResult;
                      let tmp46 = outer1_17(favoriteChannels.favoriteChannels, tmp7);
                      flag = true;
                      let tmp47 = callback;
                      let tmp48 = found;
                      let obj3 = callback(found[19]);
                      let tmp50 = channel;
                      let type;
                      let tmp49 = closure_1;
                      if (tmp31 != null) {
                        type = tmp31.type;
                      }
                      if (type == null) {
                        type = null;
                      }
                      let tmp52 = outer1_21;
                      let result = obj3.trackFavoritesGuildAddToFavorites(tmp49, type, outer1_21(favoriteChannels.favoriteChannels));
                      continue;
                    }
                    if (flag) {
                      flag = handleConnectionOpen;
                    }
                    if (flag) {
                      let tmp59 = callback;
                      let tmp60 = found;
                      let BoolValue = callback(found[12]).BoolValue;
                      favoriteChannels.guildVisible = BoolValue.create({ value: true });
                      let tmp61 = callback;
                      let tmp62 = found;
                      let obj4 = callback(found[19]);
                      let str = "auto";
                      let result1 = obj4.trackFavoritesGuildVisibilitySettingToggled("auto", true);
                    }
                  }
                }, lib(1374).UserSettingsDelay.FREQUENT_USER_ACTION, outer1_20);
                return obj1;
              } else {
                c6 = 3;
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            if (found.some((arg0) => initializeFromUserSettings.isFavorite(arg0))) {
              callback(9763)();
            }
          }
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp19) {
          c6 = tmp;
          throw tmp19;
        }
      }
    })();
  });
  const _addFavoriteChannelsToParent = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _addFavoriteChannels() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
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
              let handleConnectionOpen = tmp5;
              c2 = tmp2;
              c0 = undefined;
              c1 = undefined;
              c2 = undefined;
              ({ channelIds: c0, parentId: c1, source: c2 } = c0);
              c4 = 1;
              c5 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (c1 == null) {
                c1 = null;
              }
              const obj2 = { parentId: null };
              obj2[0] = c1;
              c4 = 2;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = closure_23(c0, obj2, c2);
              return obj3;
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
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          c5 = tmp;
          throw tmp16;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _addFavoriteChannels = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
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
  favorite = initializeFromUserSettings.getFavorite(closure_0);
  if (null != favorite) {
    const PreloadedUserSettingsActionCreators = _require(favorite[21]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
      delete tmp2[tmp];
      if (favorite.type === callback(favorite[11]).FavoriteChannelType.CATEGORY) {
        for (const key10014 in arg0.favoriteChannels) {
          let tmp16 = key10014;
          let tmp17 = callback;
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
        let tmp9 = null;
        if (favorite.type !== callback(favorite[11]).FavoriteChannelType.CATEGORY) {
          const channel = outer1_6.getChannel(callback);
          let type;
          if (channel != null) {
            type = channel.type;
          }
          if (type == null) {
            type = null;
          }
          tmp9 = type;
        }
        const _Object = Object;
        const result = callback(favorite[19]).trackFavoritesGuildRemoveFromFavorites(tmp9, Object.keys(favoriteChannels.favoriteChannels).length);
        const obj = callback(favorite[19]);
      }
    }, _require(favorite[21]).UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
    const guildId = store.getGuildId();
    let isFavoritesGuildIdResult = _require(favorite[23]).isFavoritesGuildId(guildId);
    if (isFavoritesGuildIdResult) {
      isFavoritesGuildIdResult = channelId.getChannelId() === closure_0;
    }
    if (isFavoritesGuildIdResult) {
      tmp6(tmp7[24]).transitionTo(Routes.CHANNEL(guildId));
      const tmp6Result = tmp6(tmp7[24]);
    }
    const obj3 = _require(favorite[23]);
    tmp6 = _require;
    tmp7 = favorite;
  }
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
                let obj2 = callback2(tmp24[18]);
                const _Date = Date;
                closure_2 = obj2.fromTimestamp(Date.now());
                const PreloadedUserSettingsActionCreators = tmp23(tmp24[21]).PreloadedUserSettingsActionCreators;
                c4 = 1;
                c5 = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = PreloadedUserSettingsActionCreators.updateAsync("favorites", (favoriteChannels) => {
                  favoriteChannels = favoriteChannels.favoriteChannels;
                  outer1_16(favoriteChannels);
                  let obj = callback2(12);
                  if (obj.size(favoriteChannels) >= outer1_12) {
                    obj = { limit: null, canUpsell: false };
                    obj[0] = tmp5;
                    let tmp6 = obj;
                  } else {
                    const favoritesAccess = tmp(9755).getFavoritesAccess();
                    const favoriteLimit = favoritesAccess.favoriteLimit;
                    tmp6 = null;
                    if (favoriteLimit > 0) {
                      tmp6 = null;
                      if (callback(1306).FavoriteChannelType.CATEGORY !== tmp(1306).FavoriteChannelType.CATEGORY) {
                        let tmp4Result = tmp4(12);
                        tmp6 = null;
                        if (tmp4Result.filter(favoriteChannels, (type) => type.type !== callback(table[11]).FavoriteChannelType.CATEGORY).length >= favoriteLimit) {
                          obj = { limit: null, canUpsell: null };
                          obj[0] = favoriteLimit;
                          obj[1] = tmp15;
                          tmp6 = obj;
                        }
                      }
                    }
                    const tmpResult = tmp(9755);
                  }
                  if (null != tmp6) {
                    const limit = tmp6.limit;
                    if (tmp6.canUpsell) {
                      tmp4(9758)(limit);
                    } else {
                      tmp4Result = tmp4(4682);
                      const obj1 = { title: null, body: null };
                      const intl = tmp(1236).intl;
                      obj1[0] = intl.string(tmp(1236).t["+XYXtZ"]);
                      const intl2 = tmp(1236).intl;
                      const obj2 = { count: null };
                      obj2[0] = limit;
                      obj1[1] = intl2.formatToPlainString(tmp(1236).t.JaIyFi, obj2);
                      tmp4Result.show(obj1);
                    }
                    return false;
                  } else {
                    outer1_22(favoriteChannels.favoriteChannels, callback2, callback, dependencyMap);
                  }
                }, tmp23(tmp24[21]).UserSettingsDelay.FREQUENT_USER_ACTION, outer1_20);
                return obj1;
              } else {
                c5 = 3;
                return { value: null, done: true };
              }
              obj7 = callback(outer1_2[23]);
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
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = tmp5;
              c1 = tmp2;
              c0 = undefined;
              c1 = undefined;
              c2 = undefined;
              ({ channelIds: c0, categoryName: c1, source: c2 } = c0);
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { categoryName: null };
              obj2[0] = c1;
              c3 = 2;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback(c0, obj2, c2);
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          c4 = tmp;
          throw tmp13;
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

export const addFavoriteChannels = function addFavoriteChannels(arg0) {
  const self = this;
  const apply = _addFavoriteChannels.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
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
export const addFavoriteCategory = function addFavoriteCategory(first, modal) {
  const self = this;
  const apply = _addFavoriteCategory.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const addFavoriteChannelsToCategory = function addFavoriteChannelsToCategory(arg0) {
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
    const result = callback(outer1_2[19]).trackFavoritesGuildOrderUpdated();
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
      const BoolValue = callback(outer1_2[12]).BoolValue;
      const obj = { value: null };
      obj[0] = tmp2;
      guildVisible.guildVisible = BoolValue.create(obj);
      const result = callback(outer1_2[19]).trackFavoritesGuildVisibilitySettingToggled(settings_page, tmp2);
    }
  }, _updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
  let isFavoritesGuildIdResult = !arg0;
  if (!arg0) {
    let tmpResult = tmp(1913);
    isFavoritesGuildIdResult = tmpResult.isFavoritesGuildId(store.getGuildId());
  }
  if (isFavoritesGuildIdResult) {
    tmpResult = tmp(1222);
    tmpResult.transitionTo(Routes.ME);
  }
};