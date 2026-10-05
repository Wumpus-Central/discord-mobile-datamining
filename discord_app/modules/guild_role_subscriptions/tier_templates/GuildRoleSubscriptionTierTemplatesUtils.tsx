// discord_app/modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx
import react from "../../../../_runtime/00019_react.js";
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import FlagUtilsAll from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import ChannelConstants from "../../channel/ChannelConstants.tsx";
import GuildRoleSubscriptionSettingUtils from "../feature_gating/GuildRoleSubscriptionSettingUtils.tsx";
import GuildRoleSubscriptionsExperimentUtils from "../GuildRoleSubscriptionsExperimentUtils.tsx";
import GuildRoleSubscriptionEditStore from "../edit_state/GuildRoleSubscriptionEditStore.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildRoleSubscriptionsStore from "../GuildRoleSubscriptionsStore.tsx";
import GuildRoleSubscriptionTierTemplatesStore from "GuildRoleSubscriptionTierTemplatesStore.tsx";
import allSettled_mod from "../../../../_runtime/05323_allSettled.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c3, c4, set;

function getUsedTemplateChannelsForGuild(arg0) {
  const arr = useEditStateStore.getState().editStateIdsForGroup[arg0];
  const listings = useEditStateStore.getState().listings;
  set = new Set();
  const tmp2 = set;
  if (null != arr) {
    let item = arr.forEach((item) => {
      let channelBenefits;
      if (listings[item] != null) {
        channelBenefits = tmp.channelBenefits;
      }
      if (channelBenefits != null) {
        item = channelBenefits.forEach((ref_id) => {
          if (null != channel.getChannel(ref_id.ref_id)) {
            set.add(ref_id.ref_id);
          }
        });
      }
    });
  }
  const items = [];
  const tmp4 = tmp2[Symbol.iterator]();
  while (tmp4 !== undefined) {
    let channel = GuildRoleSubscriptionTierTemplatesStore.getChannel(tmp5);
    obj = channel;
    if (null != channel) {
      let arr2 = items.push(obj.set("guild_id", arg0));
    }
    continue;
  }
  return items;
}
let obj = function _createChannelsFromTemplateTierBenefits() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0;
    let tmp;
    let closure_1 = arg1;
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            const items = [];
            let closure_3 = [];
            let item = closure_1.forEach((ref_id) => {
              channel = channel.getChannel(ref_id.ref_id);
              if (null != channel) {
                const push = navigation.push;
                obj = closure_2_1(closure_2_3[14]);
                push(obj.createRoleSubscriptionTemplateChannel(closure_1_0, channel.name, channel.type, channel.topic));
                closure_1_3.push(channel);
              }
            });
            if (0 !== items.length) {
              c3 = 1;
              c4 = 1;
              const obj4 = { value: Promise.allSettled(items), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const item1 = value.forEach((status, index) => {
            const id = closure_1_3[index].id;
            if ("fulfilled" === status.status) {
              const body = status.value.body;
              const arr2 = closure_2_8.getState().editStateIdsForGroup[closure_1_0];
              const listings = closure_2_8.getState().listings;
              if (null != arr2) {
                let item = arr2.forEach((item) => {
                  let channelBenefits;
                  if (listings[item] != null) {
                    channelBenefits = tmp.channelBenefits;
                  }
                  if (channelBenefits != null) {
                    item = channelBenefits.forEach((ref_id) => {
                      if (ref_id.ref_id === closure_1_0) {
                        ref_id.ref_id = id.id;
                      }
                    });
                  }
                });
              }
            } else {
              const tmp = null;
              if (null != closure_1_1) {
                const findIndexResult = closure_1_1.findIndex((ref_id) => ref_id.ref_id === id);
                if (-1 !== findIndexResult) {
                  if (closure_1_1 != null) {
                    closure_1_1.splice(findIndexResult, 1);
                  }
                }
              }
            }
          });
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp8) {
        c4 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
const useMemo = react.useMemo;
const useEditStateStore = GuildRoleSubscriptionEditStore.useEditStateStore;
const GuildFeatures = Constants.GuildFeatures;
const ChannelFlags = ChannelConstants.ChannelFlags;
let allSettled = allSettled_mod;
allSettled = allSettled.shim();
let closure_12 = {};
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let obj7;
      let tmp11;
      let tmp13;
      let tmp6;
      let tmp7;
      let tmp9;
      _require = arg0;
      obj = require("react");
      const cResult = obj.c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          return ChannelStore.getChannel(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("useStateFromStores");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildRoleSubscriptionTierTemplatesStore];
        cResult[3] = items1;
        tmp7 = items1;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== arg0) {
        const fn2 = function h() {
          return GuildRoleSubscriptionTierTemplatesStore.getChannel(closure_0);
        };
        cResult[4] = arg0;
        cResult[5] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[5];
      }
      const tmpResult3 = require("useStateFromStores");
      let stateFromStores1 = tmpResult3.useStateFromStores(tmp7, tmp9);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildRoleSubscriptionsStore];
        cResult[6] = items2;
        tmp11 = items2;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== arg0) {
        const fn3 = function _() {
          return GuildRoleSubscriptionsStore.getBenefitChannel(closure_0);
        };
        cResult[7] = arg0;
        cResult[8] = fn3;
        tmp13 = fn3;
      } else {
        tmp13 = cResult[8];
      }
      const tmpResult4 = require("useStateFromStores");
      const stateFromStores2 = tmpResult4.useStateFromStores(tmp11, tmp13);
      let tmp15 = null;
      if (null != stateFromStores) {
        tmp15 = null;
        if (stateFromStores.isObfuscated()) {
          tmp15 = null;
          if (null != stateFromStores2) {
            if (cResult[9] === stateFromStores2.name) {
              let tmp16;
              if (cResult[10] === stateFromStores) {
                tmp16 = cResult[11];
              }
              tmp15 = tmp16;
            }
            const merge = stateFromStores.merge;
            const obj2 = {
              name: stateFromStores2.name,
              flags: obj7.removeFlag(stateFromStores.flags, ChannelFlags.OBFUSCATED),
            };
            obj7 = FlagUtilsAll;
            const mergeResult = merge(obj2);
            cResult[9] = stateFromStores2.name;
            cResult[10] = stateFromStores;
            cResult[11] = mergeResult;
            tmp16 = mergeResult;
          }
        }
      }
      if (null != stateFromStores) {
        let tmp20 = stateFromStores;
        if (stateFromStores.isObfuscated()) {
          if (tmp15 == null) {
            tmp15 = stateFromStores;
          }
          tmp20 = tmp15;
        }
        stateFromStores1 = tmp20;
      }
      return stateFromStores1;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [ChannelStore];
      obj = require("useStateFromStores");
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_0));
      let obj3 = require("useStateFromStores");
      const items1 = [GuildRoleSubscriptionTierTemplatesStore];
      let stateFromStores1 = obj3.useStateFromStores(items1, () =>
        GuildRoleSubscriptionTierTemplatesStore.getChannel(closure_0),
      );
      const items2 = [GuildRoleSubscriptionsStore];
      const obj4 = require("useStateFromStores");
      const stateFromStores2 = obj4.useStateFromStores(items2, () =>
        GuildRoleSubscriptionsStore.getBenefitChannel(closure_0),
      );
      const items3 = [stateFromStores, stateFromStores2];
      let tmp3 = useMemo(() => {
        let obj3;
        let mergeResult = null;
        if (null != stateFromStores) {
          mergeResult = null;
          if (stateFromStores.isObfuscated()) {
            mergeResult = null;
            if (null != stateFromStores2) {
              const merge = stateFromStores.merge;
              const obj2 = { name: tmp2.name, flags: obj3.removeFlag(stateFromStores.flags, ChannelFlags.OBFUSCATED) };
              obj3 = FlagUtilsAll;
              mergeResult = merge(obj2);
            }
          }
        }
        return mergeResult;
      }, items3);
      if (null != stateFromStores) {
        let tmp4 = stateFromStores;
        if (stateFromStores.isObfuscated()) {
          if (tmp3 == null) {
            tmp3 = stateFromStores;
          }
          tmp4 = tmp3;
        }
        stateFromStores1 = tmp4;
      }
      return stateFromStores1;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0, arg1, arg2) {
      let closure_0;
      let first;
      let tmp10;
      let tmp6;
      let tmp7;
      _require = arg0;
      const tmp = _require;
      obj = require("react");
      const cResult = obj.c(21);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          return GuildRoleSubscriptionsStore.getSubscriptionListingsForGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== arg0) {
        const fn2 = function f(arg0) {
          return arg0.editStateIdsForGroup[closure_0];
        };
        cResult[3] = arg0;
        cResult[4] = fn2;
        tmp7 = fn2;
      } else {
        tmp7 = cResult[4];
      }
      const tmp9 = useEditStateStore(tmp7);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function p(listings) {
          return listings.listings;
        };
        cResult[5] = fn3;
        tmp10 = fn3;
      } else {
        tmp10 = cResult[5];
      }
      const tmp8Result = useEditStateStore(tmp10);
      let closure_1 = tmp8Result;
      if (undefined !== arg2) {
        if (undefined !== arg1) {
          if (cResult[6] !== stateFromStores) {
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              class S {
                constructor(soft_deleted) {
                  return !soft_deleted.soft_deleted && !soft_deleted.archived;
                }
              }
              cResult[8] = S;
            } else {
              class S {
                constructor(soft_deleted) {
                  return !soft_deleted.soft_deleted && !soft_deleted.archived;
                }
              }
            }
            const found = stateFromStores.filter(S);
            const _Symbol2 = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              class T {
                constructor(arg0) {
                  return arg0.subscription_plans[0].price;
                }
              }
              cResult[9] = T;
            } else {
              class T {
                constructor(arg0) {
                  return arg0.subscription_plans[0].price;
                }
              }
            }
            const mapped = found.map(T);
            cResult[6] = stateFromStores;
            cResult[7] = mapped;
          } else {
            class T {
              constructor(arg0) {
                return arg0.subscription_plans[0].price;
              }
            }
          }
          if (cResult[10] === tmp8Result) {
            class T {
              constructor(arg0) {
                return arg0.subscription_plans[0].price;
              }
            }
            if (cResult[13] === obj3) {
              class T {
                constructor(arg0) {
                  return arg0.subscription_plans[0].price;
                }
              }
              if (obj4.has(arg2)) {
                class T {
                  constructor(arg0) {
                    return arg0.subscription_plans[0].price;
                  }
                }
                if (-1 === tmp19) {
                  class T {
                    constructor(arg0) {
                      return arg0.subscription_plans[0].price;
                    }
                  }
                  return null;
                } else {
                  class T {
                    constructor(arg0) {
                      return arg0.subscription_plans[0].price;
                    }
                  }
                  const _Symbol3 = Symbol;
                  const forResult = Symbol.for("react.early_return_sentinel");
                  const items1 = [];
                  const sum = tmp19 + 1;
                  let tmp24 = forResult;
                  if (sum < arg1.length) {
                    class T {
                      constructor(arg0) {
                        return arg0.subscription_plans[0].price;
                      }
                    }
                    while (true) {
                      class T {
                        constructor(arg0) {
                          return arg0.subscription_plans[0].price;
                        }
                      }
                      if (!obj4.has(arg1[sum])) {
                        class T {
                          constructor(arg0) {
                            return arg0.subscription_plans[0].price;
                          }
                        }
                      }
                      tmp24 = items1;
                      if (3 === items1.length) {
                        class T {
                          constructor(arg0) {
                            return arg0.subscription_plans[0].price;
                          }
                        }
                      } else {
                        class T {
                          constructor(arg0) {
                            return arg0.subscription_plans[0].price;
                          }
                        }
                        tmp24 = forResult;
                        if (sum >= arg1.length) {
                          class T {
                            constructor(arg0) {
                              return arg0.subscription_plans[0].price;
                            }
                          }
                        } else {
                          class T {
                            constructor(arg0) {
                              return arg0.subscription_plans[0].price;
                            }
                          }
                        }
                      }
                    }
                  }
                  cResult[16] = tmp19;
                  cResult[17] = arg1;
                  cResult[18] = obj4;
                  cResult[19] = items1;
                  cResult[20] = tmp24;
                }
              } else {
                class T {
                  constructor(arg0) {
                    return arg0.subscription_plans[0].price;
                  }
                }
                return null;
              }
            }
            const _Set = Set;
            const self = this;
            const self2 = this;
            cResult[13] = obj3;
            cResult[14] = tmp12;
            cResult[15] = new Set(obj3.concat(tmp12));
            set = new Set(obj3.concat(tmp12));
          }
          const items2 = [];
          if (undefined !== tmp9) {
            class T {
              constructor(arg0) {
                return arg0.subscription_plans[0].price;
              }
            }
          }
          cResult[10] = tmp8Result;
          cResult[11] = tmp9;
          cResult[12] = items2;
        }
      }
      return null;
    }
  : function (arg0, arr, arg2) {
      let closure_0;
      _require = arg0;
      const items = [GuildRoleSubscriptionsStore];
      obj = require("useStateFromStores");
      const stateFromStores = obj.useStateFromStores(items, () =>
        GuildRoleSubscriptionsStore.getSubscriptionListingsForGuild(closure_0),
      );
      const arr3 = useEditStateStore((arg0) => arg0.editStateIdsForGroup[closure_0]);
      let closure_1 = useEditStateStore((listings) => listings.listings);
      if (undefined !== arg2) {
        if (undefined !== arr) {
          const found = stateFromStores.filter((soft_deleted) => !soft_deleted.soft_deleted && !soft_deleted.archived);
          const items1 = [];
          const mapped = found.map((item) => item.subscription_plans[0].price);
          if (undefined !== arr3) {
            const item = arr3.forEach((item) => {
              let priceTier;
              if (closure_1[item] != null) {
                priceTier = tmp.priceTier;
              }
              if (null != priceTier) {
                items1.push(priceTier);
              }
            });
          }
          const _Set = Set;
          const self = this;
          const self2 = this;
          set = new Set(items1.concat(mapped));
          if (set.has(arg2)) {
            const index = arr.indexOf(arg2);
            if (-1 === index) {
              return null;
            } else {
              const items2 = [];
              let sum = index + 1;
              if (sum < arr.length) {
                while (true) {
                  if (!set.has(arr[sum])) {
                    arr = items2.push(arr[sum]);
                  }
                  if (3 === items2.length) {
                    break;
                  } else {
                    sum = sum + 1;
                  }
                }
                return items2;
              }
              return items2;
            }
          } else {
            return null;
          }
        }
      }
      return null;
    };
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx",
);

