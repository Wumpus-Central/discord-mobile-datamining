// discord_app/modules/guild_settings/native/showEmojiOverflowActionSheet.tsx
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  let obj = {
    onClose() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet("EmojiOverflowActionSheet");
    },
  };
  ActionSheetActionCreatorsDefault;
  const tmp2 = asyncRequire(17784, dependencyMap.paths);
  const merged = Object.assign(arg0);
  openLazy(tmp2, "EmojiOverflowActionSheet", obj);
}
