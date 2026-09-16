// === Module 9008: useProductDisableState ===

// Module 9008 (useProductDisableState)
import initialize from "initialize" /* 504 */;
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1077 */;
import util from "util" /* 1115 */;
import SubscriptionStore from "SubscriptionStore" /* 4301 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useProductDisableState.tsx");

export const useProductDisableState = function useProductDisableState(skuId) {
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    premiumSubscription = premiumSubscription.getPremiumSubscription();
    let prop;
    if (premiumSubscription != null) {
      prop = premiumSubscription.isPurchasedExternally;
    }
    return true === prop;
  });
  const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
  if (ALL.has(skuId)) {
    const obj2 = { isDisabled: stateFromStores, disabledReason: null };
    let stringResult = null;
    if (stateFromStores) {
      const intl = util.intl;
      stringResult = intl.string(util.t.NbveHD);
    }
    obj2.disabledReason = stringResult;
    let obj3 = obj2;
  } else {
    obj3 = { isDisabled: false, disabledReason: null };
  }
  return obj3;
};