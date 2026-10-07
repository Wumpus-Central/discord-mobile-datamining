// === Module 10564: NativePaymentContext ===

// Module 10564 (NativePaymentContext)
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 6770 */;
import ContextUtilsDefault from "ContextUtils" /* 6947 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4539 */;

require = fn;
const PaymentGateways = fn(1096).PaymentGateways;
const jsx = fn(21).jsx;
[closure_7, tmp4, tmp5] = ContextUtilsDefault();
const ReactCompilerGating = fn(558);
const importDefaultResultResult = _slicedToArray(ContextUtilsDefault(), 3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/native/NativePaymentContext.tsx");

export const NativePaymentContextProvider = ReactCompilerGating.isReactCompilerEnabled() ? ((activeSubscription) => {
  const cResult = skuIDs(selectedPlanId[7]).c(17);
  ({ children, skuIDs } = activeSubscription);
  activeSubscription = activeSubscription.activeSubscription;
  let obj = skuIDs(selectedPlanId[7]);
  const nativeIAPPayments = storeFront(selectedPlanId[8]).useNativeIAPPayments();
  ({ nativePaymentsConnected, storeFront } = nativeIAPPayments);
  if (cResult[0] === skuIDs) {
    if (cResult[1] === storeFront) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    const tmp10 = storeFront(tmp2[10])();
    selectedPlanId = tmp10.selectedPlanId;
    const setSelectedPlanId = tmp10.setSelectedPlanId;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [SubscriptionPlanStore];
      cResult[4] = items;
      let tmp12 = items;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] !== selectedPlanId) {
      class E {
        constructor() {
          value = null;
          if (null != selectedPlanId) {
            tmp3 = closure_4;
            value = closure_4.get(tmp);
          }
          return value;
        }
      }
      const items1 = [selectedPlanId];
      cResult[5] = selectedPlanId;
      cResult[6] = E;
      cResult[7] = items1;
      let tmp15 = items1;
    } else {
      class E {
        constructor() {
          value = null;
          if (null != selectedPlanId) {
            tmp3 = closure_4;
            value = closure_4.get(tmp);
          }
          return value;
        }
      }
      tmp15 = cResult[7];
    }
    const stateFromStores = skuIDs(tmp2[11]).useStateFromStores(tmp12, E, tmp15);
    if (cResult[8] === activeSubscription) {
      class E {
        constructor() {
          value = null;
          if (null != selectedPlanId) {
            tmp3 = closure_4;
            value = closure_4.get(tmp);
          }
          return value;
        }
      }
    }
    const obj3 = { isReadyToPurchase: nativePaymentsConnected, setSelectedPlanId, selectedPlan: stateFromStores, storeFront, activeSubscription };
    cResult[8] = activeSubscription;
    cResult[9] = nativePaymentsConnected;
    cResult[10] = stateFromStores;
    cResult[11] = setSelectedPlanId;
    cResult[12] = storeFront;
    cResult[13] = obj3;
    const tmpResult = skuIDs(tmp2[11]);
  }
  const fn = function l() {
    let isFetchingForSKUsResult = null == storeFront;
    if (!isFetchingForSKUsResult) {
      isFetchingForSKUsResult = SubscriptionPlanStore.isFetchingForSKUs(skuIDs);
    }
    if (!isFetchingForSKUsResult) {
      const subscriptionPlansBySKUs = SubscriptionPlanActionCreators.fetchSubscriptionPlansBySKUs(skuIDs, storeFront.country, PaymentGateways.APPLE_ADVANCED_COMMERCE);
    }
  };
  const items2 = [storeFront, skuIDs];
  cResult[0] = skuIDs;
  cResult[1] = storeFront;
  cResult[2] = fn;
  cResult[3] = items2;
  tmp7 = items2;
  tmp6 = fn;
  const obj2 = storeFront(selectedPlanId[8]);
}) : ((skuIDs) => {
  skuIDs = skuIDs.skuIDs;
  let storeFront;
  let selectedPlanId;
  ({ children, activeSubscription } = skuIDs);
  const nativeIAPPayments = storeFront(selectedPlanId[8]).useNativeIAPPayments();
  storeFront = nativeIAPPayments.storeFront;
  const items = [storeFront, skuIDs];
  const effect = noop.useEffect(() => {
    let isFetchingForSKUsResult = null == storeFront;
    if (!isFetchingForSKUsResult) {
      isFetchingForSKUsResult = SubscriptionPlanStore.isFetchingForSKUs(skuIDs);
    }
    if (!isFetchingForSKUsResult) {
      const subscriptionPlansBySKUs = SubscriptionPlanActionCreators.fetchSubscriptionPlansBySKUs(skuIDs, storeFront.country, PaymentGateways.APPLE_ADVANCED_COMMERCE);
    }
  }, items);
  const tmp3 = storeFront(selectedPlanId[10])();
  selectedPlanId = tmp3.selectedPlanId;
  let obj = storeFront(selectedPlanId[8]);
  const items1 = [SubscriptionPlanStore];
  const items2 = [selectedPlanId];
  const obj3 = { value: null, children: null };
  const obj2 = skuIDs(selectedPlanId[11]);
  obj3.value = {
    isReadyToPurchase: nativeIAPPayments.nativePaymentsConnected,
    setSelectedPlanId: tmp3.setSelectedPlanId,
    selectedPlan: skuIDs(selectedPlanId[11]).useStateFromStores(items1, () => {
      value = null;
      if (null != selectedPlanId) {
        value = SubscriptionPlanStore.get(tmp);
      }
      return value;
    }, items2),
    storeFront,
    activeSubscription
  };
  obj3.children = children;
  return <redux.Provider value={null}>{null}</redux.Provider>;
});
export const useNativeIAPPaymentContext = tmp4;
export const useForwardedNativePaymentContext = tmp5;