// === Module 18385: openConjureShareSheet ===

// Module 18385 (openConjureShareSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18386, dependencyMap.paths), "ConjureShareSheet", arg0);
};