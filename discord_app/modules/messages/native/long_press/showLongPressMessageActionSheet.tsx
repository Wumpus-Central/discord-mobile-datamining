// === Module 12153: showLongPressMessageActionSheet ===

// Module 12153 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export function showLongPressMessageActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12154, dependencyMap.paths), "MessageLongPressActionSheet", arg0);
}