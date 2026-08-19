// discord_app/modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx
import useGuildAppliedBoostCount from "useGuildPowerupsBoostCount.tsx";
import useGuildAppliedBoostCountDefault from "useGuildPowerupsBoostCount.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import ME from "../../../../Constants.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

require = fn;
({ AppliedGuildBoostsRequiredForBoostedGuildTier: c4, BoostedGuildTiers: c5, GuildFeatures: closure_6 } = ME);
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx");

export default function useGuildPowerupBoostLevelProgress(arg0) {
  const _require = arg0;
  const tmp = useGuildAppliedBoostCountDefault(arg0);
  const items = [closure_3];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const guild = closure_1_3.getGuild(closure_0);
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier == null) {
      premiumTier = closure_1_5.NONE;
    }
    return premiumTier;
  });
  const obj = initialize;
  const items1 = [closure_3];
  let num = 0;
  if (!obj2.useStateFromStores(items1, () => {
    const guild = closure_1_3.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(closure_1_6.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    num = dependencyMap[stateFromStores];
  }
  return num + tmp.available;
};
export const getGuildPowerupBoostLevelProgress = function getGuildPowerupBoostLevelProgress(id) {
  const guildPowerupsBoostCount = useGuildAppliedBoostCount.getGuildPowerupsBoostCount(id);
  guild = guild.getGuild(id);
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  if (premiumTier == null) {
    premiumTier = constants.NONE;
  }
  return dependencyMap[premiumTier] + guildPowerupsBoostCount.available;
};