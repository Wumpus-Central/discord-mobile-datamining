// === Module 12040: showEmojiActionSheet ===

// Module 12040 (showEmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11257, dependencyMap.paths), "MessageEmojiActionSheet", { emojiNode });
};