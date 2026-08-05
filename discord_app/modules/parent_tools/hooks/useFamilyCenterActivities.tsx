// discord_app/modules/parent_tools/hooks/useFamilyCenterActivities.tsx
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import { TeenActionDisplayType } from "items";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

const require = arg1;
let result = require("defaultAreStatesEqual").fileFinishedImporting("modules/parent_tools/hooks/useFamilyCenterActivities.tsx");

export const useActionsForDisplayType = function useActionsForDisplayType(displayType) {
  const _require = displayType;
  const items = [freshTeenActivityWithMap];
  return _defaultAreStatesEqual.useStateFromStoresArray(items, () => outer1_2.getActionsForDisplayType(closure_0));
};
export const useActionTotalsForDisplayType = function useActionTotalsForDisplayType(displayType) {
  const _require = displayType;
  const items = [freshTeenActivityWithMap];
  return _defaultAreStatesEqual.useStateFromStores(items, () => outer1_2.getTotalForDisplayType(closure_0));
};
export const useHasActionForAnyDisplayType = function useHasActionForAnyDisplayType() {
  const items = [freshTeenActivityWithMap];
  return defaultAreStatesEqual /* defaultAreStatesEqual */.useStateFromStores(items, () => {
    const values = Object.values(closure_3);
    return values.some((closure_0) => totalForDisplayType.getTotalForDisplayType(closure_0) > 0);
  });
};
export const useFormattedTotalForDisplayType = function useFormattedTotalForDisplayType(displayType) {
  const _require = displayType;
  const items = [freshTeenActivityWithMap];
  let num = _defaultAreStatesEqual.useStateFromStores(items, () => outer1_2.getTotalForDisplayType(closure_0));
  if (num == null) {
    num = 0;
  }
  if (displayType === TeenActionDisplayType.TOTAL_VOICE_MINUTES) {
    let tmpResult = tmp(6961);
    return tmpResult.formatTotalTime(num);
  } else if (displayType === tmp3.PURCHASES) {
    const totalSpendAmount = obj2.getTotalSpendAmount();
    const totalSpendCurrency = obj2.getTotalSpendCurrency();
    let result = num;
    if (null != totalSpendAmount) {
      result = num;
      if (null != totalSpendCurrency) {
        tmpResult = tmp(5764);
        result = tmpResult.shortenAndFormatPrice(totalSpendAmount, totalSpendCurrency);
      }
    }
    return result;
  } else if (displayType === tmp3.GIFTS) {
    const totalGiftValue = obj2.getTotalGiftValue();
    let result1 = num;
    if (null != totalGiftValue) {
      result1 = tmp(5764).shortenAndFormatPrice(totalGiftValue.amount, totalGiftValue.currency);
      const tmpResult1 = tmp(5764);
    }
    return result1;
  } else {
    return num;
  }
  const obj = _defaultAreStatesEqual;
};