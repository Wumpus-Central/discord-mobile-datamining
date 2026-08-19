// === Module 7392: usePremiumPlanPurchasedStore ===

// Module 7392 (usePremiumPlanPurchasedStore)
import batchUpdates from "batchUpdates" /* 705 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7393 */;
import setContent from "setContent" /* 4086 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import keys from "keys" /* 644 */;

require = fn;
({ PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: c4, PremiumTypes: c5 } = GuildFeatures);
keys = keys.create(() => ({ productId: "", initiatedPurchaseFromNewFlow: false, isPaymentSuccess: false, mobileWebRedirectCheckoutStatus: null }));
const result = require("obj132").fileFinishedImporting("modules/premium/native/PremiumPlanPurchasedStore.tsx");

export const usePremiumPlanPurchasedStore = keys;
export const setInitiatedPurchaseFromNewFlow = function setInitiatedPurchaseFromNewFlow(arg0) {
  ({ productId: require, onPaymentSuccess: importDefault, onPaymentDismiss: dependencyMap } = arg0);
  batchUpdates.batchUpdates(() => {
    keys.setState({ productId: closure_0, initiatedPurchaseFromNewFlow: true, onPaymentSuccess: closure_1, onPaymentDismiss: closure_2 });
  });
};
export const setPaymentSuccess = function setPaymentSuccess() {
  if (keys.getState().initiatedPurchaseFromNewFlow) {
    const state = keys.getState();
    const onPaymentSuccess = state.onPaymentSuccess;
    batchUpdates.batchUpdates(() => state.setState({ isPaymentSuccess: true }));
    if (onPaymentSuccess != null) {
      onPaymentSuccess(state.productId);
    }
  }
};
export const setMobileWebRedirectCheckoutStatus = function setMobileWebRedirectCheckoutStatus(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => keys.setState({ mobileWebRedirectCheckoutStatus: closure_0 }));
};
export const handleMobileWebCheckoutStatus = function handleMobileWebCheckoutStatus(arg0) {
  const _require = arg0;
  if ("succeeded" === arg0) {
    const state = keys.getState();
    const onPaymentSuccess = state.onPaymentSuccess;
    if ("dismissed" !== state.mobileWebRedirectCheckoutStatus) {
      if (key.getKey() !== closure_4) {
        const obj = { premiumType: null, analyticsLocations: null, analyticsLocation: null };
        obj[0] = TIER_2.TIER_2;
        const items = [QUICK_SWITCHERDefault.DEEPLINK];
        obj[1] = items;
        obj[2] = {};
        openPremiumPlanSelectionActionSheetDefault(obj);
      }
      _require(705).batchUpdates(() => keys.setState({ isPaymentSuccess: true, mobileWebRedirectCheckoutStatus: closure_0 }));
      if (null != onPaymentSuccess) {
        onPaymentSuccess(tmp13);
      }
      const obj2 = _require(705);
    }
  }
};
export const showOldPaymentFlowSuccess = function showOldPaymentFlowSuccess(fn) {
  if (keys.getState().initiatedPurchaseFromNewFlow) {
    batchUpdates.batchUpdates(() => state.setState({ isPaymentSuccess: true }));
  } else {
    fn();
  }
};
export const reset = function reset() {
  const state = keys.getState();
  ({ onPaymentDismiss, mobileWebRedirectCheckoutStatus: require } = state);
  if (onPaymentDismiss != null) {
    const obj = { productId: null, isSuccess: null };
    obj[0] = tmp2;
    obj[1] = tmp3;
    onPaymentDismiss(obj);
  }
  batchUpdates.batchUpdates(() => {
    let str = null;
    if (null != closure_0) {
      str = null;
      if ("in_mobile_web" !== tmp2) {
        str = "dismissed";
      }
    }
    keys.setState({ productId: "", initiatedPurchaseFromNewFlow: false, isPaymentSuccess: false, mobileWebRedirectCheckoutStatus: str, onPaymentSuccess: "r", onPaymentDismiss: "call" });
  });
};