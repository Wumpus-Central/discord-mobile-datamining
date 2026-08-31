// === Module 10267: getNextPositionFromChannels ===

// Module 10267 (getNextPositionFromChannels)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import applyDefault from "apply" /* 12 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import create from "create" /* 1306 */;
import updateUserGuildSettings from "updateUserGuildSettings" /* 1370 */;
import setDefault from "set" /* 4825 */;
import useFavoritesAccess from "useFavoritesAccess" /* 10268 */;
import handleDCShownToUser from "handleDCShownToUser" /* 10277 */;
import hasOfferedFavoritesGuildOnboarding from "hasOfferedFavoritesGuildOnboarding" /* 10278 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { resetFatigueCooldown } from "withContent" /* 1379 */;
import { THREAD_CHANNEL_TYPES } from "createChannelRecord" /* 1391 */;
import closure_6 from "ensureGuildLoaded" /* 1387 */;
import closure_7 from "getUncachedChannelPermissions" /* 4091 */;
import closure_8 from "handleConnectionOpen" /* 1981 */;
import closure_9 from "handleConnectionOpen" /* 4269 */;
import closure_10 from "initializeFromUserSettings" /* 1390 */;
import ME from "ME" /* 676 */;
import { Permissions } from "sum" /* 505 */;
import date from "date" /* 1425 */;

