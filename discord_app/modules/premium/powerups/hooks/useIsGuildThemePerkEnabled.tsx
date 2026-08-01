// === Module 15152: useIsGuildThemePerkEnabled ===

// Module 15152 (useIsGuildThemePerkEnabled)
import createGuildRecordFromRust from "createGuildRecordFromRust";
import calculateAppliedBoosts from "calculateAppliedBoosts";
import { GuildFeatures } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/premium/powerups/hooks/useIsGuildThemePerkEnabled.tsx");

export default function useIsGuildThemePerkEnabled(arg0) {
  const _require = arg0;
  const items = [createGuildRecordFromRust, calculateAppliedBoosts];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null != callback;
    if (tmp2) {
      const guild = outer1_2.getGuild(tmp);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(outer1_4.GUILD_THEME);
      }
      let tmp7 = true === hasItem;
      if (!tmp7) {
        const stateForGuild = outer1_3.getStateForGuild(tmp);
        let tmp10;
        if (stateForGuild != null) {
          const unlockedPowerups = stateForGuild.unlockedPowerups;
          if (unlockedPowerups != null) {
            tmp10 = unlockedPowerups[callback(undefined, outer1_1[4]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
          }
        }
        tmp7 = null != tmp10;
      }
      tmp2 = tmp7;
    }
    return tmp2;
  }, items1);
};