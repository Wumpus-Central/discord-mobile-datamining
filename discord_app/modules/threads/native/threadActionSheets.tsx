// === Module 11169: showThreadNotificationsBottomSheet ===

// Module 11169 (showThreadNotificationsBottomSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/threads/native/threadActionSheets.tsx");

export const showThreadNotificationsBottomSheet = function showThreadNotificationsBottomSheet(channel) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel };
  obj.openLazy(asyncRequireImpl(11170, dependencyMap.paths), "ThreadNotificationsBottomSheet", obj);
};