// === Module 15633: showThreadLongPressActionSheet ===

// Module 15633 (showThreadLongPressActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const result = set.fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    channelId,
    onClose() {
      callback(table[0]).hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(asyncRequireImpl(15634, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};