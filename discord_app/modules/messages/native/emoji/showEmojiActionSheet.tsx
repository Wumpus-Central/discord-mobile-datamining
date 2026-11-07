// discord_app/modules/messages/native/emoji/showEmojiActionSheet.tsx
import asyncRequireImpl from "../../../../../_runtime/02118_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/native/emoji/showEmojiActionSheet.tsx");

export default function showEmojiActionSheet(emojiNode) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10172, dependencyMap.paths), "MessageEmojiActionSheet", {
    emojiNode,
  });
}
