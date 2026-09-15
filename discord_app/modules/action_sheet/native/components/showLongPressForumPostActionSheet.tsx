// discord_app/modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/01897_asyncRequireImpl.js";
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
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(10352, dependencyMap.paths),
    "ForumPostLongPressActionSheet",
    { thread, parentChannel, onClose: hideActionSheet },
  );
  const obj2 = { thread, parentChannel, onClose: hideActionSheet };
}
