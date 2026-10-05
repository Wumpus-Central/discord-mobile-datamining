// discord_app/modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import FlagUtilsAll from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import GuildRoleSubscriptionSettingUtils from "../feature_gating/GuildRoleSubscriptionSettingUtils.tsx";
import GuildRoleSubscriptionsExperimentUtils from "../GuildRoleSubscriptionsExperimentUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildRoleSubscriptionsStore from "../GuildRoleSubscriptionsStore.tsx";
import GuildRoleSubscriptionTierTemplatesStore from "GuildRoleSubscriptionTierTemplatesStore.tsx";
import allSettled_mod from "../../../../_runtime/05323_allSettled.js";

const require = globalThis.__r;

require = fn;
function getUsedTemplateChannelsForGuild(arg0) {
  const arr = useEditStateStore.getState().editStateIdsForGroup[arg0];
  const listings = useEditStateStore.getState().listings;
  const set = new Set();
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
  const tmp2 = new Set();
  while (tmp4 !== undefined) {
    let channel = GuildRoleSubscriptionTierTemplatesStore.getChannel(tmp5);
    let obj = channel;
    if (null != channel) {
      let arr2 = items.push(obj.set("guild_id", arg0));
    }
    continue;
  }
  return items;
}
let closure_14 = async function _createChannelsFromTemplateTierBenefits(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = importDefault;
          const items = [];
          closure_130_2 = items;
          closure_130_3 = [];
          let item = importDefault.forEach((ref_id) => {
            channel = channel.getChannel(ref_id.ref_id);
            if (null != channel) {
              const obj = closure_1(c3[14]);
              closure_1_2.push(
                obj.createRoleSubscriptionTemplateChannel(closure_1_0, channel.name, channel.type, channel.topic),
              );
              closure_1_3.push(channel);
            }
          });
          if (0 !== items.length) {
            c3 = 1;
            c4 = 1;
            const obj4 = { value: Promise.allSettled(items), done: false };
            return obj4;
          } else {
            c4 = 3;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
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
          } else if (null != closure_1_1) {
            const findIndexResult = closure_1_1.findIndex((ref_id) => ref_id.ref_id === id);
            if (-1 !== findIndexResult) {
              if (closure_1_1 != null) {
                closure_1_1.splice(findIndexResult, 1);
              }
            }
          }
        });
      }
      c4 = 3;
      let obj = { value, done: true };
      return obj;
    } catch (tmp9) {
      c4 = tmp;
      throw tmp9;
    }
  }
};
const useMemo = fn(19).useMemo;
const useEditStateStore = fn(15046).useEditStateStore;
const GuildFeatures = fn(1085).GuildFeatures;
const ChannelFlags = fn(2058).ChannelFlags;
let allSettled = allSettled_mod;
allSettled = allSettled.shim();
let closure_12 = {};
fn(558);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      let flags = dependencyMap;
      const cResult = require("c").c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          return ChannelStore.getChannel(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp5);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildRoleSubscriptionTierTemplatesStore];
        cResult[3] = items1;
        let tmp6 = items1;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] !== arg0) {
        const fn2 = function h() {
          return GuildRoleSubscriptionTierTemplatesStore.getChannel(closure_0);
        };
        cResult[4] = arg0;
        cResult[5] = fn2;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[5];
      }
      const tmpResult = require("useStateFromStores");
      let stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp6, tmp8);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildRoleSubscriptionsStore];
        cResult[6] = items2;
        let tmp10 = items2;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] !== arg0) {
        const fn3 = function _() {
          return GuildRoleSubscriptionsStore.getBenefitChannel(closure_0);
        };
        cResult[7] = arg0;
        cResult[8] = fn3;
        let tmp12 = fn3;
      } else {
        tmp12 = cResult[8];
      }
      const tmpResult3 = require("useStateFromStores");
      let name = require("useStateFromStores").useStateFromStores(tmp10, tmp12);
      let tmp13 = null;
      if (null != stateFromStores) {
        tmp13 = null;
        if (stateFromStores.isObfuscated()) {
          tmp13 = null;
          if (null != name) {
            if (cResult[9] === name.name) {
            }
            const obj2 = { name: name.name, flags: null };
            flags = stateFromStores.flags;
            obj2.flags = FlagUtilsAll.removeFlag(flags, ChannelFlags.OBFUSCATED);
            const mergeResult = stateFromStores.merge(obj2);
            name = name.name;
            cResult[9] = name;
            cResult[10] = stateFromStores;
            cResult[11] = mergeResult;
          }
        }
      }
      if (null != stateFromStores) {
        let tmp19 = stateFromStores;
        if (stateFromStores.isObfuscated()) {
          if (tmp13 == null) {
            tmp13 = stateFromStores;
          }
          tmp19 = tmp13;
        }
        stateFromStores1 = tmp19;
      }
      return stateFromStores1;
    }
  : (arg0) => {
      _require = arg0;
      const items = [ChannelStore];
      const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
        ChannelStore.getChannel(closure_0),
      );
      const obj = require("useStateFromStores");
      const items1 = [GuildRoleSubscriptionTierTemplatesStore];
      let stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () =>
        GuildRoleSubscriptionTierTemplatesStore.getChannel(closure_0),
      );
      let obj3 = require("useStateFromStores");
      const items2 = [GuildRoleSubscriptionsStore];
      const stateFromStores2 = require("useStateFromStores").useStateFromStores(items2, () =>
        GuildRoleSubscriptionsStore.getBenefitChannel(closure_0),
      );
      const items3 = [stateFromStores, stateFromStores2];
      let tmp3 = useMemo(() => {
        let mergeResult = null;
        if (null != stateFromStores) {
          mergeResult = null;
          if (stateFromStores.isObfuscated()) {
            mergeResult = null;
            if (null != stateFromStores2) {
              const obj2 = {
                name: tmp2.name,
                flags: FlagUtilsAll.removeFlag(stateFromStores.flags, ChannelFlags.OBFUSCATED),
              };
              mergeResult = stateFromStores.merge(obj2);
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
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx",
);

export const useChannelWithTemplateFallback = tmp3;
export const useSuggestedUnusedPrices = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      _require = arg0;
      const cResult = require("c").c(21);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          return GuildRoleSubscriptionsStore.getSubscriptionListingsForGuild(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
      if (cResult[3] !== arg0) {
        const fn2 = function f(arg0) {
          return arg0.editStateIdsForGroup[closure_0];
        };
        cResult[3] = arg0;
        cResult[4] = fn2;
        let tmp7 = fn2;
      } else {
        tmp7 = cResult[4];
      }
      const tmp9 = useEditStateStore(tmp7);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function p(listings) {
          return listings.listings;
        };
        cResult[5] = fn3;
        let tmp10 = fn3;
      } else {
        tmp10 = cResult[5];
      }
      const tmp8Result = useEditStateStore(tmp10);
      closure_1 = tmp8Result;
      if (undefined !== arg2) {
        if (undefined !== arg1) {
          if (cResult[6] !== stateFromStores) {
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              class S {
                constructor(arg0) {
                  soft_deleted = arg0.soft_deleted;
                  tmp = !soft_deleted;
                  if (!soft_deleted) {
                    tmp = !arg0.archived;
                  }
                  return tmp;
                }
              }
              cResult[8] = S;
            } else {
              class S {
                constructor(arg0) {
                  soft_deleted = arg0.soft_deleted;
                  tmp = !soft_deleted;
                  if (!soft_deleted) {
                    tmp = !arg0.archived;
                  }
                  return tmp;
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
                  if (-1 === tmp22) {
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
                    const sum = tmp22 + 1;
                    let tmp27 = forResult;
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
                        tmp27 = items1;
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
                          tmp27 = forResult;
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
                    cResult[16] = tmp22;
                    cResult[17] = arg1;
                    cResult[18] = obj4;
                    cResult[19] = items1;
                    cResult[20] = tmp27;
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
              const set = new Set(obj3.concat(tmp12));
              cResult[13] = obj3;
              cResult[14] = tmp12;
              cResult[15] = set;
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
      }
      return null;
    }
  : (arg0, arr, arg2) => {
      _require = arg0;
      const items = [GuildRoleSubscriptionsStore];
      const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
        GuildRoleSubscriptionsStore.getSubscriptionListingsForGuild(closure_0),
      );
      const arr3 = useEditStateStore((arg0) => arg0.editStateIdsForGroup[closure_0]);
      closure_1 = useEditStateStore((listings) => listings.listings);
      if (undefined !== arg2) {
        if (undefined !== arr) {
          const found = stateFromStores.filter((soft_deleted) => {
            soft_deleted = soft_deleted.soft_deleted;
            let tmp = !soft_deleted;
            if (!soft_deleted) {
              tmp = !soft_deleted.archived;
            }
            return tmp;
          });
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
          const set = new Set(items1.concat(mapped));
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
export const announceCreateTemplateChannels = function announceCreateTemplateChannels(arg0) {
  const arr = getUsedTemplateChannelsForGuild(arg0);
  closure_12[arg0] = arr;
  const item = arr.forEach((set) => {
    const result = set.set("flags", constants.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    DispatcherDefault.dispatch({ type: "CHANNEL_CREATE", channel: result });
  });
};
export const announceDeleteTemplateChannels = function announceDeleteTemplateChannels(arg0) {
  let arr = closure_12[arg0];
  if (arr == null) {
    arr = getUsedTemplateChannelsForGuild(arg0);
  }
  const item = arr.forEach((channel) => {
    DispatcherDefault.dispatch({ type: "CHANNEL_DELETE", channel });
  });
};
export const createChannelsFromTemplateTierBenefits = function createChannelsFromTemplateTierBenefits() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getTemplateTierCreationAnalyticsContext = function getTemplateTierCreationAnalyticsContext(arg0, arg1) {
  const tmp = useEditStateStore.getState().listings[arg0];
  let usedTemplate;
  if (tmp != null) {
    usedTemplate = tmp.usedTemplate;
  }
  if (null == usedTemplate) {
    return { templateCategory: null, hasChangeFromTemplate: null };
  } else {
    const templateWithCategory = GuildRoleSubscriptionTierTemplatesStore.getTemplateWithCategory(arg1, usedTemplate);
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
                      const obj2 = { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
                      return obj2;
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
                      const obj3 = { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
                      return obj3;
                    }
                    const obj = { templateCategory: templateWithCategory.category, hasChangeFromTemplate: false };
                    return obj;
                  }
                }
                const obj4 = { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
                return obj4;
              }
            }
          }
        }
      }
      const obj5 = { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
      return obj5;
    }
  }
};
export const isEligibleForNewBadge = function isEligibleForNewBadge(features) {
  let result = GuildRoleSubscriptionSettingUtils.canManageGuildRoleSubscriptions(features);
  if (result) {
    features = features.features;
    result = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  }
  if (result) {
    result = GuildRoleSubscriptionsExperimentUtils.isGuildEligibleForTierTemplates(features.id);
    const tmpResult = GuildRoleSubscriptionsExperimentUtils;
  }
  return result;
};
