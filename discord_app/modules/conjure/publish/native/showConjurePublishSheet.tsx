// === Module 18468: showConjurePublishSheet ===

// Module 18468 (showConjurePublishSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const ConjurePublishSheet = "ConjurePublishSheet";
const result = size.fileFinishedImporting("modules/conjure/publish/native/showConjurePublishSheet.tsx");

export default function showConjurePublishSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18469, dependencyMap.paths), ConjurePublishSheet, arg0);
};
export const CONJURE_PUBLISH_SHEET_KEY = "ConjurePublishSheet";