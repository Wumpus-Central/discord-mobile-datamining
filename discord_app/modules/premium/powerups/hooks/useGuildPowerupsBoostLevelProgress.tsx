// === Module 4181: useGuildPowerupBoostLevelProgress ===

// Module 4181 (useGuildPowerupBoostLevelProgress)
import createGuildRecordFromRust from "createGuildRecordFromRust";
import ME from "ME";

let c4;
let c5;
let closure_6;
const require = arg1;
({ AppliedGuildBoostsRequiredForBoostedGuildTier: c4, BoostedGuildTiers: c5, GuildFeatures: closure_6 } = ME);
const result = require("useGuildAppliedBoostCount").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx");

export default function useGuildPowerupBoostLevelProgress(arg0) {
  const _require = arg0;
  const tmp = importDefault(4162)(arg0);
  const items = [createGuildRecordFromRust];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    const guild = outer1_3.getGuild(closure_0);
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier == null) {
      premiumTier = outer1_5.NONE;
    }
    return premiumTier;
  });
  const obj = _require(589);
  const items1 = [createGuildRecordFromRust];
  let num = 0;
  if (!obj2.useStateFromStores(items1, () => {
    const guild = outer1_3.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(outer1_6.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    num = dependencyMap[stateFromStores];
  }
  return num + tmp.available;
};
export const getGuildPowerupBoostLevelProgress = function getGuildPowerupBoostLevelProgress(id) {
  const guildPowerupsBoostCount = require(4162) /* useGuildAppliedBoostCount */.getGuildPowerupsBoostCount(id);
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