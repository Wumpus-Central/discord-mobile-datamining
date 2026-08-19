// === Module 9978: getNextPositionFromChannels ===

// Module 9978 (getNextPositionFromChannels)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import applyDefault from "apply" /* 12 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import create from "create" /* 1306 */;
import defineProperty from "defineProperty" /* 1337 */;
import updateUserGuildSettings from "updateUserGuildSettings" /* 1374 */;
import obj132Default from "obj132" /* 4827 */;
import useFavoritesAccess from "useFavoritesAccess" /* 9979 */;
import openFavoritesGuildLimitUpsellDefault from "openFavoritesGuildLimitUpsell" /* 9982 */;
import handleDCShownToUser from "handleDCShownToUser" /* 9987 */;
import hasOfferedFavoritesGuildOnboarding from "hasOfferedFavoritesGuildOnboarding" /* 9988 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { resetFatigueCooldown } from "withContent" /* 1383 */;
import { THREAD_CHANNEL_TYPES } from "createChannelRecord" /* 1395 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import handleConnectionOpen2 from "handleConnectionOpen" /* 4197 */;
import initializeFromUserSettings from "initializeFromUserSettings" /* 1394 */;
import ME from "ME" /* 676 */;
import { Permissions } from "sum" /* 505 */;
import date from "date" /* 1429 */;

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
function cleanFavoriteChannels(obj) {
  for (const key10005 in arg0) {
    let tmp12 = arg0[key10005];
    if (null != tmp12) {
      if (tmp12.type === create.FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        let channel = channel.getChannel(key10005);
        if (null != channel) {
          if (null == tmp12.channelType) {
            let UInt32Value = defineProperty.UInt32Value;
            obj = { value: null };
            obj[0] = channel.type;
            tmp12.channelType = UInt32Value.create(obj);
          }
          let isPrivateResult = channel.isPrivate();
          if (!isPrivateResult) {
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
    if (tmp.parentId !== closure_11) {
      let tmp3 = null;
      if (null != tmp.parentId) {
        tmp3 = favoriteChannels[tmp.parentId];
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
function getReachedLimit(favoriteChannels) {
  cleanFavoriteChannels(favoriteChannels);
  let obj = applyDefault;
  if (obj.size(favoriteChannels) >= closure_12) {
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
        if (tmp2Result.filter(favoriteChannels, (type) => type.type !== callback(table[11]).FavoriteChannelType.CATEGORY).length >= favoriteLimit) {
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
}
function showLimitReachedAlert(limit) {
  limit = limit.limit;
  if (limit.canUpsell) {
    openFavoritesGuildLimitUpsellDefault(limit);
  } else {
    let obj = { title: null, body: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["+XYXtZ"]);
    const intl2 = getSystemLocale.intl;
    obj = { count: null };
    obj[0] = limit;
    obj[1] = intl2.formatToPlainString(getSystemLocale.t.JaIyFi, obj);
    obj132Default.show(obj);
    const tmpResult = obj132Default;
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
    ifNecessary.catch(closure_13);
    const obj = { title: null, body: null };
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
  obj[3] = closure_11;
  arg0[fromTimestampResult] = FavoriteChannel.create(obj);
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
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let findCategoryIdByName = tmp2;
              closure_3 = tmp3;
              closure_0 = callback;
              callback = found;
              found = undefined;
              closure_3 = undefined;
              findCategoryIdByName = function findCategoryIdByName(favoriteChannels, categoryName) {
                const trimmed = categoryName.trim();
                for (const key10009 in arg0) {
                  let tmp4 = arg0[key10009];
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
              found = closure_0.filter((item, index) => !closure_10.isFavorite(item));
              if (0 !== found.length) {
                closure_3 = !closure_1_10.favoriteGuildEnabled;
                obj1 = { update: null };
                obj1[0] = function update(favoriteChannels) {
                  let flag = false;
                  let parentId = null;
                  if ("parentId" in callback) {
                    parentId = tmp.parentId;
                  }
                  if (parentId == null) {
                    parentId = closure_1_11;
                  }
                  let tmp4 = parentId;
                  const iter = found[Symbol.iterator]();
                  const nextResult = iter.next();
                  while (iter !== undefined) {
                    let tmp7 = nextResult;
                    let tmp11 = closure_1_20(favoriteChannels.favoriteChannels, callback(found[11]).FavoriteChannelType.REFERENCE_ORIGINAL);
                    if (null != tmp11) {
                      let tmp54 = closure_1_21(tmp11);
                      if (flag) {
                        iter.return();
                        break;
                      } else {
                        iter.return();
                        return false;
                      }
                    } else {
                      if ("categoryName" in callback) {
                        if (!flag) {
                          let tmp16 = findCategoryIdByName(favoriteChannels.favoriteChannels, callback.categoryName);
                          if (tmp16 == null) {
                            tmp16 = closure_1_24(favoriteChannels.favoriteChannels, callback.categoryName);
                          }
                          tmp4 = tmp16;
                          let tmp8Result = closure_1_20(favoriteChannels.favoriteChannels, callback(found[11]).FavoriteChannelType.REFERENCE_ORIGINAL);
                          if (null != tmp8Result) {
                            let tmp25 = closure_1_21(tmp22);
                            iter.return();
                            return false;
                          }
                        }
                      }
                      channel = channel.getChannel(tmp7);
                      let tmp30 = channel;
                      let FavoriteChannel = callback(found[11]).FavoriteChannel;
                      let obj = { nickname: "", type: null, channelType: null, position: null, parentId: null };
                      obj[1] = callback(found[11]).FavoriteChannelType.REFERENCE_ORIGINAL;
                      obj = undefined;
                      if (null != channel) {
                        let UInt32Value = callback(found[12]).UInt32Value;
                        obj = { value: null };
                        obj[0] = tmp30.type;
                        obj = UInt32Value.create(obj);
                      }
                      obj[2] = obj;
                      obj[3] = closure_1_16(favoriteChannels.favoriteChannels);
                      obj[4] = tmp4;
                      favoriteChannels.favoriteChannels[tmp7] = FavoriteChannel.create(obj);
                      let tmp42 = closure_1_17(favoriteChannels.favoriteChannels);
                      let tmp45 = closure_1_18(favoriteChannels.favoriteChannels, tmp7);
                      flag = true;
                      let obj3 = callback(found[20]);
                      let type;
                      if (tmp30 != null) {
                        type = tmp30.type;
                      }
                      if (type == null) {
                        type = null;
                      }
                      let result = obj3.trackFavoritesGuildAddToFavorites(closure_1, type, closure_1_19(favoriteChannels.favoriteChannels));
                      continue;
                    }
                    if (flag) {
                      flag = closure_3;
                    }
                    if (flag) {
                      let BoolValue = callback(found[12]).BoolValue;
                      favoriteChannels.guildVisible = BoolValue.create({ value: true });
                      let obj4 = callback(found[20]);
                      let result1 = obj4.trackFavoritesGuildVisibilitySettingToggled("auto", true);
                    }
                  }
                };
                c5 = 1;
                c6 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = closure_1_23(obj1);
                return obj2;
              } else {
                c6 = 3;
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            if (found.some((item, index) => closure_10.isFavorite(item))) {
              callback(table[21])();
            }
          }
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp15) {
          c6 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  closure_26 = tmp;
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
              return { value: "ct", done: true };
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
              obj3[0] = callback(c0, obj2, c2);
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
  closure_27 = tmp;
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
  const favorite = closure_10.getFavorite(closure_0);
  if (null != favorite) {
    obj = { update: null };
    obj[0] = function update(favoriteChannels) {
      delete tmp2[tmp];
      if (favorite.type === callback(favorite[11]).FavoriteChannelType.CATEGORY) {
        for (const key10014 in arg0.favoriteChannels) {
          if (arg0.favoriteChannels[key10014].parentId !== callback) {
            continue;
          } else {
            arg0.favoriteChannels[key10014].parentId = closure_1_11;
            continue;
          }
          continue;
        }
      }
      cleanFavoriteChannels(favoriteChannels.favoriteChannels);
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
      tmp2Result.transitionTo(closure_14.CHANNEL(guildId));
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
                let obj2 = closure_1_1(closure_1_2[19]);
                const _Date = Date;
                closure_1 = obj2.fromTimestamp(Date.now());
                obj1 = { update: null };
                obj1[0] = function update(favoriteChannels) {
                  favoriteChannels = favoriteChannels.favoriteChannels;
                  closure_1_17(favoriteChannels);
                  let obj = callback2(tmp2[13]);
                  if (obj.size(favoriteChannels) >= closure_1_12) {
                    obj = { limit: null, canUpsell: false };
                    obj[0] = tmp5;
                    let tmp6 = obj;
                  } else {
                    const favoritesAccess = callback(tmp2[14]).getFavoritesAccess();
                    const favoriteLimit = favoritesAccess.favoriteLimit;
                    tmp6 = null;
                    if (favoriteLimit > 0) {
                      tmp6 = null;
                      if (callback(tmp2[11]).FavoriteChannelType.CATEGORY !== callback(tmp2[11]).FavoriteChannelType.CATEGORY) {
                        let tmp4Result = callback2(tmp2[13]);
                        tmp6 = null;
                        if (tmp4Result.filter(favoriteChannels, (type) => type.type !== callback(table[11]).FavoriteChannelType.CATEGORY).length >= favoriteLimit) {
                          obj = { limit: null, canUpsell: null };
                          obj[0] = favoriteLimit;
                          obj[1] = tmp14;
                          tmp6 = obj;
                        }
                      }
                    }
                    const tmpResult = callback(tmp2[14]);
                  }
                  if (null != tmp6) {
                    const limit = tmp6.limit;
                    if (tmp6.canUpsell) {
                      callback2(tmp2[15])(limit);
                    } else {
                      tmp4Result = callback2(tmp2[16]);
                      obj1 = { title: null, body: null };
                      const intl = callback(tmp2[17]).intl;
                      obj1[0] = intl.string(callback(tmp2[17]).t["+XYXtZ"]);
                      const intl2 = callback(tmp2[17]).intl;
                      const obj2 = { count: null };
                      obj2[0] = limit;
                      obj1[1] = intl2.formatToPlainString(callback(tmp2[17]).t.JaIyFi, obj2);
                      tmp4Result.show(obj1);
                    }
                    return false;
                  } else {
                    closure_1_24(favoriteChannels.favoriteChannels, callback, callback2);
                  }
                };
                c3 = 1;
                c4 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = closure_1_23(obj1);
                return obj2;
              } else {
                c4 = 3;
                return { value: null, done: true };
              }
              obj8 = callback(closure_1_2[22]);
              str2 = callback;
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
  closure_29 = tmp;
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
              return { value: "ct", done: true };
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
  closure_30 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ FAVORITES_UNCATEGORIZED_PARENT_ID: unpackModuleId, MAX_FAVORITE_CHANNELS: closure_12 } = require("date"));
({ NOOP: map1, Routes: closure_14 } = ME);
let result = require("obj132").fileFinishedImporting("modules/favorites/FavoritesActionCreators.tsx");

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
    const PreloadedUserSettingsActionCreators = _require(1374).PreloadedUserSettingsActionCreators;
    const UserSettingsDelay = _require(1374).UserSettingsDelay;
    const tmp3 = batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION;
    PreloadedUserSettingsActionCreators.updateAsync("favorites", update, tmp3, onSaveFailed);
  }
};
export const addFavoriteCategory = function addFavoriteCategory(arg0) {
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
  closure_1 = id;
  const PreloadedUserSettingsActionCreators = _require(1374).PreloadedUserSettingsActionCreators;
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
  }, _require(1374).UserSettingsDelay.FREQUENT_USER_ACTION, onSaveFailed);
};
export const updateFavoriteChannels = function updateFavoriteChannels(dnDUpdates) {
  const _require = dnDUpdates;
  if (0 !== dnDUpdates.length) {
    let obj = { update: null };
    obj[0] = function update(favoriteChannels) {
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
            parent_id = closure_1_11;
          }
          favoriteChannels.favoriteChannels[id].parentId = parent_id;
          let tmp11 = cleanupChannelParentId(favoriteChannels.favoriteChannels, id);
        }
        continue;
      }
      const result = dnDUpdates(dependencyMap[20]).trackFavoritesGuildOrderUpdated();
      const obj = dnDUpdates(dependencyMap[20]);
    };
    ({ update, batched } = obj);
    if (batched === undefined) {
      batched = false;
    }
    const PreloadedUserSettingsActionCreators = _require(1374).PreloadedUserSettingsActionCreators;
    const UserSettingsDelay = _require(1374).UserSettingsDelay;
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
        tmp2 = closure_1_11;
      }
      favoriteChannels.favoriteChannels[callback].parentId = tmp2;
      favoriteChannels = favoriteChannels.favoriteChannels;
      if (null != favoriteChannels[callback]) {
        if (tmp3.parentId !== closure_1_11) {
          let tmp5 = null;
          if (null != tmp3.parentId) {
            tmp5 = favoriteChannels[tmp3.parentId];
          }
          let tmp6 = null != tmp5;
          if (tmp6) {
            tmp6 = tmp5.type === callback(dependencyMap[11]).FavoriteChannelType.CATEGORY;
          }
          if (!tmp6) {
            tmp3.parentId = tmp4;
          }
        }
      }
      const result = callback(dependencyMap[20]).trackFavoritesGuildOrderUpdated();
      const obj = callback(dependencyMap[20]);
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = _require(1374).PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = _require(1374).UserSettingsDelay;
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
    }
  });
  const result = handleDCShownToUser.resetDismissibleContentFrameworkStore();
  resetFatigueCooldown();
  const result1 = hasOfferedFavoritesGuildOnboarding.resetHasOfferedFavoritesGuildOnboarding();
  for (const item10024 of tmp5) {
    let obj4 = updateUserGuildSettings;
    let result2 = obj4.removeDismissedContent(item10024);
    continue;
  }
};
export const setFavoritesGuildVisibility = function setFavoritesGuildVisibility(arg0, server_context_menu) {
  const _require = arg0;
  ({ update, batched } = {
    update(guildVisible) {
      let value;
      if (guildVisible.guildVisible != null) {
        value = iter.value;
      }
      if (value === callback) {
        return false;
      } else {
        const BoolValue = callback(dependencyMap[12]).BoolValue;
        const obj = { value: null };
        obj[0] = callback;
        guildVisible.guildVisible = BoolValue.create(obj);
        const result = callback(dependencyMap[20]).trackFavoritesGuildVisibilitySettingToggled(settings_page, callback);
        const obj2 = callback(dependencyMap[20]);
      }
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = _require(1374).PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = _require(1374).UserSettingsDelay;
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
        const BoolValue = callback(dependencyMap[12]).BoolValue;
        const obj = { value: null };
        obj[0] = callback;
        guildVisible.guildVisible = BoolValue.create(obj);
        const result = callback(dependencyMap[20]).trackFavoritesGuildVisibilitySettingToggled(settings_page, callback);
        const obj2 = callback(dependencyMap[20]);
      }
    }
  });
  if (batched === undefined) {
    batched = false;
  }
  const PreloadedUserSettingsActionCreators = _require(1374).PreloadedUserSettingsActionCreators;
  const UserSettingsDelay = _require(1374).UserSettingsDelay;
  PreloadedUserSettingsActionCreators.updateAsync("favorites", update, batched ? UserSettingsDelay.FREQUENT_USER_ACTION : UserSettingsDelay.INFREQUENT_USER_ACTION, onSaveFailed);
  let isFavoritesGuildIdResult = !arg0;
  if (!arg0) {
    let tmpResult = tmp(1913);
    isFavoritesGuildIdResult = tmpResult.isFavoritesGuildId(store.getGuildId());
  }
  if (isFavoritesGuildIdResult) {
    tmpResult = tmp(1222);
    tmpResult.transitionTo(closure_14.ME);
  }
};