// === Module 18447: openConjureShareSheet ===

// Module 18447 (openConjureShareSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18448, dependencyMap.paths), "ConjureShareSheet", arg0);
};