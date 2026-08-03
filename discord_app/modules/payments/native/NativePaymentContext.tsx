import noop from "noop";
import addSubscriptionPlan from "addSubscriptionPlan";
import { PaymentGateways } from "sum";
import { jsx } from "jsxProd";
import importDefaultResult from "_slicedToArray";

let error;
let tmp4;
let tmp5;
const require = arg1;
[error, tmp4, tmp5] = require("_slicedToArray")(require("createDefinedContext")(), 3);
const importDefaultResultResult = require("_slicedToArray")(require("createDefinedContext")(), 3);
const result = require("addSubscriptionPlan").fileFinishedImporting("modules/payments/native/NativePaymentContext.tsx");

export const NativePaymentContextProvider = function NativePaymentContextProvider(skuIDs) {
  let activeSubscription;
  let children;
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
      isFetchingForSKUsResult = outer1_4.isFetchingForSKUs(skuIDs);
    }
    if (!isFetchingForSKUsResult) {
      const subscriptionPlansBySKUs = skuIDs(selectedPlanId[7]).fetchSubscriptionPlansBySKUs(skuIDs, storeFront.country, outer1_5.APPLE_ADVANCED_COMMERCE);
      const obj = skuIDs(selectedPlanId[7]);
    }
  }, items);
  const tmp3 = storeFront(selectedPlanId[8])();
  selectedPlanId = tmp3.selectedPlanId;
  const items1 = [addSubscriptionPlan];
  const items2 = [selectedPlanId];
  obj = { value: null, children: null };
  obj = {
    isReadyToPurchase: nativeIAPPayments.nativePaymentsConnected,
    setSelectedPlanId: tmp3.setSelectedPlanId,
    selectedPlan: skuIDs(selectedPlanId[9]).useStateFromStores(items1, () => {
      let value = null;
      if (null != selectedPlanId) {
        value = outer1_4.get(tmp);
      }
      return value;
    }, items2),
    storeFront,
    activeSubscription
  };
  obj[0] = obj;
  obj[1] = children;
  return <redux.Provider isReadyToPurchase={nativeIAPPayments.nativePaymentsConnected} setSelectedPlanId={tmp3.setSelectedPlanId} selectedPlan={skuIDs(selectedPlanId[9]).useStateFromStores(items1, () => {
    let value = null;
    if (null != selectedPlanId) {
      value = outer1_4.get(tmp);
    }
    return value;
  }, items2)} storeFront={storeFront} activeSubscription={activeSubscription} />;
};
export const useNativeIAPPaymentContext = tmp4;
export const useForwardedNativePaymentContext = tmp5;