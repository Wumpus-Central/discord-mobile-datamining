// discord_app/modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx
import { VANITY_URL_POWERUP_SKU_ID } from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import { experiment } from "../experiments/FileUpload250MbPowerupExperiment.tsx";
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx");

export default function useGuildPowerupRollbackEnabled(guildId, skuId, location) {
  const fileUpload250MbPowerupRollbackEnabled = experiment.useFileUpload250MbPowerupRollbackEnabled(guildId, location);
  const obj = experiment;
  return skuId.skuId === VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID && fileUpload250MbPowerupRollbackEnabled;
};
export const isGuildPowerupRollbackEnabled = function isGuildPowerupRollbackEnabled(closure_0, skuId, maybeGetPerkPurchaseablePopoutDCF) {
  let fileUpload250MbPowerupRollbackEnabled = skuId.skuId === VANITY_URL_POWERUP_SKU_ID.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID;
  if (fileUpload250MbPowerupRollbackEnabled) {
    fileUpload250MbPowerupRollbackEnabled = experiment.getFileUpload250MbPowerupRollbackEnabled(closure_0, maybeGetPerkPurchaseablePopoutDCF);
    const tmpResult = experiment;
  }
  return fileUpload250MbPowerupRollbackEnabled;
};