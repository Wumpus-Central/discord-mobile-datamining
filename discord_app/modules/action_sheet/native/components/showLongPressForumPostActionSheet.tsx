// discord_app/modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../ActionSheetActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx",
);

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
  }
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(asyncRequire(10046, dependencyMap.paths), "ForumPostLongPressActionSheet", obj2);
}
