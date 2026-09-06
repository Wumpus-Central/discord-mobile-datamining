// discord_app/modules/payments/native/NativePaymentContext.tsx
import SubscriptionPlanActionCreators from "../../../actions/SubscriptionPlanActionCreators.tsx";
import ContextUtilsDefault from "../../../utils/ContextUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SubscriptionPlanStore from "../../../stores/billing/SubscriptionPlanStore.tsx";

require = fn;
const PaymentGateways = fn(1085).PaymentGateways;
const jsx = fn(21).jsx;
[closure_7, tmp4, tmp5] = _slicedToArray(ContextUtilsDefault(), 3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/native/NativePaymentContext.tsx");

export const NativePaymentContextProvider = function NativePaymentContextProvider(skuIDs) {
  skuIDs = skuIDs.skuIDs;
  let storeFront;
  let selectedPlanId;
  ({ children, activeSubscription } = skuIDs);
  let obj = storeFront(selectedPlanId[6]);
  const nativeIAPPayments = obj.useNativeIAPPayments();
  storeFront = nativeIAPPayments.storeFront;
  const items = [storeFront, skuIDs];
  const effect = noop.useEffect(() => {
    let isFetchingForSKUsResult = null == storeFront;
    if (!isFetchingForSKUsResult) {
      isFetchingForSKUsResult = SubscriptionPlanStore.isFetchingForSKUs(skuIDs);
    }
    if (!isFetchingForSKUsResult) {
      const subscriptionPlansBySKUs = SubscriptionPlanActionCreators.fetchSubscriptionPlansBySKUs(
        skuIDs,
        storeFront.country,
        PaymentGateways.APPLE_ADVANCED_COMMERCE,
      );
    }
  }, items);
  const tmp3 = storeFront(selectedPlanId[8])();
  selectedPlanId = tmp3.selectedPlanId;
  const items1 = [SubscriptionPlanStore];
  const items2 = [selectedPlanId];
  obj = { value: null, children: null };
  obj = {
    isReadyToPurchase: nativeIAPPayments.nativePaymentsConnected,
    setSelectedPlanId: tmp3.setSelectedPlanId,
    selectedPlan: skuIDs(selectedPlanId[9]).useStateFromStores(
      items1,
      () => {
        value = null;
        if (null != selectedPlanId) {
          value = SubscriptionPlanStore.get(tmp);
        }
        return value;
      },
      items2,
    ),
    storeFront,
    activeSubscription,
  };
  obj.value = obj;
  obj.children = children;
  return (
    <redux.Provider
      isReadyToPurchase={nativeIAPPayments.nativePaymentsConnected}
      setSelectedPlanId={tmp3.setSelectedPlanId}
      selectedPlan={skuIDs(selectedPlanId[9]).useStateFromStores(
        items1,
        () => {
          value = null;
          if (null != selectedPlanId) {
            value = SubscriptionPlanStore.get(tmp);
          }
          return value;
        },
        items2,
      )}
      storeFront={storeFront}
      activeSubscription={activeSubscription}
    />
  );
};
export const useNativeIAPPaymentContext = tmp4;
export const useForwardedNativePaymentContext = tmp5;
