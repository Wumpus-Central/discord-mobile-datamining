// === Module 17080: showGuildSettingsModalStickerInfoActionSheet ===

// Module 17080 (showGuildSettingsModalStickerInfoActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = set.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  ({ guildId, stickerId } = arg0);
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    guildId,
    stickerId,
    hideActionSheet() {
      callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(asyncRequireImpl(17081, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, obj);
};