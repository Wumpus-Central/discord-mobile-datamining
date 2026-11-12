// === Module 13224: openConjureShareSheet ===

// Module 13224 (openConjureShareSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(projectId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13225, dependencyMap.paths), "ConjureShareSheet", { projectId });
};