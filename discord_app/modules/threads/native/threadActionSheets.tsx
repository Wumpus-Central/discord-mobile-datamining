// === Module 11549: threadActionSheets ===

// Module 11549 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11550, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
}