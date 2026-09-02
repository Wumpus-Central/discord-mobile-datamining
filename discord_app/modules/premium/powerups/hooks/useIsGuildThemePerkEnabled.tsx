// === Module 15979: useIsGuildThemePerkEnabled ===

// Module 15979 (useIsGuildThemePerkEnabled)
import closure_2 from "createGuildRecordFromRust" /* 1908 */;
import closure_3 from "calculateAppliedBoosts" /* 4364 */;
import { GuildFeatures } from "ME" /* 673 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useIsGuildThemePerkEnabled.tsx");

export default function useIsGuildThemePerkEnabled(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  const items1 = [arg0];
  return _require(586).useStateFromStores(items, () => {
    let tmp2 = null != callback;
    if (tmp2) {
      const guild = closure_1_2.getGuild(tmp);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(closure_1_4.GUILD_THEME);
      }
      let tmp7 = true === hasItem;
      if (!tmp7) {
        const stateForGuild = closure_1_3.getStateForGuild(tmp);
        let tmp10;
        if (stateForGuild != null) {
          const unlockedPowerups = stateForGuild.unlockedPowerups;
          if (unlockedPowerups != null) {
            tmp10 = unlockedPowerups[callback(undefined, closure_1_1[4]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
          }
        }
        tmp7 = null != tmp10;
      }
      tmp2 = tmp7;
    }
    return tmp2;
  }, items1);
};