// === Module 10887: showThreadNotificationsBottomSheet ===

// Module 10887 (showThreadNotificationsBottomSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const result = set.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel };
  obj.openLazy(asyncRequireImpl(10888, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};