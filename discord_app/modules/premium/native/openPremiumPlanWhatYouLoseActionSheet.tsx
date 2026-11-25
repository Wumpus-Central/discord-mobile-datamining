// === Module 9299: openPremiumPlanWhatYouLoseActionSheet ===

// Module 9299 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9300, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};