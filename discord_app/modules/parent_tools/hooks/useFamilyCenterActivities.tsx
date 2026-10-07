// === Module 14718: useFamilyCenterActivities ===

// Module 14718 (useFamilyCenterActivities)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import PriceUtils from "PriceUtils" /* 6750 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8331 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7061 */;

require = fn;
const TeenActionDisplayType = fn(7062).TeenActionDisplayType;
fn(558);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return FamilyCenterStore.getTotalForDisplayType(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("useStateFromStores").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [FamilyCenterStore];
  return require("useStateFromStores").useStateFromStores(items, () => FamilyCenterStore.getTotalForDisplayType(closure_0));
});
let closure_4 = tmp3;
ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return FamilyCenterStore.getActionsForDisplayType(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("useStateFromStores").useStateFromStoresArray(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [FamilyCenterStore];
  return require("useStateFromStores").useStateFromStoresArray(items, () => FamilyCenterStore.getActionsForDisplayType(closure_0));
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function l() {
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
  return useStateFromStores.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [FamilyCenterStore];
  return useStateFromStores.useStateFromStores(items, () => {
    const values = Object.values(TeenActionDisplayType);
    return values.some((item) => totalForDisplayType.getTotalForDisplayType(item) > 0);
  });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/hooks/useFamilyCenterActivities.tsx");

export const useActionsForDisplayType = tmp2;
export const useActionTotalsForDisplayType = tmp3;
export const useHasActionForAnyDisplayType = tmp4;
export const useFormattedTotalForDisplayType = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(5);
  let num = closure_4(arg0);
  if (num == null) {
    num = 0;
  }
  if (arg0 === TeenActionDisplayType.TOTAL_VOICE_MINUTES) {
    if (cResult[0] !== num) {
      const formatTotalTimeResult = FamilyCenterUtils.formatTotalTime(num);
      cResult[0] = num;
      cResult[1] = formatTotalTimeResult;
      let tmp19 = formatTotalTimeResult;
      const tmpResult = FamilyCenterUtils;
    } else {
      tmp19 = cResult[1];
    }
    return tmp19;
  } else {
    if (arg0 === TeenActionDisplayType.PURCHASES) {
      if (cResult[2] !== num) {
        const _Symbol = Symbol;
        Symbol.for("react.early_return_sentinel");
        const totalSpendAmount = FamilyCenterStore.getTotalSpendAmount();
        const totalSpendCurrency = FamilyCenterStore.getTotalSpendCurrency();
        let result = num;
        if (null != totalSpendAmount) {
          result = num;
          if (null != totalSpendCurrency) {
            result = PriceUtils.shortenAndFormatPrice(totalSpendAmount, totalSpendCurrency);
            const tmpResult3 = PriceUtils;
          }
        }
        cResult[2] = num;
        cResult[3] = result;
        let tmp5 = result;
      } else {
        tmp5 = cResult[3];
      }
      const _Symbol2 = Symbol;
      if (tmp5 !== Symbol.for("react.early_return_sentinel")) {
        return tmp5;
      }
    }
    if (arg0 === TeenActionDisplayType.GIFTS) {
      const _Symbol3 = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const _Symbol4 = Symbol;
        let forResult1 = Symbol.for("react.early_return_sentinel");
        const totalGiftValue = FamilyCenterStore.getTotalGiftValue();
        if (null != totalGiftValue) {
          forResult1 = PriceUtils.shortenAndFormatPrice(totalGiftValue.amount, totalGiftValue.currency);
          const tmpResult4 = PriceUtils;
        }
        cResult[4] = forResult1;
        let tmp14 = forResult1;
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
    return FamilyCenterUtils.formatTotalTime(num);
  } else if (arg0 === TeenActionDisplayType.PURCHASES) {
    const totalSpendAmount = FamilyCenterStore.getTotalSpendAmount();
    const totalSpendCurrency = FamilyCenterStore.getTotalSpendCurrency();
    let result = num;
    if (null != totalSpendAmount) {
      result = num;
      if (null != totalSpendCurrency) {
        result = PriceUtils.shortenAndFormatPrice(totalSpendAmount, totalSpendCurrency);
      }
    }
    return result;
  } else if (arg0 === TeenActionDisplayType.GIFTS) {
    const totalGiftValue = FamilyCenterStore.getTotalGiftValue();
    let result1 = num;
    if (null != totalGiftValue) {
      result1 = PriceUtils.shortenAndFormatPrice(totalGiftValue.amount, totalGiftValue.currency);
    }
    return result1;
  } else {
    return num;
  }
});