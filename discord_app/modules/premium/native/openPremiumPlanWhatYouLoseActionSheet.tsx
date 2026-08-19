// === Module 7904: openPremiumPlanWhatYouLoseActionSheet ===

// Module 7904 (openPremiumPlanWhatYouLoseActionSheet)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const result = obj132.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(7905, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};