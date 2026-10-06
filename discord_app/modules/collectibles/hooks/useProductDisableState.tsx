// === Module 8564: useProductDisableState ===

// Module 8564 (useProductDisableState)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1088 */;
import intl2 from "intl" /* 1126 */;
import SubscriptionStore from "SubscriptionStore" /* 4540 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let premiumSubscription;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react;
  const cResult = obj.c(8);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
  if (ALL.has(arg0)) {
    let tmp9;
    if (cResult[2] !== stateFromStores) {
      let stringResult = null;
      if (stateFromStores) {
        const intl = intl2.intl;
        stringResult = intl.string(intl2.t.NbveHD);
      }
      cResult[2] = stateFromStores;
      cResult[3] = stringResult;
      tmp9 = stringResult;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] === stateFromStores) {
      let tmp11;
      if (cResult[5] === tmp9) {
        tmp11 = cResult[6];
      }
      tmp8 = tmp11;
    }
    const obj2 = { isDisabled: stateFromStores, disabledReason: tmp9 };
    cResult[4] = stateFromStores;
    cResult[5] = tmp9;
    cResult[6] = obj2;
    tmp11 = obj2;
  } else {
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { isDisabled: false, disabledReason: null };
      cResult[7] = obj3;
      tmp8 = obj3;
    } else {
      tmp8 = cResult[7];
    }
  }
  return tmp8;
}) : ((arg0) => {
  let obj3;
  let stringResult;
  const items = [SubscriptionStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    premiumSubscription = premiumSubscription.getPremiumSubscription();
    let prop;
    if (premiumSubscription != null) {
      prop = premiumSubscription.isPurchasedExternally;
    }
    return true === prop;
  });
  const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
  if (ALL.has(arg0)) {
    const obj2 = { isDisabled: stateFromStores, disabledReason: stringResult };
    stringResult = null;
    if (stateFromStores) {
      const intl = intl2.intl;
      stringResult = intl.string(intl2.t.NbveHD);
    }
    obj3 = obj2;
  } else {
    obj3 = { isDisabled: false, disabledReason: null };
  }
  return obj3;
});
const result = size.fileFinishedImporting("modules/collectibles/hooks/useProductDisableState.tsx");

export const useProductDisableState = tmp2;