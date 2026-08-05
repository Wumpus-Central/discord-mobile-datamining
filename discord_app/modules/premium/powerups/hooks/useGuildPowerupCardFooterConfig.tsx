import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { VANITY_URL_POWERUP_SKU_ID } from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import { useGuildPowerupRollbackEnabled } from "useGuildPowerupRollbackEnabled.tsx";
import { usePowerupActiveStatus } from "usePowerupActiveStatus.tsx";
// discord_app/modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import BoostedGuildTiers from "BoostedGuildTiers";
import { GuildFeatures } from "ME";

let GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP;
let c4;
let c5;
const require = arg1;
({ GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP, GUILD_POWERUP_CONFIGURABLE_SKUS_MOBILE: c4, PowerupActiveStatusType: c5 } = BoostedGuildTiers);
const result = require("ME").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx");

export default function useGuildPowerupCardFooterConfig(arg0, skuId) {
  const _require = arg0;
  const tmp3 = usePowerupActiveStatus(arg0, skuId);
  let obj = _initialize;
  const items = [createGuildRecordFromRust];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = outer1_3.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(outer1_6.GUILD_THEME);
    }
    return true === hasItem;
  }, items1);
  let tmp6 = tmp3.type !== constants.INACTIVE;
  if (!tmp6) {
    tmp6 = skuId.skuId === _VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
    const tmp7 = skuId.skuId === _VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
  }
  let tmp8 = tmp6;
  if (!tmp6) {
    tmp8 = !useGuildPowerupRollbackEnabled(arg0, skuId, "GuildPowerupCardFooterAdmin");
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