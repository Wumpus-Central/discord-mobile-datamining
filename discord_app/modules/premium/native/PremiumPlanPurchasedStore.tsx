// discord_app/modules/premium/native/PremiumPlanPurchasedStore.tsx
import setContent from "setContent";
import GuildFeatures from "GuildFeatures";
import keys from "keys";

let c4;
let c5;
const require = arg1;
({ PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: c4, PremiumTypes: c5 } = GuildFeatures);
keys = keys.create(() => ({ productId: "", initiatedPurchaseFromNewFlow: false, isPaymentSuccess: false, mobileWebRedirectCheckoutStatus: null }));
const result = require("keys").fileFinishedImporting("modules/premium/native/PremiumPlanPurchasedStore.tsx");

export const usePremiumPlanPurchasedStore = keys;
export const setInitiatedPurchaseFromNewFlow = function setInitiatedPurchaseFromNewFlow(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ productId: require, onPaymentSuccess: importDefault, onPaymentDismiss: dependencyMap } = arg0);
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx") /* batchUpdates */.batchUpdates(() => {
    outer1_6.setState({ productId: closure_0, initiatedPurchaseFromNewFlow: true, onPaymentSuccess: closure_1, onPaymentDismiss: closure_2 });
  });
};
export const setPaymentSuccess = function setPaymentSuccess() {
  if (keys.getState().initiatedPurchaseFromNewFlow) {
    const state = keys.getState();
    const onPaymentSuccess = state.onPaymentSuccess;
    require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx") /* batchUpdates */.batchUpdates(() => state.setState({ isPaymentSuccess: true }));
    if (onPaymentSuccess != null) {
      onPaymentSuccess(state.productId);
    }
    const obj2 = require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx") /* batchUpdates */;
  }
};
export const setMobileWebRedirectCheckoutStatus = function setMobileWebRedirectCheckoutStatus(arg0) {
  const _require = arg0;
  _require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => outer1_6.setState({ mobileWebRedirectCheckoutStatus: closure_0 }));
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
        const items = [require("../../app_analytics/AnalyticsLocation.tsx").DEEPLINK];
        obj[1] = items;
        obj[2] = {};
        require("openPremiumPlanSelectionActionSheet.tsx")(obj);
        const tmp3 = require("openPremiumPlanSelectionActionSheet.tsx");
      }
      _require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => outer1_6.setState({ isPaymentSuccess: true, mobileWebRedirectCheckoutStatus: closure_0 }));
      if (null != onPaymentSuccess) {
        onPaymentSuccess(tmp13);
      }
      const obj2 = _require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx");
    }
  }
};
export const showOldPaymentFlowSuccess = function showOldPaymentFlowSuccess(arg0) {
  if (keys.getState().initiatedPurchaseFromNewFlow) {
    require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx") /* batchUpdates */.batchUpdates(() => state.setState({ isPaymentSuccess: true }));
    const obj = require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx") /* batchUpdates */;
  } else {
    arg0();
  }
};
export const reset = function reset() {
  let onPaymentDismiss;
  let require;
  const state = keys.getState();
  ({ onPaymentDismiss, mobileWebRedirectCheckoutStatus: require } = state);
  if (onPaymentDismiss != null) {
    const obj = { productId: null, isSuccess: null };
    obj[0] = tmp2;
    obj[1] = tmp3;
    onPaymentDismiss(obj);
  }
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx") /* batchUpdates */.batchUpdates(() => {
    let str = null;
    if (null != closure_0) {
      str = null;
      if ("in_mobile_web" !== tmp2) {
        str = "dismissed";
      }
    }
    outer1_6.setState({ productId: "", initiatedPurchaseFromNewFlow: false, isPaymentSuccess: false, mobileWebRedirectCheckoutStatus: str, onPaymentSuccess: "r", onPaymentDismiss: "sa" });
  });
};