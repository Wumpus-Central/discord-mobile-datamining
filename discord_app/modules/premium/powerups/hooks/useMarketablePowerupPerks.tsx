// === Module 13577: useMarketablePowerupPerks ===

// Module 13577 (useMarketablePowerupPerks)
import noop from "module_19" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4449 */;

const require = fn;
const GuildPowerupsConstants = fn(4450);
const GuildPowerupType = GuildPowerupsConstants.GuildPowerupType;
let items = [...Array.from(tmp2.GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET), ...Array.from(tmp2.GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET), fn(4453).VANITY_URL_POWERUP_SKU_ID];
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx");

export default function useMarketablePowerupPerks(arg0) {
  _require = arg0;
  let items = [GuildPowerupsStore];
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
  let tmp2 = stateFromStores(12576)(arg0);
  dependencyMap = tmp2;
  let items1 = [stateFromStores, tmp2];
  return noop.useMemo(() => {
    let items = stateFromStores;
    if (stateFromStores == null) {
      items = [];
    }
    const items1 = [...items];
    if (null != closure_2) {
      items1.push(tmp);
    }
    return items1.filter((skuId) => !set.has(skuId.skuId));
  }, items1);
};