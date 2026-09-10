// === Module 10290: showLongPressForumPostActionSheet ===

// Module 10290 (showLongPressForumPostActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
  }
  const obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(asyncRequireImpl(10291, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};