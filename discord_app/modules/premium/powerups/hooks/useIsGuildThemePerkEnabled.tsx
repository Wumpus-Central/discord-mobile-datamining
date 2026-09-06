// === Module 16159: useIsGuildThemePerkEnabled ===

// Module 16159 (useIsGuildThemePerkEnabled)
import Powerups from "Powerups" /* 4453 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4449 */;

require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsGuildThemePerkEnabled.tsx");

export default function useIsGuildThemePerkEnabled(arg0) {
  _require = arg0;
  const items = [GuildStore, GuildPowerupsStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const guild = GuildStore.getGuild(tmp);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(GuildFeatures.GUILD_THEME);
      }
      let tmp7 = true === hasItem;
      if (!tmp7) {
        const stateForGuild = GuildPowerupsStore.getStateForGuild(tmp);
        let tmp10;
        if (stateForGuild != null) {
          const unlockedPowerups = stateForGuild.unlockedPowerups;
          if (unlockedPowerups != null) {
            tmp10 = unlockedPowerups[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
          }
        }
        tmp7 = null != tmp10;
      }
      tmp2 = tmp7;
    }
    return tmp2;
  }, items1);
};