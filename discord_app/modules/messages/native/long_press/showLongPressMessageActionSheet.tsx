// === Module 11280: showLongPressMessageActionSheet ===

// Module 11280 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(analyticsLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11281, dependencyMap.paths), "MessageLongPressActionSheet", analyticsLocation);
};