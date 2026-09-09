// === Module 11344: threadActionSheets ===

// Module 11344 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = { channel };
  obj.openLazy(asyncRequireImpl(11345, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};