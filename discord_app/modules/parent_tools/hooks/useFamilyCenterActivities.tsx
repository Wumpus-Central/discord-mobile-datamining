// === Module 14251: useActionsForDisplayType ===

// Module 14251 (useActionsForDisplayType)
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;
import { TeenActionDisplayType } from "items" /* 5297 */;

require = fn;
let result = require("obj132").fileFinishedImporting("modules/parent_tools/hooks/useFamilyCenterActivities.tsx");

export const useActionsForDisplayType = function useActionsForDisplayType(displayType) {
  const _require = displayType;
  const items = [closure_2];
  return _require(647).useStateFromStoresArray(items, () => closure_1_2.getActionsForDisplayType(closure_0));
};
export const useActionTotalsForDisplayType = function useActionTotalsForDisplayType(displayType) {
  const _require = displayType;
  const items = [closure_2];
  return _require(647).useStateFromStores(items, () => closure_1_2.getTotalForDisplayType(closure_0));
};
export const useHasActionForAnyDisplayType = function useHasActionForAnyDisplayType() {
  const items = [closure_2];
  return defaultAreStatesEqual.useStateFromStores(items, () => {
    const values = Object.values(closure_3);
    return values.some((item, index) => totalForDisplayType.getTotalForDisplayType(item) > 0);
  });
};
export const useFormattedTotalForDisplayType = function useFormattedTotalForDisplayType(displayType) {
  const _require = displayType;
  const items = [store];
  let num = _require(647).useStateFromStores(items, () => closure_1_2.getTotalForDisplayType(closure_0));
  if (num == null) {
    num = 0;
  }
  if (displayType === TeenActionDisplayType.TOTAL_VOICE_MINUTES) {
    let tmpResult = tmp(5363);
    return tmpResult.formatTotalTime(num);
  } else if (displayType === TeenActionDisplayType.PURCHASES) {
    const totalSpendAmount = store.getTotalSpendAmount();
    const totalSpendCurrency = store.getTotalSpendCurrency();
    let result = num;
    if (null != totalSpendAmount) {
      result = num;
      if (null != totalSpendCurrency) {
        tmpResult = tmp(5316);
        result = tmpResult.shortenAndFormatPrice(totalSpendAmount, totalSpendCurrency);
      }
    }
    return result;
  } else if (displayType === TeenActionDisplayType.GIFTS) {
    const totalGiftValue = store.getTotalGiftValue();
    let result1 = num;
    if (null != totalGiftValue) {
      result1 = tmp(5316).shortenAndFormatPrice(totalGiftValue.amount, totalGiftValue.currency);
      const tmpResult1 = tmp(5316);
    }
    return result1;
  } else {
    return num;
  }
  const obj = _require(647);
};