// discord_app/modules/premium/powerups/hooks/useGuildPowerupRollbackNotificationConfig.tsx
import _modDef2428 from "../GuildPowerups.messages.js";
import getGuildPowerupFormattedDateStringDefault from "../utils/getGuildPowerupFormattedDateString.tsx";
import GuildPowerupsStore from "../GuildPowerupsStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/powerups/hooks/useGuildPowerupRollbackNotificationConfig.tsx",
);

export default function useGuildPowerupRollbackNotificationConfig(guildId, location) {
  _require = guildId;
  let obj = require("initialize");
  const items = [GuildPowerupsStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  let tmp4;
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[tmp(undefined, 4453).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
  }
  if (tmp4 != null) {
    const storeRemovalDate = tmp4.storeRemovalDate;
  }
  let tmp5 = null;
  if (tmpResult.useShouldShowFileUploadRollback(guildId, location)) {
    tmp5 = null;
    if (null != storeRemovalDate) {
      let title;
      if (tmp4 != null) {
        title = tmp4.title;
      }
      tmp5 = null;
      if (null != title) {
        let cost;
        if (tmp4 != null) {
          cost = tmp4.cost;
        }
        tmp5 = null;
        if (null != cost) {
          obj = {
            dismissibleContent: tmp(1943).DismissibleContent.FILE_UPLOAD_POWERUP_ROLLBACK_NOTIFICATION,
            title: null,
            description: null,
          };
          const intl = tmp(1114).intl;
          obj = { dateString: getGuildPowerupFormattedDateStringDefault(storeRemovalDate) };
          obj.title = intl.formatToPlainString(_modDef2428["6e2ry1"], obj);
          const intl2 = tmp(1114).intl;
          const obj1 = {
            startDate: getGuildPowerupFormattedDateStringDefault(storeRemovalDate),
            endDate: getGuildPowerupFormattedDateStringDefault(storeRemovalDate),
            perkName: null,
            boostCount: null,
          };
          let title1;
          if (tmp4 != null) {
            title1 = tmp4.title;
          }
          obj1.perkName = title1;
          let cost1;
          if (tmp4 != null) {
            cost1 = tmp4.cost;
          }
          obj1.boostCount = cost1;
          obj.description = intl2.formatToPlainString(_modDef2428.jd8fki, obj1);
          tmp5 = obj;
        }
      }
    }
  }
  return tmp5;
}
