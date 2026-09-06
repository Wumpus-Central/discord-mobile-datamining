// discord_app/modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx
import useGuildPowerupsBoostCount from "useGuildPowerupsBoostCount.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

const useGuildPowerupsBoostCountDefault = useGuildPowerupsBoostCount;

require = fn;
const Constants = fn(1074);
({
  AppliedGuildBoostsRequiredForBoostedGuildTier: closure_4,
  BoostedGuildTiers: hasOwnProperty,
  GuildFeatures: metroRequire,
} = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx");

export default function useGuildPowerupBoostLevelProgress(arg0) {
  _require = arg0;
  const tmp = useGuildPowerupsBoostCountDefault(arg0);
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier == null) {
      premiumTier = constants.NONE;
    }
    return premiumTier;
  });
  const obj = require("initialize");
  const items1 = [GuildStore];
  let num = 0;
  if (
    !obj2.useStateFromStores(items1, () => {
      const guild = GuildStore.getGuild(closure_0);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(timestampProducer.PREMIUM_TIER_3_OVERRIDE);
      }
      return true === hasItem;
    })
  ) {
    num = dependencyMap[stateFromStores];
  }
  return num + tmp.available;
}
export const getGuildPowerupBoostLevelProgress = function getGuildPowerupBoostLevelProgress(id) {
  const guildPowerupsBoostCount = useGuildPowerupsBoostCount.getGuildPowerupsBoostCount(id);
  const guild = GuildStore.getGuild(id);
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  if (premiumTier == null) {
    premiumTier = constants.NONE;
  }
  return dependencyMap[premiumTier] + guildPowerupsBoostCount.available;
};
