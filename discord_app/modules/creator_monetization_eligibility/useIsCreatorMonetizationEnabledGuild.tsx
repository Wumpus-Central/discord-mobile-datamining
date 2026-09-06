// discord_app/modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx
import GuildStore from "../../stores/GuildStore.tsx";

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx",
);

export default function useIsCreatorMonetizationEnabledGuild(arg0) {
  _require = arg0;
  const items = [GuildStore];
  return require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
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
}
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
