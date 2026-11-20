// === Module 11096: showLongPressForumPostActionSheet ===

// Module 11096 (showLongPressForumPostActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11097, dependencyMap.paths), "ForumPostLongPressActionSheet", { thread, parentChannel, onClose: hideActionSheet });
  const obj2 = { thread, parentChannel, onClose: hideActionSheet };
};