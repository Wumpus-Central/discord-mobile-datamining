// === Module 17849: showThreadLongPressActionSheet ===

// Module 17849 (showThreadLongPressActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/threads/native/components/showThreadLongPressActionSheet.tsx");

export default function showThreadLongPressActionSheet(channelId) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17850, dependencyMap.paths), "ThreadLongPressActionSheet", {
    channelId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet("ThreadLongPressActionSheet");
    }
  });
};