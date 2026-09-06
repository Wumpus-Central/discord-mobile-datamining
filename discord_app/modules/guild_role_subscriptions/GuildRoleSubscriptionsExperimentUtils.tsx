// === Module 13893: GuildRoleSubscriptionsExperimentUtils ===

// Module 13893 (GuildRoleSubscriptionsExperimentUtils)
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
let items = [, , ];
({ ROLE_SUBSCRIPTIONS_ENABLED: arr[0], CREATOR_MONETIZABLE: arr[1], CREATOR_MONETIZABLE_PROVISIONAL: arr[2] } = GuildFeatures);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsExperimentUtils.tsx");

export const hasEnabledMonetization = function hasEnabledMonetization(arg0) {
  let features = arg0;
  let someResult = null != arg0;
  if (someResult) {
    someResult = items.some((item) => {
      features = features.features;
      return features.has(item);
    });
  }
  return someResult;
};
export const isGuildEligibleForTierTemplates = function isGuildEligibleForTierTemplates(id) {
  const guild = GuildStore.getGuild(id);
  let flag;
  if (guild != null) {
    const features = guild.features;
    flag = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const useGuildEligibleForTierTemplates = function useGuildEligibleForTierTemplates(guildId) {
  _require = guildId;
  items = [GuildStore];
  return require("useStateFromStores").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
};