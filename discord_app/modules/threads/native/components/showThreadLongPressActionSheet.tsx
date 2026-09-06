// === Module 16114: showThreadLongPressActionSheet ===

// Module 16114 (showThreadLongPressActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  const obj = {
    channelId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet("ThreadLongPressActionSheet");
    }
  };
  obj.openLazy(asyncRequireImpl(16115, dependencyMap.paths), "ThreadLongPressActionSheet", obj);
};