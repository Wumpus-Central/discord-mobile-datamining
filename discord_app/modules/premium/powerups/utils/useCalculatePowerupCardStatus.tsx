// === Module 11997: useCalculatePowerupCardStatus ===

// Module 11997 (useCalculatePowerupCardStatus)
import util from "util" /* 1115 */;
import _modDef2518 from "module_2518" /* 2518 */;
import noop from "module_19" /* 19 */;

require = fn;
const PowerupActiveStatusType = fn(4720).PowerupActiveStatusType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx");

export const useCalculatePowerupCardStatus = function useCalculatePowerupCardStatus(powerup, arg1, arg2) {
  let sourceEntitlement = arg1;
  closure_2 = arg2;
  const items = [arg1, arg2, powerup];
  return noop.useMemo(() => {
    sourceEntitlement = sourceEntitlement.sourceEntitlement;
    let ends_at;
    if (sourceEntitlement != null) {
      ends_at = sourceEntitlement.ends_at;
    }
    if (null != ends_at) {
      const obj2 = { type: "expiring", expiringAt: tmp.sourceEntitlement.ends_at };
      let tmp5 = obj2;
    } else {
      if (closure_2) {
        if (null != powerup.storeRemovalDate) {
          const obj3 = { type: "removing", removingAt: tmp3.storeRemovalDate };
          tmp5 = obj3;
        }
      }
      if (tmp.type === PowerupActiveStatusType.LEVEL_ACTIVATED) {
        const intl2 = util.intl;
        const sourcePowerup = tmp.sourcePowerup;
        let title;
        if (sourcePowerup != null) {
          title = sourcePowerup.title;
        }
        if (title == null) {
          const intl3 = util.intl;
          title = intl3.string(util.t.BfF6ED);
        }
        const obj4 = { type: "active", statusText: null };
        const obj5 = { perkName: title };
        obj4.statusText = intl2.formatToPlainString(_modDef2518.WRRYUT, obj5);
        tmp5 = obj4;
      } else if (tmp.type !== tmp4.INACTIVE) {
        const obj = { type: "active", statusText: null };
        const intl = util.intl;
        obj.statusText = intl.string(_modDef2518.FFLkmx);
        tmp5 = obj;
      }
    }
    return tmp5;
  }, items);
};