require = arg1;
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
            let tmp9 = closure_7;
            let tmp10 = Permissions;
            isPrivateResult = closure_7.can(Permissions.VIEW_CHANNEL, channel);
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
    if (tmp.parentId !== closure_12) {
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
function countFavoritesAgainstLimit(arg0) {
  return applyDefault.filter(arg0, (type) => type.type !== callback(table[11]).FavoriteChannelType.CATEGORY).length;
}
function getReachedLimit(arg0, arg1) {
  cleanFavoriteChannels(arg0);
  let obj = applyDefault;
  if (obj.size(arg0) >= closure_13) {
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
        tmp2Result = applyDefault;
      }
    }
    return tmp6;
  }
  const tmp2 = importDefault;
}
function showLimitReachedAlert(limit) {
  limit = limit.limit;
  if (limit.canUpsell) {
    tmp(10271)(limit);
  } else {
    let obj = { title: null, body: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["+XYXtZ"]);
    const intl2 = getSystemLocale.intl;
    obj = { count: null };
    obj[0] = limit;
    obj[1] = intl2.formatToPlainString(getSystemLocale.t.JaIyFi, obj);
    tmp(4825).show(obj);
    const tmpResult = tmp(4825);
  }
}
function onSaveFailed(status) {
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  if (403 === status) {
    const PreloadedUserSettingsActionCreators = updateUserGuildSettings.PreloadedUserSettingsActionCreators;
    const ifNecessary = PreloadedUserSettingsActionCreators.loadIfNecessary(true);
    ifNecessary.catch(closure_14);
    let obj = setDefault;
    obj = { title: null, body: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.iufib1);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.eAn6z2);
    obj.show(obj);
  }
}
function updateFavoritesProto(arg0) {
  ({ update, batched } = arg0);
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = updateUserGuildSettings.PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = updateUserGuildSettings.UserSettingsDelay;
  return PreloadedUserSettingsActionCreators.updateAsync("favorites", update, batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
}
function createFavoriteCategory(arg0, nickname) {
  let fromTimestampResult = arg2;
  if (arg2 === undefined) {
    let obj = DISCORD_EPOCHDefault;
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
      let tmp10 = tmp8;
      let tmp11 = arg0[tmp8];
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
  obj[2] = num2 + 1;
  obj[3] = closure_12;
  arg0[fromTimestampResult] = FavoriteChannel.create(obj);
  return fromTimestampResult;
}
function findCategoryIdByName(obj, str) {
  const trimmed = str.trim();
  for (const key10009 in arg0) {
    let tmp3 = key10009;
    let tmp4 = arg0[key10009];
    let tmp5 = require;
    let tmp6 = dependencyMap;
    if (tmp4.type !== create.FavoriteChannelType.CATEGORY) {
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
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c6 = 0;
    c7 = 0;
    let iter = (function*(arg0, arg1, arg2) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_5 = tmp5;
              closure_4 = tmp2;
              let flag;
              obj1 = flag;
              if (flag === undefined) {
                obj1 = {};
              }
              flag = obj1.silent;
              if (flag === undefined) {
                flag = false;
              }
              closure_4 = undefined;
              closure_5 = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "Object", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                closure_4 = closure_0.filter((arg0) => !closure_10.isFavorite(arg0));
                if (0 !== closure_4.length) {
                  closure_5 = !favoriteGuildEnabled.favoriteGuildEnabled;
                  let obj3 = { update: null };
                  obj3[0] = function update(favoriteChannels) {
                    flag = false;
                    let parentId = null;
                    if ("parentId" in closure_1) {
                      parentId = tmp.parentId;
                    }
                    if (parentId == null) {
                      parentId = closure_1_12;
                    }
                    let tmp4 = parentId;
                    const iter = dependencyMap2[Symbol.iterator]();
                    const nextResult = iter.next();
                    while (iter !== undefined) {
                      let tmp7 = nextResult;
                      let tmp9 = callback;
                      let tmp10 = dependencyMap;
                      let tmp8 = closure_1_21;
                      let tmp11 = closure_1_21(favoriteChannels.favoriteChannels, callback(1306).FavoriteChannelType.REFERENCE_ORIGINAL);
                      let tmp12 = tmp11;
                      if (null != tmp11) {
                        let tmp54 = flag;
                        if (!flag) {
                          let tmp55 = closure_1_22;
                          let tmp56 = closure_1_22(tmp11);
                        }
                        let tmp57 = flag;
                        if (flag) {
                          let tmp59 = iter;
                          iter.return();
                          break;
                        } else {
                          let tmp58 = iter;
                          iter.return();
                          return false;
                        }
                      } else {
                        let tmp66 = closure_1;
                        let tmp67 = closure_1;
                        if ("categoryName" in closure_1) {
                          let tmp13 = flag;
                          if (!flag) {
                            let tmp14 = closure_1_26;
                            let tmp15 = tmp66;
                            let tmp16 = closure_1_26(favoriteChannels.favoriteChannels, tmp67.categoryName);
                            if (tmp16 == null) {
                              let tmp17 = closure_1_25;
                              let tmp18 = tmp66;
                              tmp16 = closure_1_25(favoriteChannels.favoriteChannels, tmp67.categoryName);
                            }
                            tmp4 = tmp16;
                            let tmp19 = callback;
                            let tmp20 = dependencyMap;
                            let tmp8Result = tmp8(favoriteChannels.favoriteChannels, callback(1306).FavoriteChannelType.REFERENCE_ORIGINAL);
                            if (null != tmp8Result) {
                              let tmp23 = flag;
                              if (!flag) {
                                let tmp24 = closure_1_22;
                                let tmp25 = tmp8Result;
                                let tmp26 = closure_1_22(tmp22);
                              }
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
                        let tmp33 = dependencyMap;
                        let FavoriteChannel = callback(1306).FavoriteChannel;
                        let obj = { nickname: "", type: null, channelType: null, position: null, parentId: null };
                        let tmp34 = callback;
                        let tmp35 = dependencyMap;
                        obj[1] = callback(1306).FavoriteChannelType.REFERENCE_ORIGINAL;
                        obj = undefined;
                        if (null != channel) {
                          let tmp37 = callback;
                          let tmp38 = dependencyMap;
                          let UInt32Value = callback(1337).UInt32Value;
                          obj = { value: null };
                          let tmp39 = channel;
                          obj[0] = tmp31.type;
                          obj = UInt32Value.create(obj);
                        }
                        obj[2] = obj;
                        let tmp40 = closure_1_17;
                        obj[3] = closure_1_17(favoriteChannels.favoriteChannels);
                        let tmp41 = tmp4;
                        obj[4] = tmp4;
                        favoriteChannels.favoriteChannels[tmp7] = FavoriteChannel.create(obj);
                        let tmp42 = closure_1_18;
                        let tmp43 = closure_1_18(favoriteChannels.favoriteChannels);
                        let tmp44 = closure_1_19;
                        let tmp45 = nextResult;
                        let tmp46 = closure_1_19(favoriteChannels.favoriteChannels, tmp7);
                        flag = true;
                        let tmp47 = callback;
                        let tmp48 = dependencyMap;
                        let obj3 = callback(10275);
                        let tmp50 = channel;
                        let type;
                        let tmp49 = dependencyMap;
                        if (tmp31 != null) {
                          type = tmp31.type;
                        }
                        if (type == null) {
                          type = null;
                        }
                        let tmp52 = closure_1_20;
                        let result = obj3.trackFavoritesGuildAddToFavorites(tmp49, type, closure_1_20(favoriteChannels.favoriteChannels));
                        continue;
                      }
                      if (flag) {
                        flag = closure_5;
                      }
                      if (flag) {
                        let tmp60 = flag;
                        flag = !flag;
                      }
                      if (flag) {
                        let tmp61 = callback;
                        let tmp62 = dependencyMap;
                        let BoolValue = callback(1337).BoolValue;
                        favoriteChannels.guildVisible = BoolValue.create({ value: true });
                        let tmp63 = callback;
                        let tmp64 = dependencyMap;
                        let obj4 = callback(10275);
                        let str = "auto";
                        let result1 = obj4.trackFavoritesGuildVisibilitySettingToggled("auto", true);
                      }
                    }
                  };
                  c6 = 2;
                  c7 = 1;
                  let obj4 = { value: null, done: false };
                  obj4[0] = callback2(obj3);
                  return obj4;
                } else {
                  c7 = 3;
                }
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              let someResult = !flag;
              if (!flag) {
                someResult = closure_4.some((arg0) => closure_10.isFavorite(arg0));
              }
              if (someResult) {
                callback(table[21])();
              }
            }
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp22) {
          c7 = tmp;
          throw tmp22;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_28 = tmp;
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
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_3 = tmp5;
              c2 = tmp2;
              c0 = undefined;
              c1 = undefined;
              c2 = undefined;
              ({ channelIds: c0, parentId: c1, source: c2 } = c0);
              c4 = 1;
              c5 = 1;
              return { value: "Object", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj1 = { value: null, done: true };
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
              obj3[0] = closure_27(c0, obj2, c2);
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
  closure_29 = tmp;
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
  favorite = closure_10.getFavorite(closure_0);
  if (null != favorite) {
    obj = { update: null };
    obj[0] = function update(favoriteChannels) {
      delete tmp2[tmp];
      if (favorite.type === callback(favorite[11]).FavoriteChannelType.CATEGORY) {
        for (const key10014 in arg0.favoriteChannels) {
          let tmp16 = key10014;
          let tmp17 = callback;
          if (arg0.favoriteChannels[key10014].parentId !== callback) {
            continue;
          } else {
            let tmp3 = closure_1_12;
            arg0.favoriteChannels[key10014].parentId = closure_1_12;
            continue;
          }
          continue;
        }
      }
      closure_1_18(favoriteChannels.favoriteChannels);
      if (flag) {
        let tmp9 = null;
        if (favorite.type !== callback(favorite[11]).FavoriteChannelType.CATEGORY) {
          const channel = closure_1_6.getChannel(callback);
          let type;
          if (channel != null) {
            type = channel.type;
          }
          if (type == null) {
            type = null;
          }
          tmp9 = type;
        }
        const obj = callback(favorite[20]);
        const tmp6 = favorite;
        const result = obj.trackFavoritesGuildRemoveFromFavorites(tmp9, flag(favorite[13]).filter(favoriteChannels.favoriteChannels, (type) => type.type !== callback(table[11]).FavoriteChannelType.CATEGORY).length);
        const arr = flag(favorite[13]);
      }
    };
    ({ update, batched } = obj);
    if (batched === undefined) {
      batched = false;
    }
    const PreloadedUserSettingsActionCreators = _require(favorite[18]).PreloadedUserSettingsActionCreators;
    const UserSettingsDelay = _require(favorite[18]).UserSettingsDelay;
    const tmp4 = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", update, tmp4, onSaveFailed);
    const guildId = store.getGuildId();
    let tmp2Result = tmp2(tmp3[22]);
    let isFavoritesGuildIdResult = tmp2Result.isFavoritesGuildId(guildId);
    if (isFavoritesGuildIdResult) {
      isFavoritesGuildIdResult = channelId.getChannelId() === closure_0;
    }
    if (isFavoritesGuildIdResult) {
      tmp2Result = tmp2(tmp3[23]);
      tmp2Result.transitionTo(closure_15.CHANNEL(guildId));
    }
  }
}
function _addFavoriteCategory() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_2 = tmp2;
              closure_1 = tmp3;
              let callback;
              closure_1 = undefined;
              if (obj8.isFavoritesGuildCategoryNameValid(callback)) {
                callback = str2.trim();
                let obj2 = closure_1_1(tmp23[19]);
                const _Date = Date;
                closure_1 = obj2.fromTimestamp(Date.now());
                obj1 = { update: null };
                obj1[0] = function update(favoriteChannels) {
                  favoriteChannels = favoriteChannels.favoriteChannels;
                  closure_1_18(favoriteChannels);
                  let obj = callback2(tmp2[13]);
                  if (obj.size(favoriteChannels) >= closure_1_13) {
                    obj = { limit: null, canUpsell: false };
                    obj[0] = tmp5;
                    let tmp6 = obj;
                  } else {
                    const favoritesAccess = tmp(tmp2[14]).getFavoritesAccess();
                    const favoriteLimit = favoritesAccess.favoriteLimit;
                    tmp6 = null;
                    if (favoriteLimit > 0) {
                      tmp6 = null;
                      if (callback(tmp2[11]).FavoriteChannelType.CATEGORY !== tmp(tmp2[11]).FavoriteChannelType.CATEGORY) {
                        let tmp4Result = tmp4(tmp2[13]);
                        tmp6 = null;
                        if (tmp4Result.filter(favoriteChannels, (type) => type.type !== callback(table[11]).FavoriteChannelType.CATEGORY).length >= favoriteLimit) {
                          obj = { limit: null, canUpsell: null };
                          obj[0] = favoriteLimit;
                          obj[1] = tmp14;
                          tmp6 = obj;
                        }
                      }
                    }
                    const tmpResult = tmp(tmp2[14]);
                  }
                  if (null != tmp6) {
                    const limit = tmp6.limit;
                    if (tmp6.canUpsell) {
                      tmp4(tmp2[15])(limit);
                    } else {
                      tmp4Result = tmp4(tmp2[16]);
                      obj1 = { title: null, body: null };
                      const intl = tmp(tmp2[17]).intl;
                      obj1[0] = intl.string(tmp(tmp2[17]).t["+XYXtZ"]);
                      const intl2 = tmp(tmp2[17]).intl;
                      const obj2 = { count: null };
                      obj2[0] = limit;
                      obj1[1] = intl2.formatToPlainString(tmp(tmp2[17]).t.JaIyFi, obj2);
                      tmp4Result.show(obj1);
                    }
                    return false;
                  } else {
                    closure_1_25(favoriteChannels.favoriteChannels, callback, callback2);
                  }
                };
                c3 = 1;
                c4 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = closure_1_24(obj1);
                return obj2;
              } else {
                c4 = 3;
                return { value: null, done: true };
              }
              obj8 = callback(closure_1_2[22]);
              str2 = callback;
              tmp23 = closure_1_2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            let tmp11 = null;
            if (null != favorite.getFavorite(closure_1)) {
              tmp11 = closure_1;
            }
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = tmp11;
            return obj;
          }
        } catch (tmp16) {
          c4 = tmp;
          throw tmp16;
        }
      }
    })();
  });
  closure_31 = tmp;
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
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              return { value: "Object", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
  closure_32 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _autoAddJoinedThreadToFavorites() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c1 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              if (closure_1_10.autoAddJoinedThreads) {
                if (!obj8.isFavorite(tmp21)) {
                  const channel = closure_1_6.getChannel(tmp21);
                  if (null != channel) {
                    if (channel.isThread()) {
                      let hasAccess = channel.isPrivate();
                      if (!hasAccess) {
                        hasAccess = closure_1_7.can(closure_1_16.VIEW_CHANNEL, channel);
                      }
                      if (hasAccess) {
                        let obj2 = callback(table[14]);
                        hasAccess = obj2.getFavoritesAccess().hasAccess;
                      }
                      if (hasAccess) {
                        const items = [tmp21];
                        obj1 = { categoryName: null };
                        obj1[0] = closure_1_11;
                        table = 1;
                        c1 = 1;
                        obj2 = { value: null, done: false };
                        obj2[0] = closure_1_27(items, obj1, "auto_thread_join", { silent: true });
                        return obj2;
                      }
                    }
                  }
                }
              }
              obj8 = closure_1_10;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c1 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp15) {
          c1 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  closure_33 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME: unpackModuleId, FAVORITES_UNCATEGORIZED_PARENT_ID: closure_12, MAX_FAVORITE_CHANNELS: map1 } = require("date"));
