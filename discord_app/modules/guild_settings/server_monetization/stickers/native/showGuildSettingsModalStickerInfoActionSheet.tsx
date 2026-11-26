// === Module 20007: showGuildSettingsModalStickerInfoActionSheet ===

// Module 20007 (showGuildSettingsModalStickerInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  ({ guildId, stickerId } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(20008, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, {
    guildId,
    stickerId,
    hideActionSheet() {
      ActionSheetActionCreatorsDefault.hideActionSheet(GuildSettingsModalStickerInfoActionSheet);
    }
  });
}