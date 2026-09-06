// discord_app/modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import FlagUtilsAll from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import GuildRoleSubscriptionSettingUtils from "../feature_gating/GuildRoleSubscriptionSettingUtils.tsx";
import GuildRoleSubscriptionsExperimentUtils from "../GuildRoleSubscriptionsExperimentUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildRoleSubscriptionsStore from "../GuildRoleSubscriptionsStore.tsx";
import GuildRoleSubscriptionTierTemplatesStore from "GuildRoleSubscriptionTierTemplatesStore.tsx";
import allSettled from "../../../../_runtime/04803_allSettled.js";

require = fn;
function getUsedTemplateChannelsForGuild(arg0) {
  let arr = useEditStateStore.getState().editStateIdsForGroup[arg0];
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
      arr = items.push(obj.set("guild_id", arg0));
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
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = importDefault;
          const items = [];
          closure_130_2 = items;
          closure_130_3 = [];
          let item = importDefault.forEach((ref_id) => {
            channel = channel.getChannel(ref_id.ref_id);
            if (null != channel) {
              const obj = closure_1(c3[12]);
              closure_1_2.push(
                obj.createRoleSubscriptionTemplateChannel(closure_1_0, channel.name, channel.type, channel.topic),
              );
              closure_1_3.push(channel);
            }
          });
          if (0 !== items.length) {
            c3 = 1;
            c4 = 1;
            const obj1 = { value: Promise.allSettled(items), done: false };
            return obj1;
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
      obj = { value, done: true };
      return obj;
    } catch (tmp9) {
      c4 = tmp;
      throw tmp9;
    }
  }
};
const useMemo = fn(19).useMemo;
const useEditStateStore = fn(15228).useEditStateStore;
const GuildFeatures = fn(1074).GuildFeatures;
const ChannelFlags = fn(1964).ChannelFlags;
allSettled = allSettled.shim();
let closure_12 = {};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/tier_templates/GuildRoleSubscriptionTierTemplatesUtils.tsx",
);

export const useChannelWithTemplateFallback = function useChannelWithTemplateFallback(ref_id) {
  _require = ref_id;
  const items = [ChannelStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    ChannelStore.getChannel(closure_0),
  );
  let obj = require("useStateFromStores");
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
    let obj = stateFromStores;
    let mergeResult = null;
    if (null != stateFromStores) {
      mergeResult = null;
      if (obj.isObfuscated()) {
        mergeResult = null;
        if (null != stateFromStores2) {
          obj = { name: tmp2.name, flags: null };
          obj.flags = FlagUtilsAll.removeFlag(obj.flags, ChannelFlags.OBFUSCATED);
          mergeResult = obj.merge(obj);
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
  _require = guildId;
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    GuildRoleSubscriptionsStore.getSubscriptionListingsForGuild(closure_0),
  );
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
      if (set.has(price_tier)) {
        const index = priceTiers.indexOf(price_tier);
        if (-1 === index) {
          return null;
        } else {
          const items2 = [];
          let sum = index + 1;
          if (sum < priceTiers.length) {
            while (true) {
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
    DispatcherDefault.dispatch({ type: "CHANNEL_CREATE", channel: result });
  });
};
export const announceDeleteTemplateChannels = function announceDeleteTemplateChannels(arg0) {
  let arr = closure_12[arg0];
  if (arr == null) {
    arr = getUsedTemplateChannelsForGuild(arg0);
  }
  const item = arr.forEach((channel) => {
    const obj = { type: "CHANNEL_DELETE", channel };
    obj.dispatch(obj);
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
                      let obj = { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
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
                      obj = { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
                      return obj;
                    }
                    obj = { templateCategory: templateWithCategory.category, hasChangeFromTemplate: false };
                    return obj;
                  }
                }
                const obj1 = { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
                return obj1;
              }
            }
          }
        }
      }
      const obj2 = { templateCategory: templateWithCategory.category, hasChangeFromTemplate: true };
      return obj2;
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
