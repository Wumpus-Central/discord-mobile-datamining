// discord_app/modules/collectibles/hooks/useProductDisableState.tsx
import reset from "reset";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useProductDisableState.tsx");

export const useProductDisableState = function useProductDisableState(skuId) {
  let obj = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items = [reset];
  const stateFromStores = obj.useStateFromStores(items, () => {
    premiumSubscription = premiumSubscription.getPremiumSubscription();
    let prop;
    if (premiumSubscription != null) {
      prop = premiumSubscription.isPurchasedExternally;
    }
    return true === prop;
  });
  const ALL = require("../../../../discord_common/js/shared/shared-constants/FractionalPremiumSKUs.tsx") /* set */.FractionalPremiumSKUsSets.ALL;
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