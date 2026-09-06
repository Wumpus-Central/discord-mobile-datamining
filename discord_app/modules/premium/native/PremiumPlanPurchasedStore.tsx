// === Module 7421: PremiumPlanPurchasedStore ===

// Module 7421 (PremiumPlanPurchasedStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7422 */;
import ActionSheetStore from "ActionSheetStore" /* 4251 */;

require = fn;
const PremiumConstants = fn(1373);
({ PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: closure_4, PremiumTypes: hasOwnProperty } = PremiumConstants);
let module_560 = fn(560);
module_560 = module_560.create(() => ({ productId: "", initiatedPurchaseFromNewFlow: false, isPaymentSuccess: false, mobileWebRedirectCheckoutStatus: null }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanPurchasedStore.tsx");

export const usePremiumPlanPurchasedStore = module_560;
export const setInitiatedPurchaseFromNewFlow = function setInitiatedPurchaseFromNewFlow(arg0) {
  ({ productId: require, onPaymentSuccess: importDefault, onPaymentDismiss: dependencyMap } = arg0);
  ReactBatchUpdates.batchUpdates(() => {
    module_560.setState({ productId, initiatedPurchaseFromNewFlow: true, onPaymentSuccess, onPaymentDismiss });
  });
};
export const setPaymentSuccess = function setPaymentSuccess() {
  if (module_560.getState().initiatedPurchaseFromNewFlow) {
    const state = module_560.getState();
    const onPaymentSuccess = state.onPaymentSuccess;
    ReactBatchUpdates.batchUpdates(() => state.setState({ isPaymentSuccess: true }));
    if (onPaymentSuccess != null) {
      onPaymentSuccess(state.productId);
    }
  }
};
export const setMobileWebRedirectCheckoutStatus = function setMobileWebRedirectCheckoutStatus(mobileWebRedirectCheckoutStatus) {
  _require = mobileWebRedirectCheckoutStatus;
  require("ReactBatchUpdates").batchUpdates(() => module_560.setState({ mobileWebRedirectCheckoutStatus }));
};
export const handleMobileWebCheckoutStatus = function handleMobileWebCheckoutStatus(mobileWebRedirectCheckoutStatus) {
  _require = mobileWebRedirectCheckoutStatus;
  if ("succeeded" === mobileWebRedirectCheckoutStatus) {
    const state = module_560.getState();
    const onPaymentSuccess = state.onPaymentSuccess;
    if ("dismissed" !== state.mobileWebRedirectCheckoutStatus) {
      if (ActionSheetStore.getKey() !== closure_4) {
        const obj = { premiumType: TIER_2.TIER_2, analyticsLocations: null, analyticsLocation: null };
        const items = [AnalyticsLocationDefault.DEEPLINK];
        obj.analyticsLocations = items;
        obj.analyticsLocation = {};
        openPremiumPlanSelectionActionSheetDefault(obj);
      }
      require("ReactBatchUpdates").batchUpdates(() => module_560.setState({ isPaymentSuccess: true, mobileWebRedirectCheckoutStatus }));
      if (null != onPaymentSuccess) {
        onPaymentSuccess(tmp13);
      }
      const obj2 = require("ReactBatchUpdates");
    }
  }
};
export const showOldPaymentFlowSuccess = function showOldPaymentFlowSuccess(fn) {
  if (module_560.getState().initiatedPurchaseFromNewFlow) {
    ReactBatchUpdates.batchUpdates(() => state.setState({ isPaymentSuccess: true }));
  } else {
    fn();
  }
};
export const reset = function reset() {
  const state = module_560.getState();
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
    module_560.setState({ productId: "", initiatedPurchaseFromNewFlow: false, isPaymentSuccess: false, mobileWebRedirectCheckoutStatus: str, onPaymentSuccess: "accessible", onPaymentDismiss: "diversity" });
  });
};