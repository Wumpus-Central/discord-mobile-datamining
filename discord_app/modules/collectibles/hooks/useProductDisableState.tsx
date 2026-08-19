// === Module 9582: useProductDisableState ===

// Module 9582 (useProductDisableState)
import initialize from "initialize" /* 589 */;
import set from "set" /* 679 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import reset from "reset" /* 4045 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useProductDisableState.tsx");

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
      const intl = getSystemLocale.intl;
      stringResult = intl.string(getSystemLocale.t.NbveHD);
    }
    obj[1] = stringResult;
  } else {
    obj = { isDisabled: false, disabledReason: null };
  }
  return obj;
};