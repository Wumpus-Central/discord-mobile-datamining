// discord_app/modules/premium/powerups/utils/fileUpload.tsx
import usePowerupActiveStatusDefault from "../hooks/usePowerupActiveStatus.tsx";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";

const require = fn;
const PowerupActiveStatusType = fn(4450).PowerupActiveStatusType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/fileUpload.tsx");

export const useShouldShowFileUploadRollback = function useShouldShowFileUploadRollback(guildId, location) {
  _require = guildId;
  const items = [GuildPowerupsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildPowerupsStore.getStateForGuild(closure_0),
  );
  let tmp4;
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[tmp(undefined, 4453).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
  }
  const obj = require("initialize");
  const tmp5 = usePowerupActiveStatusDefault(guildId, tmp4);
  let tmp6 =
    require("FileUpload250MbPowerupExperiment").useFileUpload250MbPowerupRollbackEnabled(guildId, location) &&
    null != tmp4 &&
    null != tmp4.storeRemovalDate;
  if (tmp6) {
    tmp6 = tmp5.type === PowerupActiveStatusType.POWERUP_ACTIVATED;
  }
  return tmp6;
};
