// === Module 6783: openPremiumPlanSelectionActionSheet ===

// Module 6783 (openPremiumPlanSelectionActionSheet)
import { PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY as closure_3 } from "GuildFeatures";

const result = require("Header").fileFinishedImporting("modules/premium/native/openPremiumPlanSelectionActionSheet.tsx");

export default function openPremiumPlanSelectionActionSheet(arg0, arg1) {
  if (null == arg1) {
    importDefault(4223).hideActionSheet();
    const obj = importDefault(4223);
  }
  importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(6784, dependencyMap.paths), closure_3, arg0, arg1);
};