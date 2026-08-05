// discord_app/modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx
const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  let guildId;
  let stickerId;
  ({ guildId, stickerId } = arg0);
  let obj = require("../../../../action_sheet/native/ActionSheetActionCreators.tsx");
  obj = {
    guildId,
    stickerId,
    hideActionSheet() {
      callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(require("../../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(16539, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, obj);
};