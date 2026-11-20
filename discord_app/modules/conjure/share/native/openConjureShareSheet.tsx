// === Module 18217: openConjureShareSheet ===

// Module 18217 (openConjureShareSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18218, dependencyMap.paths), "ConjureShareSheet", arg0);
};