// === Module 15613: useIsEligibleForTierTemplateUpsell ===

// Module 15613 (useIsEligibleForTierTemplateUpsell)
import closure_2 from "createGuildRecordFromRust" /* 1910 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx");

export default function useIsEligibleForTierTemplateUpsell(guildId) {
  const _require = guildId;
  const items = [closure_2];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_2.getGuild(closure_0));
  const obj = _require(589);
  const tmp = _require;
  let hasItem;
  const guildEligibleForTierTemplates = _require(13446).useGuildEligibleForTierTemplates(guildId);
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
  const obj2 = _require(13446);
  if (result) {
    result = tmpResult.canManageGuildRoleSubscriptions(stateFromStores);
  }
  if (result) {
    result = guildEligibleForTierTemplates;
  }
  return result;
};