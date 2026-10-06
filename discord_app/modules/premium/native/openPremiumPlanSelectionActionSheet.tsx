// discord_app/modules/premium/native/openPremiumPlanSelectionActionSheet.tsx
import PremiumConstants from "../PremiumConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import premiumOrbsDeliveredModal from "../premium_marketing/native/premiumOrbsDeliveredModal.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let closure_3 = PremiumConstants.PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY;
let result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  let closure_0;
  _require = arg0;
  if (null == arg1) {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj2 = {
    onPaymentStart(productId) {
      const onPaymentStart = closure_0.onPaymentStart;
      if (onPaymentStart != null) {
        onPaymentStart(productId);
      }
      const obj = premiumOrbsDeliveredModal;
      const result = obj.anchorOrbsPurchaseStart();
    },
    onPaymentDismiss(isSuccess) {
      const onPaymentDismiss = closure_0.onPaymentDismiss;
      if (onPaymentDismiss != null) {
        onPaymentDismiss(isSuccess);
      }
      if (isSuccess.isSuccess) {
        const obj = premiumOrbsDeliveredModal;
        const result = obj.openOrbsModalIfDelivered();
      }
    },
  };
  const tmp5 = require("asyncRequire")(6942, dependencyMap.paths);
  const merged = Object.assign(arg0);
  openLazy(tmp5, closure_3, obj2, arg1);
}
