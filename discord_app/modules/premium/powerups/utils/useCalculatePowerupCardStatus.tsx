// discord_app/modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import _modDef2600 from "../GuildPowerups.messages.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const PowerupActiveStatusType = fn(5008).PowerupActiveStatusType;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/utils/useCalculatePowerupCardStatus.tsx");

export const useCalculatePowerupCardStatus = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCalculatePowerupCardStatus(storeRemovalDate, sourceEntitlement, arg2) {
      const cResult = c.c(9);
      sourceEntitlement = sourceEntitlement.sourceEntitlement;
      let ends_at;
      if (sourceEntitlement != null) {
        ends_at = sourceEntitlement.ends_at;
      }
      if (null == ends_at) {
        if (arg2) {
          if (null != storeRemovalDate.storeRemovalDate) {
            if (cResult[2] !== storeRemovalDate.storeRemovalDate) {
              const obj2 = { type: "removing", removingAt: null };
              ({ storeRemovalDate: obj6.removingAt, storeRemovalDate } = storeRemovalDate);
              cResult[2] = storeRemovalDate;
              cResult[3] = obj2;
            }
          }
        }
        if (sourceEntitlement.type !== PowerupActiveStatusType.LEVEL_ACTIVATED) {
          if (sourceEntitlement.type !== tmp7.INACTIVE) {
            const _Symbol = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { type: "active", statusText: null };
              const intl3 = util.intl;
              obj3.statusText = intl3.string(_modDef2600.FFLkmx);
              cResult[8] = obj3;
              let tmp15 = obj3;
            } else {
              tmp15 = cResult[8];
            }
            let tmp5 = tmp15;
          }
        } else {
          const sourcePowerup3 = sourceEntitlement.sourcePowerup;
          let title;
          if (sourcePowerup3 != null) {
            title = sourcePowerup3.title;
          }
          if (cResult[4] !== title) {
            const intl = util.intl;
            const sourcePowerup = sourceEntitlement.sourcePowerup;
            let title1;
            if (sourcePowerup != null) {
              title1 = sourcePowerup.title;
            }
            if (title1 == null) {
              const intl2 = util.intl;
              title1 = intl2.string(util.t.BfF6ED);
            }
            const obj4 = { perkName: title1 };
            const formatToPlainStringResult = intl.formatToPlainString(_modDef2600.WRRYUT, obj4);
            const sourcePowerup2 = sourceEntitlement.sourcePowerup;
            let title2;
            if (sourcePowerup2 != null) {
              title2 = sourcePowerup2.title;
            }
            cResult[4] = title2;
            cResult[5] = formatToPlainStringResult;
            let tmp9 = formatToPlainStringResult;
          } else {
            tmp9 = cResult[5];
          }
          if (cResult[6] !== tmp9) {
            const obj5 = { type: "active", statusText: tmp9 };
            cResult[6] = tmp9;
            cResult[7] = obj5;
            let tmp14 = obj5;
          } else {
            tmp14 = cResult[7];
          }
          tmp5 = tmp14;
        }
      } else if (cResult[0] !== sourceEntitlement.sourceEntitlement.ends_at) {
        const obj11 = { type: "expiring", expiringAt: sourceEntitlement.sourceEntitlement.ends_at };
        cResult[0] = sourceEntitlement.sourceEntitlement.ends_at;
        cResult[1] = obj11;
        tmp5 = obj11;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : function useCalculatePowerupCardStatus(arg0, arg1, arg2) {
      const storeRemovalDate = arg0;
      let sourceEntitlement = arg1;
      closure_2 = arg2;
      const items = [arg1, arg2, arg0];
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
            if (null != storeRemovalDate.storeRemovalDate) {
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
            obj4.statusText = intl2.formatToPlainString(_modDef2600.WRRYUT, obj5);
            tmp5 = obj4;
          } else if (tmp.type !== tmp4.INACTIVE) {
            const obj = { type: "active", statusText: null };
            const intl = util.intl;
            obj.statusText = intl.string(_modDef2600.FFLkmx);
            tmp5 = obj;
          }
        }
        return tmp5;
      }, items);
    };
