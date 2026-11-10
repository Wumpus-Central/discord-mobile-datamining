// === Module 12424: openConjureShareSheet ===

// Module 12424 (openConjureShareSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(projectId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12425, dependencyMap.paths), "ConjureShareSheet", { projectId });
};