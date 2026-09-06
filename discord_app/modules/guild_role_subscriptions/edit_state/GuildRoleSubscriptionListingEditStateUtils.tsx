// discord_app/modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import v1 from "../../../../_runtime/01256_v1.js";
import RolePermissionUtils from "../RolePermissionUtils.tsx";
import StoreUtils from "../../../utils/StoreUtils.tsx";
import GuildRoleSubscriptionsHooks from "../GuildRoleSubscriptionsHooks.tsx";
import useSubscriptionRoleDefault from "../useSubscriptionRole.tsx";
import Contants from "Contants.tsx";
import useTrialIntervalOptionsDefault from "../useTrialIntervalOptions.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import GuildRoleSubscriptionsStore from "../GuildRoleSubscriptionsStore.tsx";

require = fn;
function getRoleEmojis(arr, arg1) {
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
  _require = NEW_LISTING_EDIT_STATE_ID;
  require("ReactBatchUpdates").batchUpdates(() => {
    state.setState((listings) => {
      let obj = { listings: null };
      obj = {};
      const merged = Object.assign(listings.listings);
      obj[closure_1_0] = listings.listings.nonexistantEditStateId;
      obj.listings = obj;
      return obj;
    });
  });
}
let closure_20 = async function _updateListingPeripheralsFromEditState(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
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
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ guildId: closure_129_0, editStateId: closure_129_1 } = guildId);
          let subscriptionListing;
          let role_id;
          let id;
          closure_129_5 = undefined;
          let roleColor;
          let roleIcon;
          let trialLimit;
          let trialInterval;
          let tierEmojiIds;
          let subscriptionTrial;
          closure_129_12 = undefined;
          closure_129_13 = undefined;
          closure_129_14 = undefined;
          closure_129_15 = undefined;
          closure_129_16 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            subscriptionListing = closure_130_8.getSubscriptionListing(closure_129_1);
            closure_130_1(closure_130_3[20])(null != subscriptionListing, "listing doesnt exist");
            role_id = subscriptionListing.role_id;
            id = subscriptionListing.id;
            closure_129_5 = closure_130_10.getState().listings[closure_129_1];
            closure_130_1(closure_130_3[20])(null != closure_129_5, "edit state does not exist");
            roleColor = closure_129_5.roleColor;
            roleIcon = closure_129_5.roleIcon;
            trialLimit = closure_129_5.trialLimit;
            trialInterval = closure_129_5.trialInterval;
            tierEmojiIds = closure_129_5.tierEmojiIds;
            let tmp8 = undefined === roleColor;
            if (tmp8) {
              tmp8 = undefined === roleIcon;
            }
            if (!tmp8) {
              let obj3 = closure_130_1(closure_130_3[21]);
              let obj2 = { color: roleColor, icon: null, unicodeEmoji: null };
              let icon;
              if (roleIcon != null) {
                icon = roleIcon.icon;
              }
              obj2.icon = icon;
              let unicodeEmoji;
              if (roleIcon != null) {
                unicodeEmoji = roleIcon.unicodeEmoji;
              }
              obj2.unicodeEmoji = unicodeEmoji;
              c3 = 2;
              c4 = 1;
              obj3 = { value: null, done: false };
              obj3.value = obj3.updateRole(closure_129_0, role_id, obj2);
              return obj3;
            }
          }
        } else {
          if (2 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj5 = { value, done: true };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (undefined !== tierEmojiIds) {
              closure_129_12 = closure_130_18(closure_130_7.getGuildEmoji(closure_129_0), role_id);
              let obj6 = closure_130_0(closure_130_3[23]);
              let items = [];
              HermesBuiltin.arraySpread(tierEmojiIds, 0);
              const items1 = [];
              HermesBuiltin.arraySpread(closure_129_12, 0);
              closure_129_13 = obj6.difference(items, items1);
              let obj7 = closure_130_0(closure_130_3[23]);
              const items2 = [];
              HermesBuiltin.arraySpread(closure_129_12, 0);
              const items3 = [];
              HermesBuiltin.arraySpread(tierEmojiIds, 0);
              closure_129_14 = obj7.difference(items2, items3);
              closure_129_15 = closure_129_13.map((item) => {
                const customEmojiById = closure_2_7.getCustomEmojiById(item);
                if (null != customEmojiById) {
                  guildId(10336);
                  const obj = { guildId, emojiId: customEmojiById.id, roles: null };
                  const items = [];
                  items[HermesBuiltin.arraySpread(customEmojiById.roles, 0)] = dependencyMap;
                  obj.roles = items;
                  return obj.updateEmoji(obj);
                }
              });
              closure_129_16 = closure_129_14.map((item) => {
                const customEmojiById = closure_2_7.getCustomEmojiById(item);
                if (null != customEmojiById) {
                  const roles = customEmojiById.roles;
                  const found = roles.filter((item) => item !== dependencyMap);
                  if (found.length > 0) {
                    let obj = { guildId, emojiId: customEmojiById.id, roles: found };
                    let updateEmojiResult = guildId(10336).updateEmoji(obj);
                    const obj2 = guildId(10336);
                  } else {
                    obj = guildId(10336);
                    updateEmojiResult = obj.deleteEmoji(guildId, customEmojiById.id);
                  }
                  return updateEmojiResult;
                }
              });
              const items4 = [];
              HermesBuiltin.arraySpread(closure_129_16, HermesBuiltin.arraySpread(closure_129_15, 0));
              c3 = 3;
              c4 = 1;
              obj6 = { value: Promise.all(items4), done: false };
              return obj6;
            }
          } else {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
        subscriptionTrial = closure_130_8.getSubscriptionTrial(id);
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
          obj7 = { trial: trialInterval, max_num_active_trial_users: trialLimit };
          c3 = 4;
          c4 = 1;
          const obj8 = {
            value: closure_130_2(closure_130_3[22]).updateSubscriptionTrial(closure_129_0, id, obj7),
            done: false,
          };
          return obj8;
        }
      }
    } catch (tmp71) {
      c4 = tmp;
      throw tmp71;
    }
  }
};
let closure_21 = async function _createListingFromEditState(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
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
          closure_5 = tmp4;
          c4 = 0;
          closure_132_0 = undefined;
          closure_132_1 = undefined;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          ({
            guildId: closure_132_0,
            editStateId: closure_132_1,
            groupListingId: closure_132_2,
            onBeforeDispatchNewListing: closure_132_3,
          } = closure_0);
          closure_132_4 = undefined;
          let name;
          let description;
          let channelBenefits;
          let intangibleBenefits;
          let priceTier;
          let image;
          let channelAccessFormat;
          closure_132_12 = undefined;
          let id;
          closure_132_14 = undefined;
          let templateTierCreationAnalyticsContext;
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            closure_132_4 = closure_133_10.getState().listings[closure_132_1];
            closure_133_1(closure_133_3[20])(null != closure_132_4, "edit state does not exist");
            name = closure_132_4.name;
            description = closure_132_4.description;
            channelBenefits = closure_132_4.channelBenefits;
            intangibleBenefits = closure_132_4.intangibleBenefits;
            priceTier = closure_132_4.priceTier;
            image = closure_132_4.image;
            channelAccessFormat = closure_132_4.channelAccessFormat;
            closure_133_1(closure_133_3[20])(null != name, "no name provided");
            closure_133_1(closure_133_3[20])(null != description, "no description provided");
            closure_133_1(closure_133_3[20])(null != priceTier, "no priceTier provided");
            closure_133_1(closure_133_3[20])(null != image, "no image provided");
            closure_132_12 = channelAccessFormat === closure_133_9.ALL_CHANNELS_ACCESS;
            id = closure_132_2;
            if (null == id) {
              c6 = 2;
              c7 = 1;
              let obj2 = {
                value: closure_133_2(closure_133_3[22]).createSubscriptionGroupListing(closure_132_0, {}),
                done: false,
              };
              return obj2;
            } else {
              let tmp9 = null != channelBenefits;
              if (tmp9) {
                tmp9 = channelBenefits.length > 0;
              }
              if (tmp9) {
                let obj7 = closure_133_0(closure_133_3[25]);
                c6 = 3;
                c7 = 1;
                let obj3 = {
                  value: obj7.createChannelsFromTemplateTierBenefits(closure_132_0, channelBenefits),
                  done: false,
                };
                return obj3;
              }
            }
          }
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            id = value.id;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
        closure_1 = 0;
        closure_2 = channelBenefits;
        if (channelBenefits == null) {
          closure_2 = [];
        }
        const items = [];
        closure_1 = HermesBuiltin.arraySpread(closure_2, closure_1);
        closure_3 = intangibleBenefits;
        if (intangibleBenefits == null) {
          closure_3 = [];
        }
        closure_1 = HermesBuiltin.arraySpread(closure_3, closure_1);
        closure_132_14 = items;
        obj2 = closure_133_0(closure_133_3[25]);
        templateTierCreationAnalyticsContext = obj2.getTemplateTierCreationAnalyticsContext(
          closure_132_1,
          closure_132_0,
        );
        obj3 = closure_133_2(closure_133_3[22]);
        const obj5 = {
          guildId: closure_132_0,
          groupListingId: id,
          data: null,
          analyticsContext: null,
          onBeforeDispatchNewListing: null,
        };
        const obj6 = {
          can_access_all_channels: closure_132_12,
          image,
          name,
          description,
          benefits: closure_132_14,
          priceTier,
        };
        obj5.data = obj6;
        obj5.analyticsContext = templateTierCreationAnalyticsContext;
        obj5.onBeforeDispatchNewListing = closure_132_3;
        c7 = 3;
        obj7 = { value: obj3.createSubscriptionListing(obj5), done: true };
        return obj7;
      }
    } catch (tmp52) {
      c7 = tmp;
      throw tmp52;
    }
  }
};
const GuildRoleSubscriptionEditStore = fn(15228);
({ AllChannelAccessOptions: closure_9, useEditStateStore: c10 } = GuildRoleSubscriptionEditStore);
let closure_11 = fn(15205).GuildRoleSubscriptionBenefitTypes;
const Constants = fn(1074);
({ CurrencyCodes: closure_12, DEFAULT_ROLE_COLOR: map1 } = Constants);
const SubscriptionIntervalTypes = fn(1373).SubscriptionIntervalTypes;
let closure_15 = [];
let closure_16 = [];
let set = new Set();
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx",
);

