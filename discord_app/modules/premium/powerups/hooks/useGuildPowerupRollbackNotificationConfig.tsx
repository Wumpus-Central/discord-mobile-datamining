// discord_app/modules/premium/powerups/hooks/useGuildPowerupRollbackNotificationConfig.tsx
import calculateAppliedBoosts from "calculateAppliedBoosts";

const require = arg1;
const result = require("VANITY_URL_POWERUP_SKU_ID").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackNotificationConfig.tsx");

export default function useGuildPowerupRollbackNotificationConfig(guildId, location) {
  const _require = guildId;
  let obj = _require("../../../../../discord_common/js/packages/flux/index.tsx");
  const items = [calculateAppliedBoosts];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getStateForGuild(closure_0));
  let tmp4;
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[tmp(undefined, 4176).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
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
          obj = { dismissibleContent: null, title: null, description: null };
          obj[0] = tmp(1358).DismissibleContent.FILE_UPLOAD_POWERUP_ROLLBACK_NOTIFICATION;
          const intl = tmp(1236).intl;
          obj = { dateString: null };
          obj[0] = require("../utils/getGuildPowerupFormattedDateString.tsx")(storeRemovalDate);
          obj[1] = intl.formatToPlainString(require("../GuildPowerups.messages.js")["6e2ry1"], obj);
          const intl2 = tmp(1236).intl;
          const obj1 = { startDate: null, endDate: null, perkName: null, boostCount: null };
          obj1[0] = require("../utils/getGuildPowerupFormattedDateString.tsx")(storeRemovalDate);
          obj1[1] = require("../utils/getGuildPowerupFormattedDateString.tsx")(storeRemovalDate);
          let title1;
          if (tmp4 != null) {
            title1 = tmp4.title;
          }
          obj1[2] = title1;
          let cost1;
          if (tmp4 != null) {
            cost1 = tmp4.cost;
          }
          obj1[3] = cost1;
          obj[2] = intl2.formatToPlainString(require("../GuildPowerups.messages.js").jd8fki, obj1);
          tmp5 = obj;
        }
      }
    }
  }
  return tmp5;
};