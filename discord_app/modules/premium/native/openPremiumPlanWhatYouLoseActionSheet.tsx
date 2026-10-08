// === Module 13500: openPremiumPlanWhatYouLoseActionSheet ===

// Module 13500 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13501, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};