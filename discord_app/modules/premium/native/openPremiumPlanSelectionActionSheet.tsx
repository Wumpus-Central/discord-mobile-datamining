// discord_app/modules/premium/native/openPremiumPlanSelectionActionSheet.tsx
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("Header").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    require("../../action_sheet/native/ActionSheetActionCreators.tsx").hideActionSheet();
    const obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  }
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(6796, dependencyMap.paths), closure_3, arg0, arg1);
};