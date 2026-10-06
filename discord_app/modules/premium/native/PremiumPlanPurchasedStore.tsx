// === Module 6940: PremiumPlanPurchasedStore ===

// Module 6940 (PremiumPlanPurchasedStore)
import react_native from "react-native" /* 1259 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 6941 */;
import ActionSheetStore from "ActionSheetStore" /* 4567 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
({ PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: closure_4, PremiumTypes: hasOwnProperty } = PremiumConstants);
const usePremiumPlanPurchasedStore = module_570.create(() => ({ productId: "", initiatedPurchaseFromNewFlow: false, isPaymentSuccess: false, mobileWebRedirectCheckoutStatus: null }));
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanPurchasedStore.tsx");

export { usePremiumPlanPurchasedStore };
export const setInitiatedPurchaseFromNewFlow = function setInitiatedPurchaseFromNewFlow(productId) {
  let onPaymentDismiss;
  let onPaymentStart;
  let onPaymentSuccess;
  productId = productId.productId;
  ({ onPaymentStart, onPaymentSuccess: importDefault, onPaymentDismiss: dependencyMap } = productId);
  let obj = productId(1259);
  obj.batchUpdates(() => {
    const obj = { productId, initiatedPurchaseFromNewFlow: true, onPaymentSuccess: importDefault, onPaymentDismiss: dependencyMap };
    obj.setState(obj);
  });
  if (onPaymentStart != null) {
    onPaymentStart(productId);
  }
};
export const setPaymentSuccess = function setPaymentSuccess() {
  if (obj.getState().initiatedPurchaseFromNewFlow) {
    const state = obj.getState();
    const onPaymentSuccess = state.onPaymentSuccess;
    const productId = state.productId;
    const obj2 = react_native;
    obj2.batchUpdates(() => state.setState({ isPaymentSuccess: true }));
    if (onPaymentSuccess != null) {
      onPaymentSuccess(productId);
    }
  }
};
export const setMobileWebRedirectCheckoutStatus = function setMobileWebRedirectCheckoutStatus(mobileWebRedirectCheckoutStatus) {
  _require = mobileWebRedirectCheckoutStatus;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { mobileWebRedirectCheckoutStatus };
    return obj.setState(obj);
  });
};
export const handleMobileWebCheckoutStatus = function handleMobileWebCheckoutStatus(mobileWebRedirectCheckoutStatus) {
  let items;
  let obj;
  _require = mobileWebRedirectCheckoutStatus;
  if ("succeeded" === mobileWebRedirectCheckoutStatus) {
    const state = obj.getState();
    const onPaymentSuccess = state.onPaymentSuccess;
    if ("dismissed" !== state.mobileWebRedirectCheckoutStatus) {
      if (ActionSheetStore.getKey() !== closure_4) {
        obj = { premiumType: TIER_2.TIER_2, analyticsLocations: items, analyticsLocation: {} };
        items = [];
        const tmp3 = openPremiumPlanSelectionActionSheetDefault;
        items[0] = AnalyticsLocationDefault.DEEPLINK;
        tmp3(obj);
      }
      const obj2 = require("react-native");
      obj2.batchUpdates(() => {
        const obj = { isPaymentSuccess: true, mobileWebRedirectCheckoutStatus };
        return obj.setState(obj);
      });
      if (null != onPaymentSuccess) {
        onPaymentSuccess(tmp13);
      }
    }
  }
};
export const showOldPaymentFlowSuccess = function showOldPaymentFlowSuccess(fn) {
  let obj;
  let state;
  if (obj.getState().initiatedPurchaseFromNewFlow) {
    obj = react_native;
    obj.batchUpdates(() => state.setState({ isPaymentSuccess: true }));
  } else {
    fn();
  }
};
export const reset = function reset() {
  let obj;
  let onPaymentDismiss;
  let require;
  const state = obj.getState();
  ({ onPaymentDismiss, mobileWebRedirectCheckoutStatus: require } = state);
  if (onPaymentDismiss != null) {
    obj = { productId: tmp2, isSuccess: tmp3 };
    onPaymentDismiss(obj);
  }
  const obj2 = react_native;
  obj2.batchUpdates(() => {
    let str = null;
    const setState = obj.setState;
    if (null != _require) {
      str = null;
      if ("in_mobile_web" !== tmp2) {
        str = "dismissed";
      }
    }
    setState({ productId: "", initiatedPurchaseFromNewFlow: false, isPaymentSuccess: false, mobileWebRedirectCheckoutStatus: str, onPaymentSuccess: "r", onPaymentDismiss: "emoji" });
  });
};