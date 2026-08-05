// discord_app/modules/guild_settings/native/showEmojiOverflowActionSheet.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/native/showEmojiOverflowActionSheet.tsx");

export default function showEmojiOverflowActionSheet(arg0) {
  let obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = {
    onClose() {
      return callback(table[0]).hideActionSheet("EmojiOverflowActionSheet");
    }
  };
  const merged = Object.assign(arg0);
  obj.openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(16521, dependencyMap.paths), "EmojiOverflowActionSheet", obj);
};