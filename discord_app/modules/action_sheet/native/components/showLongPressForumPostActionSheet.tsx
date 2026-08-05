// discord_app/modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = require("../ActionSheetActionCreators.tsx").hideActionSheet;
  }
  let obj = require("../ActionSheetActionCreators.tsx");
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(9817, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};