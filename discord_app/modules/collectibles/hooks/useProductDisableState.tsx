// discord_app/modules/collectibles/hooks/useProductDisableState.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import set from "../../../../discord_common/js/shared/shared-constants/FractionalPremiumSKUs.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import reset from "../../../stores/billing/SubscriptionStore.tsx";

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