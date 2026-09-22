// === Module 12754: useGuildPowerupRollbackEnabled ===

// Module 12754 (useGuildPowerupRollbackEnabled)
import Powerups from "Powerups" /* 4649 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 4685 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx");

export default function useGuildPowerupRollbackEnabled(guildId, skuId, useGuildPowerupNewPerkMarketingVersion) {
  const serverThemeRollbackEnabled = ServerThemeExperiment.useServerThemeRollbackEnabled(guildId, useGuildPowerupNewPerkMarketingVersion);
  return skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID && serverThemeRollbackEnabled;
};
export const isGuildPowerupRollbackEnabledForSku = function isGuildPowerupRollbackEnabledForSku(arg0, arg1) {
  return arg0 === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID && arg1;
};
export const isGuildPowerupRollbackEnabled = function isGuildPowerupRollbackEnabled(guildId, skuId, maybeGetPerkPurchaseablePopoutDCF) {
  let serverThemeRollbackEnabled = skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID;
  if (serverThemeRollbackEnabled) {
    serverThemeRollbackEnabled = ServerThemeExperiment.getServerThemeRollbackEnabled(guildId, maybeGetPerkPurchaseablePopoutDCF);
    const tmpResult = ServerThemeExperiment;
  }
  return serverThemeRollbackEnabled;
};