// === Module 12191: useCalculatePowerupCardStatus ===

// Module 12191 (useCalculatePowerupCardStatus)
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import _modDef2553 from "module_2553" /* 2553 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4774 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PowerupActiveStatusType = GuildPowerupsConstants.PowerupActiveStatusType;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((storeRemovalDate, sourceEntitlement, arg2) => {
  let intl3;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  sourceEntitlement = sourceEntitlement.sourceEntitlement;
  let ends_at;
  if (sourceEntitlement != null) {
    ends_at = sourceEntitlement.ends_at;
  }
  if (null == ends_at) {
    const tmp6 = arg2;
    if (tmp6) {
      if (null != storeRemovalDate.storeRemovalDate) {
        let tmp18;
        if (cResult[2] !== storeRemovalDate.storeRemovalDate) {
          const obj2 = { type: "removing", removingAt: storeRemovalDate.storeRemovalDate };
          cResult[2] = storeRemovalDate.storeRemovalDate;
          cResult[3] = obj2;
          tmp18 = obj2;
        } else {
          tmp18 = cResult[3];
        }
        tmp5 = tmp18;
      }
    }
    if (sourceEntitlement.type !== PowerupActiveStatusType.LEVEL_ACTIVATED) {
      if (sourceEntitlement.type !== tmp8.INACTIVE) {
        let tmp16;
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { type: "active", statusText: intl3.string(_modDef2553.FFLkmx) };
          intl3 = intl4.intl;
          cResult[8] = obj3;
          tmp16 = obj3;
        } else {
          tmp16 = cResult[8];
        }
        tmp5 = tmp16;
      }
    } else {
      let tmp10;
      let tmp15;
      const sourcePowerup3 = sourceEntitlement.sourcePowerup;
      let title;
      const tmp19 = cResult[4];
      if (sourcePowerup3 != null) {
        title = sourcePowerup3.title;
      }
      if (tmp19 !== title) {
        const intl = intl4.intl;
        const formatToPlainString = intl.formatToPlainString;
        const sourcePowerup = sourceEntitlement.sourcePowerup;
        let title1;
        const WRRYUT = _modDef2553.WRRYUT;
        if (sourcePowerup != null) {
          title1 = sourcePowerup.title;
        }
        if (title1 == null) {
          const intl2 = intl4.intl;
          title1 = intl2.string(intl4.t.BfF6ED);
        }
        const obj4 = { perkName: title1 };
        const formatToPlainStringResult = formatToPlainString(WRRYUT, obj4);
        const sourcePowerup2 = sourceEntitlement.sourcePowerup;
        let title2;
        if (sourcePowerup2 != null) {
          title2 = sourcePowerup2.title;
        }
        cResult[4] = title2;
        cResult[5] = formatToPlainStringResult;
        tmp10 = formatToPlainStringResult;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== tmp10) {
        const obj5 = { type: "active", statusText: tmp10 };
        cResult[6] = tmp10;
        cResult[7] = obj5;
        tmp15 = obj5;
      } else {
        tmp15 = cResult[7];
      }
      tmp5 = tmp15;
    }
  } else if (cResult[0] !== sourceEntitlement.sourceEntitlement.ends_at) {
    const obj6 = { type: "expiring", expiringAt: sourceEntitlement.sourceEntitlement.ends_at };
    cResult[0] = sourceEntitlement.sourceEntitlement.ends_at;
    cResult[1] = obj6;
    tmp5 = obj6;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : ((arg0, arg1, arg2) => {
  const storeRemovalDate = arg0;
  let sourceEntitlement = arg1;
  let closure_2 = arg2;
  const items = [arg1, arg2, arg0];
  return react.useMemo(() => {
    let intl;
    let obj5;
    let tmp5;
    sourceEntitlement = sourceEntitlement.sourceEntitlement;
    let ends_at;
    if (sourceEntitlement != null) {
      ends_at = sourceEntitlement.ends_at;
    }
    if (null != ends_at) {
      tmp5 = { type: "expiring", expiringAt: sourceEntitlement.sourceEntitlement.ends_at };
      const obj2 = { type: "expiring", expiringAt: sourceEntitlement.sourceEntitlement.ends_at };
    } else {
      if (closure_2) {
        if (null != storeRemovalDate.storeRemovalDate) {
          tmp5 = { type: "removing", removingAt: tmp3.storeRemovalDate };
          const obj3 = { type: "removing", removingAt: tmp3.storeRemovalDate };
        }
      }
      if (sourceEntitlement.type === PowerupActiveStatusType.LEVEL_ACTIVATED) {
        const intl2 = intl4.intl;
        const formatToPlainString = intl2.formatToPlainString;
        const sourcePowerup = tmp.sourcePowerup;
        let title;
        const WRRYUT = _modDef2553.WRRYUT;
        if (sourcePowerup != null) {
          title = sourcePowerup.title;
        }
        if (title == null) {
          const intl3 = intl4.intl;
          title = intl3.string(intl4.t.BfF6ED);
        }
        const obj4 = { type: "active", statusText: formatToPlainString(WRRYUT, obj5) };
        tmp5 = obj4;
        obj5 = { perkName: title };
      } else if (sourceEntitlement.type !== tmp4.INACTIVE) {
        const obj = { type: "active", statusText: intl.string(_modDef2553.FFLkmx) };
        intl = intl4.intl;
        tmp5 = obj;
      }
    }
    return tmp5;
  }, items);
});
const result = size.fileFinishedImporting("modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx");

export const useCalculatePowerupCardStatus = tmp2;