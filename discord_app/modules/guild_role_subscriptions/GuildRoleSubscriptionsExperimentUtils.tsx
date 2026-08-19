// === Module 13353: GuildFeatures ===

// Module 13353 (GuildFeatures)
import closure_2 from "createGuildRecordFromRust" /* 1910 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = arg1;
let items = [, , ];
({ ROLE_SUBSCRIPTIONS_ENABLED: arr[0], CREATOR_MONETIZABLE: arr[1], CREATOR_MONETIZABLE_PROVISIONAL: arr[2] } = GuildFeatures);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsExperimentUtils.tsx");

export const hasEnabledMonetization = function hasEnabledMonetization(arg0) {
  closure_0 = arg0;
  let someResult = null != arg0;
  if (someResult) {
    someResult = items.some((arg0) => {
      features = features.features;
      return features.has(arg0);
    });
  }
  return someResult;
};
export const isGuildEligibleForTierTemplates = function isGuildEligibleForTierTemplates(id) {
  guild = guild.getGuild(id);
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
  const _require = guildId;
  items = [closure_2];
  return _require(647).useStateFromStores(items, () => {
    const guild = closure_1_2.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(closure_1_3.ROLE_SUBSCRIPTIONS_ENABLED);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
};