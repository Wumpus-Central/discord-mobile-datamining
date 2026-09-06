// === Module 8869: useProductDisableState ===

// Module 8869 (useProductDisableState)
import initialize from "initialize" /* 504 */;
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1077 */;
import util from "util" /* 1114 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useProductDisableState.tsx");

export const useProductDisableState = function useProductDisableState(skuId) {
  let obj = initialize;
  const items = [SubscriptionStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    premiumSubscription = premiumSubscription.getPremiumSubscription();
    let prop;
    if (premiumSubscription != null) {
      prop = premiumSubscription.isPurchasedExternally;
    }
    return true === prop;
  });
  const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
  if (ALL.has(skuId)) {
    obj = { isDisabled: stateFromStores, disabledReason: null };
    let stringResult = null;
    if (stateFromStores) {
      const intl = util.intl;
      stringResult = intl.string(util.t.NbveHD);
    }
    obj.disabledReason = stringResult;
  } else {
    obj = { isDisabled: false, disabledReason: null };
  }
  return obj;
};