// discord_app/modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx
import computeGuildRoleSubscriptionSettingsVisibility from "../feature_gating/GuildRoleSubscriptionSettingUtils.tsx";
import GuildFeatures2 from "../GuildRoleSubscriptionsExperimentUtils.tsx";
import closure_4 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { useMemo } from "../../../../_runtime/00019_noop.js";
import closure_6 from "../../../stores/ChannelStore.tsx";
import closure_7 from "../GuildRoleSubscriptionsStore.tsx";
import { useEditStateStore } from "../edit_state/GuildRoleSubscriptionEditStore.tsx";
import closure_9 from "GuildRoleSubscriptionTierTemplatesStore.tsx";
import { GuildFeatures } from "../../../Constants.tsx";
import { ChannelFlags } from "../../channel/ChannelConstants.tsx";
import importDefaultResult from "../../../../_runtime/04644_allSettled.js";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

require = arg1;
function getUsedTemplateChannelsForGuild(arg0) {
  let arr = useEditStateStore.getState().editStateIdsForGroup[arg0];
  const listings = useEditStateStore.getState().listings;
  const set = new Set();
  if (null != arr) {
    let item = arr.forEach((arg0) => {
      let channelBenefits;
      if (listings[arg0] != null) {
        channelBenefits = tmp.channelBenefits;
      }
      if (channelBenefits != null) {
        const item = channelBenefits.forEach((ref_id) => {
          if (null != closure_1_9.getChannel(ref_id.ref_id)) {
            set.add(ref_id.ref_id);
          }
        });
      }
    });
  }
  const items = [];
  while (tmp4 !== undefined) {
    let tmp6 = store;
    let channel = store.getChannel(tmp5);
    let obj = channel;
    if (null != channel) {
      let tmp8 = channel;
      arr = items.push(obj.set("guild_id", arg0));
    }
    continue;
  }
  return items;
}
function _createChannelsFromTemplateTierBenefits() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c4 = 0;
    return (function*(arg0, arr) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arr;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arr;
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
              throw arr;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arr;
              return obj;
            } else {
              let items = tmp2;
              items = [];
              c3 = [];
              let item = closure_1.forEach((ref_id) => {
                const channel = closure_1_9.getChannel(ref_id.ref_id);
                if (null != channel) {
                  const obj = callback(arr[12]);
                  arr = items.push(obj.createRoleSubscriptionTemplateChannel(closure_0, channel.name, channel.type, channel.topic));
                  arr = arr.push(channel);
                }
              });
              if (0 !== items.length) {
                c3 = 1;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = Promise.allSettled(items);
                return obj1;
              } else {
                c4 = 3;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arr;
          } else if (arg0 !== 2) {
            const item1 = arr.forEach((status) => {
              const id = arr[arg1].id;
              if ("fulfilled" === status.status) {
                const body = status.value.body;
                const arr2 = closure_1_8.getState().editStateIdsForGroup[id];
                const listings = closure_1_8.getState().listings;
                if (null != arr2) {
                  let item = arr2.forEach((arg0) => {
                    let channelBenefits;
                    if (listings[arg0] != null) {
                      channelBenefits = tmp.channelBenefits;
                    }
                    if (channelBenefits != null) {
                      const item = channelBenefits.forEach(() => { ... });
                    }
                  });
                }
              } else if (null != body) {
                const findIndexResult = arr.findIndex((ref_id) => ref_id.ref_id === id);
                if (-1 !== findIndexResult) {
                  if (arr != null) {
                    arr.splice(findIndexResult, 1);
                  }
                }
              }
            });
          }
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arr;
          return obj;
        } catch (tmp9) {
          c4 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
importDefaultResult.shim();
let closure_12 = {};
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx");

export const useChannelWithTemplateFallback = function useChannelWithTemplateFallback(ref_id) {
  const _require = ref_id;
  const items = [closure_6];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => closure_1_6.getChannel(closure_0));
  let obj = defaultAreStatesEqual;
  const items1 = [closure_9];
  let stateFromStores1 = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items1, () => closure_1_9.getChannel(closure_0));
  let obj3 = defaultAreStatesEqual;
  const items2 = [closure_7];
  const stateFromStores2 = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items2, () => closure_1_7.getBenefitChannel(closure_0));
  const items3 = [stateFromStores, stateFromStores2];
  let tmp3 = useMemo(() => {
    let obj = stateFromStores;
    let mergeResult = null;
    if (null != stateFromStores) {
      mergeResult = null;
      if (obj.isObfuscated()) {
        mergeResult = null;
        if (null != stateFromStores2) {
          obj = { name: null, flags: null };
          obj[0] = tmp2.name;
          obj[1] = stateFromStores2(closure_1_3[10]).removeFlag(obj.flags, closure_1_11.OBFUSCATED);
          mergeResult = obj.merge(obj);
          const obj3 = stateFromStores2(closure_1_3[10]);
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
export const useSuggestedUnusedPrices = function useSuggestedUnusedPrices(guildId, priceTiers, price_tier) {
  const _require = guildId;
  const items = [closure_7];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => closure_1_7.getSubscriptionListingsForGuild(closure_0));
  const arr3 = useEditStateStore((arg0) => arg0.editStateIdsForGroup[closure_0]);
  closure_1 = useEditStateStore((listings) => listings.listings);
  if (undefined !== price_tier) {
    if (undefined !== priceTiers) {
      const found = stateFromStores.filter((soft_deleted) => {
        soft_deleted = soft_deleted.soft_deleted;
        let tmp = !soft_deleted;
        if (!soft_deleted) {
          tmp = !soft_deleted.archived;
        }
        return tmp;
      });
      const items1 = [];
      const mapped = found.map((arg0) => arg0.subscription_plans[0].price);
      if (undefined !== arr3) {
        const item = arr3.forEach((arg0) => {
          let priceTier;
          if (table[arg0] != null) {
            priceTier = tmp.priceTier;
          }
          if (null != priceTier) {
            items1.push(priceTier);
          }
        });
      }
      const _Set = Set;
      const set = new Set(items1.concat(mapped));
      if (set.has(price_tier)) {
        const index = priceTiers.indexOf(price_tier);
        if (-1 === index) {
          return null;
        } else {
          const items2 = [];
          let sum = index + 1;
          if (sum < priceTiers.length) {
            while (true) {
              let tmp9 = sum;
              if (!set.has(priceTiers[sum])) {
                let arr = items2.push(priceTiers[sum]);
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
    callback(table[11]).dispatch({ type: "CHANNEL_CREATE", channel: result });
  });
};
export const announceDeleteTemplateChannels = function announceDeleteTemplateChannels(arg0) {
  let arr = table[arg0];
  if (arr == null) {
    arr = getUsedTemplateChannelsForGuild(arg0);
  }
  const item = arr.forEach((channel) => {
    let obj = callback(table[11]);
    obj = { type: "CHANNEL_DELETE", channel };
    obj.dispatch(obj);
  });
};
export const createChannelsFromTemplateTierBenefits = function createChannelsFromTemplateTierBenefits(c0, c7) {
  const self = this;
  const apply = _createChannelsFromTemplateTierBenefits.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getTemplateTierCreationAnalyticsContext = function getTemplateTierCreationAnalyticsContext(closure_1, c0) {
  const tmp = useEditStateStore.getState().listings[closure_1];
  let usedTemplate;
  if (tmp != null) {
    usedTemplate = tmp.usedTemplate;
  }
  if (null == usedTemplate) {
    return { templateCategory: null, hasChangeFromTemplate: null };
  } else {
    const templateWithCategory = store.getTemplateWithCategory(c0, usedTemplate);
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
                      let obj = { templateCategory: null, hasChangeFromTemplate: true };
                      obj[0] = templateWithCategory.category;
                      return obj;
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
                      obj = { templateCategory: null, hasChangeFromTemplate: true };
                      obj[0] = templateWithCategory.category;
                      return obj;
                    }
                    obj = { templateCategory: null, hasChangeFromTemplate: false };
                    obj[0] = templateWithCategory.category;
                    return obj;
                  }
                }
                obj1 = { templateCategory: null, hasChangeFromTemplate: true };
                obj1[0] = templateWithCategory.category;
                return obj1;
              }
            }
          }
        }
      }
      const obj2 = { templateCategory: null, hasChangeFromTemplate: true };
      obj2[0] = templateWithCategory.category;
      return obj2;
    }
  }
};
export const isEligibleForNewBadge = function isEligibleForNewBadge(features) {
  let result = computeGuildRoleSubscriptionSettingsVisibility.canManageGuildRoleSubscriptions(features);
  if (result) {
    features = features.features;
    result = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  }
  if (result) {
    result = GuildFeatures2.isGuildEligibleForTierTemplates(features.id);
    const tmpResult = GuildFeatures2;
  }
  return result;
};