// === Module 11993: useGuildPowerupRollbackNotificationConfig ===

// Module 11993 (useGuildPowerupRollbackNotificationConfig)
import util from "util" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import _modDef2519 from "module_2519" /* 2519 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 11994 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4723 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackNotificationConfig.tsx");

export default function useGuildPowerupRollbackNotificationConfig(guildId, useGuildPowerupNewPerkMarketingVersion) {
  _require = guildId;
  const items = [GuildPowerupsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  if (stateFromStores != null) {
    const tmp4 = stateFromStores.allPowerups[tmp(undefined, 4727).GUILD_POWERUP_GUILD_THEME_SKU_ID];
  }
  const obj = require("initialize");
  let tmp5 = null;
  if (tmpResult.useShouldShowGuildThemeRollback(guildId, useGuildPowerupNewPerkMarketingVersion)) {
    if (tmp4 != null) {
      const storeRemovalDate = tmp4.storeRemovalDate;
    }
    let tmp6 = null;
    if (null != tmp4) {
      tmp6 = null;
      if (null != storeRemovalDate) {
        const tmp8 = getGuildPowerupFormattedDateStringDefault(storeRemovalDate);
        const obj2 = { dismissibleContent: tmp(2029).DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_NOTIFICATION, title: null, description: null };
        const intl = tmp(1115).intl;
        const obj3 = { dateString: tmp8 };
        obj2.title = intl.formatToPlainString(_modDef2519["6e2ry1"], obj3);
        const intl2 = tmp(1115).intl;
        const obj4 = { startDate: tmp8, endDate: tmp8, perkName: null, boostCount: null };
        ({ title: obj5.perkName, cost: obj5.boostCount } = tmp4);
        obj2.description = intl2.formatToPlainString(_modDef2519.jd8fki, obj4);
        tmp6 = obj2;
      }
    }
    tmp5 = tmp6;
  }
  return tmp5;
};
export const getGuildThemeRollbackNotificationConfig = function getGuildThemeRollbackNotificationConfig(storeRemovalDate) {
  if (storeRemovalDate != null) {
    storeRemovalDate = storeRemovalDate.storeRemovalDate;
  }
  if (null != storeRemovalDate) {
    if (null != storeRemovalDate) {
      const tmp3 = getGuildPowerupFormattedDateStringDefault(storeRemovalDate);
      const obj = { dismissibleContent: dismissible_content.DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_NOTIFICATION, title: null, description: null };
      const intl = util.intl;
      const obj2 = { dateString: tmp3 };
      obj.title = intl.formatToPlainString(_modDef2519["6e2ry1"], obj2);
      const intl2 = util.intl;
      const obj5 = { startDate: tmp3, endDate: tmp3, perkName: null, boostCount: null };
      ({ title: obj3.perkName, cost: obj3.boostCount } = storeRemovalDate);
      obj.description = intl2.formatToPlainString(_modDef2519.jd8fki, obj5);
      return obj;
    }
  }
  return null;
};