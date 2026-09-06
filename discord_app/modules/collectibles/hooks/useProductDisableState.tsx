// discord_app/modules/collectibles/hooks/useProductDisableState.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import FractionalPremiumSKUs from "../../../../discord_common/js/shared/shared-constants/FractionalPremiumSKUs.tsx";
import util from "../../../intl/index.native.tsx";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";

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
