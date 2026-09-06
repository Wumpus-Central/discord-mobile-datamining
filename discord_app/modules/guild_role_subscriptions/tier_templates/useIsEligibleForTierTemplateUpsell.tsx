// === Module 16253: useIsEligibleForTierTemplateUpsell ===

// Module 16253 (useIsEligibleForTierTemplateUpsell)
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx");

export default function useIsEligibleForTierTemplateUpsell(guildId) {
  _require = guildId;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  const obj = require("initialize");
  let hasItem;
  const guildEligibleForTierTemplates = require("GuildRoleSubscriptionsExperimentUtils").useGuildEligibleForTierTemplates(guildId);
  if (stateFromStores != null) {
    const features = stateFromStores.features;
    hasItem = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  }
  let result = true === hasItem;
  if (result) {
    let hasItem1;
    if (stateFromStores != null) {
      const features2 = stateFromStores.features;
      hasItem1 = features2.has(GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    }
    result = false === hasItem1;
  }
  const obj2 = require("GuildRoleSubscriptionsExperimentUtils");
  if (result) {
    result = tmpResult.canManageGuildRoleSubscriptions(stateFromStores);
  }
  if (result) {
    result = guildEligibleForTierTemplates;
  }
  return result;
};