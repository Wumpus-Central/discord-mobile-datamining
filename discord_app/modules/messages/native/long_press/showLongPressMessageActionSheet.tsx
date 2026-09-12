// === Module 11786: showLongPressMessageActionSheet ===

// Module 11786 (showLongPressMessageActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/long_press/showLongPressMessageActionSheet.tsx");

export const showLongPressMessageActionSheet = function showLongPressMessageActionSheet(analyticsLocation) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11787, dependencyMap.paths), "MessageLongPressActionSheet", analyticsLocation);
};