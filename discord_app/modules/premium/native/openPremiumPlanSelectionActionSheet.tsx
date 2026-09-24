// discord_app/modules/premium/native/openPremiumPlanSelectionActionSheet.tsx
import PremiumConstants from "../PremiumConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import premiumOrbsDeliveredModal from "../premium_marketing/native/premiumOrbsDeliveredModal.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let closure_3 = PremiumConstants.PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY;
let result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  _require = arg0;
  if (null == arg1) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }
  const obj2 = ActionSheetActionCreatorsDefault;
  const obj3 = {};
  const merged = Object.assign(arg0);
  obj3.onPaymentStart = function onPaymentStart(productId) {
    const onPaymentStart = closure_0.onPaymentStart;
    if (onPaymentStart != null) {
      onPaymentStart(productId);
    }
    const result = premiumOrbsDeliveredModal.anchorOrbsPurchaseStart();
  };
  obj3.onPaymentDismiss = function onPaymentDismiss(isSuccess) {
    const onPaymentDismiss = closure_0.onPaymentDismiss;
    if (onPaymentDismiss != null) {
      onPaymentDismiss(isSuccess);
    }
    if (isSuccess.isSuccess) {
      const result = premiumOrbsDeliveredModal.openOrbsModalIfDelivered();
    }
  };
  obj2.openLazy(require("asyncRequireImpl")(7753, dependencyMap.paths), closure_3, obj3, arg1);
  const tmp4 = require("asyncRequireImpl")(7753, dependencyMap.paths);
}
