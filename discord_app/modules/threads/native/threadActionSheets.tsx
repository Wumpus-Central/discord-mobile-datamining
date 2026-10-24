// === Module 11007: threadActionSheets ===

// Module 11007 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11008, dependencyMap.paths), "ThreadNotificationsBottomSheet", { channel });
};