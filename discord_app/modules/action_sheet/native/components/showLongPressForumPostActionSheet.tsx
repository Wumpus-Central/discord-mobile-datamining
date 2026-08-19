// discord_app/modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../ActionSheetActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet;
  }
  const obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(asyncRequireImpl(10162, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};