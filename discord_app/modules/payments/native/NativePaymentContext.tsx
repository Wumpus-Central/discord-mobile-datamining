// === Module 10669: NativePaymentContext ===

// Module 10669 (NativePaymentContext)
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 7425 */;
import ContextUtilsDefault from "ContextUtils" /* 7606 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 2052 */;

require = fn;
const PaymentGateways = fn(1083).PaymentGateways;
const jsx = fn(21).jsx;
[closure_7, tmp4, tmp5] = ContextUtilsDefault();
const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/native/NativePaymentContext.tsx");

export function NativePaymentContextProvider(children) {
  const skuIDs = children.skuIDs;
  const activeSubscription = children.activeSubscription;
  let nativePaymentsConnected;
  const nativeIAPPayments = activeSubscription(nativePaymentsConnected[6]).useNativeIAPPayments();
  nativePaymentsConnected = nativeIAPPayments.nativePaymentsConnected;
  const storeFront = nativeIAPPayments.storeFront;
  const items = [storeFront, skuIDs];
  const effect = storeFront.useEffect(() => {
    let isFetchingForSKUsResult = null == storeFront;
    if (!isFetchingForSKUsResult) {
      isFetchingForSKUsResult = SubscriptionPlanStore.isFetchingForSKUs(skuIDs);
    }
    if (!isFetchingForSKUsResult) {
      const subscriptionPlansBySKUs = SubscriptionPlanActionCreators.fetchSubscriptionPlansBySKUs(skuIDs, storeFront.country, PaymentGateways.APPLE_ADVANCED_COMMERCE);
    }
  }, items);
  const tmp3 = activeSubscription(nativePaymentsConnected[8])();
  const selectedPlanId = tmp3.selectedPlanId;
  const setSelectedPlanId = tmp3.setSelectedPlanId;
  let obj = activeSubscription(nativePaymentsConnected[6]);
  const items1 = [selectedPlanId];
  const items2 = [selectedPlanId];
  const stateFromStores = skuIDs(nativePaymentsConnected[9]).useStateFromStores(items1, () => {
    value = null;
    if (null != selectedPlanId) {
      value = SubscriptionPlanStore.get(tmp);
    }
    return value;
  }, items2);
  const items3 = [nativePaymentsConnected, setSelectedPlanId, stateFromStores, storeFront, activeSubscription];
  const obj2 = skuIDs(nativePaymentsConnected[9]);
  return stateFromStores(redux.Provider, { value: storeFront.useMemo(() => ({ isReadyToPurchase: nativePaymentsConnected, setSelectedPlanId, selectedPlan: stateFromStores, storeFront, activeSubscription }), items3), children: children.children });
}
export const useNativeIAPPaymentContext = tmp4;
export const useForwardedNativePaymentContext = tmp5;