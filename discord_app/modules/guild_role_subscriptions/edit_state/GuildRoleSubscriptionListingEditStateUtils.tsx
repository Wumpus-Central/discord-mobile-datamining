// discord_app/modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx
import react2 from "../../../../_runtime/00576_react.js";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import v1 from "../../../../_runtime/01266_v1.js";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import RolePermissionUtils from "../RolePermissionUtils.tsx";
import StoreUtils from "../../../utils/StoreUtils.tsx";
import useInitialValueDefault from "../../../hooks/useInitialValue.tsx";
import GuildRoleSubscriptionsConstants from "../GuildRoleSubscriptionsConstants.tsx";
import GuildRoleSubscriptionsHooks from "../GuildRoleSubscriptionsHooks.tsx";
import useSubscriptionRoleDefault from "../useSubscriptionRole.tsx";
import Contants from "Contants.tsx";
import useTrialIntervalOptionsDefault from "../useTrialIntervalOptions.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import GuildRoleSubscriptionsStore from "../GuildRoleSubscriptionsStore.tsx";
import GuildRoleSubscriptionEditStore from "GuildRoleSubscriptionEditStore.tsx";
import Constants from "../../../Constants.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c5, c6, c7, dependencyMap, guildId, importDefault, listings;

let c10;
let c9;
let closure_12;
let map1;
const f144737 = () => {
  state.setState((listings) => {
    let obj2;
    obj = { listings: obj2 };
    obj2 = {};
    const merged = Object.assign(listings.listings);
    obj2[closure_1_0] = listings.listings.nonexistantEditStateId;
    return obj;
  });
};
function getRoleEmojis(arr, arg1) {
  let closure_0 = arg1;
  if (0 === arr.length) {
    return set;
  } else {
    const found = arr.filter((roles) => {
      roles = roles.roles;
      return roles.includes(id);
    });
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(found.map((id) => id.id));
    return set;
  }
}
function clearEditState(NEW_LISTING_EDIT_STATE_ID) {
  _require = NEW_LISTING_EDIT_STATE_ID;
  obj = require("react-native");
  obj.batchUpdates(f144737);
}
let obj = function _updateListingPeripheralsFromEditState() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let closure_0;
    let closure_2;
    let icon;
    let obj7;
    let unicodeEmoji;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let subscriptionListing;
        let role_id;
        let id;
        let closure_5;
        let roleColor;
        let roleIcon;
        let trialLimit;
        let trialInterval;
        let tierEmojiIds;
        let subscriptionTrial;
        let closure_13;
        let closure_14;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            ({ guildId: c0, editStateId: c1 } = guildId);
            subscriptionListing = undefined;
            role_id = undefined;
            id = undefined;
            closure_5 = undefined;
            roleColor = undefined;
            roleIcon = undefined;
            trialLimit = undefined;
            trialInterval = undefined;
            tierEmojiIds = undefined;
            subscriptionTrial = undefined;
            closure_12 = undefined;
            closure_13 = undefined;
            closure_14 = undefined;
            closure_15 = undefined;
            closure_16 = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              subscriptionListing = closure_130_8.getSubscriptionListing(c1);
              closure_130_1(closure_130_3[22])(null != subscriptionListing, "listing doesnt exist");
              role_id = subscriptionListing.role_id;
              id = subscriptionListing.id;
              closure_5 = closure_130_10.getState().listings[c1];
              closure_130_1(closure_130_3[22])(null != closure_5, "edit state does not exist");
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
                const obj5 = { color: roleColor, icon, unicodeEmoji };
                icon = undefined;
                const updateRole = closure_130_1(closure_130_3[23]).updateRole;
                const tmp13 = closure_130_1(closure_130_3[23]);
                const tmp14 = c0;
                const tmp15 = role_id;
                if (roleIcon != null) {
                  icon = roleIcon.icon;
                }
                unicodeEmoji = undefined;
                if (roleIcon != null) {
                  unicodeEmoji = roleIcon.unicodeEmoji;
                }
                c3 = 2;
                c4 = 1;
                const obj6 = { value: updateRole(tmp14, tmp15, obj5), done: false };
                return obj6;
              }
            }
          } else {
            if (2 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj8 = { value, done: true };
                return obj8;
              }
            } else if (3 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj9 = { value, done: true };
                return obj9;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 !== 2) {
              if (undefined !== tierEmojiIds) {
                closure_12 = closure_130_20(closure_130_7.getGuildEmoji(c0), role_id);
                let items = [];
                const difference = closure_130_0(closure_130_3[25]).difference;
                const tmp43 = closure_130_0(closure_130_3[25]);
                HermesBuiltin.arraySpread(items, tierEmojiIds, 0);
                const items1 = [];
                HermesBuiltin.arraySpread(items1, closure_12, 0);
                closure_13 = difference(items, items1);
                const items2 = [];
                const difference2 = closure_130_0(closure_130_3[25]).difference;
                const tmp51 = closure_130_0(closure_130_3[25]);
                HermesBuiltin.arraySpread(items2, closure_12, 0);
                const items3 = [];
                HermesBuiltin.arraySpread(items3, tierEmojiIds, 0);
                closure_14 = difference2(items2, items3);
                closure_15 = closure_13.map((item) => {
                  let items;
                  const customEmojiById = closure_2_7.getCustomEmojiById(item);
                  if (null != customEmojiById) {
                    const obj2 = { guildId, emojiId: customEmojiById.id, roles: items };
                    items = [];
                    items[HermesBuiltin.arraySpread(items, customEmojiById.roles, 0)] = closure_1_3;
                    obj = guildId(c3[26]);
                    return obj.updateEmoji(obj2);
                  }
                });
                closure_16 = closure_14.map((item) => {
                  const customEmojiById = closure_2_7.getCustomEmojiById(item);
                  if (null != customEmojiById) {
                    let updateEmojiResult;
                    const roles = customEmojiById.roles;
                    const found = roles.filter((item) => item !== closure_1_3);
                    if (found.length > 0) {
                      const obj3 = { guildId, emojiId: customEmojiById.id, roles: found };
                      const obj2 = guildId(c3[26]);
                      updateEmojiResult = obj2.updateEmoji(obj3);
                    } else {
                      obj = guildId(c3[26]);
                      updateEmojiResult = obj.deleteEmoji(guildId, customEmojiById.id);
                    }
                    return updateEmojiResult;
                  }
                });
                const items4 = [];
                HermesBuiltin.arraySpread(items4, closure_16, HermesBuiltin.arraySpread(items4, closure_15, 0));
                c3 = 3;
                c4 = 1;
                const obj10 = { value: all(items4), done: false };
                return obj10;
              }
            } else {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
          subscriptionTrial = closure_130_8.getSubscriptionTrial(id);
          let tmp26 = null != trialLimit || null != trialInterval;
          if (!tmp26) {
            const tmp31 = null != subscriptionTrial && null == trialInterval;
            tmp26 = tmp31;
          }
          if (tmp26) {
            const obj11 = { trial: trialInterval, max_num_active_trial_users: trialLimit };
            c3 = 4;
            c4 = 1;
            const obj12 = { value: obj7.updateSubscriptionTrial(c0, id, obj11), done: false };
            obj7 = closure_130_2(closure_130_3[24]);
            return obj12;
          }
        }
      } catch (tmp74) {
        c4 = 3;
        throw tmp74;
      }
    }
  });
  return obj(...arguments);
};
obj = function _createListingFromEditState() {
  obj = _asyncToGenerator(async (guildId) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let obj10;
    let obj13;
    let obj4;
    let obj8;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (guildId === 1) {
        throw value;
      } else if (guildId === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let onBeforeDispatchNewListing;
        let closure_4;
        let name;
        let description;
        let channelBenefits;
        let intangibleBenefits;
        let priceTier;
        let image;
        let channelAccessFormat;
        let can_access_all_channels;
        let id;
        let items;
        let analyticsContext;
        c7 = 2;
        if (0 === c6) {
          if (guildId === 1) {
            c7 = 3;
            throw value;
          } else if (guildId === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_5 = tmp4;
            let c4 = 0;
            guildId = undefined;
            c1 = undefined;
            c2 = undefined;
            onBeforeDispatchNewListing = undefined;
            ({ guildId: c0, editStateId: c1, groupListingId: c2, onBeforeDispatchNewListing: c3 } = closure_0);
            closure_4 = undefined;
            name = undefined;
            description = undefined;
            channelBenefits = undefined;
            intangibleBenefits = undefined;
            priceTier = undefined;
            image = undefined;
            channelAccessFormat = undefined;
            can_access_all_channels = undefined;
            id = undefined;
            items = undefined;
            analyticsContext = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          if (1 === c6) {
            if (guildId === 1) {
              c7 = 3;
              throw value;
            } else if (guildId === 2) {
              c7 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_4 = closure_133_10.getState().listings[c1];
              closure_133_1(closure_133_3[22])(null != closure_4, "edit state does not exist");
              name = closure_4.name;
              description = closure_4.description;
              channelBenefits = closure_4.channelBenefits;
              intangibleBenefits = closure_4.intangibleBenefits;
              priceTier = closure_4.priceTier;
              image = closure_4.image;
              channelAccessFormat = closure_4.channelAccessFormat;
              closure_133_1(closure_133_3[22])(null != name, "no name provided");
              closure_133_1(closure_133_3[22])(null != description, "no description provided");
              closure_133_1(closure_133_3[22])(null != priceTier, "no priceTier provided");
              closure_133_1(closure_133_3[22])(null != image, "no image provided");
              can_access_all_channels = channelAccessFormat === closure_133_9.ALL_CHANNELS_ACCESS;
              id = c2;
              if (null == id) {
                c6 = 2;
                c7 = 1;
                const obj7 = { value: obj10.createSubscriptionGroupListing(guildId, {}), done: false };
                obj10 = closure_133_2(closure_133_3[24]);
                return obj7;
              } else {
                const tmp9 = null != channelBenefits && channelBenefits.length > 0;
                if (tmp9) {
                  c6 = 3;
                  c7 = 1;
                  const obj9 = {
                    value: obj8.createChannelsFromTemplateTierBenefits(guildId, channelBenefits),
                    done: false,
                  };
                  obj8 = closure_133_0(closure_133_3[27]);
                  return obj9;
                }
              }
            }
          } else if (2 === c6) {
            if (guildId === 1) {
              c7 = 3;
              throw value;
            } else if (guildId === 2) {
              c7 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              id = value.id;
            }
          } else if (guildId === 1) {
            c7 = 3;
            throw value;
          } else if (guildId === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          }
          let closure_1 = 0;
          let closure_2 = channelBenefits;
          if (channelBenefits == null) {
            closure_2 = [];
          }
          items = [];
          closure_1 = HermesBuiltin.arraySpread(items, closure_2, closure_1);
          let closure_3 = intangibleBenefits;
          if (intangibleBenefits == null) {
            closure_3 = [];
          }
          closure_1 = HermesBuiltin.arraySpread(items, closure_3, closure_1);
          const obj3 = closure_133_0(closure_133_3[27]);
          analyticsContext = obj3.getTemplateTierCreationAnalyticsContext(c1, guildId);
          const obj12 = { guildId, groupListingId: id, data: obj13, analyticsContext, onBeforeDispatchNewListing };
          obj13 = { can_access_all_channels, image, name, description, benefits: items, priceTier };
          c7 = 3;
          const obj14 = { value: obj4.createSubscriptionListing(obj12), done: true };
          obj4 = closure_133_2(closure_133_3[24]);
          return obj14;
        }
      } catch (tmp52) {
        c7 = 3;
        throw tmp52;
      }
    }
  });
  return obj(...arguments);
};
({ AllChannelAccessOptions: c9, useEditStateStore: c10 } = GuildRoleSubscriptionEditStore);
let closure_11 = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionBenefitTypes;
({ CurrencyCodes: closure_12, DEFAULT_ROLE_COLOR: map1 } = Constants);
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let first;
      let closure_0 = arg0;
      let closure_1 = arg1;
      let tmp = arg2;
      let closure_2 = arg2;
      obj = react2;
      const cResult = obj.c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function r(setListing) {
          return setListing.setListing;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const tmp5 = authStore(first);
      let closure_3 = tmp5;
      if (cResult[1] === arg1) {
        if (cResult[2] === arg0) {
          if (cResult[3] === tmp) {
            let tmp6;
            if (cResult[4] === tmp5) {
              tmp6 = cResult[5];
            }
            if (cResult[6] === arg1) {
              let tmp7;
              if (cResult[7] === arg0) {
                tmp7 = cResult[8];
              }
              const tmp4Result = authStore(tmp7);
              if (undefined !== tmp4Result) {
                tmp = tmp4Result;
              }
              if (cResult[9] === tmp6) {
                let tmp9;
                if (cResult[10] === tmp) {
                  tmp9 = cResult[11];
                }
                return tmp9;
              }
              const items = [tmp, tmp6];
              cResult[9] = tmp6;
              cResult[10] = tmp;
              cResult[11] = items;
              tmp9 = items;
            }
            const fn3 = function u(arg0) {
              let tmp2;
              if (arg0.listings[closure_0] != null) {
                tmp2 = tmp[closure_1];
              }
              return tmp2;
            };
            cResult[6] = arg1;
            cResult[7] = arg0;
            cResult[8] = fn3;
            tmp7 = fn3;
          }
        }
      }
      const fn2 = function s(arg0) {
        closure_0 = arg0;
        const tmp = closure_3(closure_0, (arg0) => {
          let tmpResult = closure_0;
          if (typeof closure_0 === "function") {
            let tmp4;
            if (arg0 != null) {
              tmp4 = arg0[closure_1];
            }
            if (tmp4 == null) {
              tmp4 = closure_2;
            }
            tmpResult = tmp(tmp4);
          }
          obj = {};
          obj[closure_1] = tmpResult;
          return Object.assign({}, arg0, obj);
        });
      };
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = tmp;
      cResult[4] = tmp5;
      cResult[5] = fn2;
      tmp6 = fn2;
    }
  : (arg0, arg1, arg2) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let tmp = arg2;
      let closure_2 = arg2;
      let tmp2 = authStore((setListing) => setListing.setListing);
      let closure_3 = tmp2;
      const items = [tmp2, arg0, arg1, arg2];
      const callback = react.useCallback((arg0) => {
        closure_0 = arg0;
        const tmp = closure_3(closure_0, (arg0) => {
          let tmpResult = closure_0;
          if (typeof closure_0 === "function") {
            let tmp4;
            if (arg0 != null) {
              tmp4 = arg0[closure_1];
            }
            if (tmp4 == null) {
              tmp4 = closure_2;
            }
            tmpResult = tmp(tmp4);
          }
          obj = {};
          obj[closure_1] = tmpResult;
          return Object.assign({}, arg0, obj);
        });
      }, items);
      let tmp4 = authStore((arg0) => {
        let tmp2;
        if (arg0.listings[closure_0] != null) {
          tmp2 = tmp[closure_1];
        }
        return tmp2;
      });
      if (undefined !== tmp4) {
        tmp = tmp4;
      }
      const items1 = [tmp, callback];
      return items1;
    };
