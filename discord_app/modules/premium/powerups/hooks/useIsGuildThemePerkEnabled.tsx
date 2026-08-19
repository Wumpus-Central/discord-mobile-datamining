// === Module 15420: useIsGuildThemePerkEnabled ===

// Module 15420 (useIsGuildThemePerkEnabled)
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import calculateAppliedBoosts from "calculateAppliedBoosts" /* 4261 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/hooks/useIsGuildThemePerkEnabled.tsx");

export default function useIsGuildThemePerkEnabled(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null != callback;
    if (tmp2) {
      const guild = closure_1_2.getGuild(callback);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(GuildFeatures.GUILD_THEME);
      }
      let tmp7 = true === hasItem;
      if (!tmp7) {
        const stateForGuild = closure_1_3.getStateForGuild(callback);
        let tmp10;
        if (stateForGuild != null) {
          const unlockedPowerups = stateForGuild.unlockedPowerups;
          if (unlockedPowerups != null) {
            tmp10 = unlockedPowerups[callback(undefined, dependencyMap[4]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
          }
        }
        tmp7 = null != tmp10;
      }
      tmp2 = tmp7;
    }
    return tmp2;
  }, items1);
};