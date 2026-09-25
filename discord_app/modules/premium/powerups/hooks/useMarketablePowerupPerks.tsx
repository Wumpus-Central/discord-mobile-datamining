// === Module 13101: useMarketablePowerupPerks ===

// Module 13101 (useMarketablePowerupPerks)
import Powerups from "Powerups" /* 4723 */;
import noop from "module_19" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4719 */;

const require = globalThis.__r;

require = fn;
const GuildPowerupsConstants = fn(4720);
const GuildPowerupType = GuildPowerupsConstants.GuildPowerupType;
let items = [...Array.from(tmp2.GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET), ...Array.from(tmp2.GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET), fn(4723).VANITY_URL_POWERUP_SKU_ID];
let set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx");

export default function useMarketablePowerupPerks(guildId) {
  _require = guildId;
  let items = [memo];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const stateForGuild = GuildPowerupsStore.getStateForGuild(closure_0);
    let tmp2;
    if (stateForGuild != null) {
      const powerupCatalog = stateForGuild.powerupCatalog;
      if (powerupCatalog != null) {
        tmp2 = powerupCatalog[GuildPowerupType.PERK];
      }
    }
    return tmp2;
  });
  let tmp2 = stateFromStores(12054)(guildId);
  dependencyMap = tmp2;
  const obj = require("initialize");
  const serverThemeRollbackEnabled = require("ServerThemeExperiment").useServerThemeRollbackEnabled(guildId, "useMarketablePowerupPerks");
  let items1 = [serverThemeRollbackEnabled];
  memo = serverThemeRollbackEnabled.useMemo(() => {
    set = new Set(set);
    if (serverThemeRollbackEnabled) {
      set.add(Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID);
    }
    return set;
  }, items1);
  const items2 = [stateFromStores, tmp2, memo];
  return serverThemeRollbackEnabled.useMemo(() => {
    let items = stateFromStores;
    if (stateFromStores == null) {
      items = [];
    }
    const items1 = [...items];
    if (null != closure_2) {
      items1.push(tmp);
    }
    return items1.filter((skuId) => !set.has(skuId.skuId));
  }, items2);
};