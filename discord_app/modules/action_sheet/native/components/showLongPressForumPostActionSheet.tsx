// === Module 10517: showLongPressForumPostActionSheet ===

// Module 10517 (showLongPressForumPostActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx");

export default function showLongPressForumPostActionSheet(thread, parentChannel) {
  let hideActionSheet = arg2;
  if (arg2 === undefined) {
    hideActionSheet = importDefault(4223).hideActionSheet;
  }
  let obj = importDefault(4223);
  obj = { thread, parentChannel, onClose: hideActionSheet };
  obj.openLazy(require(1959) /* asyncRequireImpl */(10518, dependencyMap.paths), "ForumPostLongPressActionSheet", obj);
};