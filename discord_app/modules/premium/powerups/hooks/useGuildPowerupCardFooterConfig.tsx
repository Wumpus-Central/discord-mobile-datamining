// discord_app/modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled.tsx";
import usePowerupActiveStatusDefault from "usePowerupActiveStatus.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = fn;
const GuildPowerupsConstants = fn(4450);
({
  GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP,
  GUILD_POWERUP_CONFIGURABLE_SKUS_MOBILE: closure_4,
  PowerupActiveStatusType: hasOwnProperty,
} = GuildPowerupsConstants);
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx");

export default function useGuildPowerupCardFooterConfig(arg0, skuId) {
  _require = arg0;
  const tmp3 = usePowerupActiveStatusDefault(arg0, skuId);
  let obj = require("initialize");
  const items = [GuildStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      const guild = GuildStore.getGuild(closure_0);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(GuildFeatures.GUILD_THEME);
      }
      return true === hasItem;
    },
    items1,
  );
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
  obj = { showToggleButton: tmp8, showConfigureButton: null, isPowerupActive: null };
  let hasItem = tmp6;
  if (tmp6) {
    hasItem = set.has(skuId.skuId);
  }
  obj.showConfigureButton = hasItem;
  obj.isPowerupActive = tmp6;
  return obj;
}
