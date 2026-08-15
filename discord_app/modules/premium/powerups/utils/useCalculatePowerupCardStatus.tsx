// discord_app/modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx
import noop from "noop";
import { PowerupActiveStatusType } from "BoostedGuildTiers";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx");

export const useCalculatePowerupCardStatus = function useCalculatePowerupCardStatus(powerup, arg1, arg2) {
  let closure_0 = powerup;
  let closure_1 = arg1;
  let closure_2 = arg2;
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
      if (tmp.type === outer1_4.LEVEL_ACTIVATED) {
        const intl2 = powerup(1236).intl;
        const sourcePowerup = tmp.sourcePowerup;
        let title;
        if (sourcePowerup != null) {
          title = sourcePowerup.title;
        }
        if (title == null) {
          const intl3 = tmp9(1236).intl;
          title = intl3.string(tmp9(1236).t.BfF6ED);
        }
        const obj1 = { type: "active", statusText: null };
        const obj2 = { perkName: null };
        obj2[0] = title;
        obj1[1] = intl2.formatToPlainString(lib(2367).WRRYUT, obj2);
        tmp5 = obj1;
      } else if (tmp.type !== tmp4.INACTIVE) {
        obj = { type: "active", statusText: null };
        const intl = powerup(1236).intl;
        obj[1] = intl.string(lib(2367).FFLkmx);
        tmp5 = obj;
      }
    }
    return tmp5;
  }, items);
};