let closure_15 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp2;
      let tmp3;
      _require = arg0;
      obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] !== arg0) {
        const fn = function t() {
          return () => {
            closure_0 = closure_1_0;
            obj = closure_0(dependencyMap[21]);
            obj.batchUpdates(f144737);
          };
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        tmp3 = items;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = react.useEffect(tmp2, tmp3);
    }
  : (arg0) => {
      let closure_0 = arg0;
      const items = [arg0];
      const effect = react.useEffect(
        () => () => {
          let state;
          closure_0 = closure_1_0;
          obj = closure_0(dependencyMap[21]);
          obj.batchUpdates(f144737);
        },
        items,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      let tmp6;
      let tmp8;
      _require = arg0;
      importDefault = arg1;
      obj = require("react");
      const cResult = obj.c(8);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function r() {
          return GuildRoleSubscriptionsStore.getSubscriptionListing(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== arg1) {
        const fn2 = function l() {
          return closure_1;
        };
        cResult[3] = arg1;
        cResult[4] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      const tmp9 = useInitialValueDefault(tmp8);
      if (cResult[5] === tmp9) {
        let tmp10;
        if (cResult[6] === stateFromStores) {
          tmp10 = cResult[7];
        }
        return tmp10;
      }
      const tmp9Result = tmp9(stateFromStores);
      cResult[5] = tmp9;
      cResult[6] = stateFromStores;
      cResult[7] = tmp9Result;
      tmp10 = tmp9Result;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let closure_3;
      _require = arg0;
      importDefault = arg1;
      const items = [GuildRoleSubscriptionsStore];
      obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () =>
        GuildRoleSubscriptionsStore.getSubscriptionListing(closure_0),
      );
      const tmp2 = useInitialValueDefault(() => closure_1);
      dependencyMap = tmp2;
      const items1 = [stateFromStores, tmp2];
      return react.useMemo(() => closure_3(stateFromStores), items1);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(name) {
          let str;
          if (name != null) {
            str = name.name;
          }
          if (str == null) {
            str = "";
          }
          return str;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      return closure_15(arg0, "name", closure_16(arg0, first));
    }
  : (arg0) =>
      closure_15(
        arg0,
        "name",
        closure_16(arg0, (name) => {
          let str;
          if (name != null) {
            str = name.name;
          }
          if (str == null) {
            str = "";
          }
          return str;
        }),
      );
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(arg0) {
          let price;
          if (arg0 != null) {
            const first = arg0.subscription_plans[0];
            if (first != null) {
              price = first.price;
            }
          }
          return price;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      return closure_15(arg0, "priceTier", closure_16(arg0, first));
    }
  : (arg0) =>
      closure_15(
        arg0,
        "priceTier",
        closure_16(arg0, (arg0) => {
          let price;
          if (arg0 != null) {
            const first = arg0.subscription_plans[0];
            if (first != null) {
              price = first.price;
            }
          }
          return price;
        }),
      );
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(description) {
          let str;
          if (description != null) {
            str = description.description;
          }
          if (str == null) {
            str = "";
          }
          return str;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      return closure_15(arg0, "description", closure_16(arg0, first));
    }
  : (arg0) =>
      closure_15(
        arg0,
        "description",
        closure_16(arg0, (description) => {
          let str;
          if (description != null) {
            str = description.description;
          }
          if (str == null) {
            str = "";
          }
          return str;
        }),
      );
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let tmp2;
      _require = arg1;
      obj = require("react");
      const cResult = obj.c(2);
      if (cResult[0] !== arg1) {
        const fn = function n(image_asset) {
          image_asset = undefined;
          if (image_asset != null) {
            image_asset = image_asset.image_asset;
          }
          if (null != image_asset) {
            obj = StoreUtils;
            return obj.getAssetURL(image_asset.application_id, image_asset.image_asset, closure_0);
          }
        };
        cResult[0] = arg1;
        cResult[1] = fn;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      return closure_15(arg0, "image", closure_16(arg0, tmp2));
    }
  : (arg0, arg1) => {
      let closure_0 = arg1;
      return closure_15(
        arg0,
        "image",
        closure_16(arg0, (image_asset) => {
          image_asset = undefined;
          if (image_asset != null) {
            image_asset = image_asset.image_asset;
          }
          if (null != image_asset) {
            obj = StoreUtils;
            return obj.getAssetURL(image_asset.application_id, image_asset.image_asset, closure_0);
          }
        }),
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(application_id) {
          application_id = undefined;
          if (application_id != null) {
            application_id = application_id.application_id;
          }
          return application_id;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      return closure_16(arg0, first);
    }
  : (arg0) =>
      closure_16(arg0, (application_id) => {
        application_id = undefined;
        if (application_id != null) {
          application_id = application_id.application_id;
        }
        return application_id;
      });
ReactCompilerGating = ReactCompilerGating_mod;
const tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      obj = react2;
      const cResult = obj.c(3);
      const tmp2 = useSubscriptionRoleDefault(arg1, arg0);
      let icon;
      if (tmp2 != null) {
        icon = tmp2.icon;
      }
      let unicodeEmoji;
      if (tmp2 != null) {
        unicodeEmoji = tmp2.unicodeEmoji;
      }
      if (cResult[0] === icon) {
        let tmp5;
        if (cResult[1] === unicodeEmoji) {
          tmp5 = cResult[2];
        }
        return closure_15(arg0, "roleIcon", tmp5);
      }
      const obj2 = { icon, unicodeEmoji };
      cResult[0] = icon;
      cResult[1] = unicodeEmoji;
      cResult[2] = obj2;
      tmp5 = obj2;
    }
  : (arg0, arg1) => {
      const tmp = useSubscriptionRoleDefault(arg1, arg0);
      let closure_0 = tmp;
      const items = [tmp];
      return closure_15(
        arg0,
        "roleIcon",
        react.useMemo(() => {
          let unicodeEmoji;
          let icon;
          if (closure_0 != null) {
            icon = closure_0.icon;
          }
          obj = { icon, unicodeEmoji };
          unicodeEmoji = undefined;
          if (closure_0 != null) {
            unicodeEmoji = closure_0.unicodeEmoji;
          }
          return obj;
        }, items),
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let tmp5;
      let tmp8;
      let closure_0 = arg0;
      obj = react2;
      const cResult = obj.c(10);
      const tmp4 = useSubscriptionRoleDefault(arg1, arg0);
      if (cResult[0] !== arg0) {
        const fn = function n(arg0) {
          let roleColor;
          if (arg0.listings[closure_0] != null) {
            roleColor = tmp.roleColor;
          }
          return roleColor;
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      const tmp7 = authStore(tmp5);
      if (cResult[2] !== arg0) {
        const fn2 = function s(arg0) {
          let roleIcon;
          if (arg0.listings[closure_0] != null) {
            roleIcon = tmp.roleIcon;
          }
          return roleIcon;
        };
        cResult[2] = arg0;
        cResult[3] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[3];
      }
      const tmp6Result = authStore(tmp8);
      let DEFAULT_PREVIEW_ROLE = tmp4;
      if (tmp4 == null) {
        DEFAULT_PREVIEW_ROLE = Contants.DEFAULT_PREVIEW_ROLE;
      }
      if (cResult[4] === tmp7) {
        if (cResult[5] === tmp6Result) {
          let tmp10;
          if (cResult[6] === DEFAULT_PREVIEW_ROLE) {
            tmp10 = cResult[7];
          }
          return tmp10;
        }
      }
      const obj2 = {};
      const merged = Object.assign(DEFAULT_PREVIEW_ROLE);
      if (undefined !== tmp6Result) {
        let str = tmp6Result.icon;
        if (str == null) {
          str = "";
        }
        obj2.icon = str;
        let str2 = tmp6Result.unicodeEmoji;
        if (str2 == null) {
          str2 = "";
        }
        obj2.unicodeEmoji = str2;
      }
      if (undefined !== tmp7) {
        let tmp12;
        obj2.color = tmp7;
        if (cResult[8] !== tmp7) {
          const tmpResult = utils_ColorUtils;
          const int2hexResult = tmpResult.int2hex(tmp7);
          cResult[8] = tmp7;
          cResult[9] = int2hexResult;
          tmp12 = int2hexResult;
        } else {
          tmp12 = cResult[9];
        }
        obj2.colorString = tmp12;
      }
      cResult[4] = tmp7;
      cResult[5] = tmp6Result;
      cResult[6] = DEFAULT_PREVIEW_ROLE;
      cResult[7] = obj2;
      tmp10 = obj2;
    }
  : (arg0, arg1) => {
      let closure_1;
      let closure_3;
      let closure_0 = arg0;
      const tmp = useSubscriptionRoleDefault(arg1, arg0);
      importDefault = tmp;
      const tmp2 = closure_10((arg0) => {
        let roleColor;
        if (arg0.listings[closure_0] != null) {
          roleColor = tmp.roleColor;
        }
        return roleColor;
      });
      const color = tmp2;
      const tmp3 = closure_10((arg0) => {
        let roleIcon;
        if (arg0.listings[closure_0] != null) {
          roleIcon = tmp.roleIcon;
        }
        return roleIcon;
      });
      dependencyMap = tmp3;
      const items = [tmp, tmp3, tmp2];
      return react.useMemo(() => {
        let DEFAULT_PREVIEW_ROLE = closure_1;
        if (closure_1 == null) {
          DEFAULT_PREVIEW_ROLE = Contants.DEFAULT_PREVIEW_ROLE;
        }
        obj = {};
        const merged = Object.assign(DEFAULT_PREVIEW_ROLE);
        if (undefined !== closure_3) {
          let str = closure_3.icon;
          if (str == null) {
            str = "";
          }
          obj.icon = str;
          let str2 = closure_3.unicodeEmoji;
          if (str2 == null) {
            str2 = "";
          }
          obj.unicodeEmoji = str2;
        }
        if (undefined !== color) {
          obj.color = color;
          const obj2 = utils_ColorUtils;
          obj.colorString = obj2.int2hex(color);
        }
        return obj;
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      const tmp = useSubscriptionRoleDefault(arg1, arg0);
      let color;
      if (tmp != null) {
        color = tmp.color;
      }
      if (color == null) {
        color = map1;
      }
      return closure_15(arg0, "roleColor", color);
    }
  : (arg0, arg1) => {
      const tmp = useSubscriptionRoleDefault(arg1, arg0);
      let color = tmp;
      const items = [tmp];
      return closure_15(
        arg0,
        "roleColor",
        react.useMemo(() => {
          color = undefined;
          if (color != null) {
            color = color.color;
          }
          if (color == null) {
            color = map1;
          }
          return color;
        }, items),
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = [];
let tmp14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      const tmp2 = useSubscriptionRoleDefault(arg1, arg0);
      if (null != tmp2) {
        let SOME_CHANNELS_ACCESS;
        obj = RolePermissionUtils;
        if (obj.hasViewChannelPermission(tmp2)) {
          SOME_CHANNELS_ACCESS = constants.ALL_CHANNELS_ACCESS;
        }
        return closure_15(arg0, "channelAccessFormat", SOME_CHANNELS_ACCESS);
      }
      SOME_CHANNELS_ACCESS = constants.SOME_CHANNELS_ACCESS;
    }
  : (arg0, arg1) => {
      const tmp = useSubscriptionRoleDefault(arg1, arg0);
      let closure_0 = tmp;
      const items = [tmp];
      return closure_15(
        arg0,
        "channelAccessFormat",
        react.useMemo(() => {
          let SOME_CHANNELS_ACCESS;
          if (null == closure_0) {
            SOME_CHANNELS_ACCESS = constants.SOME_CHANNELS_ACCESS;
          } else {
            obj = RolePermissionUtils;
            SOME_CHANNELS_ACCESS = obj.hasViewChannelPermission(tmp)
              ? constants.ALL_CHANNELS_ACCESS
              : constants.SOME_CHANNELS_ACCESS;
          }
          return SOME_CHANNELS_ACCESS;
        }, items),
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = [];
let tmp15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(role_benefits) {
          let found;
          if (null == role_benefits) {
            found = closure_1_17;
          } else {
            const benefits = role_benefits.role_benefits.benefits;
            found = benefits.filter(require("GuildRoleSubscriptionTypeUtils").isChannelBenefit);
          }
          return found;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      return closure_15(arg0, "channelBenefits", closure_16(arg0, first));
    }
  : (arg0) =>
      closure_15(
        arg0,
        "channelBenefits",
        closure_16(arg0, (role_benefits) => {
          let found;
          if (null == role_benefits) {
            found = closure_1_17;
          } else {
            const benefits = role_benefits.role_benefits.benefits;
            found = benefits.filter(require("GuildRoleSubscriptionTypeUtils").isChannelBenefit);
          }
          return found;
        }),
      );
ReactCompilerGating = ReactCompilerGating_mod;
let tmp16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(role_benefits) {
          let found;
          if (null == role_benefits) {
            found = closure_1_18;
          } else {
            const benefits = role_benefits.role_benefits.benefits;
            found = benefits.filter(require("GuildRoleSubscriptionTypeUtils").isIntangibleBenefit);
          }
          return found;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      return closure_15(arg0, "intangibleBenefits", closure_16(arg0, first));
    }
  : (arg0) =>
      closure_15(
        arg0,
        "intangibleBenefits",
        closure_16(arg0, (role_benefits) => {
          let found;
          if (null == role_benefits) {
            found = closure_1_18;
          } else {
            const benefits = role_benefits.role_benefits.benefits;
            found = benefits.filter(require("GuildRoleSubscriptionTypeUtils").isIntangibleBenefit);
          }
          return found;
        }),
      );
let set = new Set();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0, arg1) {
      let closure_0;
      let first;
      let tmp7;
      let tmp8;
      let tmp9;
      _require = arg1;
      obj = require("react");
      const cResult = obj.c(7);
      const tmp4 = useSubscriptionRoleDefault(arg1, arg0);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmojiStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg1) {
        const fn = function o() {
          return EmojiStore.getGuildEmoji(closure_0);
        };
        const items1 = [arg1];
        cResult[1] = arg1;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
      if (null != tmp4) {
        if (cResult[4] === stateFromStoresArray) {
          let tmp10;
          if (cResult[5] === tmp4.id) {
            tmp10 = cResult[6];
          }
          tmp9 = tmp10;
        }
        const id = tmp4.id;
        if (0 !== stateFromStoresArray.length) {
          const found = stateFromStoresArray.filter((roles) => {
            roles = roles.roles;
            return roles.includes(id);
          });
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set(found.map((id) => id.id));
        }
        cResult[4] = stateFromStoresArray;
        cResult[5] = tmp4.id;
        cResult[6] = set;
        tmp10 = set;
      } else {
        tmp9 = set;
      }
      return closure_15(arg0, "tierEmojiIds", tmp9);
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      _require = arg1;
      const tmp = useSubscriptionRoleDefault(arg1, arg0);
      importDefault = tmp;
      const items = [EmojiStore];
      const items1 = [arg1];
      obj = require("get initialized");
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items,
        () => EmojiStore.getGuildEmoji(closure_0),
        items1,
      );
      const items2 = [stateFromStoresArray, tmp];
      return closure_15(
        arg0,
        "tierEmojiIds",
        react.useMemo(function () {
          if (null != closure_1) {
            const id = tmp.id;
            if (0 !== stateFromStoresArray.length) {
              const found = stateFromStoresArray.filter((roles) => {
                roles = roles.roles;
                return roles.includes(id);
              });
              const _Set = Set;
              const self = this;
              const self2 = this;
              set = new Set(found.map((id) => id.id));
            }
          }
          return set;
        }, items2),
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      obj = GuildRoleSubscriptionsHooks;
      const subscriptionTrial = obj.useSubscriptionTrial(arg0);
      let active_trial;
      const tmp2 = useTrialIntervalOptionsDefault;
      if (subscriptionTrial != null) {
        active_trial = subscriptionTrial.active_trial;
      }
      if (active_trial == null) {
        active_trial = null;
      }
      let selectedOption = tmp2(active_trial).selectedOption;
      if (selectedOption == null) {
        selectedOption = null;
      }
      return closure_15(arg0, "trialInterval", selectedOption);
    }
  : (arg0) => {
      obj = GuildRoleSubscriptionsHooks;
      const subscriptionTrial = obj.useSubscriptionTrial(arg0);
      let active_trial;
      const tmp2 = useTrialIntervalOptionsDefault;
      if (subscriptionTrial != null) {
        active_trial = subscriptionTrial.active_trial;
      }
      if (active_trial == null) {
        active_trial = null;
      }
      let selectedOption = tmp2(active_trial).selectedOption;
      if (selectedOption == null) {
        selectedOption = null;
      }
      return closure_15(arg0, "trialInterval", selectedOption);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      obj = GuildRoleSubscriptionsHooks;
      const subscriptionTrial = obj.useSubscriptionTrial(arg0);
      let prop;
      if (subscriptionTrial != null) {
        prop = subscriptionTrial.max_num_active_trial_users;
      }
      if (prop == null) {
        prop = null;
      }
      return closure_15(arg0, "trialLimit", prop);
    }
  : (arg0) => {
      obj = GuildRoleSubscriptionsHooks;
      const subscriptionTrial = obj.useSubscriptionTrial(arg0);
      let prop;
      if (subscriptionTrial != null) {
        prop = subscriptionTrial.max_num_active_trial_users;
      }
      if (prop == null) {
        prop = null;
      }
      return closure_15(arg0, "trialLimit", prop);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp2;
      let closure_0 = arg0;
      obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== arg0) {
        const fn = function t(arg0) {
          return undefined !== arg0.listings[closure_0];
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      return authStore(tmp2);
    }
  : (arg0) => {
      let closure_0 = arg0;
      return authStore((arg0) => undefined !== arg0.listings[closure_0]);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp2;
      let closure_0 = arg0;
      obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== arg0) {
        const fn = function t(arg0) {
          for (const item10006 of closure_0) {
            if (undefined !== arg0.listings[item10006]) {
              obj.return();
              let flag = true;
              return true;
            }
          }
          return false;
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      return authStore(tmp2);
    }
  : (arg0) => {
      let closure_0 = arg0;
      return authStore((arg0) => {
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
ReactCompilerGating = ReactCompilerGating_mod;
const tmp23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      obj = react2;
      const cResult = obj.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(arg0) {
          let first;
          if (arg0 != null) {
            first = arg0.subscription_plans[0];
          }
          return first;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const tmp3 = closure_16(arg0, first);
      let num2 = _slicedToArray(closure_15(arg0, "priceTier", undefined), 1)[0];
      if (num2 == null) {
        let price;
        if (tmp3 != null) {
          price = tmp3.price;
        }
        num2 = price;
      }
      if (num2 == null) {
        num2 = 0;
      }
      let currency;
      if (tmp3 != null) {
        currency = tmp3.currency;
      }
      if (currency == null) {
        currency = constants2.USD;
      }
      let interval;
      if (tmp3 != null) {
        interval = tmp3.interval;
      }
      if (interval == null) {
        interval = SubscriptionIntervalTypes.MONTH;
      }
      let num3;
      if (tmp3 != null) {
        num3 = tmp3.interval_count;
      }
      if (num3 == null) {
        num3 = 1;
      }
      let str;
      if (tmp3 != null) {
        str = tmp3.id;
      }
      if (str == null) {
        str = "";
      }
      if (cResult[1] === num2) {
        if (cResult[2] === currency) {
          if (cResult[3] === interval) {
            if (cResult[4] === num3) {
              let tmp9;
              let tmp10;
              if (cResult[5] === str) {
                tmp9 = cResult[6];
              }
              if (cResult[7] !== tmp9) {
                const items = [tmp9];
                cResult[7] = tmp9;
                cResult[8] = items;
                tmp10 = items;
              } else {
                tmp10 = cResult[8];
              }
              return tmp10;
            }
          }
        }
      }
      const obj2 = { price: num2, currency, interval, interval_count: num3, id: str };
      cResult[1] = num2;
      cResult[2] = currency;
      cResult[3] = interval;
      cResult[4] = num3;
      cResult[5] = str;
      cResult[6] = obj2;
      tmp9 = obj2;
    }
  : (arg0) => {
      const tmp = closure_16(arg0, (arg0) => {
        first = undefined;
        if (arg0 != null) {
          first = arg0.subscription_plans[0];
        }
        return first;
      });
      let price = tmp;
      let first = _slicedToArray(closure_15(arg0, "priceTier", undefined), 1)[0];
      const items = [tmp, first];
      const items1 = [
        react.useMemo(() => {
          let currency;
          let interval;
          let num2;
          let str;
          let num = first;
          if (first == null) {
            price = undefined;
            if (price != null) {
              price = price.price;
            }
            num = price;
          }
          if (num == null) {
            num = 0;
          }
          obj = { price: num, currency, interval, interval_count: num2, id: str };
          currency = undefined;
          if (price != null) {
            currency = tmp2.currency;
          }
          if (currency == null) {
            currency = constants.USD;
          }
          interval = undefined;
          if (price != null) {
            interval = tmp2.interval;
          }
          if (interval == null) {
            interval = SubscriptionIntervalTypes.MONTH;
          }
          num2 = undefined;
          if (price != null) {
            num2 = tmp2.interval_count;
          }
          if (num2 == null) {
            num2 = 1;
          }
          str = undefined;
          if (price != null) {
            str = tmp2.id;
          }
          if (str == null) {
            str = "";
          }
          return obj;
        }, items),
      ];
      return items1;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let tmp15;
      let tmp4;
      let tmp6;
      let tmp9;
      _require = arg1;
      obj = require("react");
      const cResult = obj.c(27);
      const tmp = _require;
      if (cResult[0] !== arg2) {
        let obj2 = arg2;
        if (undefined === arg2) {
          obj2 = { includeSoftDeleted: false };
        }
        cResult[0] = arg2;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = tmp(15045);
      const subscriptionListingsForGroup = tmpResult.useSubscriptionListingsForGroup(arg0, tmp4);
      if (cResult[2] !== arg1) {
        const fn = function s(arg0) {
          return arg0.editStateIdsForGroup[closure_0];
        };
        cResult[2] = arg1;
        cResult[3] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[3];
      }
      const tmp8 = closure_10(tmp6);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function f(setEditStateIdsForGroup) {
          return setEditStateIdsForGroup.setEditStateIdsForGroup;
        };
        cResult[4] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[4];
      }
      const tmp7Result = closure_10(tmp9);
      importDefault = tmp7Result;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(setListing) {
            return setListing.setListing;
          }
        }
        cResult[5] = S;
      } else {
        class S {
          constructor(setListing) {
            return setListing.setListing;
          }
        }
      }
      const tmp7Result2 = closure_10(S);
      let closure_2 = tmp7Result2;
      if (cResult[6] === subscriptionListingsForGroup) {
        class S {
          constructor(setListing) {
            return setListing.setListing;
          }
        }
        if (cResult[12] === arg1) {
          class S {
            constructor(setListing) {
              return setListing.setListing;
            }
          }
          if (cResult[15] === arg1) {
            class S {
              constructor(setListing) {
                return setListing.setListing;
              }
            }
          }
          class L {
            constructor() {
              obj = closure_0(closure_3[28]);
              closure_0 = obj.v4();
              tmp = closure_1(closure_0, (arg0) => {
                let items = arg0;
                if (arg0 == null) {
                  items = [];
                }
                const items1 = [];
                items1[HermesBuiltin.arraySpread(items1, items, 0)] = closure_0;
                return items1;
              });
              return;
            }
          }
          cResult[15] = arg1;
          cResult[16] = tmp7Result;
          cResult[17] = tmp7Result2;
          cResult[18] = tmp19;
        }
        class L {
          constructor() {
            obj = closure_0(closure_3[28]);
            closure_0 = obj.v4();
            tmp = closure_1(closure_0, (arg0) => {
              let items = arg0;
              if (arg0 == null) {
                items = [];
              }
              const items1 = [];
              items1[HermesBuiltin.arraySpread(items1, items, 0)] = closure_0;
              return items1;
            });
            return;
          }
        }
        cResult[12] = arg1;
        cResult[13] = tmp7Result;
        cResult[14] = L;
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(setListing) {
            return setListing.setListing;
          }
        }
        class L {
          constructor() {
            obj = closure_0(closure_3[28]);
            closure_0 = obj.v4();
            tmp = closure_1(closure_0, (arg0) => {
              let items = arg0;
              if (arg0 == null) {
                items = [];
              }
              const items1 = [];
              items1[HermesBuiltin.arraySpread(items1, items, 0)] = closure_0;
              return items1;
            });
            return;
          }
        }
      } else {
        class S {
          constructor(setListing) {
            return setListing.setListing;
          }
        }
      }
      if (cResult[10] !== tmp8) {
        class S {
          constructor(setListing) {
            return setListing.setListing;
          }
        }
        class L {
          constructor() {
            obj = closure_0(closure_3[28]);
            closure_0 = obj.v4();
            tmp = closure_1(closure_0, (arg0) => {
              let items = arg0;
              if (arg0 == null) {
                items = [];
              }
              const items1 = [];
              items1[HermesBuiltin.arraySpread(items1, items, 0)] = closure_0;
              return items1;
            });
            return;
          }
        }
        cResult[10] = tmp8;
        cResult[11] = tmp8;
        tmp15 = tmp8;
      } else {
        class S {
          constructor(setListing) {
            return setListing.setListing;
          }
        }
      }
      let items = [...tmp15];
      cResult[6] = subscriptionListingsForGroup;
      cResult[7] = tmp8;
      cResult[8] = items;
    }
  : (arg0, arg1) => {
      let closure_3;
      let items;
      let items1;
      let items2;
      let items3;
      _require = arg1;
      obj = arg2;
      if (arg2 === undefined) {
        obj = { includeSoftDeleted: false };
      }
      const obj2 = require("GuildRoleSubscriptionsHooks");
      let subscriptionListingsForGroup = obj2.useSubscriptionListingsForGroup(arg0, obj);
      const tmp2 = closure_10((arg0) => arg0.editStateIdsForGroup[closure_0]);
      let closure_2 = tmp2;
      const tmp3 = closure_10((setEditStateIdsForGroup) => setEditStateIdsForGroup.setEditStateIdsForGroup);
      dependencyMap = tmp3;
      const tmp4 = closure_10((setListing) => setListing.setListing);
      let closure_4 = tmp4;
      const obj3 = {
        editStateIds: react.useMemo(() => {
          const items = [...subscriptionListingsForGroup.map((id) => id.id)];
          let items1 = closure_2;
          if (closure_2 == null) {
            items1 = [];
          }
          HermesBuiltin.arraySpread(items, items1, tmp2);
          return items;
        }, items),
        addNewEditStateId: react.useCallback(() => {
          obj = v1;
          closure_0 = obj.v4();
          closure_3(closure_0, (arg0) => {
            let items = arg0;
            if (arg0 == null) {
              items = [];
            }
            const items1 = [];
            items1[HermesBuiltin.arraySpread(items1, items, 0)] = closure_0;
            return items1;
          });
        }, items1),
        addNewEditStateFromTemplate: react.useCallback((listings) => {
          closure_0 = listings;
          obj = closure_0(closure_3[28]);
          const v4Result = obj.v4();
          subscriptionListingsForGroup = v4Result;
          closure_3(closure_0, (arg0) => {
            let items = arg0;
            if (arg0 == null) {
              items = [];
            }
            const items1 = [];
            items1[HermesBuiltin.arraySpread(items1, items, 0)] = subscriptionListingsForGroup;
            return items1;
          });
          listings = listings.listings;
          const item = listings.forEach((item) => {
            closure_1_4(closure_1, () => {
              let channels;
              obj = {
                name: item.name,
                description: item.description,
                priceTier: item.price_tier,
                image: item.image,
                intangibleBenefits: item.additional_perks,
                channelBenefits: channels.map((id) => ({
                  ref_id: id.id,
                  ref_type: constants.CHANNEL,
                  description: id.description,
                  name: id.name,
                  emoji_name: id.emoji_name,
                })),
                roleIcon: obj2,
                roleColor: item.role_color,
                usedTemplate: item.category,
              };
              channels = item.channels;
              return obj;
            });
          });
          return v4Result;
        }, items2),
        removeEditStateId: react.useCallback((arg0) => {
          closure_0 = arg0;
          closure_3(closure_0, (arg0) => {
            let items = arg0;
            if (arg0 == null) {
              items = [];
            }
            return items.filter((item) => item !== closure_1_0);
          });
        }, items3),
      };
      items = [tmp2, subscriptionListingsForGroup];
      items1 = [arg1, tmp3];
      items2 = [arg1, tmp3, tmp4];
      items3 = [arg1, tmp3];
      return obj3;
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx",
);

export const useListingEditState = tmp4;
export const useClearEditStateOnUnmount = tmp5;
export const useName = tmp6;
export const usePriceTier = tmp7;
export const useDescription = tmp8;
export const useImage = tmp9;
export const useApplicationId = tmp10;
export const useRoleIcon = tmp11;
export const useRole = tmp12;
export const useRoleColor = tmp13;
export const useChannelAccessFormat = tmp14;
export const useChannelBenefits = tmp15;
export const useIntangibleBenefits = tmp16;
export const useTierEmojiIds = tmp18;
export const useTrialInterval = tmp19;
export const useTrialLimit = tmp20;
export const useHasChanges = tmp21;
export const useHasChangesForEditStateIds = tmp22;
export const useSubscriptionPlan = tmp23;
export { clearEditState };
export const useCreateOrUpdateListingFromEditState = function useCreateOrUpdateListingFromEditState() {
  let closure_1;
  let first;
  let require;
  let tmp2;
  const tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, require] = tmp;
  [first, closure_1] = react.useState();
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (guildId) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    function updateListingFromEditState(editStateId) {
      let channelAccessFormat;
      let channelBenefits;
      let description;
      let image;
      let intangibleBenefits;
      let name;
      let priceTier;
      editStateId = editStateId.editStateId;
      ({ guildId, groupListingId } = editStateId);
      subscriptionListing = subscriptionListing.getSubscriptionListing(editStateId);
      closure_1_1(onBeforeDispatchNewListing[22])(null != subscriptionListing, "listing doesnt exist");
      const tmp5 = closure_1_10.getState().listings[editStateId];
      closure_1_1(onBeforeDispatchNewListing[22])(null != tmp5, "edit state does not exist");
      ({ name, description, channelBenefits, intangibleBenefits, priceTier, image, channelAccessFormat } = tmp5);
      obj = {};
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
        const found = benefits.filter(closure_1_0(onBeforeDispatchNewListing[18]).isChannelBenefit);
        const found1 = benefits1.filter(closure_1_0(onBeforeDispatchNewListing[18]).isIntangibleBenefit);
        if (channelBenefits == null) {
          channelBenefits = found;
        }
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, channelBenefits, 0);
        if (intangibleBenefits == null) {
          intangibleBenefits = found1;
        }
        HermesBuiltin.arraySpread(items, intangibleBenefits, arraySpreadResult);
        obj.benefits = items;
      }
      const obj2 = closure_1_0(onBeforeDispatchNewListing[25]);
      if (!obj2.isEmpty(obj)) {
        const obj4 = { guildId, groupListingId, listingId: editStateId, data: obj };
        const obj3 = closure_1_2(onBeforeDispatchNewListing[24]);
        subscriptionListing = obj3.updateSubscriptionListing(obj4);
      }
      return subscriptionListing;
    }
    function createListingFromEditState() {
      return closure_1_23(...arguments);
    }
    function moveEditState(c1, id) {
      closure_0 = c1;
      closure_1 = id;
      obj = closure_0(closure_3[21]);
      obj.batchUpdates(() => {
        closure_2_10.setState((listings) => {
          let obj2;
          obj = { listings: obj2 };
          obj2 = {};
          const merged = Object.assign(listings.listings);
          obj2[id] = listings.listings[closure_1_0];
          obj2[closure_1_0] = undefined;
          return obj;
        });
      });
    }
    function updateListingPeripheralsFromEditState() {
      return closure_1_22(...arguments);
    }
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (guildId === 1) {
        throw value;
      } else if (guildId === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let groupListingId;
        let onBeforeDispatchNewListing;
        let subscriptionListing2;
        let id;
        c6 = 2;
        const tmp4 = c5;
        if (0 === c5) {
          if (guildId === 1) {
            c6 = 3;
            throw value;
          } else if (guildId === 2) {
            c6 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp4;
            guildId = undefined;
            c1 = undefined;
            groupListingId = undefined;
            onBeforeDispatchNewListing = undefined;
            c4 = undefined;
            ({
              guildId: c0,
              editStateId: c1,
              groupListingId: c2,
              onBeforeDispatchNewListing: c3,
              onAfterDispatchNewListing: c4,
            } = guildId);
            subscriptionListing2 = undefined;
            id = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === tmp4) {
          if (guildId === 1) {
            c6 = 3;
            throw value;
          } else if (guildId === 2) {
            c6 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            id = c1;
            subscriptionListing2 = subscriptionListing.getSubscriptionListing(id);
            c4 = 2;
            guildId(true);
            closure_1(undefined);
            if (null != subscriptionListing2) {
              closure_2_1(dependencyMap[22])(null != groupListingId, "groupListingId is null");
              const obj5 = { guildId, editStateId: id, groupListingId };
              c5 = 4;
              c6 = 1;
              const obj6 = { value: updateListingFromEditState(obj5), done: false };
              return obj6;
            } else {
              const obj7 = { guildId, editStateId: id, groupListingId, onBeforeDispatchNewListing };
              c5 = 5;
              c6 = 1;
              const obj8 = { value: createListingFromEditState(obj7), done: false };
              return obj8;
            }
          }
        } else if (2 === tmp4) {
          c4 = 0;
          guildId(false);
          throw closure_3;
        } else if (3 === tmp4) {
          c4 = 1;
          subscriptionListing = closure_3;
          if ("getAnyErrorMessage" in subscriptionListing) {
            closure_1(subscriptionListing);
            c4 = 0;
            guildId(false);
            c6 = 3;
            return { value: "IconComponent", done: null };
          } else {
            throw subscriptionListing;
          }
        } else {
          if (4 === tmp4) {
            if (guildId === 1) {
              c6 = 3;
              throw value;
            } else if (guildId === 2) {
              c4 = 0;
              guildId(false);
              c6 = 3;
              const obj9 = { value, done: true };
              return obj9;
            }
          } else if (5 === tmp4) {
            if (guildId === 1) {
              c6 = 3;
              throw value;
            } else if (guildId === 2) {
              c4 = 0;
              guildId(false);
              c6 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              id = value;
              id = id.id;
              moveEditState(c1, id);
              if (c4 != null) {
                tmp20(id);
              }
            }
          } else if (guildId === 1) {
            c6 = 3;
            throw value;
          } else if (guildId === 2) {
            c4 = 0;
            guildId(false);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let tmp5 = closure_1;
            clearEditState(id);
            c4 = 0;
            guildId(false);
            c6 = 3;
            return { value: true, done: true };
          }
          const obj11 = { guildId, editStateId: id };
          c5 = 6;
          c6 = 1;
          const obj12 = { value: updateListingPeripheralsFromEditState(obj11), done: false };
          return obj12;
        }
      } catch (tmp65) {
        closure_3 = tmp65;
        if (0 === c4) {
          c6 = 3;
          throw tmp65;
        } else if (1 === tmp67) {
          c5 = 2;
        } else {
          c5 = 3;
        }
      }
    }
  });
  obj = {
    loading: tmp2,
    error: first,
    handleCreateOrUpdateFromEditState: useCallback(function () {
      return closure_0(...arguments);
    }, []),
  };
  return obj;
};
export const useEditStateIds = tmp24;