export const useListingEditState = function useListingEditState(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let tmp = arg2;
  closure_2 = arg2;
  const tmp2 = closure_1_10((setListing) => setListing.setListing);
  closure_3 = tmp2;
  const items = [tmp2, arg0, arg1, arg2];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[first];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[first] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items);
  const tmp4 = closure_1_10((arg0) => {
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
  const effect = noop.useEffect(
    () => () => {
      closure_0 = closure_1_0;
      closure_0(dependencyMap[19]).batchUpdates(() => {
        state.setState((listings) => {
          let obj = { listings: null };
          obj = {};
          const merged = Object.assign(listings.listings);
          obj[closure_1_0] = listings.listings.nonexistantEditStateId;
          obj.listings = obj;
          return obj;
        });
      });
    },
    items,
  );
};
export const useName = function useName(arg0) {
  _require = arg0;
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
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildRoleSubscriptionsStore.getSubscriptionListing(closure_0),
  );
  const tmp2 = name(5598)(() => first);
  const items1 = [stateFromStores, tmp2];
  let memo = noop.useMemo(() => closure_3(c2), items1);
  _require = arg0;
  name = "name";
  const tmp4 = closure_10((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items2 = [tmp4, arg0, "name", memo];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[first];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[first] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = closure_10((arg0) => {
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
  _require = editStateId;
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
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildRoleSubscriptionsStore.getSubscriptionListing(closure_0),
  );
  const tmp2 = priceTier(5598)(() => first);
  const items1 = [stateFromStores, tmp2];
  let memo = noop.useMemo(() => closure_3(c2), items1);
  _require = editStateId;
  priceTier = "priceTier";
  const tmp4 = closure_10((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items2 = [tmp4, editStateId, "priceTier", memo];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[first];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[first] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = closure_10((arg0) => {
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
  _require = arg0;
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
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildRoleSubscriptionsStore.getSubscriptionListing(closure_0),
  );
  const tmp2 = description(5598)(() => first);
  const items1 = [stateFromStores, tmp2];
  let memo = noop.useMemo(() => closure_3(c2), items1);
  _require = arg0;
  description = "description";
  const tmp4 = closure_10((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items2 = [tmp4, arg0, "description", memo];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[first];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[first] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = closure_10((arg0) => {
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
  _require = arg1;
  closure_129_0 = editStateId;
  closure_129_1 = (image_asset) => {
    image_asset = undefined;
    if (image_asset != null) {
      image_asset = image_asset.image_asset;
    }
    if (null != image_asset) {
      return StoreUtils.getAssetURL(image_asset.application_id, image_asset.image_asset, closure_0);
    }
  };
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildRoleSubscriptionsStore.getSubscriptionListing(closure_0),
  );
  closure_129_2 = stateFromStores;
  const tmp2 = image(5598)(() => first);
  closure_129_3 = tmp2;
  const items1 = [stateFromStores, tmp2];
  let memo = noop.useMemo(() => closure_3(c2), items1);
  _require = editStateId;
  image = "image";
  const tmp4 = closure_10((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items2 = [tmp4, editStateId, "image", memo];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[first];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[first] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = closure_10((arg0) => {
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
  _require = listingId;
  const f99294 = (application_id) => {
    application_id = undefined;
    if (application_id != null) {
      application_id = application_id.application_id;
    }
    return application_id;
  };
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildRoleSubscriptionsStore.getSubscriptionListing(closure_0),
  );
  const tmp2 = f99294(5598)(() => first);
  dependencyMap = tmp2;
  const items1 = [stateFromStores, tmp2];
  return noop.useMemo(() => closure_3(c2), items1);
};
export const useRoleIcon = function useRoleIcon(arg0, arg1) {
  const tmp = useSubscriptionRoleDefault(arg1, arg0);
  const items = [tmp];
  let memo = noop.useMemo(() => {
    let icon;
    if (closure_0 != null) {
      icon = tmp.icon;
    }
    const obj = { icon, unicodeEmoji: null };
    let unicodeEmoji;
    if (closure_0 != null) {
      unicodeEmoji = tmp.unicodeEmoji;
    }
    obj.unicodeEmoji = unicodeEmoji;
    return obj;
  }, items);
  closure_0 = arg0;
  const roleIcon = "roleIcon";
  const tmp3 = closure_1_10((setListing) => setListing.setListing);
  closure_3 = tmp3;
  const items1 = [tmp3, arg0, "roleIcon", memo];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[first];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[first] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items1);
  const tmp5 = closure_1_10((arg0) => {
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
  const tmp2 = closure_10((arg0) => {
    let roleColor;
    if (arg0.listings[closure_0] != null) {
      roleColor = tmp.roleColor;
    }
    return roleColor;
  });
  closure_2 = tmp2;
  const tmp3 = closure_10((arg0) => {
    let roleIcon;
    if (arg0.listings[closure_0] != null) {
      roleIcon = tmp.roleIcon;
    }
    return roleIcon;
  });
  dependencyMap = tmp3;
  const items = [tmp, tmp3, tmp2];
  return noop.useMemo(() => {
    let DEFAULT_PREVIEW_ROLE = closure_1;
    if (closure_1 == null) {
      DEFAULT_PREVIEW_ROLE = Contants.DEFAULT_PREVIEW_ROLE;
    }
    const obj = {};
    const merged = Object.assign(DEFAULT_PREVIEW_ROLE);
    if (undefined !== closure_3) {
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
      obj.colorString = utils_ColorUtils.int2hex(tmp5);
    }
    return obj;
  }, items);
};
export const useRoleColor = function useRoleColor(editStateId, guildId) {
  const tmp = roleColor(15229)(guildId, editStateId);
  editStateId = tmp;
  const items = [tmp];
  let memo = noop.useMemo(() => {
    let color;
    if (editStateId != null) {
      color = editStateId.color;
    }
    if (color == null) {
      color = map1;
    }
    return color;
  }, items);
  roleColor = "roleColor";
  const tmp3 = closure_10((setListing) => setListing.setListing);
  dependencyMap = tmp3;
  const items1 = [tmp3, editStateId, "roleColor", memo];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[first];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[first] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items1);
  const tmp5 = closure_10((arg0) => {
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
  const tmp = channelAccessFormat(15229)(guildId, editStateId);
  const items = [tmp];
  let memo = noop.useMemo(() => {
    if (null == closure_0) {
      let SOME_CHANNELS_ACCESS = constants.SOME_CHANNELS_ACCESS;
    } else {
      SOME_CHANNELS_ACCESS = RolePermissionUtils.hasViewChannelPermission(tmp)
        ? tmp4.ALL_CHANNELS_ACCESS
        : tmp4.SOME_CHANNELS_ACCESS;
    }
    return SOME_CHANNELS_ACCESS;
  }, items);
  closure_0 = editStateId;
  channelAccessFormat = "channelAccessFormat";
  const tmp3 = closure_10((setListing) => setListing.setListing);
  dependencyMap = tmp3;
  const items1 = [tmp3, editStateId, "channelAccessFormat", memo];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[first];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[first] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items1);
  const tmp5 = closure_10((arg0) => {
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
  _require = listingId;
  let channelBenefits = (role_benefits) => {
    if (null == role_benefits) {
      let found = closure_1_15;
    } else {
      const benefits = role_benefits.role_benefits.benefits;
      found = benefits.filter(listingId(closure_3[16]).isChannelBenefit);
    }
    return found;
  };
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildRoleSubscriptionsStore.getSubscriptionListing(closure_0),
  );
  const tmp2 = channelBenefits(5598)(() => first);
  const items1 = [stateFromStores, tmp2];
  let memo = noop.useMemo(() => closure_3(c2), items1);
  _require = listingId;
  channelBenefits = "channelBenefits";
  const tmp4 = closure_10((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items2 = [tmp4, listingId, "channelBenefits", memo];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[first];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[first] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = closure_10((arg0) => {
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
  _require = listingId;
  let intangibleBenefits = (role_benefits) => {
    if (null == role_benefits) {
      let found = closure_1_16;
    } else {
      const benefits = role_benefits.role_benefits.benefits;
      found = benefits.filter(listingId(closure_3[16]).isIntangibleBenefit);
    }
    return found;
  };
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildRoleSubscriptionsStore.getSubscriptionListing(closure_0),
  );
  const tmp2 = intangibleBenefits(5598)(() => first);
  const items1 = [stateFromStores, tmp2];
  let memo = noop.useMemo(() => closure_3(c2), items1);
  _require = listingId;
  intangibleBenefits = "intangibleBenefits";
  const tmp4 = closure_10((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items2 = [tmp4, listingId, "intangibleBenefits", memo];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[first];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[first] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = closure_10((arg0) => {
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
  _require = guildId;
  const tmp = tierEmojiIds(15229)(guildId, listingId);
  const items = [EmojiStore];
  const items1 = [guildId];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items,
    () => EmojiStore.getGuildEmoji(closure_0),
    items1,
  );
  const items2 = [stateFromStoresArray, tmp];
  let memo = noop.useMemo(() => {
    if (null != tierEmojiIds) {
      const id = tmp.id;
      if (0 !== memo.length) {
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
  const tmp4 = closure_10((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items3 = [tmp4, listingId, "tierEmojiIds", memo];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[first];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[first] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items3);
  const tmp6 = closure_10((arg0) => {
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
  const subscriptionTrial = GuildRoleSubscriptionsHooks.useSubscriptionTrial(editStateId);
  let active_trial;
  if (subscriptionTrial != null) {
    active_trial = subscriptionTrial.active_trial;
  }
  if (active_trial == null) {
    active_trial = null;
  }
  let selectedOption = useTrialIntervalOptionsDefault(active_trial).selectedOption;
  if (selectedOption == null) {
    selectedOption = null;
  }
  closure_0 = editStateId;
  const trialInterval = "trialInterval";
  const tmp5 = closure_1_10((setListing) => setListing.setListing);
  closure_3 = tmp5;
  const items = [tmp5, editStateId, "trialInterval", selectedOption];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[first];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[first] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items);
  const tmp7 = closure_1_10((arg0) => {
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
  const subscriptionTrial = GuildRoleSubscriptionsHooks.useSubscriptionTrial(editStateId);
  let prop;
  if (subscriptionTrial != null) {
    prop = subscriptionTrial.max_num_active_trial_users;
  }
  if (prop == null) {
    prop = null;
  }
  closure_0 = editStateId;
  const trialLimit = "trialLimit";
  const tmp3 = closure_1_10((setListing) => setListing.setListing);
  closure_3 = tmp3;
  const items = [tmp3, editStateId, "trialLimit", prop];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[first];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[first] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items);
  const tmp5 = closure_1_10((arg0) => {
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
export const useHasChanges = function useHasChanges(arg0) {
  closure_0 = arg0;
  return closure_1_10((arg0) => undefined !== arg0.listings[closure_0]);
};
export const useHasChangesForEditStateIds = function useHasChangesForEditStateIds(arg0) {
  closure_0 = arg0;
  return closure_1_10((arg0) => {
    for (const item10006 of closure_0) {
      if (undefined !== arg0.listings[item10006]) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  });
};
export const useSubscriptionPlan = function useSubscriptionPlan(listingId) {
  closure_129_0 = listingId;
  closure_129_1 = (arg0) => {
    first = undefined;
    if (arg0 != null) {
      first = arg0.subscription_plans[0];
    }
    return first;
  };
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildRoleSubscriptionsStore.getSubscriptionListing(closure_0),
  );
  closure_129_2 = stateFromStores;
  let tmp2 = first(5598)(() => first);
  closure_129_3 = tmp2;
  const items1 = [stateFromStores, tmp2];
  const memo = noop.useMemo(() => closure_3(c2), items1);
  _require = listingId;
  first = "priceTier";
  c2 = undefined;
  let tmp4 = closure_10((setListing) => setListing.setListing);
  dependencyMap = tmp4;
  const items2 = [tmp4, listingId, "priceTier", undefined];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    closure_3(closure_0, (arg0) => {
      let tmpResult = closure_0;
      if (typeof closure_0 === "function") {
        let tmp4;
        if (arg0 != null) {
          tmp4 = arg0[first];
        }
        if (tmp4 == null) {
          tmp4 = c2;
        }
        tmpResult = tmp(tmp4);
      }
      const obj = {};
      obj[first] = tmpResult;
      return Object.assign({}, arg0, obj);
    });
  }, items2);
  const tmp6 = closure_10((arg0) => {
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
  first = _slicedToArray(items3, 1)[0];
  const items4 = [memo, first];
  const items5 = [
    noop.useMemo(() => {
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
        currency = constants2.USD;
      }
      obj.currency = currency;
      let interval;
      if (listingId != null) {
        interval = tmp2.interval;
      }
      if (interval == null) {
        interval = SubscriptionIntervalTypes.MONTH;
      }
      obj.interval = interval;
      let num2;
      if (listingId != null) {
        num2 = tmp2.interval_count;
      }
      if (num2 == null) {
        num2 = 1;
      }
      obj.interval_count = num2;
      let str;
      if (listingId != null) {
        str = tmp2.id;
      }
      if (str == null) {
        str = "";
      }
      obj.id = str;
      return obj;
    }, items4),
  ];
  return items5;
};
export { clearEditState };
export const useCreateOrUpdateListingFromEditState = function useCreateOrUpdateListingFromEditState() {
  [tmp2, closure_0] = _slicedToArray(noop.useState(false), 2);
  const tmp3 = _slicedToArray(noop.useState(), 2);
  closure_1 = tmp3[1];
  closure_0 = asyncGeneratorStep(async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp4;
            closure_1 = tmp8;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            closure_129_4 = undefined;
            ({
              guildId: closure_129_0,
              editStateId: closure_129_1,
              groupListingId: closure_129_2,
              onBeforeDispatchNewListing: closure_129_3,
              onAfterDispatchNewListing: closure_129_4,
            } = closure_0);
            closure_129_5 = undefined;
            let subscriptionListing2;
            closure_129_7 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp8) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            closure_129_5 = closure_129_1;
            subscriptionListing2 = subscriptionListing.getSubscriptionListing(closure_129_5);
            c4 = 2;
            closure_0(true);
            closure_1(undefined);
            if (null != subscriptionListing2) {
              closure_1(dependencyMap[20])(null != closure_129_2, "groupListingId is null");
              const obj2 = { guildId: closure_129_0, editStateId: closure_129_5, groupListingId: closure_129_2 };
              c5 = 4;
              c6 = 1;
              let obj3 = {
                value: (function updateListingFromEditState(editStateId) {
                  editStateId = editStateId.editStateId;
                  ({ guildId, groupListingId } = editStateId);
                  subscriptionListing = subscriptionListing.getSubscriptionListing(editStateId);
                  closure_1_1(38)(null != subscriptionListing, "listing doesnt exist");
                  const tmp4 = closure_1_10.getState().listings[editStateId];
                  closure_1_1(38)(null != tmp4, "edit state does not exist");
                  ({ name, description, channelBenefits, intangibleBenefits, priceTier, image, channelAccessFormat } =
                    tmp4);
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
                    const found = benefits.filter(closure_1_0(15231).isChannelBenefit);
                    const found1 = benefits1.filter(closure_1_0(15231).isIntangibleBenefit);
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
                    obj = { guildId, groupListingId, listingId: editStateId, data: null };
                    obj.data = obj;
                    subscriptionListing = closure_1_2(7255).updateSubscriptionListing(obj);
                    const obj3 = closure_1_2(7255);
                  }
                  return subscriptionListing;
                })(obj2),
                done: false,
              };
              return obj3;
            } else {
              const obj4 = {
                guildId: closure_129_0,
                editStateId: closure_129_5,
                groupListingId: closure_129_2,
                onBeforeDispatchNewListing: closure_129_3,
              };
              c5 = 5;
              c6 = 1;
              const obj5 = {
                value: (function createListingFromEditState() {
                  const self = this;
                  const apply = closure_1_21.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(obj4),
                done: false,
              };
              return obj5;
            }
          }
        } else if (2 === tmp8) {
          c4 = 0;
          closure_0(false);
          throw dependencyMap;
        } else if (3 === tmp8) {
          c4 = 1;
          closure_129_8 = dependencyMap;
          if ("getAnyErrorMessage" in closure_129_8) {
            closure_1(closure_129_8);
            c4 = 0;
            closure_0(false);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            throw closure_129_8;
          }
        } else {
          if (4 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_0(false);
              c6 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const obj7 = { guildId: closure_129_0, editStateId: closure_129_5 };
              (function updateListingPeripheralsFromEditState() {
                const self = this;
                const apply = closure_1_20.apply;
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
              throw value;
            } else if (arg0 !== 2) {
              closure_129_7 = value;
              const id = closure_129_7.id;
              closure_129_5 = id;
              (function moveEditState(arg0, id) {
                closure_0 = arg0;
                closure_1 = id;
                closure_0(1249).batchUpdates(() => {
                  closure_2_10.setState((listings) => {
                    let obj = { listings: null };
                    obj = {};
                    const merged = Object.assign(listings.listings);
                    obj[id] = listings.listings[closure_1_0];
                    obj[closure_1_0] = undefined;
                    obj.listings = obj;
                    return obj;
                  });
                });
              })(closure_129_1, id);
              if (closure_129_4 != null) {
                tmp24(closure_129_7);
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_0(false);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            clearEditState(closure_129_5);
            c4 = 0;
            closure_0(false);
            c6 = 3;
            return { value: true, done: true };
          }
          c4 = 0;
          closure_0(false);
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        }
      } catch (tmp70) {
        dependencyMap = tmp70;
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
  });
  const tmp = _slicedToArray(noop.useState(false), 2);
  return {
    loading: tmp2,
    error: tmp3[0],
    handleCreateOrUpdateFromEditState: noop.useCallback(function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, []),
  };
};
export const useEditStateIds = function useEditStateIds(groupListingId, guildId, arg2) {
  _require = guildId;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = { includeSoftDeleted: false };
  }
  let subscriptionListingsForGroup = require("GuildRoleSubscriptionsHooks").useSubscriptionListingsForGroup(
    groupListingId,
    obj,
  );
  const tmp2 = closure_10((arg0) => arg0.editStateIdsForGroup[closure_0]);
  closure_2 = tmp2;
  const tmp3 = closure_10((setEditStateIdsForGroup) => setEditStateIdsForGroup.setEditStateIdsForGroup);
  dependencyMap = tmp3;
  const tmp4 = closure_10((setListing) => setListing.setListing);
  closure_4 = tmp4;
  obj = { editStateIds: null, addNewEditStateId: null, addNewEditStateFromTemplate: null, removeEditStateId: null };
  let items = [tmp2, subscriptionListingsForGroup];
  obj.editStateIds = noop.useMemo(() => {
    const items = [...subscriptionListingsForGroup.map((id) => id.id)];
    let items1 = closure_2;
    if (closure_2 == null) {
      items1 = [];
    }
    HermesBuiltin.arraySpread(items1, tmp);
    return items;
  }, items);
  let items1 = [guildId, tmp3];
  obj.addNewEditStateId = noop.useCallback(() => {
    closure_0 = v1.v4();
    dependencyMap(closure_0, (arg0) => {
      let items = arg0;
      if (arg0 == null) {
        items = [];
      }
      const items1 = [];
      items1[HermesBuiltin.arraySpread(items, 0)] = closure_0;
      return items1;
    });
  }, items1);
  const items2 = [guildId, tmp3, tmp4];
  obj.addNewEditStateFromTemplate = noop.useCallback((listings) => {
    guildId = listings;
    const v4Result = guildId(1256).v4();
    subscriptionListingsForGroup = v4Result;
    dependencyMap(guildId, (arg0) => {
      let items = arg0;
      if (arg0 == null) {
        items = [];
      }
      const items1 = [];
      items1[HermesBuiltin.arraySpread(items, 0)] = v4Result;
      return items1;
    });
    listings = listings.listings;
    let item = listings.forEach((item) => {
      closure_1_4(closure_1, () => {
        let obj = {
          name: item.name,
          description: item.description,
          priceTier: item.price_tier,
          image: item.image,
          intangibleBenefits: item.additional_perks,
          channelBenefits: null,
          roleIcon: null,
          roleColor: item.role_color,
          usedTemplate: item.category,
        };
        const channels = item.channels;
        obj.channelBenefits = channels.map((id) => ({
          ref_id: id.id,
          ref_type: constants.CHANNEL,
          description: id.description,
          name: id.name,
          emoji_name: id.emoji_name,
        }));
        obj = { unicodeEmoji: "Array", icon: item.image };
        obj.roleIcon = obj;
        return obj;
      });
    });
    return v4Result;
  }, items2);
  const items3 = [guildId, tmp3];
  obj.removeEditStateId = noop.useCallback((arg0) => {
    closure_0 = arg0;
    dependencyMap(closure_0, (arg0) => {
      let items = arg0;
      if (arg0 == null) {
        items = [];
      }
      return items.filter((item) => item !== closure_1_0);
    });
  }, items3);
  return obj;
};
