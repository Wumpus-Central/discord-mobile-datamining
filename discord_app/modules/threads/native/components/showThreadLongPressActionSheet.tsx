// === Module 18413: showThreadLongPressActionSheet ===

// Module 18413 (showThreadLongPressActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18414, dependencyMap.paths), "ThreadLongPressActionSheet", {
    channelId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet("ThreadLongPressActionSheet");
    }
  });
};