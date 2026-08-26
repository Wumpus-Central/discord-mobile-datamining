// discord_app/modules/premium/powerups/utils/fileUpload.tsx
import usePowerupActiveStatusDefault from "../hooks/usePowerupActiveStatus.tsx";
import closure_3 from "../GuildPowerupsStore.tsx";
import { PowerupActiveStatusType } from "../constants/GuildPowerupsConstants.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/fileUpload.tsx");

export const useShouldShowFileUploadRollback = function useShouldShowFileUploadRollback(guildId, location) {
  const _require = guildId;
  const items = [closure_3];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_3.getStateForGuild(closure_0));
  let tmp4;
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[tmp(undefined, 4334).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
  }
  const obj = initialize;
  const tmp5 = usePowerupActiveStatusDefault(guildId, tmp4);
  let tmp6 = require("../experiments/FileUpload250MbPowerupExperiment.tsx").useFileUpload250MbPowerupRollbackEnabled(guildId, location) && null != tmp4 && null != tmp4.storeRemovalDate;
  if (tmp6) {
    tmp6 = tmp5.type === PowerupActiveStatusType.POWERUP_ACTIVATED;
  }
  return tmp6;
};