// === Module 13483: useGuildPowerupRollbackEnabled ===

// Module 13483 (useGuildPowerupRollbackEnabled)
import Powerups from "Powerups" /* 8300 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 13484 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx");

export default function useGuildPowerupRollbackEnabled(guildId, skuId, useMarketablePowerupPerks) {
  const serverThemeRollbackEnabled = ServerThemeExperiment.useServerThemeRollbackEnabled(guildId, useMarketablePowerupPerks);
  return skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID && serverThemeRollbackEnabled;
};
export function isGuildPowerupRollbackEnabledForSku(arg0, arg1) {
  return arg0 === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID && arg1;
}
export function isGuildPowerupRollbackEnabled(guildId, skuId, maybeGetPerkPurchaseablePopoutDCF) {
  let serverThemeRollbackEnabled = skuId.skuId === Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID;
  if (serverThemeRollbackEnabled) {
    serverThemeRollbackEnabled = ServerThemeExperiment.getServerThemeRollbackEnabled(guildId, maybeGetPerkPurchaseablePopoutDCF);
    const tmpResult = ServerThemeExperiment;
  }
  return serverThemeRollbackEnabled;
}