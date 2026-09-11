// === Module 16185: showThreadLongPressActionSheet ===

// Module 16185 (showThreadLongPressActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  const obj = {
    channelId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(asyncRequireImpl(16186, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};