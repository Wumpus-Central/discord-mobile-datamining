// discord_app/modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import calculateAppliedBoosts from "../GuildPowerupsStore.tsx";
import BoostedGuildTiers from "../constants/GuildPowerupsConstants.tsx";

const require = fn;
const GuildPowerupType = BoostedGuildTiers.GuildPowerupType;
let items = [...Array.from(tmp2.GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET), ...Array.from(tmp2.GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET), require("VANITY_URL_POWERUP_SKU_ID").VANITY_URL_POWERUP_SKU_ID];
const set = new Set(items);
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx");

export default function useMarketablePowerupPerks(arg0) {
  const _require = arg0;
  let items = [closure_4];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const stateForGuild = closure_1_4.getStateForGuild(closure_0);
    let tmp2;
    if (stateForGuild != null) {
      const powerupCatalog = stateForGuild.powerupCatalog;
      if (powerupCatalog != null) {
        tmp2 = powerupCatalog[GuildPowerupType.PERK];
      }
    }
    return tmp2;
  });
  let tmp2 = stateFromStores(11745)(arg0);
  dependencyMap = tmp2;
  let items1 = [stateFromStores, tmp2];
  return React.useMemo(() => {
    let items = stateFromStores;
    if (stateFromStores == null) {
      items = [];
    }
    const items1 = [...items];
    if (null != closure_2) {
      items1.push(tmp);
    }
    return items1.filter((item, index) => !set.has(item.skuId));
  }, items1);
};