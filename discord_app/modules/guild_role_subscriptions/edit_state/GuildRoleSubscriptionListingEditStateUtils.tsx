// discord_app/modules/guild_role_subscriptions/edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx
import c from "../../../../_runtime/00576_c.js";
import v1 from "../../../../_runtime/01278_v1.js";
import RolePermissionUtils from "../RolePermissionUtils.tsx";
import StoreUtils from "../../../utils/StoreUtils.tsx";
import useInitialValueDefault from "../../../hooks/useInitialValue.tsx";
import GuildRoleSubscriptionsHooks from "../GuildRoleSubscriptionsHooks.tsx";
import useSubscriptionRoleDefault from "../useSubscriptionRole.tsx";
import useTrialIntervalOptionsDefault from "../useTrialIntervalOptions.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import GuildRoleSubscriptionsStore from "../GuildRoleSubscriptionsStore.tsx";

const require = globalThis.__r;

const utils_ColorUtils = obj(1103);
const Contants = obj(15325);
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
      const obj = { listings: null };
      const obj2 = {};
      const merged = Object.assign(listings.listings);
      obj2[closure_1_0] = listings.listings.nonexistantEditStateId;
      obj.listings = obj2;
      return obj;
    });
  });
}
let closure_22 = async function _updateListingPeripheralsFromEditState(arg0) {
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
          return { value: "Reflect", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            subscriptionListing = closure_130_8.getSubscriptionListing(closure_129_1);
            closure_130_1(closure_130_3[22])(null != subscriptionListing, "listing doesnt exist");
            role_id = subscriptionListing.role_id;
            id = subscriptionListing.id;
            closure_129_5 = closure_130_10.getState().listings[closure_129_1];
            closure_130_1(closure_130_3[22])(null != closure_129_5, "edit state does not exist");
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
              const obj6 = { color: roleColor, icon: null, unicodeEmoji: null };
              let icon;
              if (roleIcon != null) {
                icon = roleIcon.icon;
              }
              obj6.icon = icon;
              let unicodeEmoji;
              if (roleIcon != null) {
                unicodeEmoji = roleIcon.unicodeEmoji;
              }
              obj6.unicodeEmoji = unicodeEmoji;
              c3 = 2;
              c4 = 1;
              const obj9 = {
                value: closure_130_1(closure_130_3[23]).updateRole(closure_129_0, role_id, obj6),
                done: false,
              };
              return obj9;
            }
          }
        } else {
          if (2 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj11 = { value, done: true };
              return obj11;
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj12 = { value, done: true };
              return obj12;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (undefined !== tierEmojiIds) {
              closure_129_12 = closure_130_20(closure_130_7.getGuildEmoji(closure_129_0), role_id);
              let items = [];
              HermesBuiltin.arraySpread(tierEmojiIds, 0);
              const items1 = [];
              HermesBuiltin.arraySpread(closure_129_12, 0);
              closure_129_13 = closure_130_0(closure_130_3[25]).difference(items, items1);
              const obj7 = closure_130_0(closure_130_3[25]);
              const items2 = [];
              HermesBuiltin.arraySpread(closure_129_12, 0);
              const items3 = [];
              HermesBuiltin.arraySpread(tierEmojiIds, 0);
              closure_129_14 = closure_130_0(closure_130_3[25]).difference(items2, items3);
              closure_129_15 = closure_129_13.map((item) => {
                const customEmojiById = closure_2_7.getCustomEmojiById(item);
                if (null != customEmojiById) {
                  const obj2 = { guildId, emojiId: customEmojiById.id, roles: null };
                  const items = [];
                  items[HermesBuiltin.arraySpread(customEmojiById.roles, 0)] = dependencyMap;
                  obj2.roles = items;
                  return guildId(9479).updateEmoji(obj2);
                }
              });
              closure_129_16 = closure_129_14.map((item) => {
                const customEmojiById = closure_2_7.getCustomEmojiById(item);
                if (null != customEmojiById) {
                  const roles = customEmojiById.roles;
                  const found = roles.filter((item) => item !== dependencyMap);
                  if (found.length > 0) {
                    const obj3 = { guildId, emojiId: customEmojiById.id, roles: found };
                    let updateEmojiResult = guildId(9479).updateEmoji(obj3);
                    const obj2 = guildId(9479);
                  } else {
                    updateEmojiResult = guildId(9479).deleteEmoji(guildId, customEmojiById.id);
                    const obj = guildId(9479);
                  }
                  return updateEmojiResult;
                }
              });
              const items4 = [];
              HermesBuiltin.arraySpread(closure_129_16, HermesBuiltin.arraySpread(closure_129_15, 0));
              c3 = 3;
              c4 = 1;
              const obj13 = { value: Promise.all(items4), done: false };
              return obj13;
            }
          } else {
            c4 = 3;
            let obj = { value, done: true };
            return obj;
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
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
          const obj14 = { trial: trialInterval, max_num_active_trial_users: trialLimit };
          c3 = 4;
          c4 = 1;
          const obj15 = {
            value: closure_130_2(closure_130_3[24]).updateSubscriptionTrial(closure_129_0, id, obj14),
            done: false,
          };
          return obj15;
        }
      }
    } catch (tmp71) {
      c4 = tmp;
      throw tmp71;
    }
  }
};
let closure_23 = async function _createListingFromEditState(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
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
          const obj5 = { value, done: true };
          return obj5;
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
          return { value: "Reflect", done: true };
        }
      } else {
        if (1 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_132_4 = closure_133_10.getState().listings[closure_132_1];
            closure_133_1(closure_133_3[22])(null != closure_132_4, "edit state does not exist");
            name = closure_132_4.name;
            description = closure_132_4.description;
            channelBenefits = closure_132_4.channelBenefits;
            intangibleBenefits = closure_132_4.intangibleBenefits;
            priceTier = closure_132_4.priceTier;
            image = closure_132_4.image;
            channelAccessFormat = closure_132_4.channelAccessFormat;
            closure_133_1(closure_133_3[22])(null != name, "no name provided");
            closure_133_1(closure_133_3[22])(null != description, "no description provided");
            closure_133_1(closure_133_3[22])(null != priceTier, "no priceTier provided");
            closure_133_1(closure_133_3[22])(null != image, "no image provided");
            closure_132_12 = channelAccessFormat === closure_133_9.ALL_CHANNELS_ACCESS;
            id = closure_132_2;
            if (null == id) {
              c6 = 2;
              c7 = 1;
              const obj7 = {
                value: closure_133_2(closure_133_3[24]).createSubscriptionGroupListing(closure_132_0, {}),
                done: false,
              };
              return obj7;
            } else {
              let tmp9 = null != channelBenefits;
              if (tmp9) {
                tmp9 = channelBenefits.length > 0;
              }
              if (tmp9) {
                c6 = 3;
                c7 = 1;
                const obj9 = {
                  value: closure_133_0(closure_133_3[27]).createChannelsFromTemplateTierBenefits(
                    closure_132_0,
                    channelBenefits,
                  ),
                  done: false,
                };
                return obj9;
              }
            }
          }
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            id = value.id;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj = { value, done: true };
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
        templateTierCreationAnalyticsContext = closure_133_0(closure_133_3[27]).getTemplateTierCreationAnalyticsContext(
          closure_132_1,
          closure_132_0,
        );
        const obj3 = closure_133_0(closure_133_3[27]);
        const obj12 = {
          guildId: closure_132_0,
          groupListingId: id,
          data: null,
          analyticsContext: null,
          onBeforeDispatchNewListing: null,
        };
        const obj13 = {
          can_access_all_channels: closure_132_12,
          image,
          name,
          description,
          benefits: closure_132_14,
          priceTier,
        };
        obj12.data = obj13;
        obj12.analyticsContext = templateTierCreationAnalyticsContext;
        obj12.onBeforeDispatchNewListing = closure_132_3;
        c7 = 3;
        const obj14 = { value: closure_133_2(closure_133_3[24]).createSubscriptionListing(obj12), done: true };
        return obj14;
      }
    } catch (tmp52) {
      c7 = tmp;
      throw tmp52;
    }
  }
};
const GuildRoleSubscriptionEditStore = fn(15323);
({ AllChannelAccessOptions: closure_9, useEditStateStore: c10 } = GuildRoleSubscriptionEditStore);
let closure_11 = fn(15300).GuildRoleSubscriptionBenefitTypes;
const Constants = fn(1085);
({ CurrencyCodes: closure_12, DEFAULT_ROLE_COLOR: map1 } = Constants);
const SubscriptionIntervalTypes = fn(1391).SubscriptionIntervalTypes;
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useListingEditState(arg0, arg1, arg2) {
      closure_0 = arg0;
      closure_1 = arg1;
      let tmp = arg2;
      closure_2 = arg2;
      const cResult = c.c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function r(setListing) {
          return setListing.setListing;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const tmp5 = collapsed(first);
      closure_3 = tmp5;
      if (cResult[1] === arg1) {
        if (cResult[2] === arg0) {
          if (cResult[3] === tmp) {
            if (cResult[4] === tmp5) {
              let tmp6 = cResult[5];
            }
            if (cResult[6] === arg1) {
              if (cResult[7] === arg0) {
                let tmp7 = cResult[8];
              }
              const tmp4Result = collapsed(tmp7);
              if (undefined !== tmp4Result) {
                tmp = tmp4Result;
              }
              if (cResult[9] === tmp6) {
                if (cResult[10] === tmp) {
                  let tmp9 = cResult[11];
                }
                return tmp9;
              }
              const items = [tmp, tmp6];
              cResult[9] = tmp6;
              cResult[10] = tmp;
              cResult[11] = items;
              tmp9 = items;
            }
            const fn3 = function c(arg0) {
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
        closure_3(closure_0, (arg0) => {
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
          const obj = {};
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
  : function useListingEditState(arg0, arg1, arg2) {
      closure_0 = arg0;
      closure_1 = arg1;
      let tmp = arg2;
      closure_2 = arg2;
      let tmp2 = collapsed((setListing) => setListing.setListing);
      closure_3 = tmp2;
      const items = [tmp2, arg0, arg1, arg2];
      const callback = noop.useCallback((arg0) => {
        closure_0 = arg0;
        closure_3(closure_0, (arg0) => {
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
          const obj = {};
          obj[closure_1] = tmpResult;
          return Object.assign({}, arg0, obj);
        });
      }, items);
      let tmp4 = collapsed((arg0) => {
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
fn(558);
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useListingValue(arg0, arg1) {
      _require = arg0;
      importDefault = arg1;
      const cResult = require("c").c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function r() {
          return GuildRoleSubscriptionsStore.getSubscriptionListing(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      if (cResult[3] !== arg1) {
        const fn2 = function l() {
          return closure_1;
        };
        cResult[3] = arg1;
        cResult[4] = fn2;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      const tmp9 = useInitialValueDefault(tmp8);
      if (cResult[5] === tmp9) {
        if (cResult[6] === stateFromStores) {
          let tmp10 = cResult[7];
        }
        return tmp10;
      }
      const tmp9Result = tmp9(stateFromStores);
      cResult[5] = tmp9;
      cResult[6] = stateFromStores;
      cResult[7] = tmp9Result;
      tmp10 = tmp9Result;
      const tmpResult = require("initialize");
    }
  : function useListingValue(arg0, arg1) {
      _require = arg0;
      importDefault = arg1;
      const items = [GuildRoleSubscriptionsStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        GuildRoleSubscriptionsStore.getSubscriptionListing(closure_0),
      );
      const tmp2 = useInitialValueDefault(() => closure_1);
      dependencyMap = tmp2;
      const items1 = [stateFromStores, tmp2];
      return noop.useMemo(() => closure_3(stateFromStores), items1);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useClearEditStateOnUnmount(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] !== arg0) {
        const fn = function t() {
          return () => {
            closure_0 = closure_1_0;
            closure_0(dependencyMap[21]).batchUpdates(() => {
              state.setState((listings) => {
                const obj = { listings: null };
                const obj2 = {};
                const merged = Object.assign(listings.listings);
                obj2[closure_1_0] = listings.listings.nonexistantEditStateId;
                obj.listings = obj2;
                return obj;
              });
            });
          };
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp3 = items;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = noop.useEffect(tmp2, tmp3);
    }
  : function useClearEditStateOnUnmount(arg0) {
      closure_0 = arg0;
      const items = [arg0];
      const effect = noop.useEffect(
        () => () => {
          closure_0 = closure_1_0;
          closure_0(dependencyMap[21]).batchUpdates(() => {
            state.setState((listings) => {
              const obj = { listings: null };
              const obj2 = {};
              const merged = Object.assign(listings.listings);
              obj2[closure_1_0] = listings.listings.nonexistantEditStateId;
              obj.listings = obj2;
              return obj;
            });
          });
        },
        items,
      );
    };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useName(arg0) {
      const cResult = c.c(1);
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
        let first = fn;
      } else {
        first = cResult[0];
      }
      return closure_15(arg0, "name", closure_16(arg0, first));
    }
  : function useName(arg0) {
      return closure_15(
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
    };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePriceTier(arg0) {
      const cResult = c.c(1);
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
        let first = fn;
      } else {
        first = cResult[0];
      }
      return closure_15(arg0, "priceTier", closure_16(arg0, first));
    }
  : function usePriceTier(arg0) {
      return closure_15(
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
    };
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDescription(arg0) {
      const cResult = c.c(1);
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
        let first = fn;
      } else {
        first = cResult[0];
      }
      return closure_15(arg0, "description", closure_16(arg0, first));
    }
  : function useDescription(arg0) {
      return closure_15(
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
    };
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useImage(arg0, arg1) {
      _require = arg1;
      const cResult = require("c").c(2);
      if (cResult[0] !== arg1) {
        const fn = function n(image_asset) {
          image_asset = undefined;
          if (image_asset != null) {
            image_asset = image_asset.image_asset;
          }
          if (null != image_asset) {
            return StoreUtils.getAssetURL(image_asset.application_id, image_asset.image_asset, closure_0);
          }
        };
        cResult[0] = arg1;
        cResult[1] = fn;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      return closure_15(arg0, "image", closure_16(arg0, tmp2));
    }
  : function useImage(arg0, arg1) {
      closure_0 = arg1;
      return closure_15(
        arg0,
        "image",
        closure_16(arg0, (image_asset) => {
          image_asset = undefined;
          if (image_asset != null) {
            image_asset = image_asset.image_asset;
          }
          if (null != image_asset) {
            return StoreUtils.getAssetURL(image_asset.application_id, image_asset.image_asset, closure_0);
          }
        }),
      );
    };
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useApplicationId(arg0) {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(application_id) {
          application_id = undefined;
          if (application_id != null) {
            application_id = application_id.application_id;
          }
          return application_id;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return closure_16(arg0, first);
    }
  : function useApplicationId(arg0) {
      return closure_16(arg0, (application_id) => {
        application_id = undefined;
        if (application_id != null) {
          application_id = application_id.application_id;
        }
        return application_id;
      });
    };
ReactCompilerGating = fn(558);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useRoleIcon(arg0, arg1) {
      const cResult = c.c(3);
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
        if (cResult[1] === unicodeEmoji) {
          let tmp5 = cResult[2];
        }
        return closure_15(arg0, "roleIcon", tmp5);
      }
      const obj2 = { icon, unicodeEmoji };
      cResult[0] = icon;
      cResult[1] = unicodeEmoji;
      cResult[2] = obj2;
      tmp5 = obj2;
    }
  : function useRoleIcon(arg0, arg1) {
      const tmp = useSubscriptionRoleDefault(arg1, arg0);
      closure_0 = tmp;
      const items = [tmp];
      return closure_15(
        arg0,
        "roleIcon",
        noop.useMemo(() => {
          let icon;
          if (closure_0 != null) {
            icon = closure_0.icon;
          }
          const obj = { icon, unicodeEmoji: null };
          let unicodeEmoji;
          if (closure_0 != null) {
            unicodeEmoji = closure_0.unicodeEmoji;
          }
          obj.unicodeEmoji = unicodeEmoji;
          return obj;
        }, items),
      );
    };
ReactCompilerGating = fn(558);
const tmp12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useRole(arg0, arg1) {
      closure_0 = arg0;
      let obj = require;
      let int2hexResult = dependencyMap;
      const cResult = c.c(10);
      const tmp3 = useSubscriptionRoleDefault(arg1, arg0);
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
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      const tmp6 = collapsed(tmp4);
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
        let tmp7 = fn2;
      } else {
        tmp7 = cResult[3];
      }
      const tmp5Result = collapsed(tmp7);
      let DEFAULT_PREVIEW_ROLE = tmp3;
      if (tmp3 == null) {
        DEFAULT_PREVIEW_ROLE = Contants.DEFAULT_PREVIEW_ROLE;
      }
      if (cResult[4] === tmp6) {
        if (cResult[5] === tmp5Result) {
          if (cResult[6] === DEFAULT_PREVIEW_ROLE) {
            let tmp9 = cResult[7];
          }
          return tmp9;
        }
      }
      const obj3 = {};
      const merged = Object.assign(DEFAULT_PREVIEW_ROLE);
      if (undefined !== tmp5Result) {
        let str = tmp5Result.icon;
        if (str == null) {
          str = "";
        }
        obj3.icon = str;
        let str2 = tmp5Result.unicodeEmoji;
        if (str2 == null) {
          str2 = "";
        }
        obj3.unicodeEmoji = str2;
      }
      if (undefined === tmp6) {
        cResult[4] = tmp6;
        cResult[5] = tmp5Result;
        cResult[6] = DEFAULT_PREVIEW_ROLE;
        cResult[7] = obj3;
        tmp9 = obj3;
      } else {
        obj3.color = tmp6;
        if (cResult[8] !== tmp6) {
          obj = utils_ColorUtils;
          int2hexResult = obj.int2hex(tmp6);
          cResult[8] = tmp6;
          cResult[9] = int2hexResult;
          let tmp11 = int2hexResult;
        } else {
          tmp11 = cResult[9];
        }
        obj3.colorString = tmp11;
      }
    }
  : function useRole(arg0, arg1) {
      closure_0 = arg0;
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
      return noop.useMemo(() => {
        let DEFAULT_PREVIEW_ROLE = closure_1;
        if (closure_1 == null) {
          DEFAULT_PREVIEW_ROLE = Contants.DEFAULT_PREVIEW_ROLE;
        }
        const obj = {};
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
          obj.colorString = utils_ColorUtils.int2hex(color);
        }
        return obj;
      }, items);
    };
ReactCompilerGating = fn(558);
let closure_17 = [];
const tmp13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useRoleColor(arg0, arg1) {
      const tmp = useSubscriptionRoleDefault(arg1, arg0);
      let color;
      if (tmp != null) {
        color = tmp.color;
      }
      if (color == null) {
        color = __initData2;
      }
      return closure_15(arg0, "roleColor", color);
    }
  : function useRoleColor(arg0, arg1) {
      const tmp = useSubscriptionRoleDefault(arg1, arg0);
      let color = tmp;
      const items = [tmp];
      return closure_15(
        arg0,
        "roleColor",
        noop.useMemo(() => {
          color = undefined;
          if (color != null) {
            color = color.color;
          }
          if (color == null) {
            color = __initData2;
          }
          return color;
        }, items),
      );
    };
ReactCompilerGating = fn(558);
let closure_18 = [];
const tmp14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useChannelAccessFormat(arg0, arg1) {
      const tmp2 = useSubscriptionRoleDefault(arg1, arg0);
      if (null != tmp2) {
        if (obj.hasViewChannelPermission(tmp2)) {
          let SOME_CHANNELS_ACCESS = constants.ALL_CHANNELS_ACCESS;
        }
        return closure_15(arg0, "channelAccessFormat", SOME_CHANNELS_ACCESS);
      }
      SOME_CHANNELS_ACCESS = constants.SOME_CHANNELS_ACCESS;
    }
  : function useChannelAccessFormat(arg0, arg1) {
      const tmp = useSubscriptionRoleDefault(arg1, arg0);
      closure_0 = tmp;
      const items = [tmp];
      return closure_15(
        arg0,
        "channelAccessFormat",
        noop.useMemo(() => {
          if (null == closure_0) {
            let SOME_CHANNELS_ACCESS = constants.SOME_CHANNELS_ACCESS;
          } else {
            SOME_CHANNELS_ACCESS = RolePermissionUtils.hasViewChannelPermission(tmp)
              ? constants.ALL_CHANNELS_ACCESS
              : constants.SOME_CHANNELS_ACCESS;
          }
          return SOME_CHANNELS_ACCESS;
        }, items),
      );
    };
ReactCompilerGating = fn(558);
let tmp15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useChannelBenefits(arg0) {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(role_benefits) {
          if (null == role_benefits) {
            let found = closure_1_17;
          } else {
            const benefits = role_benefits.role_benefits.benefits;
            found = benefits.filter(require("GuildRoleSubscriptionTypeUtils").isChannelBenefit);
          }
          return found;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return closure_15(arg0, "channelBenefits", closure_16(arg0, first));
    }
  : function useChannelBenefits(arg0) {
      return closure_15(
        arg0,
        "channelBenefits",
        closure_16(arg0, (role_benefits) => {
          if (null == role_benefits) {
            let found = closure_1_17;
          } else {
            const benefits = role_benefits.role_benefits.benefits;
            found = benefits.filter(require("GuildRoleSubscriptionTypeUtils").isChannelBenefit);
          }
          return found;
        }),
      );
    };
let set = new Set();
ReactCompilerGating = fn(558);
const tmp16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIntangibleBenefits(arg0) {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(role_benefits) {
          if (null == role_benefits) {
            let found = closure_1_18;
          } else {
            const benefits = role_benefits.role_benefits.benefits;
            found = benefits.filter(require("GuildRoleSubscriptionTypeUtils").isIntangibleBenefit);
          }
          return found;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return closure_15(arg0, "intangibleBenefits", closure_16(arg0, first));
    }
  : function useIntangibleBenefits(arg0) {
      return closure_15(
        arg0,
        "intangibleBenefits",
        closure_16(arg0, (role_benefits) => {
          if (null == role_benefits) {
            let found = closure_1_18;
          } else {
            const benefits = role_benefits.role_benefits.benefits;
            found = benefits.filter(require("GuildRoleSubscriptionTypeUtils").isIntangibleBenefit);
          }
          return found;
        }),
      );
    };
ReactCompilerGating = fn(558);
const tmp18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTierEmojiIds(arg0, arg1) {
      let id = arg1;
      const cResult = id(576).c(7);
      id = useSubscriptionRoleDefault(arg1, arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmojiStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg1) {
        const fn = function o() {
          return EmojiStore.getGuildEmoji(id);
        };
        const items1 = [arg1];
        cResult[1] = arg1;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = id(576);
      const stateFromStoresArray = id(504).useStateFromStoresArray(first, tmp6, tmp7);
      if (null != id) {
        id = id.id;
        if (0 !== stateFromStoresArray.length) {
          const found = stateFromStoresArray.filter((roles) => {
            roles = roles.roles;
            return roles.includes(id);
          });
          const _Set = Set;
          set = new Set(found.map((id) => id.id));
        }
        cResult[4] = stateFromStoresArray;
        id = id.id;
        cResult[5] = id;
        cResult[6] = set;
      } else {
        return closure_15(arg0, "tierEmojiIds", set);
      }
      const tmpResult = id(504);
    }
  : function useTierEmojiIds(arg0, arg1) {
      _require = arg1;
      const tmp = useSubscriptionRoleDefault(arg1, arg0);
      importDefault = tmp;
      const items = [EmojiStore];
      const items1 = [arg1];
      const stateFromStoresArray = require("initialize").useStateFromStoresArray(
        items,
        () => EmojiStore.getGuildEmoji(closure_0),
        items1,
      );
      const items2 = [stateFromStoresArray, tmp];
      return closure_15(
        arg0,
        "tierEmojiIds",
        noop.useMemo(() => {
          if (null != closure_1) {
            const id = tmp.id;
            if (0 !== stateFromStoresArray.length) {
              const found = stateFromStoresArray.filter((roles) => {
                roles = roles.roles;
                return roles.includes(id);
              });
              const _Set = Set;
              set = new Set(found.map((id) => id.id));
            }
          }
          return set;
        }, items2),
      );
    };
ReactCompilerGating = fn(558);
const tmp19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTrialInterval(arg0) {
      const subscriptionTrial = GuildRoleSubscriptionsHooks.useSubscriptionTrial(arg0);
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
      return closure_15(arg0, "trialInterval", selectedOption);
    }
  : function useTrialInterval(arg0) {
      const subscriptionTrial = GuildRoleSubscriptionsHooks.useSubscriptionTrial(arg0);
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
      return closure_15(arg0, "trialInterval", selectedOption);
    };
ReactCompilerGating = fn(558);
const tmp20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTrialLimit(arg0) {
      const subscriptionTrial = GuildRoleSubscriptionsHooks.useSubscriptionTrial(arg0);
      let prop;
      if (subscriptionTrial != null) {
        prop = subscriptionTrial.max_num_active_trial_users;
      }
      if (prop == null) {
        prop = null;
      }
      return closure_15(arg0, "trialLimit", prop);
    }
  : function useTrialLimit(arg0) {
      const subscriptionTrial = GuildRoleSubscriptionsHooks.useSubscriptionTrial(arg0);
      let prop;
      if (subscriptionTrial != null) {
        prop = subscriptionTrial.max_num_active_trial_users;
      }
      if (prop == null) {
        prop = null;
      }
      return closure_15(arg0, "trialLimit", prop);
    };
ReactCompilerGating = fn(558);
const tmp21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHasChanges(arg0) {
      closure_0 = arg0;
      const cResult = c.c(2);
      if (cResult[0] !== arg0) {
        const fn = function t(arg0) {
          return undefined !== arg0.listings[closure_0];
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      return collapsed(tmp2);
    }
  : function useHasChanges(arg0) {
      closure_0 = arg0;
      return collapsed((arg0) => undefined !== arg0.listings[closure_0]);
    };
ReactCompilerGating = fn(558);
const tmp22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHasChangesForEditStateIds(arg0) {
      closure_0 = arg0;
      const cResult = c.c(2);
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
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      return collapsed(tmp2);
    }
  : function useHasChangesForEditStateIds(arg0) {
      closure_0 = arg0;
      return collapsed((arg0) => {
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
ReactCompilerGating = fn(558);
const tmp23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionPlan(arg0) {
      const cResult = c.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(arg0) {
          let first;
          if (arg0 != null) {
            first = arg0.subscription_plans[0];
          }
          return first;
        };
        cResult[0] = fn;
        let first = fn;
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
              if (cResult[5] === str) {
                let tmp9 = cResult[6];
              }
              if (cResult[7] !== tmp9) {
                const items = [tmp9];
                cResult[7] = tmp9;
                cResult[8] = items;
                let tmp10 = items;
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
  : function useSubscriptionPlan(arg0) {
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
        noop.useMemo(() => {
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
          const obj = { price: num, currency: null, interval: null, interval_count: null, id: null };
          let currency;
          if (price != null) {
            currency = tmp2.currency;
          }
          if (currency == null) {
            currency = constants2.USD;
          }
          obj.currency = currency;
          let interval;
          if (price != null) {
            interval = tmp2.interval;
          }
          if (interval == null) {
            interval = SubscriptionIntervalTypes.MONTH;
          }
          obj.interval = interval;
          let num2;
          if (price != null) {
            num2 = tmp2.interval_count;
          }
          if (num2 == null) {
            num2 = 1;
          }
          obj.interval_count = num2;
          let str;
          if (price != null) {
            str = tmp2.id;
          }
          if (str == null) {
            str = "";
          }
          obj.id = str;
          return obj;
        }, items),
      ];
      return items1;
    };
const size = fn(2);
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
  [tmp2, closure_0] = noop.useState(false);
  const tmp3 = _slicedToArray(noop.useState(), 2);
  closure_1 = tmp3[1];
  closure_0 = asyncGeneratorStep(async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj3 = { value, done: true };
            return obj3;
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
            return { value: "Reflect", done: true };
          }
        } else if (1 === tmp8) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            closure_129_5 = closure_129_1;
            subscriptionListing2 = subscriptionListing.getSubscriptionListing(closure_129_5);
            c4 = 2;
            closure_0(true);
            closure_1(undefined);
            if (null != subscriptionListing2) {
              closure_1(dependencyMap[22])(null != closure_129_2, "groupListingId is null");
              const obj5 = { guildId: closure_129_0, editStateId: closure_129_5, groupListingId: closure_129_2 };
              c5 = 4;
              c6 = 1;
              const obj6 = {
                value: (function updateListingFromEditState(editStateId) {
                  editStateId = editStateId.editStateId;
                  ({ guildId, groupListingId } = editStateId);
                  subscriptionListing = subscriptionListing.getSubscriptionListing(editStateId);
                  closure_1_1(38)(null != subscriptionListing, "listing doesnt exist");
                  const tmp4 = closure_1_10.getState().listings[editStateId];
                  closure_1_1(38)(null != tmp4, "edit state does not exist");
                  ({ name, description, channelBenefits, intangibleBenefits, priceTier, image, channelAccessFormat } =
                    tmp4);
                  const obj = {};
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
                    const found = benefits.filter(closure_1_0(15326).isChannelBenefit);
                    const found1 = benefits1.filter(closure_1_0(15326).isIntangibleBenefit);
                    if (channelBenefits == null) {
                      channelBenefits = found;
                    }
                    const items = [];
                    const arraySpreadResult = HermesBuiltin.arraySpread(channelBenefits, 0);
                    if (intangibleBenefits == null) {
                      intangibleBenefits = found1;
                    }
                    HermesBuiltin.arraySpread(intangibleBenefits, arraySpreadResult);
                    obj.benefits = items;
                  }
                  if (!obj2.isEmpty(obj)) {
                    const obj4 = { guildId, groupListingId, listingId: editStateId, data: obj };
                    subscriptionListing = closure_1_2(6944).updateSubscriptionListing(obj4);
                    const obj3 = closure_1_2(6944);
                  }
                  return subscriptionListing;
                })(obj5),
                done: false,
              };
              return obj6;
            } else {
              const obj7 = {
                guildId: closure_129_0,
                editStateId: closure_129_5,
                groupListingId: closure_129_2,
                onBeforeDispatchNewListing: closure_129_3,
              };
              c5 = 5;
              c6 = 1;
              const obj8 = {
                value: (function createListingFromEditState() {
                  const self = this;
                  const apply = closure_1_23.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(obj7),
                done: false,
              };
              return obj8;
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
            return { value: "IconComponent", done: null };
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
              const obj9 = { value, done: true };
              return obj9;
            } else {
              const obj10 = { guildId: closure_129_0, editStateId: closure_129_5 };
              (function updateListingPeripheralsFromEditState() {
                const self = this;
                const apply = closure_1_22.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(obj10);
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
                closure_0(1271).batchUpdates(() => {
                  closure_2_10.setState((listings) => {
                    const obj = { listings: null };
                    const obj2 = {};
                    const merged = Object.assign(listings.listings);
                    obj2[id] = listings.listings[closure_1_0];
                    obj2[closure_1_0] = undefined;
                    obj.listings = obj2;
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
            let obj = { value, done: true };
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
          const obj11 = { value, done: true };
          return obj11;
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
export const useEditStateIds = ReactCompilerGating.isReactCompilerEnabled()
  ? function useEditStateIds(arg0, arg1, arg2) {
      _require = arg1;
      const cResult = require("c").c(27);
      if (cResult[0] !== arg2) {
        let obj2 = arg2;
        if (undefined === arg2) {
          obj2 = { includeSoftDeleted: false };
        }
        cResult[0] = arg2;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      let obj = require("c");
      const subscriptionListingsForGroup = require("GuildRoleSubscriptionsHooks").useSubscriptionListingsForGroup(
        arg0,
        tmp4,
      );
      if (cResult[2] !== arg1) {
        const fn = function s(arg0) {
          return arg0.editStateIdsForGroup[closure_0];
        };
        cResult[2] = arg1;
        cResult[3] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[3];
      }
      const tmp8 = closure_10(tmp6);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function f(setEditStateIdsForGroup) {
          return setEditStateIdsForGroup.setEditStateIdsForGroup;
        };
        cResult[4] = fn2;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[4];
      }
      const tmpResult = require("GuildRoleSubscriptionsHooks");
      closure_1 = closure_10(tmp9);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0) {
            return arg0.setListing;
          }
        }
        cResult[5] = S;
      } else {
        class S {
          constructor(arg0) {
            return arg0.setListing;
          }
        }
      }
      const tmp7Result = closure_10(tmp9);
      closure_2 = closure_10(S);
      if (cResult[6] === subscriptionListingsForGroup) {
        class S {
          constructor(arg0) {
            return arg0.setListing;
          }
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0) {
            return arg0.setListing;
          }
        }
        cResult[9] = tmp14;
      } else {
        class S {
          constructor(arg0) {
            return arg0.setListing;
          }
        }
      }
      if (cResult[10] !== tmp8) {
        class S {
          constructor(arg0) {
            return arg0.setListing;
          }
        }
        if (tmp8 == null) {
          class S {
            constructor(arg0) {
              return arg0.setListing;
            }
          }
        }
        cResult[10] = tmp8;
        cResult[11] = tmp8;
        const tmp15 = tmp8;
      } else {
        class S {
          constructor(arg0) {
            return arg0.setListing;
          }
        }
      }
      let items = [...tmp15];
      cResult[6] = subscriptionListingsForGroup;
      cResult[7] = tmp8;
      cResult[8] = items;
      const tmp7Result2 = closure_10(S);
    }
  : function useEditStateIds(arg0, arg1) {
      _require = arg1;
      let obj = arg2;
      if (arg2 === undefined) {
        obj = { includeSoftDeleted: false };
      }
      let subscriptionListingsForGroup = require("GuildRoleSubscriptionsHooks").useSubscriptionListingsForGroup(
        arg0,
        obj,
      );
      const tmp2 = closure_10((arg0) => arg0.editStateIdsForGroup[closure_0]);
      closure_2 = tmp2;
      const tmp3 = closure_10((setEditStateIdsForGroup) => setEditStateIdsForGroup.setEditStateIdsForGroup);
      dependencyMap = tmp3;
      const tmp4 = closure_10((setListing) => setListing.setListing);
      closure_4 = tmp4;
      const obj3 = {
        editStateIds: null,
        addNewEditStateId: null,
        addNewEditStateFromTemplate: null,
        removeEditStateId: null,
      };
      let items = [tmp2, subscriptionListingsForGroup];
      obj3.editStateIds = noop.useMemo(() => {
        const items = [...subscriptionListingsForGroup.map((id) => id.id)];
        let items1 = closure_2;
        if (closure_2 == null) {
          items1 = [];
        }
        HermesBuiltin.arraySpread(items1, tmp);
        return items;
      }, items);
      let items1 = [arg1, tmp3];
      obj3.addNewEditStateId = noop.useCallback(() => {
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
      const items2 = [arg1, tmp3, tmp4];
      obj3.addNewEditStateFromTemplate = noop.useCallback((listings) => {
        closure_0 = listings;
        const v4Result = closure_0(1278).v4();
        subscriptionListingsForGroup = v4Result;
        dependencyMap(closure_0, (arg0) => {
          let items = arg0;
          if (arg0 == null) {
            items = [];
          }
          const items1 = [];
          items1[HermesBuiltin.arraySpread(items, 0)] = v4Result;
          return items1;
        });
        listings = listings.listings;
        const item = listings.forEach((item) => {
          closure_1_4(closure_1, () => {
            const obj = {
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
            const obj2 = { unicodeEmoji: "Array", icon: item.image };
            obj.roleIcon = obj2;
            return obj;
          });
        });
        return v4Result;
      }, items2);
      const items3 = [arg1, tmp3];
      obj3.removeEditStateId = noop.useCallback((arg0) => {
        closure_0 = arg0;
        dependencyMap(closure_0, (arg0) => {
          let items = arg0;
          if (arg0 == null) {
            items = [];
          }
          return items.filter((item) => item !== closure_1_0);
        });
      }, items3);
      return obj3;
    };
