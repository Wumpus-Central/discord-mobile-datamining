import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { experiment } from "../experiments/FileUpload250MbPowerupExperiment.tsx";
import { usePowerupActiveStatus } from "../hooks/usePowerupActiveStatus.tsx";
// discord_app/modules/premium/powerups/utils/fileUpload.tsx
import calculateAppliedBoosts from "calculateAppliedBoosts";
import { PowerupActiveStatusType } from "BoostedGuildTiers";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/powerups/utils/fileUpload.tsx");

export const useShouldShowFileUploadRollback = function useShouldShowFileUploadRollback(guildId, location) {
  const _require = guildId;
  const items = [calculateAppliedBoosts];
  const stateFromStores = _initialize.useStateFromStores(items, () => outer1_3.getStateForGuild(closure_0));
  let tmp4;
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[tmp(undefined, 4176).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
  }
  const obj = _initialize;
  const tmp5 = usePowerupActiveStatus(guildId, tmp4);
  let tmp6 = _experiment.useFileUpload250MbPowerupRollbackEnabled(guildId, location) && null != tmp4 && null != tmp4.storeRemovalDate;
  if (tmp6) {
    tmp6 = tmp5.type === PowerupActiveStatusType.POWERUP_ACTIVATED;
  }
  return tmp6;
};