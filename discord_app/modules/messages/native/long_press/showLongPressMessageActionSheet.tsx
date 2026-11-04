// === Module 10366: showLongPressMessageActionSheet ===

// Module 10366 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10367, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}