// === Module 18116: showThreadLongPressActionSheet ===

// Module 18116 (showThreadLongPressActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18117, dependencyMap.paths), "ThreadLongPressActionSheet", {
    channelId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet("ThreadLongPressActionSheet");
    }
  });
};