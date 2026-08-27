// === Module 14771: getRoleEmojis ===

// Module 14771 (getRoleEmojis)
import useSubscriptionRoleDefault from "useSubscriptionRole" /* 14773 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "_slicedToArray" /* 32 */;
import closure_6 from "noop" /* 19 */;
import closure_7 from "getEmojiToGroupId" /* 5353 */;
import closure_8 from "makeGroupListingIndexSubscriptionListingTag" /* 4083 */;
import AllChannelAccessOptions from "AllChannelAccessOptions" /* 14772 */;
import { GuildRoleSubscriptionBenefitTypes as closure_11 } from "MAX_SUBSCRIPTION_TIERS" /* 14749 */;
import ME from "ME" /* 676 */;
import { SubscriptionIntervalTypes } from "GuildFeatures" /* 1924 */;
import set from "set" /* 2 */;

const require = arg1;
function getRoleEmojis(arr) {
  closure_0 = arg1;
  if (0 === arr.length) {
    return set;
  } else {
    const found = arr.filter((roles) => {
      roles = roles.roles;
      return roles.includes(id);
    });
    const _Set = Set;
    set = new Set(found.map((id) => id.id));
    return set;
  }
}
function clearEditState(NEW_LISTING_EDIT_STATE_ID) {
  const _require = NEW_LISTING_EDIT_STATE_ID;
  _require(705).batchUpdates(() => {
    closure_1_10.setState((listings) => {
      let obj = { listings: null };
      obj = {};
      const merged = Object.assign(listings.listings);
      obj[closure_0] = listings.listings.nonexistantEditStateId;
      obj[0] = obj;
      return obj;
    });
  });
}
function _updateListingPeripheralsFromEditState() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (id === 2) {
        id = 3;
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
          id = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              id = 3;
              throw arg1;
            } else if (arg0 === 2) {
              id = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let lib = tmp5;
              let callback2 = tmp2;
              let callback;
              callback2 = undefined;
              ({ guildId: c0, editStateId: c1 } = callback);
              lib = undefined;
              dependencyMap = undefined;
              id = undefined;
              closure_5 = undefined;
              let roleColor;
              let roleIcon;
              let trialLimit;
              let trialInterval;
              let tierEmojiIds;
              let subscriptionTrial;
              closure_12 = undefined;
              closure_13 = undefined;
              closure_14 = undefined;
              closure_15 = undefined;
              closure_16 = undefined;
              dependencyMap = 1;
              id = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                id = 3;
                throw arg1;
              } else if (arg0 === 2) {
                id = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                lib = trialLimit.getSubscriptionListing(callback2);
                callback2(38)(null != lib, "listing doesnt exist");
                dependencyMap = lib.role_id;
                id = lib.id;
                closure_5 = tierEmojiIds.getState().listings[callback2];
                callback2(38)(null != closure_5, "edit state does not exist");
                roleColor = closure_5.roleColor;
                roleIcon = closure_5.roleIcon;
                trialLimit = closure_5.trialLimit;
                trialInterval = closure_5.trialInterval;
                tierEmojiIds = closure_5.tierEmojiIds;
                let tmp8 = undefined === roleColor;
                if (tmp8) {
                  tmp8 = undefined === roleIcon;
                }
                if (!tmp8) {
                  let obj3 = callback2(5409);
                  let obj2 = { color: null, icon: null, unicodeEmoji: null };
                  obj2[0] = roleColor;
                  let icon;
                  if (roleIcon != null) {
                    icon = roleIcon.icon;
                  }
                  obj2[1] = icon;
                  let unicodeEmoji;
                  if (roleIcon != null) {
                    unicodeEmoji = roleIcon.unicodeEmoji;
                  }
                  obj2[2] = unicodeEmoji;
                  dependencyMap = 2;
                  id = 1;
                  obj3 = { value: null, done: false };
                  obj3[0] = obj3.updateRole(callback, dependencyMap, obj2);
                  return obj3;
                }
              }
            } else {
              if (2 === tmp5) {
                if (arg0 === 1) {
                  id = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  id = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = arg1;
                  return obj4;
                }
              } else if (3 === tmp5) {
                if (arg0 === 1) {
                  id = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  id = 3;
                  const obj5 = { value: null, done: true };
                  obj5[0] = arg1;
                  return obj5;
                }
              } else if (arg0 === 1) {
                id = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                if (undefined !== tierEmojiIds) {
                  closure_12 = callback3(roleIcon.getGuildEmoji(callback), dependencyMap);
                  let obj6 = callback(12);
                  let items = [];
                  HermesBuiltin.arraySpread(tierEmojiIds, 0);
                  const items1 = [];
                  HermesBuiltin.arraySpread(closure_12, 0);
                  closure_13 = obj6.difference(items, items1);
                  let obj7 = callback(12);
                  const items2 = [];
                  HermesBuiltin.arraySpread(closure_12, 0);
                  const items3 = [];
                  HermesBuiltin.arraySpread(tierEmojiIds, 0);
                  closure_14 = obj7.difference(items2, items3);
                  closure_15 = closure_13.map((emojiId) => {
                    const customEmojiById = roleIcon.getCustomEmojiById(emojiId);
                    if (null != customEmojiById) {
                      let obj = _undefined(9097);
                      obj = { guildId: null, emojiId: null, roles: null };
                      obj[0] = _undefined;
                      obj[1] = customEmojiById.id;
                      const items = [];
                      items[HermesBuiltin.arraySpread(customEmojiById.roles, 0)] = dependencyMap;
                      obj[2] = items;
                      return obj.updateEmoji(obj);
                    }
                  });
                  closure_16 = closure_14.map((emojiId) => {
                    const customEmojiById = roleIcon.getCustomEmojiById(emojiId);
                    if (null != customEmojiById) {
                      const roles = customEmojiById.roles;
                      const found = roles.filter((arg0) => arg0 !== closure_3);
                      if (found.length > 0) {
                        let obj = { guildId: null, emojiId: null, roles: null };
                        obj[0] = _undefined;
                        obj[1] = customEmojiById.id;
                        obj[2] = found;
                        let updateEmojiResult = _undefined(9097).updateEmoji(obj);
                        const obj2 = _undefined(9097);
                      } else {
                        obj = _undefined(9097);
                        updateEmojiResult = obj.deleteEmoji(_undefined, customEmojiById.id);
                      }
                      return updateEmojiResult;
                    }
                  });
                  const items4 = [];
                  HermesBuiltin.arraySpread(closure_16, HermesBuiltin.arraySpread(closure_15, 0));
                  dependencyMap = 3;
                  id = 1;
                  obj6 = { value: null, done: false };
                  obj6[0] = Promise.all(items4);
                  return obj6;
                }
              } else {
                id = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              id = 3;
              return { value: "HermesInternal", done: null };
            }
            subscriptionTrial = trialLimit.getSubscriptionTrial(id);
            let tmp25 = null != trialLimit;
            if (!tmp25) {
              tmp25 = null != trialInterval;
            }
            if (!tmp25) {
              let tmp30 = null != subscriptionTrial;
              if (tmp30) {
                tmp30 = null == trialInterval;
              }
              tmp25 = tmp30;
            }
            if (tmp25) {
              obj7 = { trial: null, max_num_active_trial_users: null };
              obj7[0] = trialInterval;
              obj7[1] = trialLimit;
              dependencyMap = 4;
              id = 1;
              const obj8 = { value: null, done: false };
              obj8[0] = lib(6054).updateSubscriptionTrial(callback, id, obj7);
              return obj8;
            }
          }
        } catch (tmp71) {
          id = tmp;
          throw tmp71;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_20 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createListingFromEditState() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    const iter = (function*(arg0, id) {
      if (length === 2) {
        length = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw id;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = id;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          length = 2;
          if (0 === description) {
            if (arg0 === 1) {
              length = 3;
              throw id;
            } else if (arg0 === 2) {
              length = 3;
              obj = { value: null, done: true };
              obj[0] = id;
              return obj;
            } else {
              let name = tmp4;
              closure_4 = 0;
              let callback;
              let callback2;
              let callback3;
              dependencyMap = undefined;
              ({ guildId: c0, editStateId: closure_1, groupListingId: closure_2, onBeforeDispatchNewListing: closure_3 } = callback);
              closure_4 = undefined;
              name = undefined;
              description = undefined;
              length = undefined;
              let intangibleBenefits;
              let priceTier;
              let image;
              let channelAccessFormat;
              closure_12 = undefined;
              id = undefined;
              let items;
              let templateTierCreationAnalyticsContext;
              description = 1;
              length = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                length = 3;
                throw id;
              } else if (arg0 === 2) {
                length = 3;
                obj1 = { value: null, done: true };
                obj1[0] = id;
                return obj1;
              } else {
                closure_4 = image.getState().listings[callback2];
                callback2(38)(null != closure_4, "edit state does not exist");
                name = closure_4.name;
                description = closure_4.description;
                length = closure_4.channelBenefits;
                intangibleBenefits = closure_4.intangibleBenefits;
                priceTier = closure_4.priceTier;
                image = closure_4.image;
                channelAccessFormat = closure_4.channelAccessFormat;
                callback2(38)(null != name, "no name provided");
                callback2(38)(null != description, "no description provided");
                callback2(38)(null != priceTier, "no priceTier provided");
                callback2(38)(null != image, "no image provided");
                closure_12 = channelAccessFormat === priceTier.ALL_CHANNELS_ACCESS;
                id = callback3;
                if (null == id) {
                  description = 2;
                  length = 1;
                  let obj2 = { value: null, done: false };
                  obj2[0] = callback3(6054).createSubscriptionGroupListing(callback, {});
                  return obj2;
                } else {
                  let tmp9 = null != length;
                  if (tmp9) {
                    tmp9 = length.length > 0;
                  }
                  if (tmp9) {
                    let obj7 = callback(14777);
                    description = 3;
                    length = 1;
                    let obj3 = { value: null, done: false };
                    obj3[0] = obj7.createChannelsFromTemplateTierBenefits(callback, length);
                    return obj3;
                  }
                }
              }
            } else if (2 === tmp4) {
              if (arg0 === 1) {
                length = 3;
                throw id;
              } else if (arg0 === 2) {
                length = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = id;
                return obj4;
              } else {
                id = id.id;
              }
            } else if (arg0 === 1) {
              length = 3;
              throw id;
            } else if (arg0 === 2) {
              length = 3;
              obj = { value: null, done: true };
              obj[0] = id;
              return obj;
            }
            callback2 = 0;
            callback3 = length;
            if (length == null) {
              callback3 = [];
            }
            items = [];
            callback2 = HermesBuiltin.arraySpread(callback3, callback2);
            dependencyMap = intangibleBenefits;
            if (intangibleBenefits == null) {
              dependencyMap = [];
            }
            callback2 = HermesBuiltin.arraySpread(dependencyMap, callback2);
            obj2 = callback(14777);
            templateTierCreationAnalyticsContext = obj2.getTemplateTierCreationAnalyticsContext(callback2, callback);
            obj3 = callback3(6054);
            const obj5 = { guildId: null, groupListingId: null, data: null, analyticsContext: null, onBeforeDispatchNewListing: null };
            obj5[0] = callback;
            obj5[1] = id;
            const obj6 = { can_access_all_channels: null, image: null, name: null, description: null, benefits: null, priceTier: null };
            obj6[0] = closure_12;
            obj6[1] = image;
            obj6[2] = name;
            obj6[3] = description;
            obj6[4] = items;
            obj6[5] = priceTier;
            obj5[2] = obj6;
            obj5[3] = templateTierCreationAnalyticsContext;
            obj5[4] = dependencyMap;
            length = 3;
            obj7 = { value: null, done: true };
            obj7[0] = obj3.createSubscriptionListing(obj5);
            return obj7;
          }
        } catch (tmp52) {
          length = tmp;
          throw tmp52;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_21 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AllChannelAccessOptions: c9, useEditStateStore: c10 } = AllChannelAccessOptions);
({ CurrencyCodes: closure_12, DEFAULT_ROLE_COLOR: map1 } = ME);
let closure_15 = [];
let closure_16 = [];
let set = new Set();
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx");

export const useListingEditState = function useListingEditState(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let tmp = arg2;
  closure_2 = arg2;
  const tmp2 = callback3((setListing) => setListing.setListing);
  closure_3 = tmp2;
  const items = [tmp2, arg0, arg1, arg2];
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    callback(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[closure_1_1];
        }
        if (tmp4 == null) {
          tmp4 = closure_1_2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[closure_1_1] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items);
  const tmp4 = callback3((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[first];
    }
    return tmp2;
  });
  if (undefined !== tmp4) {
    tmp = tmp4;
  }
  const items1 = [tmp, callback];
  return items1;
};
export const useClearEditStateOnUnmount = function useClearEditStateOnUnmount(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const effect = React.useEffect(() => () => {
    closure_1_0(closure_1_3[19]).batchUpdates(() => {
      closure_1_10.setState((listings) => {
        let obj = { listings: null };
        obj = {};
        const merged = Object.assign(listings.listings);
        obj[closure_0] = listings.listings.nonexistantEditStateId;
        obj[0] = obj;
        return obj;
      });
    });
  }, items);
};
export const useName = function useName(arg0) {
  let _require = arg0;
  let name = (name) => {
    let str;
    if (name != null) {
      str = name.name;
    }
    if (str == null) {
      str = "";
    }
    return str;
  };
  const items = [closure_8];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_8.getSubscriptionListing(closure_0));
  let memo = stateFromStores;
  const tmp2 = name(5893)(() => first);
  dependencyMap = tmp2;
  const items1 = [stateFromStores, tmp2];
  memo = React.useMemo(() => callback(c2), items1);
  _require = arg0;
  name = "name";
  dependencyMap = undefined;
  const tmp4 = callback3((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items2 = [tmp4, arg0, "name", memo];
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    callback(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[closure_1_1];
        }
        if (tmp4 == null) {
          tmp4 = closure_1_2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[closure_1_1] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = callback3((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[first];
    }
    return tmp2;
  });
  if (undefined !== tmp6) {
    memo = tmp6;
  }
  const items3 = [memo, callback];
  return items3;
};
export const usePriceTier = function usePriceTier(editStateId) {
  let _require = editStateId;
  let priceTier = (arg0) => {
    let price;
    if (arg0 != null) {
      const first = arg0.subscription_plans[0];
      if (first != null) {
        price = first.price;
      }
    }
    return price;
  };
  const items = [closure_8];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_8.getSubscriptionListing(closure_0));
  let memo = stateFromStores;
  const tmp2 = priceTier(5893)(() => first);
  dependencyMap = tmp2;
  const items1 = [stateFromStores, tmp2];
  memo = React.useMemo(() => callback(c2), items1);
  _require = editStateId;
  priceTier = "priceTier";
  dependencyMap = undefined;
  const tmp4 = callback3((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items2 = [tmp4, editStateId, "priceTier", memo];
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    callback(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[closure_1_1];
        }
        if (tmp4 == null) {
          tmp4 = closure_1_2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[closure_1_1] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = callback3((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[first];
    }
    return tmp2;
  });
  if (undefined !== tmp6) {
    memo = tmp6;
  }
  const items3 = [memo, callback];
  return items3;
};
export const useDescription = function useDescription(arg0) {
  let _require = arg0;
  let description = (description) => {
    let str;
    if (description != null) {
      str = description.description;
    }
    if (str == null) {
      str = "";
    }
    return str;
  };
  const items = [closure_8];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_8.getSubscriptionListing(closure_0));
  let memo = stateFromStores;
  const tmp2 = description(5893)(() => first);
  dependencyMap = tmp2;
  const items1 = [stateFromStores, tmp2];
  memo = React.useMemo(() => callback(c2), items1);
  _require = arg0;
  description = "description";
  dependencyMap = undefined;
  const tmp4 = callback3((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items2 = [tmp4, arg0, "description", memo];
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    callback(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[closure_1_1];
        }
        if (tmp4 == null) {
          tmp4 = closure_1_2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[closure_1_1] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = callback3((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[first];
    }
    return tmp2;
  });
  if (undefined !== tmp6) {
    memo = tmp6;
  }
  const items3 = [memo, callback];
  return items3;
};
export const useImage = function useImage(editStateId, arg1) {
  let _require = editStateId;
  let image = (image_asset) => {
    image_asset = undefined;
    if (image_asset != null) {
      image_asset = image_asset.image_asset;
    }
    if (null != image_asset) {
      return editStateId(table[11]).getAssetURL(image_asset.application_id, image_asset.image_asset, editStateId);
    }
  };
  const items = [closure_8];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_8.getSubscriptionListing(closure_0));
  let memo = stateFromStores;
  const tmp2 = image(5893)(() => first);
  dependencyMap = tmp2;
  const items1 = [stateFromStores, tmp2];
  memo = React.useMemo(() => callback(c2), items1);
  _require = editStateId;
  image = "image";
  dependencyMap = undefined;
  const tmp4 = callback3((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items2 = [tmp4, editStateId, "image", memo];
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    callback(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[closure_1_1];
        }
        if (tmp4 == null) {
          tmp4 = closure_1_2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[closure_1_1] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = callback3((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[first];
    }
    return tmp2;
  });
  if (undefined !== tmp6) {
    memo = tmp6;
  }
  const items3 = [memo, callback];
  return items3;
};
export const useApplicationId = function useApplicationId(listingId) {
  const _require = listingId;
  const f96400 = (application_id) => {
    application_id = undefined;
    if (application_id != null) {
      application_id = application_id.application_id;
    }
    return application_id;
  };
  const items = [closure_8];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_8.getSubscriptionListing(closure_0));
  const tmp2 = f96400(5893)(() => first);
  dependencyMap = tmp2;
  const items1 = [stateFromStores, tmp2];
  return React.useMemo(() => callback(c2), items1);
};
export const useRoleIcon = function useRoleIcon(arg0, arg1) {
  const tmp = roleIcon(14773)(arg1, arg0);
  closure_0 = tmp;
  const items = [tmp];
  let memo = React.useMemo(() => {
    let icon;
    if (closure_0 != null) {
      icon = tmp.icon;
    }
    const obj = { icon, unicodeEmoji: null };
    let unicodeEmoji;
    if (closure_0 != null) {
      unicodeEmoji = tmp.unicodeEmoji;
    }
    obj[1] = unicodeEmoji;
    return obj;
  }, items);
  closure_0 = arg0;
  roleIcon = "roleIcon";
  dependencyMap = undefined;
  const tmp3 = callback3((setListing) => setListing.setListing);
  dependencyMap = tmp3;
  const items1 = [tmp3, arg0, "roleIcon", memo];
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    callback(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[closure_1_1];
        }
        if (tmp4 == null) {
          tmp4 = closure_1_2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[closure_1_1] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items1);
  const tmp5 = callback3((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[first];
    }
    return tmp2;
  });
  if (undefined !== tmp5) {
    memo = tmp5;
  }
  const items2 = [memo, callback];
  return items2;
};
export const useRole = function useRole(listingId, guildId) {
  closure_0 = listingId;
  const tmp = useSubscriptionRoleDefault(guildId, listingId);
  importDefault = tmp;
  const tmp2 = callback3((arg0) => {
    let roleColor;
    if (arg0.listings[closure_0] != null) {
      roleColor = tmp.roleColor;
    }
    return roleColor;
  });
  closure_2 = tmp2;
  const tmp3 = callback3((arg0) => {
    let roleIcon;
    if (arg0.listings[closure_0] != null) {
      roleIcon = tmp.roleIcon;
    }
    return roleIcon;
  });
  dependencyMap = tmp3;
  const items = [tmp, tmp3, tmp2];
  return React.useMemo(() => {
    let DEFAULT_PREVIEW_ROLE = closure_1;
    if (closure_1 == null) {
      DEFAULT_PREVIEW_ROLE = listingId(14774).DEFAULT_PREVIEW_ROLE;
    }
    const obj = {};
    const merged = Object.assign(DEFAULT_PREVIEW_ROLE);
    if (undefined !== dependencyMap) {
      let str = tmp4.icon;
      if (str == null) {
        str = "";
      }
      obj.icon = str;
      let str2 = tmp4.unicodeEmoji;
      if (str2 == null) {
        str2 = "";
      }
      obj.unicodeEmoji = str2;
    }
    if (undefined !== closure_2) {
      obj.color = tmp5;
      obj.colorString = listingId(688).int2hex(tmp5);
      const obj2 = listingId(688);
    }
    return obj;
  }, items);
};
export const useRoleColor = function useRoleColor(editStateId, guildId) {
  const tmp = roleColor(14773)(guildId, editStateId);
  closure_0 = tmp;
  const items = [tmp];
  let memo = React.useMemo(() => {
    let color;
    if (editStateId != null) {
      color = editStateId.color;
    }
    if (color == null) {
      color = closure_1_13;
    }
    return color;
  }, items);
  closure_0 = editStateId;
  roleColor = "roleColor";
  dependencyMap = undefined;
  const tmp3 = callback3((setListing) => setListing.setListing);
  dependencyMap = tmp3;
  const items1 = [tmp3, editStateId, "roleColor", memo];
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    callback(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[closure_1_1];
        }
        if (tmp4 == null) {
          tmp4 = closure_1_2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[closure_1_1] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items1);
  const tmp5 = callback3((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[first];
    }
    return tmp2;
  });
  if (undefined !== tmp5) {
    memo = tmp5;
  }
  const items2 = [memo, callback];
  return items2;
};
export const useChannelAccessFormat = function useChannelAccessFormat(editStateId, guildId) {
  const tmp = channelAccessFormat(14773)(guildId, editStateId);
  closure_0 = tmp;
  const items = [tmp];
  let memo = React.useMemo(() => {
    if (null == editStateId) {
      let SOME_CHANNELS_ACCESS = closure_1_9.SOME_CHANNELS_ACCESS;
    } else {
      SOME_CHANNELS_ACCESS = editStateId(table[15]).hasViewChannelPermission(tmp) ? tmp4.ALL_CHANNELS_ACCESS : tmp4.SOME_CHANNELS_ACCESS;
      const obj = editStateId(table[15]);
    }
    return SOME_CHANNELS_ACCESS;
  }, items);
  closure_0 = editStateId;
  channelAccessFormat = "channelAccessFormat";
  dependencyMap = undefined;
  const tmp3 = callback3((setListing) => setListing.setListing);
  dependencyMap = tmp3;
  const items1 = [tmp3, editStateId, "channelAccessFormat", memo];
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    callback(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[closure_1_1];
        }
        if (tmp4 == null) {
          tmp4 = closure_1_2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[closure_1_1] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items1);
  const tmp5 = callback3((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[first];
    }
    return tmp2;
  });
  if (undefined !== tmp5) {
    memo = tmp5;
  }
  const items2 = [memo, callback];
  return items2;
};
export const useChannelBenefits = function useChannelBenefits(listingId) {
  let _require = listingId;
  let channelBenefits = (role_benefits) => {
    if (null == role_benefits) {
      let found = closure_15;
    } else {
      const benefits = role_benefits.role_benefits.benefits;
      found = benefits.filter(listingId(table[16]).isChannelBenefit);
    }
    return found;
  };
  const items = [closure_8];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_8.getSubscriptionListing(closure_0));
  let memo = stateFromStores;
  const tmp2 = channelBenefits(5893)(() => first);
  dependencyMap = tmp2;
  const items1 = [stateFromStores, tmp2];
  memo = React.useMemo(() => callback(c2), items1);
  _require = listingId;
  channelBenefits = "channelBenefits";
  dependencyMap = undefined;
  const tmp4 = callback3((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items2 = [tmp4, listingId, "channelBenefits", memo];
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    callback(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[closure_1_1];
        }
        if (tmp4 == null) {
          tmp4 = closure_1_2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[closure_1_1] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = callback3((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[first];
    }
    return tmp2;
  });
  if (undefined !== tmp6) {
    memo = tmp6;
  }
  const items3 = [memo, callback];
  return items3;
};
export const useIntangibleBenefits = function useIntangibleBenefits(listingId) {
  let _require = listingId;
  let intangibleBenefits = (role_benefits) => {
    if (null == role_benefits) {
      let found = closure_16;
    } else {
      const benefits = role_benefits.role_benefits.benefits;
      found = benefits.filter(listingId(table[16]).isIntangibleBenefit);
    }
    return found;
  };
  const items = [closure_8];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_8.getSubscriptionListing(closure_0));
  let memo = stateFromStores;
  const tmp2 = intangibleBenefits(5893)(() => first);
  dependencyMap = tmp2;
  const items1 = [stateFromStores, tmp2];
  memo = React.useMemo(() => callback(c2), items1);
  _require = listingId;
  intangibleBenefits = "intangibleBenefits";
  dependencyMap = undefined;
  const tmp4 = callback3((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items2 = [tmp4, listingId, "intangibleBenefits", memo];
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    callback(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[closure_1_1];
        }
        if (tmp4 == null) {
          tmp4 = closure_1_2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[closure_1_1] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = callback3((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[first];
    }
    return tmp2;
  });
  if (undefined !== tmp6) {
    memo = tmp6;
  }
  const items3 = [memo, callback];
  return items3;
};
export const useTierEmojiIds = function useTierEmojiIds(listingId, guildId) {
  let _require = guildId;
  const tmp = tierEmojiIds(14773)(guildId, listingId);
  tierEmojiIds = tmp;
  const items = [closure_7];
  const items1 = [guildId];
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items, () => closure_1_7.getGuildEmoji(closure_0), items1);
  let memo = stateFromStoresArray;
  const items2 = [stateFromStoresArray, tmp];
  memo = React.useMemo(() => {
    if (null == tierEmojiIds) {
      set = closure_1_17;
    } else {
      const id = tmp.id;
      if (0 === memo.length) {
        set = closure_1_17;
      } else {
        const found = arr.filter((roles) => {
          roles = roles.roles;
          return roles.includes(id);
        });
        const _Set = Set;
        set = new Set(found.map((id) => id.id));
      }
      arr = memo;
    }
    return set;
  }, items2);
  _require = listingId;
  tierEmojiIds = "tierEmojiIds";
  dependencyMap = undefined;
  const tmp4 = callback3((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items3 = [tmp4, listingId, "tierEmojiIds", memo];
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    callback(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[closure_1_1];
        }
        if (tmp4 == null) {
          tmp4 = closure_1_2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[closure_1_1] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items3);
  const tmp6 = callback3((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[first];
    }
    return tmp2;
  });
  if (undefined !== tmp6) {
    memo = tmp6;
  }
  const items4 = [memo, callback];
  return items4;
};
export const useTrialInterval = function useTrialInterval(editStateId) {
  const subscriptionTrial = _require(14756).useSubscriptionTrial(editStateId);
  let active_trial;
  const obj = _require(14756);
  if (subscriptionTrial != null) {
    active_trial = subscriptionTrial.active_trial;
  }
  if (active_trial == null) {
    active_trial = null;
  }
  let selectedOption = trialInterval(14776)(active_trial).selectedOption;
  if (selectedOption == null) {
    selectedOption = null;
  }
  _require = editStateId;
  trialInterval = "trialInterval";
  const tmp5 = callback3((setListing) => setListing.setListing);
  dependencyMap = tmp5;
  const items = [tmp5, editStateId, "trialInterval", selectedOption];
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    callback(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[closure_1_1];
        }
        if (tmp4 == null) {
          tmp4 = closure_1_2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[closure_1_1] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items);
  const tmp7 = callback3((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[first];
    }
    return tmp2;
  });
  if (undefined !== tmp7) {
    selectedOption = tmp7;
  }
  const items1 = [selectedOption, callback];
  return items1;
};
export const useTrialLimit = function useTrialLimit(editStateId) {
  const subscriptionTrial = _require(14756).useSubscriptionTrial(editStateId);
  let prop;
  if (subscriptionTrial != null) {
    prop = subscriptionTrial.max_num_active_trial_users;
  }
  if (prop == null) {
    prop = null;
  }
  _require = editStateId;
  const trialLimit = "trialLimit";
  const tmp3 = callback3((setListing) => setListing.setListing);
  dependencyMap = tmp3;
  const items = [tmp3, editStateId, "trialLimit", prop];
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    callback(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[closure_1_1];
        }
        if (tmp4 == null) {
          tmp4 = closure_1_2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[closure_1_1] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items);
  const tmp5 = callback3((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[first];
    }
    return tmp2;
  });
  if (undefined !== tmp5) {
    prop = tmp5;
  }
  const items1 = [prop, callback];
  return items1;
};
export const useHasChanges = function useHasChanges(first) {
  closure_0 = first;
  return callback3((arg0) => undefined !== arg0.listings[closure_0]);
};
export const useHasChangesForEditStateIds = function useHasChangesForEditStateIds(arg0) {
  closure_0 = arg0;
  return callback3((arg0) => {
    for (const item10006 of closure_0) {
      if (undefined !== arg0.listings[item10006]) {
        let tmp = obj;
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  });
};
export const useSubscriptionPlan = function useSubscriptionPlan(listingId) {
  let _require = listingId;
  let first = (arg0) => {
    first = undefined;
    if (arg0 != null) {
      first = arg0.subscription_plans[0];
    }
    return first;
  };
  const items = [closure_8];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_8.getSubscriptionListing(closure_0));
  c2 = stateFromStores;
  let tmp2 = first(5893)(() => first);
  dependencyMap = tmp2;
  const items1 = [stateFromStores, tmp2];
  const memo = React.useMemo(() => callback(c2), items1);
  _require = listingId;
  first = "priceTier";
  c2 = undefined;
  dependencyMap = undefined;
  let tmp4 = callback3((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items2 = [tmp4, listingId, "priceTier", undefined];
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    callback(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[closure_1_1];
        }
        if (tmp4 == null) {
          tmp4 = closure_1_2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[closure_1_1] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = callback3((arg0) => {
    let tmp2;
    if (arg0.listings[closure_0] != null) {
      tmp2 = tmp[first];
    }
    return tmp2;
  });
  let tmp7;
  if (undefined !== tmp6) {
    tmp7 = tmp6;
  }
  const items3 = [tmp7, callback];
  first = callback2(items3, 1)[0];
  const items4 = [memo, first];
  const items5 = [
    React.useMemo(() => {
      let num = first;
      if (first == null) {
        let price;
        if (listingId != null) {
          price = listingId.price;
        }
        num = price;
      }
      if (num == null) {
        num = 0;
      }
      const obj = { price: num, currency: null, interval: null, interval_count: null, id: null };
      let currency;
      if (listingId != null) {
        currency = tmp2.currency;
      }
      if (currency == null) {
        currency = closure_1_12.USD;
      }
      obj[1] = currency;
      let interval;
      if (listingId != null) {
        interval = tmp2.interval;
      }
      if (interval == null) {
        interval = closure_1_14.MONTH;
      }
      obj[2] = interval;
      let num2;
      if (listingId != null) {
        num2 = tmp2.interval_count;
      }
      if (num2 == null) {
        num2 = 1;
      }
      obj[3] = num2;
      let str;
      if (listingId != null) {
        str = tmp2.id;
      }
      if (str == null) {
        str = "";
      }
      obj[4] = str;
      return obj;
    }, items4)
  ];
  return items5;
};
export { clearEditState };
export const useCreateOrUpdateListingFromEditState = function useCreateOrUpdateListingFromEditState() {
  [tmp2, closure_0] = callback2(React.useState(false), 2);
  const tmp3 = callback2(React.useState(), 2);
  closure_1 = tmp3[1];
  closure_0 = undefined;
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    let id = 0;
    closure_6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
              c2 = tmp4;
              c1 = tmp8;
              c0 = undefined;
              c1 = undefined;
              c2 = undefined;
              c3 = undefined;
              c4 = undefined;
              ({ guildId: c0, editStateId: c1, groupListingId: c2, onBeforeDispatchNewListing: c3, onAfterDispatchNewListing: c4 } = c0);
              c5 = undefined;
              c6 = undefined;
              c7 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              id = closure_1_1;
              let subscriptionListing = closure_2_8.getSubscriptionListing(id);
              c4 = 2;
              callback(true);
              closure_1_1(undefined);
              if (null != closure_2_6) {
                callback2(closure_2_3[20])(null != closure_1_2, "groupListingId is null");
                const obj2 = { guildId: null, editStateId: null, groupListingId: null };
                obj2[0] = callback;
                obj2[1] = id;
                obj2[2] = closure_1_2;
                c5 = 4;
                c6 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = (function updateListingFromEditState(editStateId) {
                  editStateId = editStateId.editStateId;
                  ({ guildId, groupListingId } = editStateId);
                  subscriptionListing = subscriptionListing.getSubscriptionListing(editStateId);
                  _undefined2(_undefined4[20])(null != subscriptionListing, "listing doesnt exist");
                  const tmp4 = state.getState().listings[editStateId];
                  _undefined2(_undefined4[20])(null != tmp4, "edit state does not exist");
                  ({ name, description, channelBenefits, intangibleBenefits, priceTier, image, channelAccessFormat } = tmp4);
                  let obj = {};
                  if (name !== subscriptionListing.name) {
                    obj.name = name;
                  }
                  if (description !== subscriptionListing.description) {
                    obj.description = description;
                  }
                  const first = subscriptionListing.subscription_plans[0];
                  let price;
                  if (first != null) {
                    price = first.price;
                  }
                  if (priceTier !== price) {
                    obj.priceTier = priceTier;
                  }
                  if (null != image) {
                    obj.image = image;
                  }
                  if (null != channelAccessFormat) {
                    obj.can_access_all_channels = channelAccessFormat === constants.ALL_CHANNELS_ACCESS;
                  }
                  if (null != channelBenefits) {
                    const benefits = subscriptionListing.role_benefits.benefits;
                    const benefits1 = subscriptionListing.role_benefits.benefits;
                    const found = benefits.filter(_undefined(tmp2[16]).isChannelBenefit);
                    const found1 = benefits1.filter(_undefined(tmp2[16]).isIntangibleBenefit);
                    if (channelBenefits == null) {
                      channelBenefits = found;
                    }
                    const items = [];
                    let arraySpreadResult = HermesBuiltin.arraySpread(channelBenefits, 0);
                    if (intangibleBenefits == null) {
                      intangibleBenefits = found1;
                    }
                    arraySpreadResult = HermesBuiltin.arraySpread(intangibleBenefits, arraySpreadResult);
                    obj.benefits = items;
                  }
                  if (!obj2.isEmpty(obj)) {
                    obj = { guildId: null, groupListingId: null, listingId: null, data: null };
                    obj[0] = guildId;
                    obj[1] = groupListingId;
                    obj[2] = editStateId;
                    obj[3] = obj;
                    subscriptionListing = _undefined3(tmp2[22]).updateSubscriptionListing(obj);
                    const obj3 = _undefined3(tmp2[22]);
                  }
                  return subscriptionListing;
                })(obj2);
                return obj3;
              } else {
                const obj4 = { guildId: null, editStateId: null, groupListingId: null, onBeforeDispatchNewListing: null };
                obj4[0] = callback;
                obj4[1] = closure_2_5;
                obj4[2] = closure_2_2;
                obj4[3] = closure_2_3;
                c5 = 5;
                c6 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = (function createListingFromEditState(arg0) {
                  const self = this;
                  const apply = closure_21.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(obj4);
                return obj5;
              }
            }
          } else if (2 === tmp8) {
            c4 = 0;
            callback(false);
            throw c3;
          } else if (3 === tmp8) {
            c4 = 1;
            closure_8 = c3;
            if ("getAnyErrorMessage" in closure_8) {
              closure_1_1(closure_8);
              c4 = 0;
              callback(false);
              c6 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              throw closure_8;
            }
          } else {
            if (4 === tmp8) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 0;
                callback(false);
                c6 = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = arg1;
                return obj6;
              } else {
                const obj7 = { guildId: null, editStateId: null };
                obj7[0] = callback;
                obj7[1] = id;
                (function updateListingPeripheralsFromEditState(arg0) {
                  const self = this;
                  const apply = closure_20.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(obj7);
                c5 = 6;
                c6 = 1;
              }
            } else if (5 === tmp8) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                id = arg1;
                id = id.id;
                (function moveEditState(closure_1_1, id) {
                  const _undefined = closure_1_1;
                  closure_1 = id;
                  _undefined(_undefined4[19]).batchUpdates(() => {
                    closure_1_10.setState(() => { ... });
                  });
                })(closure_1_1, id);
                if (c4 != null) {
                  tmp24(id);
                }
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              callback(false);
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2_19(c5);
              c4 = 0;
              callback(false);
              c6 = 3;
              return { value: true, done: true };
            }
            c4 = 0;
            callback(false);
            c6 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
          }
        } catch (tmp70) {
          c3 = tmp70;
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp70;
          } else if (tmp2 === tmp72) {
            c5 = tmp;
          } else {
            c5 = tmp3;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const tmp = callback2(React.useState(false), 2);
  return {
    loading: tmp2,
    error: tmp3[0],
    handleCreateOrUpdateFromEditState: React.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, [])
  };
};
export const useEditStateIds = function useEditStateIds(groupListingId, guildId, arg2) {
  const _require = guildId;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = { includeSoftDeleted: false };
  }
  let subscriptionListingsForGroup;
  closure_2 = undefined;
  dependencyMap = undefined;
  closure_4 = undefined;
  subscriptionListingsForGroup = _require(14756).useSubscriptionListingsForGroup(groupListingId, obj);
  const tmp2 = callback3((arg0) => arg0.editStateIdsForGroup[closure_0]);
  closure_2 = tmp2;
  const tmp3 = callback3((setEditStateIdsForGroup) => setEditStateIdsForGroup.setEditStateIdsForGroup);
  dependencyMap = tmp3;
  const tmp4 = callback3((setListing) => setListing.setListing);
  closure_4 = tmp4;
  obj = {
    editStateIds: React.useMemo(() => {
      const items = [...subscriptionListingsForGroup.map((id) => id.id)];
      let items1 = closure_2;
      if (closure_2 == null) {
        items1 = [];
      }
      HermesBuiltin.arraySpread(items1, tmp);
      return items;
    }, items),
    addNewEditStateId: React.useCallback(() => {
      guildId = guildId(514).v4();
      dependencyMap(guildId, (arg0) => {
        let items = arg0;
        if (arg0 == null) {
          items = [];
        }
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items, 0)] = closure_0;
        return items1;
      });
    }, items1),
    addNewEditStateFromTemplate: React.useCallback((listings) => {
      guildId = listings;
      const v4Result = guildId(514).v4();
      subscriptionListingsForGroup = v4Result;
      dependencyMap(guildId, (arg0) => {
        let items = arg0;
        if (arg0 == null) {
          items = [];
        }
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items, 0)] = closure_1;
        return items1;
      });
      listings = listings.listings;
      const item = listings.forEach((arg0) => {
        closure_0 = arg0;
        closure_1_4(closure_1, () => {
          obj = { name: closure_0.name, description: closure_0.description, priceTier: closure_0.price_tier, image: closure_0.image, intangibleBenefits: closure_0.additional_perks, channelBenefits: channels.map((id) => ({ ref_id: id.id, ref_type: constants.CHANNEL, description: id.description, name: id.name, emoji_name: id.emoji_name })), roleIcon: obj, roleColor: closure_0.role_color, usedTemplate: closure_0.category };
          channels = closure_0.channels;
          obj = { unicodeEmoji: "Array", icon: 0 };
          obj[1] = closure_0.image;
          return obj;
        });
      });
      return v4Result;
    }, items2),
    removeEditStateId: React.useCallback((arg0) => {
      closure_0 = arg0;
      dependencyMap(closure_0, (arg0) => {
        let items = arg0;
        if (arg0 == null) {
          items = [];
        }
        return items.filter((arg0) => arg0 !== closure_0);
      });
    }, items3)
  };
  items = [tmp2, subscriptionListingsForGroup];
  items1 = [guildId, tmp3];
  items2 = [guildId, tmp3, tmp4];
  items3 = [guildId, tmp3];
  return obj;
};