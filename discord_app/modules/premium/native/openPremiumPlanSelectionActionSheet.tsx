// discord_app/modules/premium/native/openPremiumPlanSelectionActionSheet.tsx
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";
import { asyncRequireImpl } from "../../../../_runtime/01959_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = require("Header").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    ACTION_SHEET_HEIGHT_HALF.hideActionSheet();
    const obj = ACTION_SHEET_HEIGHT_HALF;
  }
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(6796, dependencyMap.paths), closure_3, arg0, arg1);
};