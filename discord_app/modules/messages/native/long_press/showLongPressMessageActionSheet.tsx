// === Module 11293: showLongPressMessageActionSheet ===

// Module 11293 (showLongPressMessageActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(analyticsLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11294, dependencyMap.paths), "MessageLongPressActionSheet", analyticsLocation);
};