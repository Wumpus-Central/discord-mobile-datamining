// === Module 7217: useIsCreatorMonetizationEnabledGuild ===

// Module 7217 (useIsCreatorMonetizationEnabledGuild)
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx");

export default function useIsCreatorMonetizationEnabledGuild(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return _require(589).useStateFromStores(items, () => {
    const guild = closure_1_2.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      const features = guild.features;
      const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
      let tmp5 = !hasItem;
      if (!hasItem) {
        const features2 = guild.features;
        let hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE);
        if (!hasItem1) {
          const features3 = guild.features;
          hasItem1 = features3.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
        }
        tmp5 = hasItem1;
      }
      tmp2 = tmp5;
    }
    return tmp2;
  });
};
export const isCreatorMonetizationEnabledGuild = function isCreatorMonetizationEnabledGuild(guild) {
  const features = guild.features;
  const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
  let tmp3 = !hasItem;
  if (!hasItem) {
    const features2 = guild.features;
    let hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE);
    if (!hasItem1) {
      const features3 = guild.features;
      hasItem1 = features3.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    }
    tmp3 = hasItem1;
  }
  return tmp3;
};