// === Module 14984: useFamilyCenterActivities ===

// Module 14984 (useFamilyCenterActivities)
import useStateFromStores from "useStateFromStores" /* 563 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7640 */;

const require = globalThis.__r;

require = fn;
const TeenActionDisplayType = fn(7641).TeenActionDisplayType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/hooks/useFamilyCenterActivities.tsx");

export const useActionsForDisplayType = function useActionsForDisplayType(displayType) {
  _require = displayType;
  const items = [FamilyCenterStore];
  return require("useStateFromStores").useStateFromStoresArray(items, () => FamilyCenterStore.getActionsForDisplayType(closure_0));
};
export const useActionTotalsForDisplayType = function useActionTotalsForDisplayType(displayType) {
  _require = displayType;
  const items = [FamilyCenterStore];
  return require("useStateFromStores").useStateFromStores(items, () => FamilyCenterStore.getTotalForDisplayType(closure_0));
};
export const useHasActionForAnyDisplayType = function useHasActionForAnyDisplayType() {
  const items = [FamilyCenterStore];
  return useStateFromStores.useStateFromStores(items, () => {
    const values = Object.values(TeenActionDisplayType);
    return values.some((item) => totalForDisplayType.getTotalForDisplayType(item) > 0);
  });
};
export const useFormattedTotalForDisplayType = function useFormattedTotalForDisplayType(displayType) {
  _require = displayType;
  const items = [FamilyCenterStore];
  let num = require("useStateFromStores").useStateFromStores(items, () => FamilyCenterStore.getTotalForDisplayType(closure_0));
  if (num == null) {
    num = 0;
  }
  if (displayType === TeenActionDisplayType.TOTAL_VOICE_MINUTES) {
    return tmp(7695).formatTotalTime(num);
  } else if (displayType === TeenActionDisplayType.PURCHASES) {
    const totalSpendAmount = FamilyCenterStore.getTotalSpendAmount();
    const totalSpendCurrency = FamilyCenterStore.getTotalSpendCurrency();
    let result = num;
    if (null != totalSpendAmount) {
      result = num;
      if (null != totalSpendCurrency) {
        result = tmp(7337).shortenAndFormatPrice(totalSpendAmount, totalSpendCurrency);
        const tmpResult3 = tmp(7337);
      }
    }
    return result;
  } else if (displayType === TeenActionDisplayType.GIFTS) {
    const totalGiftValue = FamilyCenterStore.getTotalGiftValue();
    let result1 = num;
    if (null != totalGiftValue) {
      result1 = tmp(7337).shortenAndFormatPrice(totalGiftValue.amount, totalGiftValue.currency);
      const tmpResult4 = tmp(7337);
    }
    return result1;
  } else {
    return num;
  }
  const obj = require("useStateFromStores");
};