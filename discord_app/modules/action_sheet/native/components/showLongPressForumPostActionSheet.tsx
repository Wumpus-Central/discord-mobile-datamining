// === Module 10161: showLongPressForumPostActionSheet ===

// Module 10161 (showLongPressForumPostActionSheet)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const result = obj132.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet;
  }
  const obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(asyncRequireImpl(10162, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};