// === Module 12496: useGuildPowerupRollbackEnabled ===

// Module 12496 (useGuildPowerupRollbackEnabled)
import Powerups from "Powerups" /* 4453 */;
import FileUpload250MbPowerupExperiment from "FileUpload250MbPowerupExperiment" /* 4487 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx");

export default function useGuildPowerupRollbackEnabled(guildId, skuId, location) {
  const fileUpload250MbPowerupRollbackEnabled = FileUpload250MbPowerupExperiment.useFileUpload250MbPowerupRollbackEnabled(guildId, location);
  return skuId.skuId === Powerups.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID && fileUpload250MbPowerupRollbackEnabled;
};
export const isGuildPowerupRollbackEnabled = function isGuildPowerupRollbackEnabled(guildId, skuId, maybeGetPerkPurchaseablePopoutDCF) {
  let fileUpload250MbPowerupRollbackEnabled = skuId.skuId === Powerups.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID;
  if (fileUpload250MbPowerupRollbackEnabled) {
    fileUpload250MbPowerupRollbackEnabled = FileUpload250MbPowerupExperiment.getFileUpload250MbPowerupRollbackEnabled(guildId, maybeGetPerkPurchaseablePopoutDCF);
    const tmpResult = FileUpload250MbPowerupExperiment;
  }
  return fileUpload250MbPowerupRollbackEnabled;
};