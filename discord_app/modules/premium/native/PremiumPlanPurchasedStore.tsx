// === Module 7751: PremiumPlanPurchasedStore ===

// Module 7751 (PremiumPlanPurchasedStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1248 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7515 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7752 */;
import ActionSheetStore from "ActionSheetStore" /* 4516 */;

const require = globalThis.__r;

require = fn;
const PremiumConstants = fn(1374);
({ PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: closure_4, PremiumTypes: hasOwnProperty } = PremiumConstants);
const module_560 = fn(560);
const obj3 = module_560.create(() => ({ productId: "", initiatedPurchaseFromNewFlow: false, isPaymentSuccess: false, mobileWebRedirectCheckoutStatus: null }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanPurchasedStore.tsx");

export const usePremiumPlanPurchasedStore = obj3;
export const setInitiatedPurchaseFromNewFlow = function setInitiatedPurchaseFromNewFlow(productId) {
  productId = productId.productId;
  ({ onPaymentStart, onPaymentSuccess: importDefault, onPaymentDismiss: dependencyMap } = productId);
  productId(1248).batchUpdates(() => {
    obj3.setState({ productId, initiatedPurchaseFromNewFlow: true, onPaymentSuccess, onPaymentDismiss });
  });
  if (onPaymentStart != null) {
    onPaymentStart(productId);
  }
};
export const setPaymentSuccess = function setPaymentSuccess() {
  if (obj3.getState().initiatedPurchaseFromNewFlow) {
    const state = obj3.getState();
    const onPaymentSuccess = state.onPaymentSuccess;
    ReactBatchUpdates.batchUpdates(() => state.setState({ isPaymentSuccess: true }));
    if (onPaymentSuccess != null) {
      onPaymentSuccess(state.productId);
    }
  }
};
export const setMobileWebRedirectCheckoutStatus = function setMobileWebRedirectCheckoutStatus(mobileWebRedirectCheckoutStatus) {
  _require = mobileWebRedirectCheckoutStatus;
  require("ReactBatchUpdates").batchUpdates(() => obj3.setState({ mobileWebRedirectCheckoutStatus }));
};
export const handleMobileWebCheckoutStatus = function handleMobileWebCheckoutStatus(mobileWebRedirectCheckoutStatus) {
  _require = mobileWebRedirectCheckoutStatus;
  if ("succeeded" === mobileWebRedirectCheckoutStatus) {
    const state = obj3.getState();
    const onPaymentSuccess = state.onPaymentSuccess;
    if ("dismissed" !== state.mobileWebRedirectCheckoutStatus) {
      if (ActionSheetStore.getKey() !== closure_4) {
        const obj = { premiumType: TIER_2.TIER_2, analyticsLocations: null, analyticsLocation: null };
        const items = [AnalyticsLocationDefault.DEEPLINK];
        obj.analyticsLocations = items;
        obj.analyticsLocation = {};
        openPremiumPlanSelectionActionSheetDefault(obj);
      }
      require("ReactBatchUpdates").batchUpdates(() => obj3.setState({ isPaymentSuccess: true, mobileWebRedirectCheckoutStatus }));
      if (null != onPaymentSuccess) {
        onPaymentSuccess(tmp13);
      }
      const obj2 = require("ReactBatchUpdates");
    }
  }
};
export const showOldPaymentFlowSuccess = function showOldPaymentFlowSuccess(fn) {
  if (obj3.getState().initiatedPurchaseFromNewFlow) {
    ReactBatchUpdates.batchUpdates(() => state.setState({ isPaymentSuccess: true }));
  } else {
    fn();
  }
};
export const reset = function reset() {
  const state = obj3.getState();
  ({ onPaymentDismiss, mobileWebRedirectCheckoutStatus: require } = state);
  if (onPaymentDismiss != null) {
    const obj = { productId: tmp2, isSuccess: tmp3 };
    onPaymentDismiss(obj);
  }
  ReactBatchUpdates.batchUpdates(() => {
    let str = null;
    if (null != _require) {
      str = null;
      if ("in_mobile_web" !== tmp2) {
        str = "dismissed";
      }
    }
    obj3.setState({ productId: "", initiatedPurchaseFromNewFlow: false, isPaymentSuccess: false, mobileWebRedirectCheckoutStatus: str, onPaymentSuccess: "r", onPaymentDismiss: "disabled" });
  });
};