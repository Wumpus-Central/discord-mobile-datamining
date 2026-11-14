// === Module 13329: openConjureShareSheet ===

// Module 13329 (openConjureShareSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(projectId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13330, dependencyMap.paths), "ConjureShareSheet", { projectId });
};