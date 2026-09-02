// === Module 12321: useGuildPowerupCardFooterConfig ===

// Module 12321 (useGuildPowerupCardFooterConfig)
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12284 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12287 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4365 */;
import { GuildFeatures } from "ME" /* 673 */;

const require = arg1;
({ GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP, GUILD_POWERUP_CONFIGURABLE_SKUS_MOBILE: c4, PowerupActiveStatusType: c5 } = BoostedGuildTiers);
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx");

export default function useGuildPowerupCardFooterConfig(arg0, skuId) {
  const _require = arg0;
  const tmp3 = usePowerupActiveStatusDefault(arg0, skuId);
  let obj = _require(586);
  const items = [closure_3];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = closure_1_3.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(closure_1_6.GUILD_THEME);
    }
    return true === hasItem;
  }, items1);
  let tmp6 = tmp3.type !== constants.INACTIVE;
  if (!tmp6) {
    tmp6 = skuId.skuId === _require(4368).GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
    const tmp7 = skuId.skuId === _require(4368).GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
  }
  let tmp8 = tmp6;
  if (!tmp6) {
    tmp8 = !useGuildPowerupRollbackEnabledDefault(arg0, skuId, "GuildPowerupCardFooterAdmin");
  }
  if (tmp8) {
    tmp8 = tmp3.type !== constants.TIER_OVERRIDE_ACTIVATED;
  }
  obj = { showToggleButton: tmp8, showConfigureButton: null, isPowerupActive: null };
  let hasItem = tmp6;
  if (tmp6) {
    hasItem = set.has(skuId.skuId);
  }
  obj[1] = hasItem;
  obj[2] = tmp6;
  return obj;
};