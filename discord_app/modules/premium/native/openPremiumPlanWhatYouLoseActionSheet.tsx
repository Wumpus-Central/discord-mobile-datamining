// discord_app/modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALF.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALF;
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(7662, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};