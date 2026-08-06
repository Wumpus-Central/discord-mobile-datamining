// discord_app/modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx
import noop from "noop";
import calculateAppliedBoosts from "calculateAppliedBoosts";
import BoostedGuildTiers from "BoostedGuildTiers";
import set from "BoostedGuildTiers";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const GuildPowerupType = BoostedGuildTiers.GuildPowerupType;
let items = [...Array.from(tmp2.GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET), ...Array.from(tmp2.GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET), require("VANITY_URL_POWERUP_SKU_ID").VANITY_URL_POWERUP_SKU_ID];
let set = new Set(items);
const result = set.fileFinishedImporting("modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx");

export default function useMarketablePowerupPerks(arg0) {
  const _require = arg0;
  let items = [calculateAppliedBoosts];
  const stateFromStores = _initialize.useStateFromStores(items, () => {
    const stateForGuild = outer1_4.getStateForGuild(closure_0);
    let tmp2;
    if (stateForGuild != null) {
      const powerupCatalog = stateForGuild.powerupCatalog;
      if (powerupCatalog != null) {
        tmp2 = powerupCatalog[outer1_5.PERK];
      }
    }
    return tmp2;
  });
  let tmp2 = stateFromStores(11853)(arg0);
  const dependencyMap = tmp2;
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
    return items1.filter((skuId) => !set.has(skuId.skuId));
  }, items1);
};