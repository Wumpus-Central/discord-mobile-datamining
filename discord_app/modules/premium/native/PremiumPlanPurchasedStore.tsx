// discord_app/modules/premium/native/PremiumPlanPurchasedStore.tsx
import batchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import QUICK_SWITCHERDefault from "../../app_analytics/AnalyticsLocation.tsx";
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet.tsx";
import closure_3 from "../../action_sheet/native/ActionSheetStore.tsx";
import GuildFeatures from "../PremiumConstants.tsx";
import keys from "../../../../_runtime/00560_keys.js";
import { batchUpdates } from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

require = arg1;
({ PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: c4, PremiumTypes: c5 } = GuildFeatures);
keys = keys.create(() => ({
  productId: "",
  initiatedPurchaseFromNewFlow: false,
  isPaymentSuccess: false,
  mobileWebRedirectCheckoutStatus: null,
}));
const result = require("set").fileFinishedImporting("modules/premium/native/PremiumPlanPurchasedStore.tsx");

export const usePremiumPlanPurchasedStore = keys;
export const setInitiatedPurchaseFromNewFlow = function setInitiatedPurchaseFromNewFlow(arg0) {
  ({ productId: require, onPaymentSuccess: importDefault, onPaymentDismiss: dependencyMap } = arg0);
  batchUpdates.batchUpdates(() => {
    closure_1_6.setState({
      productId: closure_0,
      initiatedPurchaseFromNewFlow: true,
      onPaymentSuccess: closure_1,
      onPaymentDismiss: closure_2,
    });
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
    const obj2 = batchUpdates;
  }
};
export const setMobileWebRedirectCheckoutStatus = function setMobileWebRedirectCheckoutStatus(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() =>
    closure_1_6.setState({ mobileWebRedirectCheckoutStatus: closure_0 }),
  );
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
        const tmp3 = openPremiumPlanSelectionActionSheetDefault;
      }
      require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() =>
        closure_1_6.setState({ isPaymentSuccess: true, mobileWebRedirectCheckoutStatus: closure_0 }),
      );
      if (null != onPaymentSuccess) {
        onPaymentSuccess(tmp13);
      }
      const obj2 = batchUpdates;
    }
  }
};
export const showOldPaymentFlowSuccess = function showOldPaymentFlowSuccess(arg0) {
  if (keys.getState().initiatedPurchaseFromNewFlow) {
    batchUpdates.batchUpdates(() => state.setState({ isPaymentSuccess: true }));
    const obj = batchUpdates;
  } else {
    arg0();
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
    closure_1_6.setState({
      productId: "",
      initiatedPurchaseFromNewFlow: false,
      isPaymentSuccess: false,
      mobileWebRedirectCheckoutStatus: str,
      onPaymentSuccess: "accessible",
      onPaymentDismiss: "diversity",
    });
  });
};
