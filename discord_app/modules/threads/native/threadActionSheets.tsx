// === Module 10513: showThreadNotificationsBottomSheet ===

// Module 10513 (showThreadNotificationsBottomSheet)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const result = obj132.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  const obj = { channel };
  obj.openLazy(asyncRequireImpl(10514, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};