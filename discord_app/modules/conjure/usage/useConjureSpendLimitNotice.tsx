// === Module 12390: useConjureSpendLimitNotice ===

// Module 12390 (useConjureSpendLimitNotice)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2065 */;
import _modDef3864 from "module_3864" /* 3864 */;
import ConjureSpendLimitStore from "ConjureSpendLimitStore" /* 10827 */;

const require = globalThis.__r;

const require = fn;
const numberFormat = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/usage/useConjureSpendLimitNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureSpendLimitNotice(arg0) {
  _require = arg0;
  let intl = _require;
  const cResult = require("c").c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureSpendLimitStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return ConjureSpendLimitStore.getSpendLimit(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp5 = items1;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[2];
    tmp5 = cResult[3];
  }
  const obj2 = require("c");
  const stateFromStores = intl(504).useStateFromStores(first, tmp4, tmp5);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === tmp7) {
      const _Symbol = Symbol;
      if (cResult[8] !== Symbol.for("react.early_return_sentinel")) {
        return tmp10;
      } else {
        if (cResult[14] === tmp8) {
        }
        const obj3 = { blocked: tmp8, message: tmp9 };
        cResult[14] = tmp8;
        cResult[15] = tmp9;
        cResult[16] = obj3;
      }
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  let tmp12 = null;
  if (null == stateFromStores) {
    cResult[4] = stateFromStores;
    cResult[5] = tmp7;
    cResult[6] = flag;
    cResult[7] = tmp13;
    cResult[8] = tmp12;
  } else if (cResult[9] === stateFromStores.limitUsd) {
    if (cResult[10] === stateFromStores.spentUsd) {
      if (cResult[11] === stateFromStores.state) {
        flag = cResult[12];
        tmp13 = cResult[13];
        tmp12 = forResult;
      }
    }
  }
  let formatResult = null;
  if (null != stateFromStores.limitUsd) {
    formatResult = numberFormat.format(stateFromStores.limitUsd);
  }
  if ("blocked" === stateFromStores.state) {
    let prop = importDefault;
    const submitRequestURL = HelpdeskUtilsDefault.getSubmitRequestURL();
    if (null == formatResult) {
      intl = intl(1125).intl;
      prop = prop(3864)["bw/n4C"];
      const obj4 = { helpdeskURL: submitRequestURL };
      let formatResult1 = intl.format(prop, obj4);
    } else {
      const intl3 = intl(1125).intl;
      const obj6 = { limit: formatResult, helpdeskURL: submitRequestURL };
      formatResult1 = intl3.format(prop(3864).GYqJXH, obj6);
    }
    const obj = { blocked: true, message: formatResult1 };
  } else {
    tmp12 = null;
    if (null != stateFromStores.limitUsd) {
      tmp12 = null;
      if (null != formatResult) {
        tmp12 = null;
        if (stateFromStores.limitUsd > 0) {
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.min(99, Math.floor(stateFromStores.spentUsd / stateFromStores.limitUsd * 100));
          const intl2 = intl(1125).intl;
          const obj7 = { percent: bound, limit: formatResult };
          const formatToPlainStringResult = intl2.formatToPlainString(_modDef3864.GHgG2B, obj7);
          cResult[9] = stateFromStores.limitUsd;
          cResult[10] = stateFromStores.spentUsd;
          cResult[11] = stateFromStores.state;
          cResult[12] = false;
          cResult[13] = formatToPlainStringResult;
          tmp12 = forResult;
          tmp13 = formatToPlainStringResult;
          flag = false;
        }
      }
    }
  }
  const intlResult = intl(504);
}) : (function useConjureSpendLimitNotice(arg0) {
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
        const intl2 = tmp(1125).intl;
        const obj3 = { helpdeskURL: submitRequestURL };
        let formatResult1 = intl2.format(_modDef3864["bw/n4C"], obj3);
      } else {
        const intl = tmp(1125).intl;
        const obj4 = { limit: formatResult, helpdeskURL: submitRequestURL };
        formatResult1 = intl.format(_modDef3864.GYqJXH, obj4);
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
            const intl3 = tmp(1125).intl;
            const obj7 = { percent: bound, limit: formatResult };
            obj6.message = intl3.formatToPlainString(_modDef3864.GHgG2B, obj7);
            return obj6;
          }
        }
      }
      return null;
    }
  }
  const obj = require("initialize");
});