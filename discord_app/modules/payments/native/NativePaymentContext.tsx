// === Module 11070: NativePaymentContext ===

// Module 11070 (NativePaymentContext)
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 7453 */;
import ContextUtilsDefault from "ContextUtils" /* 7624 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4385 */;

require = fn;
const PaymentGateways = fn(1085).PaymentGateways;
const jsx = fn(21).jsx;
[closure_7, tmp4, tmp5] = ContextUtilsDefault();
const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/native/NativePaymentContext.tsx");

export const NativePaymentContextProvider = function NativePaymentContextProvider(skuIDs) {
  skuIDs = skuIDs.skuIDs;
  let storeFront;
  let selectedPlanId;
  ({ children, activeSubscription } = skuIDs);
  const nativeIAPPayments = storeFront(selectedPlanId[6]).useNativeIAPPayments();
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
  const tmp3 = storeFront(selectedPlanId[8])();
  selectedPlanId = tmp3.selectedPlanId;
  let obj = storeFront(selectedPlanId[6]);
  const items1 = [SubscriptionPlanStore];
  const items2 = [selectedPlanId];
  const obj3 = { value: null, children: null };
  const obj2 = skuIDs(selectedPlanId[9]);
  obj3.value = {
    isReadyToPurchase: nativeIAPPayments.nativePaymentsConnected,
    setSelectedPlanId: tmp3.setSelectedPlanId,
    selectedPlan: skuIDs(selectedPlanId[9]).useStateFromStores(items1, () => {
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
};
export const useNativeIAPPaymentContext = tmp4;
export const useForwardedNativePaymentContext = tmp5;