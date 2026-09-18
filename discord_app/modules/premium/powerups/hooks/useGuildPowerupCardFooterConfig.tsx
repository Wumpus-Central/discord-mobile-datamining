// === Module 12776: useGuildPowerupCardFooterConfig ===

// Module 12776 (useGuildPowerupCardFooterConfig)
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12739 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12742 */;
import GuildStore from "GuildStore" /* 1980 */;

const require = globalThis.__r;

const require = fn;
const GuildPowerupsConstants = fn(4611);
({ GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP, GUILD_POWERUP_CONFIGURABLE_SKUS_MOBILE: closure_4, PowerupActiveStatusType: hasOwnProperty } = GuildPowerupsConstants);
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx");

export default function useGuildPowerupCardFooterConfig(arg0, skuId) {
  _require = arg0;
  const tmp3 = usePowerupActiveStatusDefault(arg0, skuId);
  const items = [GuildStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_THEME);
    }
    return true === hasItem;
  }, items1);
  let tmp6 = tmp3.type !== constants.INACTIVE;
  if (!tmp6) {
    tmp6 = skuId.skuId === require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
    const tmp7 = skuId.skuId === require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
  }
  let tmp8 = tmp6;
  if (!tmp6) {
    tmp8 = !useGuildPowerupRollbackEnabledDefault(arg0, skuId, "GuildPowerupCardFooterAdmin");
  }
  if (tmp8) {
    tmp8 = tmp3.type !== constants.TIER_OVERRIDE_ACTIVATED;
  }
  const obj2 = { showToggleButton: tmp8, showConfigureButton: null, isPowerupActive: null };
  let hasItem = tmp6;
  if (tmp6) {
    hasItem = set.has(skuId.skuId);
  }
  obj2.showConfigureButton = hasItem;
  obj2.isPowerupActive = tmp6;
  return obj2;
};