export const useChannelWithTemplateFallback = tmp3;
export const useSuggestedUnusedPrices = tmp4;
export const announceCreateTemplateChannels = function announceCreateTemplateChannels(arg0) {
  const arr = getUsedTemplateChannelsForGuild(arg0);
  closure_12[arg0] = arr;
  const item = arr.forEach((set) => {
    const result = set.set("flags", constants.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    obj = DispatcherDefault;
    obj.dispatch({ type: "CHANNEL_CREATE", channel: result });
  });
};
export const announceDeleteTemplateChannels = function announceDeleteTemplateChannels(arg0) {
  let arr = closure_12[arg0];
  if (arr == null) {
    arr = getUsedTemplateChannelsForGuild(arg0);
  }
  const item = arr.forEach((channel) => {
    obj = DispatcherDefault;
    const obj2 = { type: "CHANNEL_DELETE", channel };
    obj.dispatch(obj2);
  });
};
export const createChannelsFromTemplateTierBenefits = function createChannelsFromTemplateTierBenefits() {
  return obj(...arguments);
};
export const getTemplateTierCreationAnalyticsContext = function getTemplateTierCreationAnalyticsContext(c1, c0) {
  const tmp = useEditStateStore.getState().listings[c1];
  let usedTemplate;
  if (tmp != null) {
    usedTemplate = tmp.usedTemplate;
  }
  if (null == usedTemplate) {
    return { templateCategory: null, hasChangeFromTemplate: null };
  } else {
    const templateWithCategory = GuildRoleSubscriptionTierTemplatesStore.getTemplateWithCategory(c0, usedTemplate);
    if (null == templateWithCategory) {
      return { templateCategory: null, hasChangeFromTemplate: null };
    } else {
      const first = templateWithCategory.listings[0];
      let name;
      if (tmp != null) {
        name = tmp.name;
      }
      if (name === first.name) {
        let description;
        if (tmp != null) {
          description = tmp.description;
        }
        if (description === first.description) {
          let priceTier;
          if (tmp != null) {
            priceTier = tmp.priceTier;
          }
          if (priceTier === first.price_tier) {
            let image;
            if (tmp != null) {
              image = tmp.image;
            }
            if (image === first.image) {
              let roleColor;
              if (tmp != null) {
                roleColor = tmp.roleColor;
              }
              if (roleColor === first.role_color) {
                let length;
                if (tmp != null) {
                  const channelBenefits = tmp.channelBenefits;
                  if (channelBenefits != null) {
                    length = channelBenefits.length;
                  }
                }
                if (length === first.channels.length) {
                  let length1;
                  if (tmp != null) {
                    const intangibleBenefits = tmp.intangibleBenefits;
                    if (intangibleBenefits != null) {
                      length1 = intangibleBenefits.length;
                    }
                  }
                  if (length1 === first.additional_perks.length) {
                    let num4 = 0;
                    if (0 < first.channels.length) {
                      while (tmp.channelBenefits[num4].name === first.channels[num4].name) {
                        if (tmp10.description !== tmp11.description) {
                          break;
                        } else if (tmp10.emoji_name !== tmp11.emoji_name) {
                          break;
                        } else {
                          num4 = num4 + 1;
                        }
                      }
                      return { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
                    }
                    let num = 0;
                    if (0 < first.additional_perks.length) {
                      while (tmp.intangibleBenefits[num].name === first.additional_perks[num].name) {
                        if (tmp13.description !== tmp14.description) {
                          break;
                        } else if (tmp13.emoji_name !== tmp14.emoji_name) {
                          break;
                        } else {
                          num = num + 1;
                        }
                      }
                      return { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
                    }
                    return { templateCategory: templateWithCategory.category, hasChangeFromTemplate: false };
                  }
                }
                return { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
              }
            }
          }
        }
      }
      return { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
    }
  }
};
export const isEligibleForNewBadge = function isEligibleForNewBadge(features) {
  obj = GuildRoleSubscriptionSettingUtils;
  let result = obj.canManageGuildRoleSubscriptions(features);
  if (result) {
    features = features.features;
    result = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  }
  if (result) {
    const tmpResult = GuildRoleSubscriptionsExperimentUtils;
    result = tmpResult.isGuildEligibleForTierTemplates(features.id);
  }
  return result;
};
