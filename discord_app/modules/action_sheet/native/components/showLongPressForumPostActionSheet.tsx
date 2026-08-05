// discord_app/modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx
import { asyncRequireImpl } from "../../../../../_runtime/01959_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../ActionSheetActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = ACTION_SHEET_HEIGHT_HALF.hideActionSheet;
  }
  let obj = ACTION_SHEET_HEIGHT_HALF;
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(asyncRequireImpl /* asyncRequireImpl */(9817, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};