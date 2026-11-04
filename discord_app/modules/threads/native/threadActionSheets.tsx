// === Module 11328: threadActionSheets ===

// Module 11328 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11329, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
}