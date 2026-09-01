// discord_app/modules/payments/native/NativePaymentContext.tsx
import createDefinedContextDefault from "../../../utils/ContextUtils.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../../stores/billing/SubscriptionPlanStore.tsx";
import { PaymentGateways } from "../../../../discord_common/js/shared/Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import importDefaultResult from "../../../../_runtime/metro/00032__slicedToArray.js";

const require = arg1;
[error, tmp4, tmp5] = importDefaultResult(createDefinedContextDefault(), 3);
const importDefaultResultResult = importDefaultResult(createDefinedContextDefault(), 3);
const result = require("set").fileFinishedImporting("modules/payments/native/NativePaymentContext.tsx");

export const NativePaymentContextProvider = function NativePaymentContextProvider(skuIDs) {
  skuIDs = skuIDs.skuIDs;
  let storeFront;
  let selectedPlanId;
  ({ children, activeSubscription } = skuIDs);
  let obj = storeFront(selectedPlanId[6]);
  const nativeIAPPayments = obj.useNativeIAPPayments();
  storeFront = nativeIAPPayments.storeFront;
  const items = [storeFront, skuIDs];
  const effect = React.useEffect(() => {
    let isFetchingForSKUsResult = null == storeFront;
    if (!isFetchingForSKUsResult) {
      isFetchingForSKUsResult = closure_1_4.isFetchingForSKUs(skuIDs);
    }
    if (!isFetchingForSKUsResult) {
      const subscriptionPlansBySKUs = skuIDs(selectedPlanId[7]).fetchSubscriptionPlansBySKUs(
        skuIDs,
        storeFront.country,
        closure_1_5.APPLE_ADVANCED_COMMERCE,
      );
      const obj = skuIDs(selectedPlanId[7]);
    }
  }, items);
  const tmp3 = storeFront(selectedPlanId[8])();
  selectedPlanId = tmp3.selectedPlanId;
  const items1 = [closure_4];
  const items2 = [selectedPlanId];
  obj = { value: null, children: null };
  obj = {
    isReadyToPurchase: nativeIAPPayments.nativePaymentsConnected,
    setSelectedPlanId: tmp3.setSelectedPlanId,
    selectedPlan: skuIDs(selectedPlanId[9]).useStateFromStores(
      items1,
      () => {
        let value = null;
        if (null != selectedPlanId) {
          value = closure_1_4.get(tmp);
        }
        return value;
      },
      items2,
    ),
    storeFront,
    activeSubscription,
  };
  obj[0] = obj;
  obj[1] = children;
  return (
    <redux.Provider
      isReadyToPurchase={nativeIAPPayments.nativePaymentsConnected}
      setSelectedPlanId={tmp3.setSelectedPlanId}
      selectedPlan={skuIDs(selectedPlanId[9]).useStateFromStores(
        items1,
        () => {
          let value = null;
          if (null != selectedPlanId) {
            value = closure_1_4.get(tmp);
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
