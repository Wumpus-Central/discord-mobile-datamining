// === Module 12539: useConjureSpendLimitNotice ===

// Module 12539 (useConjureSpendLimitNotice)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ConjureSpendLimitStore from "ConjureSpendLimitStore" /* 10850 */;

const require = globalThis.__r;

const require = fn;
const numberFormat = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/usage/useConjureSpendLimitNotice.tsx");

export default function useConjureSpendLimitNotice(arg0) {
  _require = arg0;
  const items = [ConjureSpendLimitStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureSpendLimitStore.getSpendLimit(closure_0), items1);
  if (null == stateFromStores) {
    return null;
  } else {
    let formatResult = null;
    if (null != stateFromStores.limitUsd) {
      formatResult = numberFormat.format(stateFromStores.limitUsd);
    }
    if ("blocked" === stateFromStores.state) {
      const submitRequestURL = HelpdeskUtilsDefault.getSubmitRequestURL();
      if (null == formatResult) {
        const intl2 = tmp(1114).intl;
        const obj3 = { helpdeskURL: submitRequestURL };
        let formatResult1 = intl2.format(_modDef3865["bw/n4C"], obj3);
      } else {
        const intl = tmp(1114).intl;
        const obj4 = { limit: formatResult, helpdeskURL: submitRequestURL };
        formatResult1 = intl.format(_modDef3865.GYqJXH, obj4);
      }
      const obj5 = { blocked: true, message: formatResult1 };
      return obj5;
    } else {
      if (null != stateFromStores.limitUsd) {
        if (null != formatResult) {
          if (stateFromStores.limitUsd > 0) {
            const _Math = Math;
            const _Math2 = Math;
            const obj6 = { blocked: false, message: null };
            const bound = Math.min(99, Math.floor(stateFromStores.spentUsd / stateFromStores.limitUsd * 100));
            const intl3 = tmp(1114).intl;
            const obj7 = { percent: bound, limit: formatResult };
            obj6.message = intl3.formatToPlainString(_modDef3865.GHgG2B, obj7);
            return obj6;
          }
        }
      }
      return null;
    }
  }
  const obj = require("initialize");
};