// === Module 14718: useFamilyCenterActivities ===

// Module 14718 (useFamilyCenterActivities)
import useStateFromStores from "useStateFromStores" /* 573 */;
import react from "react" /* 576 */;
import PriceUtils from "PriceUtils" /* 6750 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7062 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8331 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7061 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const TeenActionDisplayType = FamilyCenterConstants.TeenActionDisplayType;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return FamilyCenterStore.getActionsForDisplayType(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(573);
  return tmpResult.useStateFromStoresArray(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [FamilyCenterStore];
  const obj = require("useStateFromStores");
  return obj.useStateFromStoresArray(items, () => FamilyCenterStore.getActionsForDisplayType(closure_0));
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return FamilyCenterStore.getTotalForDisplayType(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(573);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [FamilyCenterStore];
  const obj = require("useStateFromStores");
  return obj.useStateFromStores(items, () => FamilyCenterStore.getTotalForDisplayType(closure_0));
});
let closure_4 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function l() {
      let totalForDisplayType;
      const values = Object.values(TeenActionDisplayType);
      return values.some((item) => totalForDisplayType.getTotalForDisplayType(item) > 0);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = useStateFromStores;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [FamilyCenterStore];
  const obj = useStateFromStores;
  return obj.useStateFromStores(items, () => {
    let totalForDisplayType;
    const values = Object.values(TeenActionDisplayType);
    return values.some((item) => totalForDisplayType.getTotalForDisplayType(item) > 0);
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = react;
  const cResult = obj.c(5);
  let num = closure_4(arg0);
  if (num == null) {
    num = 0;
  }
  if (arg0 === TeenActionDisplayType.TOTAL_VOICE_MINUTES) {
    let tmp19;
    if (cResult[0] !== num) {
      const tmpResult = FamilyCenterUtils;
      const formatTotalTimeResult = tmpResult.formatTotalTime(num);
      cResult[0] = num;
      cResult[1] = formatTotalTimeResult;
      tmp19 = formatTotalTimeResult;
    } else {
      tmp19 = cResult[1];
    }
    return tmp19;
  } else {
    if (arg0 === TeenActionDisplayType.PURCHASES) {
      let tmp5;
      if (cResult[2] !== num) {
        const _Symbol = Symbol;
        Symbol.for("react.early_return_sentinel");
        const totalSpendAmount = FamilyCenterStore.getTotalSpendAmount();
        const totalSpendCurrency = FamilyCenterStore.getTotalSpendCurrency();
        let result = num;
        if (null != totalSpendAmount) {
          result = num;
          if (null != totalSpendCurrency) {
            const tmpResult3 = PriceUtils;
            result = tmpResult3.shortenAndFormatPrice(totalSpendAmount, totalSpendCurrency);
          }
        }
        cResult[2] = num;
        cResult[3] = result;
        tmp5 = result;
      } else {
        tmp5 = cResult[3];
      }
      const _Symbol2 = Symbol;
      if (tmp5 !== Symbol.for("react.early_return_sentinel")) {
        return tmp5;
      }
    }
    if (arg0 === TeenActionDisplayType.GIFTS) {
      let tmp14;
      const _Symbol3 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const _Symbol4 = Symbol;
        let forResult1 = Symbol.for("react.early_return_sentinel");
        const totalGiftValue = FamilyCenterStore.getTotalGiftValue();
        if (null != totalGiftValue) {
          const tmpResult4 = PriceUtils;
          forResult1 = tmpResult4.shortenAndFormatPrice(totalGiftValue.amount, totalGiftValue.currency);
        }
        cResult[4] = forResult1;
        tmp14 = forResult1;
      } else {
        tmp14 = cResult[4];
      }
      const _Symbol5 = Symbol;
      let tmp18 = num;
      if (tmp14 !== Symbol.for("react.early_return_sentinel")) {
        tmp18 = tmp14;
      }
      return tmp18;
    } else {
      return num;
    }
  }
}) : ((arg0) => {
  let num = closure_4(arg0);
  if (num == null) {
    num = 0;
  }
  if (arg0 === TeenActionDisplayType.TOTAL_VOICE_MINUTES) {
    const obj3 = FamilyCenterUtils;
    return obj3.formatTotalTime(num);
  } else if (arg0 === TeenActionDisplayType.PURCHASES) {
    const totalSpendAmount = FamilyCenterStore.getTotalSpendAmount();
    const totalSpendCurrency = FamilyCenterStore.getTotalSpendCurrency();
    let result = num;
    if (null != totalSpendAmount) {
      result = num;
      if (null != totalSpendCurrency) {
        const obj2 = PriceUtils;
        result = obj2.shortenAndFormatPrice(totalSpendAmount, totalSpendCurrency);
      }
    }
    return result;
  } else if (arg0 === TeenActionDisplayType.GIFTS) {
    const totalGiftValue = FamilyCenterStore.getTotalGiftValue();
    let result1 = num;
    if (null != totalGiftValue) {
      const obj = PriceUtils;
      result1 = obj.shortenAndFormatPrice(totalGiftValue.amount, totalGiftValue.currency);
    }
    return result1;
  } else {
    return num;
  }
});
let result = size.fileFinishedImporting("modules/parent_tools/hooks/useFamilyCenterActivities.tsx");

export const useActionsForDisplayType = tmp2;
export const useActionTotalsForDisplayType = tmp3;
export const useHasActionForAnyDisplayType = tmp4;
export const useFormattedTotalForDisplayType = tmp5;