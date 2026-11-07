// === Module 10307: showLongPressMessageActionSheet ===

// Module 10307 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10308, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}