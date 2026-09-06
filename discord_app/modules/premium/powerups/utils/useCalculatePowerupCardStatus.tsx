// === Module 12519: useCalculatePowerupCardStatus ===

// Module 12519 (useCalculatePowerupCardStatus)
import closure_3 from "noop" /* 19 */;
import { PowerupActiveStatusType } from "BoostedGuildTiers" /* 4450 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx");

export const useCalculatePowerupCardStatus = function useCalculatePowerupCardStatus(powerup, arg1, arg2) {
  closure_0 = powerup;
  closure_1 = arg1;
  closure_2 = arg2;
  const items = [arg1, arg2, powerup];
  return React.useMemo(() => {
    const sourceEntitlement = lib.sourceEntitlement;
    let ends_at;
    if (sourceEntitlement != null) {
      ends_at = sourceEntitlement.ends_at;
    }
    if (null != ends_at) {
      let obj = { type: "expiring", expiringAt: null };
      obj[1] = tmp.sourceEntitlement.ends_at;
      let tmp5 = obj;
    } else {
      if (dependencyMap) {
        if (null != powerup.storeRemovalDate) {
          obj = { type: "removing", removingAt: null };
          obj[1] = tmp3.storeRemovalDate;
          tmp5 = obj;
        }
      }
      if (tmp.type === closure_1_4.LEVEL_ACTIVATED) {
        const intl2 = powerup(1114).intl;
        const sourcePowerup = tmp.sourcePowerup;
        let title;
        if (sourcePowerup != null) {
          title = sourcePowerup.title;
        }
        if (title == null) {
          const intl3 = tmp9(1114).intl;
          title = intl3.string(tmp9(1114).t.BfF6ED);
        }
        obj1 = { type: "active", statusText: null };
        const obj2 = { perkName: null };
        obj2[0] = title;
        obj1[1] = intl2.formatToPlainString(lib(2428).WRRYUT, obj2);
        tmp5 = obj1;
      } else if (tmp.type !== tmp4.INACTIVE) {
        obj = { type: "active", statusText: null };
        const intl = powerup(1114).intl;
        obj[1] = intl.string(lib(2428).FFLkmx);
        tmp5 = obj;
      }
    }
    return tmp5;
  }, items);
};