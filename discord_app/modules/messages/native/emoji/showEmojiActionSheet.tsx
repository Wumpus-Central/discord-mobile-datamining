// === Module 11982: showEmojiActionSheet ===

// Module 11982 (showEmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11199, dependencyMap.paths), "MessageEmojiActionSheet", { emojiNode });
};