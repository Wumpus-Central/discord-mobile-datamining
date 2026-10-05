// === Module 7675: useGuildPowerupsBoostLevelProgress ===

// Module 7675 (useGuildPowerupsBoostLevelProgress)
import useGuildPowerupsBoostCount from "useGuildPowerupsBoostCount" /* 7671 */;
import GuildStore from "GuildStore" /* 2074 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useGuildPowerupsBoostCountDefault = useGuildPowerupsBoostCount;
let _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_4, BoostedGuildTiers: hasOwnProperty, GuildFeatures: metroRequire } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  const tmp4 = useGuildPowerupsBoostCountDefault(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      const guild = GuildStore.getGuild(closure_0);
      let premiumTier;
      if (guild != null) {
        premiumTier = guild.premiumTier;
      }
      if (premiumTier == null) {
        premiumTier = hasOwnProperty.NONE;
      }
      return premiumTier;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class G {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroRequire.PREMIUM_TIER_3_OVERRIDE);
        }
        return true === hasItem;
      }
    }
    cResult[4] = arg0;
    cResult[5] = G;
  } else {
    class G {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroRequire.PREMIUM_TIER_3_OVERRIDE);
        }
        return true === hasItem;
      }
    }
  }
  let num7 = 0;
  const tmpResult2 = require("get initialized");
  if (!tmpResult2.useStateFromStores(tmp9, G)) {
    class G {
      constructor() {
        const guild = GuildStore.getGuild(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroRequire.PREMIUM_TIER_3_OVERRIDE);
        }
        return true === hasItem;
      }
    }
    num7 = closure_4[stateFromStores];
  }
  return num7 + tmp4.available;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [GuildStore];
  const tmp = useGuildPowerupsBoostCountDefault(arg0);
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier == null) {
      premiumTier = hasOwnProperty.NONE;
    }
    return premiumTier;
  });
  const items1 = [GuildStore];
  let num = 0;
  const obj2 = require("get initialized");
  if (!obj2.useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(metroRequire.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    num = closure_4[stateFromStores];
  }
  return num + tmp.available;
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx");

export default tmp3;
export const getGuildPowerupBoostLevelProgress = function getGuildPowerupBoostLevelProgress(id) {
  const obj = useGuildPowerupsBoostCount;
  const guildPowerupsBoostCount = obj.getGuildPowerupsBoostCount(id);
  const guild = GuildStore.getGuild(id);
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  if (premiumTier == null) {
    premiumTier = hasOwnProperty.NONE;
  }
  return React3[premiumTier] + guildPowerupsBoostCount.available;
};