// === Module 18256: showConjurePublishSheet ===

// Module 18256 (showConjurePublishSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const ConjurePublishSheet = "ConjurePublishSheet";
const result = size.fileFinishedImporting("modules/conjure/publish/native/showConjurePublishSheet.tsx");

export default function showConjurePublishSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18257, dependencyMap.paths), ConjurePublishSheet, arg0);
};
export const CONJURE_PUBLISH_SHEET_KEY = "ConjurePublishSheet";