// === Module 12171: useGuildPowerupRollbackNotificationConfig ===

// Module 12171 (useGuildPowerupRollbackNotificationConfig)
import intl3 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import _modDef2553 from "module_2553" /* 2553 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 12172 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4773 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getGuildThemeRollbackNotificationConfig(storeRemovalDate) {
  let intl;
  let intl2;
  let obj2;
  let obj5;
  if (storeRemovalDate != null) {
    storeRemovalDate = storeRemovalDate.storeRemovalDate;
  }
  if (null != storeRemovalDate) {
    if (null != storeRemovalDate) {
      const tmp3 = getGuildPowerupFormattedDateStringDefault(storeRemovalDate);
      const obj = { dismissibleContent: dismissible_content.DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_NOTIFICATION, title: intl.formatToPlainString(_modDef2553["6e2ry1"], obj2), description: intl2.formatToPlainString(_modDef2553.jd8fki, obj5) };
      intl = intl3.intl;
      obj2 = { dateString: tmp3 };
      intl2 = intl3.intl;
      obj5 = { startDate: tmp3, endDate: tmp3, perkName: null, boostCount: null };
      ({ title: obj3.perkName, cost: obj3.boostCount } = storeRemovalDate);
      return obj;
    }
  }
  return null;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  let intl;
  let intl2;
  let obj3;
  let obj4;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildPowerupsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return GuildPowerupsStore.getStateForGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let tmp8;
  if (stateFromStores != null) {
    tmp8 = stateFromStores.allPowerups[tmp(undefined, 4777).GUILD_POWERUP_GUILD_THEME_SKU_ID];
  }
  const tmpResult2 = require("guildTheme");
  const shouldShowGuildThemeRollback = tmpResult2.useShouldShowGuildThemeRollback(arg0, arg1);
  if (cResult[3] === tmp8) {
    let tmp10;
    if (cResult[4] === shouldShowGuildThemeRollback) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  let tmp11 = null;
  if (shouldShowGuildThemeRollback) {
    let storeRemovalDate;
    if (tmp8 != null) {
      storeRemovalDate = tmp8.storeRemovalDate;
    }
    let tmp12 = null;
    if (null != tmp8) {
      tmp12 = null;
      if (null != storeRemovalDate) {
        const tmp14 = getGuildPowerupFormattedDateStringDefault(storeRemovalDate);
        const obj2 = { dismissibleContent: require("dismissible_content").DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_NOTIFICATION, title: intl.formatToPlainString(_modDef2553["6e2ry1"], obj3), description: intl2.formatToPlainString(_modDef2553.jd8fki, obj4) };
        intl = tmp(1126).intl;
        obj3 = { dateString: tmp14 };
        intl2 = tmp(1126).intl;
        obj4 = { startDate: tmp14, endDate: tmp14, perkName: null, boostCount: null };
        ({ title: obj6.perkName, cost: obj6.boostCount } = tmp8);
        tmp12 = obj2;
      }
    }
    tmp11 = tmp12;
  }
  cResult[3] = tmp8;
  cResult[4] = shouldShowGuildThemeRollback;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((arg0, arg1) => {
  let closure_0;
  let intl;
  let intl2;
  let obj3;
  let obj4;
  let tmp4;
  _require = arg0;
  const items = [GuildPowerupsStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildPowerupsStore.getStateForGuild(closure_0));
  if (stateFromStores != null) {
    tmp4 = stateFromStores.allPowerups[require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID];
  }
  let tmp5 = null;
  const tmpResult = require("guildTheme");
  if (tmpResult.useShouldShowGuildThemeRollback(arg0, arg1)) {
    let storeRemovalDate;
    if (tmp4 != null) {
      storeRemovalDate = tmp4.storeRemovalDate;
    }
    let tmp6 = null;
    if (null != tmp4) {
      tmp6 = null;
      if (null != storeRemovalDate) {
        const tmp8 = getGuildPowerupFormattedDateStringDefault(storeRemovalDate);
        const obj2 = { dismissibleContent: require("dismissible_content").DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_NOTIFICATION, title: intl.formatToPlainString(_modDef2553["6e2ry1"], obj3), description: intl2.formatToPlainString(_modDef2553.jd8fki, obj4) };
        intl = tmp(1126).intl;
        obj3 = { dateString: tmp8 };
        intl2 = tmp(1126).intl;
        obj4 = { startDate: tmp8, endDate: tmp8, perkName: null, boostCount: null };
        ({ title: obj5.perkName, cost: obj5.boostCount } = tmp4);
        tmp6 = obj2;
      }
    }
    tmp5 = tmp6;
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackNotificationConfig.tsx");

export default tmp2;
export { getGuildThemeRollbackNotificationConfig };