({ NOOP: closure_14, Routes: closure_15 } = ME);
let result = require("set").fileFinishedImporting("modules/favorites/FavoritesActionCreators.tsx");

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
  closure_1 = trimmed;
  if (closure_10.isFavorite(categoryId)) {
    const obj = { update: null };
    obj[0] = function update(arg0) {
      let str = closure_1;
      if (closure_1 == null) {
        str = "";
      }
      arg0.favoriteChannels[closure_0].nickname = str;
    };
    ({ update, batched } = obj);
    if (batched === undefined) {
      batched = false;
    }
    const PreloadedUserSettingsActionCreators = _require(1370).PreloadedUserSettingsActionCreators;
    const UserSettingsDelay = _require(1370).UserSettingsDelay;
    const tmp3 = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", update, tmp3, onSaveFailed);
  }
};
export const addFavoriteCategory = function addFavoriteCategory(first) {
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
export const autoAddJoinedThreadToFavorites = function autoAddJoinedThreadToFavorites(id) {
  const self = this;
  const apply = _autoAddJoinedThreadToFavorites.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setFavoritesAutoAddJoinedThreads = function setFavoritesAutoAddJoinedThreads(arg0) {
  const _require = arg0;
  ({ update, batched } = {
    update(autoAddJoinedThreads) {
      let tmp3 = autoAddJoinedThreads.autoAddJoinedThreads !== callback;
      if (tmp3) {
        if (!tmp2) {
          if (tmp4) {
            autoAddJoinedThreads.autoAddJoinedThreads = tmp2;
          }
          tmp3 = tmp4;
        } else {
          const favoriteChannels = autoAddJoinedThreads.favoriteChannels;
          let str = closure_1_11.trim();
          let tmp7 = favoriteChannels;
          let tmp8;
          const formatted = str.toLowerCase();
          const keys = Object.keys();
          if (keys !== undefined) {
            let favoritesAccess = keys[tmp];
            while (favoritesAccess !== undefined) {
              let tmp15 = favoritesAccess;
              str = favoriteChannels[favoritesAccess];
              let tmp16 = callback;
              let tmp17 = closure_1_2;
              if (str.type !== callback(closure_1_2[11]).FavoriteChannelType.CATEGORY) {
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
            str = closure_1_2;
            closure_1_18(favoriteChannels);
            tmp7 = closure_1_1;
            if (obj5.size(favoriteChannels) >= closure_1_13) {
              favoritesAccess = { limit: null, canUpsell: false };
              favoritesAccess[0] = tmp21;
              let tmp11 = favoritesAccess;
            } else {
              favoritesAccess = tmp18(str[14]).getFavoritesAccess();
              const favoriteLimit = favoritesAccess.favoriteLimit;
              tmp11 = null;
              if (favoriteLimit > 0) {
                favoritesAccess = tmp18(str[11]).FavoriteChannelType.CATEGORY;
                tmp11 = null;
                if (callback(closure_1_2[11]).FavoriteChannelType.CATEGORY !== favoritesAccess) {
                  let tmp7Result = tmp7(str[13]);
                  favoritesAccess = tmp7Result.filter(favoriteChannels, (type) => type.type !== callback(table[11]).FavoriteChannelType.CATEGORY).length;
                  tmp11 = null;
                  if (favoritesAccess >= favoriteLimit) {
                    favoritesAccess = { limit: null, canUpsell: null };
                    favoritesAccess[0] = favoriteLimit;
                    favoritesAccess[1] = tmp22;
                    tmp11 = favoritesAccess;
                  }
                }
              }
              const tmp18Result = tmp18(str[14]);
            }
            if (null == tmp11) {
              str = closure_1_25;
              tmp8 = closure_1_25(favoriteChannels, closure_1_11);
            } else if (!tmp11.canUpsell) {
              tmp7Result = tmp7(str[16]);
              let obj = { title: null, body: null };
              const intl = tmp18(str[17]).intl;
              obj[0] = intl.string(tmp18(str[17]).t["+XYXtZ"]);
              const intl2 = tmp18(str[17]).intl;
              obj = { count: null };
              obj[0] = tmp11.limit;
              obj[1] = intl2.formatToPlainString(tmp18(str[17]).t.JaIyFi, obj);
              tmp7Result.show(obj);
            }
            str = tmp7(str[15])(favoritesAccess);
            obj5 = closure_1_1(closure_1_2[13]);
          }
        }
      }
      return tmp3;
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = _require(1370).PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = _require(1370).UserSettingsDelay;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", update, batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
};
export const setFavoriteCategoriesCollapsed = function setFavoriteCategoriesCollapsed(arg0, id) {
  const _require = arg0;
  closure_1 = id;
  const PreloadedUserSettingsActionCreators = _require(1370).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", function update(favoriteChannels) {
    let tmp = closure_1;
    if (null != closure_1) {
      const items = [tmp];
      let keys = items;
    } else {
      const _Object = Object;
      keys = Object.keys(favoriteChannels.favoriteChannels);
    }
    tmp = keys[Symbol.iterator]();
  }, _require(1370).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
};
export const updateFavoriteChannels = function updateFavoriteChannels(dnDUpdates) {
  const _require = dnDUpdates;
  if (0 !== dnDUpdates.length) {
    const obj = { update: null };
    obj[0] = function update(favoriteChannels) {
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
            parent_id = closure_1_12;
          }
          favoriteChannels.favoriteChannels[id].parentId = parent_id;
          let tmp9 = closure_1_19;
          let tmp10 = id;
          let tmp11 = closure_1_19(favoriteChannels.favoriteChannels, id);
        }
        continue;
      }
      const result = dnDUpdates(closure_1_2[20]).trackFavoritesGuildOrderUpdated();
    };
    ({ update, batched } = obj);
    if (batched === undefined) {
      batched = false;
    }
    const PreloadedUserSettingsActionCreators = _require(1370).PreloadedUserSettingsActionCreators;
    const UserSettingsDelay = _require(1370).UserSettingsDelay;
    let tmp3 = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", update, tmp3, onSaveFailed);
  }
};
export const updateFavoriteChannelParent = function updateFavoriteChannelParent(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  ({ update, batched } = {
    update(favoriteChannels) {
      let tmp2 = closure_1;
      if (closure_1 == null) {
        tmp2 = closure_1_12;
      }
      favoriteChannels.favoriteChannels[callback].parentId = tmp2;
      favoriteChannels = favoriteChannels.favoriteChannels;
      if (null != favoriteChannels[callback]) {
        if (tmp3.parentId !== closure_1_12) {
          let tmp5 = null;
          if (null != tmp3.parentId) {
            tmp5 = favoriteChannels[tmp3.parentId];
          }
          let tmp6 = null != tmp5;
          if (tmp6) {
            tmp6 = tmp5.type === callback(closure_1_2[11]).FavoriteChannelType.CATEGORY;
          }
          if (!tmp6) {
            tmp3.parentId = tmp4;
          }
        }
      }
      const result = callback(closure_1_2[20]).trackFavoritesGuildOrderUpdated();
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = _require(1370).PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = _require(1370).UserSettingsDelay;
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
  const PreloadedUserSettingsActionCreators = updateUserGuildSettings.PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = updateUserGuildSettings.UserSettingsDelay;
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
  const result = handleDCShownToUser.resetDismissibleContentFrameworkStore();
  resetFatigueCooldown();
  const obj = {
    update(arg0) {
      arg0.favoriteChannels = {};
      arg0.guildVisible = undefined;
      arg0.muted = false;
      arg0.autoAddJoinedThreads = false;
    }
  };
  const obj2 = handleDCShownToUser;
  const result1 = hasOfferedFavoritesGuildOnboarding.resetHasOfferedFavoritesGuildOnboarding();
  for (const item10024 of tmp5) {
    let tmp6 = require;
    let tmp7 = dependencyMap;
    let obj4 = updateUserGuildSettings;
    let result2 = obj4.removeDismissedContent(item10024);
    continue;
  }
};
export const setFavoritesGuildVisibility = function setFavoritesGuildVisibility(arg0, server_context_menu) {
  const _require = arg0;
  let str = server_context_menu;
  if (server_context_menu === undefined) {
    str = "settings_page";
  }
  ({ update, batched } = {
    update(guildVisible) {
      let value;
      if (guildVisible.guildVisible != null) {
        value = iter.value;
      }
      if (value === callback) {
        return false;
      } else {
        const BoolValue = callback(closure_1_2[12]).BoolValue;
        const obj = { value: null };
        obj[0] = tmp2;
        guildVisible.guildVisible = BoolValue.create(obj);
        const result = callback(closure_1_2[20]).trackFavoritesGuildVisibilitySettingToggled(settings_page, tmp2);
      }
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = _require(1370).PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = _require(1370).UserSettingsDelay;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", update, batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
};
export const setFavoritesGuildVisibilityFromSettings = function setFavoritesGuildVisibilityFromSettings(arg0) {
  const _require = arg0;
  const settings_page = "settings_page";
  ({ update, batched } = {
    update(guildVisible) {
      let value;
      if (guildVisible.guildVisible != null) {
        value = iter.value;
      }
      if (value === callback) {
        return false;
      } else {
        const BoolValue = callback(closure_1_2[12]).BoolValue;
        const obj = { value: null };
        obj[0] = tmp2;
        guildVisible.guildVisible = BoolValue.create(obj);
        const result = callback(closure_1_2[20]).trackFavoritesGuildVisibilitySettingToggled(settings_page, tmp2);
      }
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = _require(1370).PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = _require(1370).UserSettingsDelay;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", update, batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
  let isFavoritesGuildIdResult = !arg0;
  if (!arg0) {
    let tmpResult = tmp(1912);
    isFavoritesGuildIdResult = tmpResult.isFavoritesGuildId(store.getGuildId());
  }
  if (isFavoritesGuildIdResult) {
    tmpResult = tmp(1222);
    tmpResult.transitionTo(closure_15.ME);
  }
};