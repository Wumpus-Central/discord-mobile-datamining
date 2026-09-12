// === Module 11445: threadActionSheets ===

// Module 11445 (threadActionSheets)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = { channel };
  obj.openLazy(asyncRequireImpl(11446, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};