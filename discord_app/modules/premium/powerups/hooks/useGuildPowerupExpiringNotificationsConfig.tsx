// === Module 12310: useGuildPowerupExpiringNotificationsConfig ===

// Module 12310 (useGuildPowerupExpiringNotificationsConfig)
import c from "c" /* 576 */;
import _modDef2597 from "module_2597" /* 2597 */;
import _modDef3019 from "module_3019" /* 3019 */;
import Powerups from "Powerups" /* 4971 */;
import useGetExpiringGuildPowerupsDefault from "useGetExpiringGuildPowerups" /* 12311 */;
import useGameServerGetExpiringEntitlementsDefault from "useGameServerGetExpiringEntitlements" /* 12312 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const util = intl(1126);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildPowerupExpiringNotificationsConfig(arg0) {
  let intl = require;
  const cResult = c.c(19);
  const arr = useGetExpiringGuildPowerupsDefault(arg0);
  const arr2 = useGameServerGetExpiringEntitlementsDefault(arg0);
  if (arr.length > 0 || arr2.length > 0) {
    if (cResult[1] !== arr2.length) {
      let stringResult;
      if (arr2.length > 0) {
        const intl2 = util.intl;
        stringResult = intl2.string(_modDef3019["B3OfL/"]);
      }
      cResult[1] = arr2.length;
      cResult[2] = stringResult;
      let tmp7 = stringResult;
    } else {
      tmp7 = cResult[2];
    }
    if (cResult[3] === arr) {
      if (cResult[4] === tmp7) {
        if (cResult[9] === arr2.length) {
          if (cResult[10] === arr) {
            let tmp20 = cResult[11];
          }
          if (cResult[14] === tmp9) {
            if (cResult[15] === arr) {
              if (cResult[16] === tmp4) {
                if (cResult[17] === tmp20) {
                  let tmp28 = cResult[18];
                }
                return tmp28;
              }
            }
          }
          const obj2 = { shouldShow: tmp4, expiringPowerups: arr, expiringPowerupNames: tmp9, warnings: tmp20 };
          cResult[14] = tmp9;
          cResult[15] = arr;
          cResult[16] = tmp4;
          cResult[17] = tmp20;
          cResult[18] = obj2;
          tmp28 = obj2;
        }
        const items = [];
        if (!arr.some((skuId) => skuId.skuId === Powerups.VANITY_URL_POWERUP_SKU_ID)) {
          if (arr2.length <= 0) {
            cResult[9] = arr2.length;
            cResult[10] = arr;
            cResult[11] = items;
            tmp20 = items;
          } else {
            const _Symbol4 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              intl = util.intl;
              const stringResult1 = intl.string(_modDef3019.wiungr);
              cResult[13] = stringResult1;
              let tmp26 = stringResult1;
            } else {
              tmp26 = cResult[13];
            }
            items.push(tmp26);
          }
        } else {
          const _Symbol3 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = util.intl;
            const stringResult2 = intl3.string(_modDef2597.Sfr0Jw);
            cResult[12] = stringResult2;
            let tmp22 = stringResult2;
          } else {
            tmp22 = cResult[12];
          }
          items.push(tmp22);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function f(title) {
        return title.title;
      };
      cResult[6] = fn;
      let tmp11 = fn;
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp7) {
      const items1 = [];
      HermesBuiltin.arraySpread(cResult[8], HermesBuiltin.arraySpread(arr.map(tmp11), 0));
      cResult[3] = arr;
      cResult[4] = tmp7;
      cResult[5] = items1;
    }
    if (null != tmp7) {
      const items2 = [tmp7];
      let items3 = items2;
    } else {
      items3 = [];
    }
    cResult[7] = tmp7;
    cResult[8] = items3;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { shouldShow: false, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
      cResult[0] = obj3;
      let first = obj3;
    } else {
      first = cResult[0];
    }
    return first;
  }
}) : (function useGuildPowerupExpiringNotificationsConfig(arg0) {
  const arr = useGetExpiringGuildPowerupsDefault(arg0);
  const arr2 = useGameServerGetExpiringEntitlementsDefault(arg0);
  if (arr.length > 0 || arr2.length > 0) {
    let stringResult;
    if (arr2.length > 0) {
      const intl = util.intl;
      stringResult = intl.string(_modDef3019["B3OfL/"]);
    }
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(arr.map((title) => title.title), 0);
    if (null != stringResult) {
      const items1 = [stringResult];
      let items2 = items1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items2, arraySpreadResult);
    const items3 = [];
    if (arr.some((skuId) => skuId.skuId === Powerups.VANITY_URL_POWERUP_SKU_ID)) {
      const intl2 = util.intl;
      items3.push(intl2.string(_modDef2597.Sfr0Jw));
    }
    if (arr2.length > 0) {
      const intl3 = util.intl;
      items3.push(intl3.string(_modDef3019.wiungr));
    }
    const obj2 = { shouldShow: tmp3, expiringPowerups: arr, expiringPowerupNames: items, warnings: items3 };
    return obj2;
  } else {
    const obj = { shouldShow: false, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
    return obj;
  }
});