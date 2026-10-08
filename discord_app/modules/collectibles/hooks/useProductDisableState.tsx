// === Module 9048: useProductDisableState ===

// Module 9048 (useProductDisableState)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1088 */;
import util from "util" /* 1126 */;
import SubscriptionStore from "SubscriptionStore" /* 4732 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useProductDisableState.tsx");

export const useProductDisableState = ReactCompilerGating.isReactCompilerEnabled() ? (function useProductDisableState(arg0) {
  const cResult = c.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    const fn = function n() {
      premiumSubscription = premiumSubscription.getPremiumSubscription();
      let prop;
      if (premiumSubscription != null) {
        prop = premiumSubscription.isPurchasedExternally;
      }
      return true === prop;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
  if (ALL.has(arg0)) {
    if (cResult[2] !== stateFromStores) {
      let stringResult = null;
      if (stateFromStores) {
        const intl = util.intl;
        stringResult = intl.string(util.t.NbveHD);
      }
      cResult[2] = stateFromStores;
      cResult[3] = stringResult;
      let tmp9 = stringResult;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] === stateFromStores) {
    }
    const obj2 = { isDisabled: stateFromStores, disabledReason: tmp9 };
    cResult[4] = stateFromStores;
    cResult[5] = tmp9;
    cResult[6] = obj2;
  } else {
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { isDisabled: false, disabledReason: null };
      cResult[7] = obj3;
      let tmp8 = obj3;
    } else {
      tmp8 = cResult[7];
    }
    return tmp8;
  }
  const tmpResult = initialize;
}) : (function useProductDisableState(arg0) {
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
  if (ALL.has(arg0)) {
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
});