// === Module 14369: openPremiumPlanWhatYouLoseActionSheet ===

// Module 14369 (openPremiumPlanWhatYouLoseActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx");

export default function openPremiumPlanWhatYouLoseActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14370, dependencyMap.paths), "PremiumPlanWhatYouLoseActionSheet", arg0);
};