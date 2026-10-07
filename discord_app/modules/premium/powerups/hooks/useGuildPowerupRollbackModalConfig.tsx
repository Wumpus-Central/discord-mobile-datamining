// === Module 12184: useGuildPowerupRollbackModalConfig ===

// Module 12184 (useGuildPowerupRollbackModalConfig)
import util from "util" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import _modDef2553 from "module_2553" /* 2553 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 12172 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12185 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4773 */;

const require = globalThis.__r;

require = fn;
function getGuildThemeRollbackModalConfig(allPowerups) {
  if (allPowerups != null) {
    const storeRemovalDate = allPowerups.storeRemovalDate;
  }
  if (null != allPowerups) {
    if (null != storeRemovalDate) {
      const tmp3 = getGuildPowerupFormattedDateStringDefault(storeRemovalDate);
      const obj = { dismissibleContent: dismissible_content.DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_MODAL, header: null, bodies: null, hasCancelButton: false };
      const intl = util.intl;
      const obj2 = { dateString: tmp3 };
      const _HermesInternal = HermesInternal;
      obj.header = "" + allPowerups.title + " " + intl.formatToPlainString(_modDef2553["6e2ry1"], obj2);
      const intl2 = util.intl;
      const obj5 = { startDate: tmp3, endDate: tmp3, perkName: null, boostCount: null };
      ({ title: obj3.perkName, cost: obj3.boostCount } = allPowerups);
      const items = [intl2.formatToPlainString(_modDef2553.jd8fki, obj5)];
      obj.bodies = items;
      return obj;
    }
  }
  return null;
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackModalConfig.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return GuildStore.getGuild(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  let flag = useHasAllocateBoostPermissionDefault(arg0);
  if (flag == null) {
    flag = false;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildPowerupsStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function _() {
      return GuildPowerupsStore.getStateForGuild(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
  let tmp12;
  if (stateFromStores1 != null) {
    const allPowerups = stateFromStores1.allPowerups;
    if (allPowerups != null) {
      tmp12 = allPowerups[tmp(undefined, 4777).GUILD_POWERUP_GUILD_THEME_SKU_ID];
    }
  }
  const tmpResult3 = require("initialize");
  if (flag) {
    flag = tmpResult4.useShouldShowGuildThemeRollback(arg0, arg1);
  }
  if (flag) {
    flag = null != stateFromStores;
  }
  if (cResult[6] === tmp12) {
    if (cResult[7] === flag) {
      let tmp13 = cResult[8];
    }
    if (cResult[9] === tmp13) {
      if (cResult[10] === flag) {
        let tmp16 = cResult[11];
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
  tmpResult4 = require("guildTheme");
}) : ((arg0, arg1) => {
  _require = arg0;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  flag = require("useHasAllocateBoostPermission")(arg0);
  if (flag == null) {
    flag = false;
  }
  const obj = require("initialize");
  const items1 = [GuildPowerupsStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => GuildPowerupsStore.getStateForGuild(closure_0));
  let tmp5;
  if (stateFromStores1 != null) {
    const allPowerups = stateFromStores1.allPowerups;
    if (allPowerups != null) {
      tmp5 = allPowerups[tmp(undefined, tmp2[11]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
    }
  }
  importDefault = tmp5;
  const tmpResult = require("initialize");
  if (flag) {
    flag = tmpResult2.useShouldShowGuildThemeRollback(arg0, arg1);
  }
  if (flag) {
    flag = null != stateFromStores;
  }
  const items2 = [flag, tmp5];
  tmpResult2 = require("guildTheme");
  return {
    shouldShow: flag,
    modalConfig: noop.useMemo(() => {
      let tmp = null;
      if (flag) {
        tmp = getGuildThemeRollbackModalConfig(closure_1);
      }
      return tmp;
    }, items2)
  };
});
export { getGuildThemeRollbackModalConfig };