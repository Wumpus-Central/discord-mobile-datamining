// === Module 12627: useGuildPowerupRollbackNotificationConfig ===

// Module 12627 (useGuildPowerupRollbackNotificationConfig)
import _modDef2428 from "module_2428" /* 2428 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 12630 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4525 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackNotificationConfig.tsx");

export default function useGuildPowerupRollbackNotificationConfig(guildId, location) {
  _require = guildId;
  const items = [GuildPowerupsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  let tmp4;
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[tmp(undefined, 4529).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
  }
  if (tmp4 != null) {
    const storeRemovalDate = tmp4.storeRemovalDate;
  }
  const obj = require("initialize");
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
          const obj2 = { dismissibleContent: tmp(1943).DismissibleContent.FILE_UPLOAD_POWERUP_ROLLBACK_NOTIFICATION, title: null, description: null };
          const intl = tmp(1114).intl;
          const obj3 = { dateString: getGuildPowerupFormattedDateStringDefault(storeRemovalDate) };
          obj2.title = intl.formatToPlainString(_modDef2428["6e2ry1"], obj3);
          const intl2 = tmp(1114).intl;
          const obj4 = { startDate: getGuildPowerupFormattedDateStringDefault(storeRemovalDate), endDate: getGuildPowerupFormattedDateStringDefault(storeRemovalDate), perkName: null, boostCount: null };
          let title1;
          if (tmp4 != null) {
            title1 = tmp4.title;
          }
          obj4.perkName = title1;
          let cost1;
          if (tmp4 != null) {
            cost1 = tmp4.cost;
          }
          obj4.boostCount = cost1;
          obj2.description = intl2.formatToPlainString(_modDef2428.jd8fki, obj4);
          tmp5 = obj2;
        }
      }
    }
  }
  return tmp5;
};