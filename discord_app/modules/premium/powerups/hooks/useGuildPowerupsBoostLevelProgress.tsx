// === Module 4300: useGuildPowerupBoostLevelProgress ===

// Module 4300 (useGuildPowerupBoostLevelProgress)
import useGuildAppliedBoostCount from "useGuildAppliedBoostCount" /* 4281 */;
import useGuildAppliedBoostCountDefault from "useGuildAppliedBoostCount" /* 4281 */;
import closure_3 from "createGuildRecordFromRust" /* 1910 */;
import ME from "ME" /* 676 */;

require = arg1;
({ AppliedGuildBoostsRequiredForBoostedGuildTier: c4, BoostedGuildTiers: c5, GuildFeatures: closure_6 } = ME);
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx");

export default function useGuildPowerupBoostLevelProgress(arg0) {
  const _require = arg0;
  const tmp = useGuildAppliedBoostCountDefault(arg0);
  const items = [closure_3];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
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
  const obj = _require(589);
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