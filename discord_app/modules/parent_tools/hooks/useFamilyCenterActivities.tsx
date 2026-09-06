// discord_app/modules/parent_tools/hooks/useFamilyCenterActivities.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
const TeenActionDisplayType = fn(7538).TeenActionDisplayType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/hooks/useFamilyCenterActivities.tsx");

export const useActionsForDisplayType = function useActionsForDisplayType(displayType) {
  _require = displayType;
  const items = [FamilyCenterStore];
  return require("useStateFromStores").useStateFromStoresArray(items, () =>
    FamilyCenterStore.getActionsForDisplayType(closure_0),
  );
};
export const useActionTotalsForDisplayType = function useActionTotalsForDisplayType(displayType) {
  _require = displayType;
  const items = [FamilyCenterStore];
  return require("useStateFromStores").useStateFromStores(items, () =>
    FamilyCenterStore.getTotalForDisplayType(closure_0),
  );
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
  let num = require("useStateFromStores").useStateFromStores(items, () =>
    FamilyCenterStore.getTotalForDisplayType(closure_0),
  );
  if (num == null) {
    num = 0;
  }
  if (displayType === TeenActionDisplayType.TOTAL_VOICE_MINUTES) {
    let tmpResult = tmp(7593);
    return tmpResult.formatTotalTime(num);
  } else if (displayType === TeenActionDisplayType.PURCHASES) {
    const totalSpendAmount = FamilyCenterStore.getTotalSpendAmount();
    const totalSpendCurrency = FamilyCenterStore.getTotalSpendCurrency();
    let result = num;
    if (null != totalSpendAmount) {
      result = num;
      if (null != totalSpendCurrency) {
        tmpResult = tmp(7234);
        result = tmpResult.shortenAndFormatPrice(totalSpendAmount, totalSpendCurrency);
      }
    }
    return result;
  } else if (displayType === TeenActionDisplayType.GIFTS) {
    const totalGiftValue = FamilyCenterStore.getTotalGiftValue();
    let result1 = num;
    if (null != totalGiftValue) {
      result1 = tmp(7234).shortenAndFormatPrice(totalGiftValue.amount, totalGiftValue.currency);
      const tmpResult1 = tmp(7234);
    }
    return result1;
  } else {
    return num;
  }
  const obj = require("useStateFromStores");
};
