// discord_app/modules/guild_settings/native/showEmojiOverflowActionSheet.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  const obj = {
    onClose() {
      return ActionSheetActionCreatorsDefault.hideActionSheet("EmojiOverflowActionSheet");
    },
  };
  const merged = Object.assign(arg0);
  obj.openLazy(asyncRequireImpl(17566, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
}
