// discord_app/modules/premium/native/openPremiumPlanSelectionActionSheet.tsx
import PremiumConstants from "../PremiumConstants.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3 = PremiumConstants.PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(7423, dependencyMap.paths), closure_3, arg0, arg1);
}
