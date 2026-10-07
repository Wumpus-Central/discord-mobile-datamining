// === Module 7686: useGuildPowerupsBoostLevelProgress ===

// Module 7686 (useGuildPowerupsBoostLevelProgress)
import useGuildPowerupsBoostCount from "useGuildPowerupsBoostCount" /* 7682 */;
import GuildStore from "GuildStore" /* 2074 */;

const require = globalThis.__r;
const useGuildPowerupsBoostCountDefault = useGuildPowerupsBoostCount;

require = fn;
const Constants = fn(1085);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_4, BoostedGuildTiers: hasOwnProperty, GuildFeatures: metroRequire } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(6);
  const obj = require("c");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      guild = GuildStore.getGuild(closure_0);
      let premiumTier;
      if (guild != null) {
        premiumTier = guild.premiumTier;
      }
      if (premiumTier == null) {
        premiumTier = constants.NONE;
      }
      return premiumTier;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmp4 = useGuildPowerupsBoostCountDefault(arg0);
  const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class G {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
        }
        return true === hasItem;
      }
    }
    cResult[4] = arg0;
    cResult[5] = G;
  } else {
    class G {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
        }
        return true === hasItem;
      }
    }
  }
  const tmpResult = require("initialize");
  let num7 = 0;
  if (!tmpResult2.useStateFromStores(tmp9, G)) {
    class G {
      constructor() {
        guild = closure_3.getGuild(closure_0);
        hasItem = undefined;
        if (guild != null) {
          features = guild.features;
          tmp3 = GuildFeatures;
          hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
        }
        return true === hasItem;
      }
    }
    num7 = dependencyMap[stateFromStores];
  }
  return num7 + tmp4.available;
}) : ((arg0) => {
  _require = arg0;
  const tmp = useGuildPowerupsBoostCountDefault(arg0);
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
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
  if (!obj2.useStateFromStores(items1, () => {
    guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(timestampProducer.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    num = dependencyMap[stateFromStores];
  }
  return num + tmp.available;
});
export const getGuildPowerupBoostLevelProgress = function getGuildPowerupBoostLevelProgress(id) {
  const guildPowerupsBoostCount = useGuildPowerupsBoostCount.getGuildPowerupsBoostCount(id);
  guild = GuildStore.getGuild(id);
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  if (premiumTier == null) {
    premiumTier = constants.NONE;
  }
  return dependencyMap[premiumTier] + guildPowerupsBoostCount.available;
};