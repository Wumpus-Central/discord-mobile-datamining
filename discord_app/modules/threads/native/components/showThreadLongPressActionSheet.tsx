// === Module 17244: showThreadLongPressActionSheet ===

// Module 17244 (showThreadLongPressActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17245, dependencyMap.paths), "ThreadLongPressActionSheet", {
    channelId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet("ThreadLongPressActionSheet");
    }
  });
};