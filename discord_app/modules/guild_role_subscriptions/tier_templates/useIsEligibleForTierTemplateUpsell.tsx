// discord_app/modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildFeatures } from "ME";

const require = arg1;
let result = require("initialize").fileFinishedImporting("modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx");

export default function useIsEligibleForTierTemplateUpsell(guildId) {
  const _require = guildId;
  const items = [createGuildRecordFromRust];
  const stateFromStores = _require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => outer1_2.getGuild(closure_0));
  const obj = _require("../../../../discord_common/js/packages/flux/index.tsx");
  const tmp = _require;
  let hasItem;
  const guildEligibleForTierTemplates = _require("../GuildRoleSubscriptionsExperimentUtils.tsx").useGuildEligibleForTierTemplates(guildId);
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
  const obj2 = _require("../GuildRoleSubscriptionsExperimentUtils.tsx");
  if (result) {
    result = tmpResult.canManageGuildRoleSubscriptions(stateFromStores);
  }
  if (result) {
    result = guildEligibleForTierTemplates;
  }
  return result;
};