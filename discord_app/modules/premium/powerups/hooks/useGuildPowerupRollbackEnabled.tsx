// discord_app/modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx
import Powerups from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import FileUpload250MbPowerupExperiment from "../experiments/FileUpload250MbPowerupExperiment.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackEnabled.tsx");

export default function useGuildPowerupRollbackEnabled(guildId, skuId, location) {
  const fileUpload250MbPowerupRollbackEnabled =
    FileUpload250MbPowerupExperiment.useFileUpload250MbPowerupRollbackEnabled(guildId, location);
  return skuId.skuId === Powerups.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID && fileUpload250MbPowerupRollbackEnabled;
}
export const isGuildPowerupRollbackEnabled = function isGuildPowerupRollbackEnabled(
  guildId,
  skuId,
  maybeGetPerkPurchaseablePopoutDCF,
) {
  let fileUpload250MbPowerupRollbackEnabled = skuId.skuId === Powerups.GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID;
  if (fileUpload250MbPowerupRollbackEnabled) {
    fileUpload250MbPowerupRollbackEnabled = FileUpload250MbPowerupExperiment.getFileUpload250MbPowerupRollbackEnabled(
      guildId,
      maybeGetPerkPurchaseablePopoutDCF,
    );
    const tmpResult = FileUpload250MbPowerupExperiment;
  }
  return fileUpload250MbPowerupRollbackEnabled;
};
