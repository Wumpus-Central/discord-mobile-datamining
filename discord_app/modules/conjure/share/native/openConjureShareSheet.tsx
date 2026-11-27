// === Module 18571: openConjureShareSheet ===

// Module 18571 (openConjureShareSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18572, dependencyMap.paths), "ConjureShareSheet", arg0);
};