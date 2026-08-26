// === Module 9783: useProductDisableState ===

// Module 9783 (useProductDisableState)
import initialize from "initialize" /* 589 */;
import set from "set" /* 679 */;
import closure_2 from "reset" /* 4113 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useProductDisableState.tsx");

export const useProductDisableState = function useProductDisableState(skuId) {
  let obj = initialize;
  const items = [closure_2];
  const stateFromStores = obj.useStateFromStores(items, () => {
    premiumSubscription = premiumSubscription.getPremiumSubscription();
    let prop;
    if (premiumSubscription != null) {
      prop = premiumSubscription.isPurchasedExternally;
    }
    return true === prop;
  });
  const ALL = set.FractionalPremiumSKUsSets.ALL;
  if (ALL.has(skuId)) {
    obj = { isDisabled: null, disabledReason: null };
    obj[0] = stateFromStores;
    let stringResult = null;
    if (stateFromStores) {
      const intl = tmp(1236).intl;
      stringResult = intl.string(tmp(1236).t.NbveHD);
    }
    obj[1] = stringResult;
  } else {
    obj = { isDisabled: false, disabledReason: null };
  }
  return obj;
};