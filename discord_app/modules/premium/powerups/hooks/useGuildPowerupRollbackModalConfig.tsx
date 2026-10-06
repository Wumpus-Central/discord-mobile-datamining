// === Module 12184: useGuildPowerupRollbackModalConfig ===

// Module 12184 (useGuildPowerupRollbackModalConfig)
import intl3 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import _modDef2553 from "module_2553" /* 2553 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 12172 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12185 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4773 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

function getGuildThemeRollbackModalConfig(allPowerups) {
  let intl;
  let items;
  let obj2;
  let storeRemovalDate;
  let title;
  if (allPowerups != null) {
    storeRemovalDate = allPowerups.storeRemovalDate;
  }
  if (null != allPowerups) {
    if (null != storeRemovalDate) {
      const tmp3 = getGuildPowerupFormattedDateStringDefault(storeRemovalDate);
      const obj = { dismissibleContent: dismissible_content.DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_MODAL, header: "" + title + " " + intl.formatToPlainString(_modDef2553["6e2ry1"], obj2), bodies: items, hasCancelButton: false };
      title = allPowerups.title;
      intl = intl3.intl;
      const _HermesInternal = HermesInternal;
      obj2 = { dateString: tmp3 };
      const intl2 = intl3.intl;
      const obj5 = { startDate: tmp3, endDate: tmp3, perkName: null, boostCount: null };
      ({ title: obj3.perkName, cost: obj3.boostCount } = allPowerups);
      items = [intl2.formatToPlainString(_modDef2553.jd8fki, obj5)];
      return obj;
    }
  }
  return null;
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  let tmp10;
  let tmp6;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let flag = useHasAllocateBoostPermissionDefault(arg0);
  if (flag == null) {
    flag = false;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildPowerupsStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function _() {
      return GuildPowerupsStore.getStateForGuild(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult3 = require("get initialized");
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10);
  let tmp12;
  if (stateFromStores1 != null) {
    const allPowerups = stateFromStores1.allPowerups;
    if (allPowerups != null) {
      tmp12 = allPowerups[tmp(undefined, 4777).GUILD_POWERUP_GUILD_THEME_SKU_ID];
    }
  }
  const tmpResult4 = require("guildTheme");
  if (flag) {
    flag = tmpResult4.useShouldShowGuildThemeRollback(arg0, arg1);
  }
  if (flag) {
    flag = null != stateFromStores;
  }
  if (cResult[6] === tmp12) {
    let tmp13;
    if (cResult[7] === flag) {
      tmp13 = cResult[8];
    }
    if (cResult[9] === tmp13) {
      let tmp16;
      if (cResult[10] === flag) {
        tmp16 = cResult[11];
      }
      return tmp16;
    }
    const obj2 = { shouldShow: flag, modalConfig: tmp13 };
    cResult[9] = tmp13;
    cResult[10] = flag;
    cResult[11] = obj2;
    tmp16 = obj2;
  }
  let tmp14 = null;
  if (flag) {
    tmp14 = getGuildThemeRollbackModalConfig(tmp12);
  }
  cResult[6] = tmp12;
  cResult[7] = flag;
  cResult[8] = tmp14;
  tmp13 = tmp14;
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let flag;
  _require = arg0;
  let tmp = _require;
  const items = [GuildStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  flag = require("useHasAllocateBoostPermission")(arg0);
  if (flag == null) {
    flag = false;
  }
  const items1 = [GuildPowerupsStore];
  const tmpResult = tmp(flag[9]);
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => GuildPowerupsStore.getStateForGuild(closure_0));
  let tmp5;
  if (stateFromStores1 != null) {
    const allPowerups = stateFromStores1.allPowerups;
    if (allPowerups != null) {
      tmp5 = allPowerups[tmp(undefined, tmp2[11]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
    }
  }
  importDefault = tmp5;
  const tmpResult2 = tmp(flag[12]);
  if (flag) {
    flag = tmpResult2.useShouldShowGuildThemeRollback(arg0, arg1);
  }
  if (flag) {
    flag = null != stateFromStores;
  }
  const items2 = [flag, tmp5];
  const obj2 = {
    shouldShow: flag,
    modalConfig: react.useMemo(() => {
      let tmp = null;
      if (flag) {
        tmp = getGuildThemeRollbackModalConfig(closure_1);
      }
      return tmp;
    }, items2)
  };
  return obj2;
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackModalConfig.tsx");

export default tmp2;
export { getGuildThemeRollbackModalConfig };