// === Module 11822: showEmojiActionSheet ===

// Module 11822 (showEmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10172, dependencyMap.paths), "MessageEmojiActionSheet", { emojiNode });
};