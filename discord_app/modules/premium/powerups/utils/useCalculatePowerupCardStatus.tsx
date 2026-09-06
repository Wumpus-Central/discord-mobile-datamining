// discord_app/modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2428 from "../GuildPowerups.messages.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const PowerupActiveStatusType = fn(4450).PowerupActiveStatusType;
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
      let obj = { type: "expiring", expiringAt: tmp.sourceEntitlement.ends_at };
      let tmp5 = obj;
    } else {
      if (closure_2) {
        if (null != powerup.storeRemovalDate) {
          obj = { type: "removing", removingAt: tmp3.storeRemovalDate };
          tmp5 = obj;
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
        const obj1 = { type: "active", statusText: null };
        const obj2 = { perkName: title };
        obj1.statusText = intl2.formatToPlainString(_modDef2428.WRRYUT, obj2);
        tmp5 = obj1;
      } else if (tmp.type !== tmp4.INACTIVE) {
        obj = { type: "active", statusText: null };
        const intl = util.intl;
        obj.statusText = intl.string(_modDef2428.FFLkmx);
        tmp5 = obj;
      }
    }
    return tmp5;
  }, items);
};
