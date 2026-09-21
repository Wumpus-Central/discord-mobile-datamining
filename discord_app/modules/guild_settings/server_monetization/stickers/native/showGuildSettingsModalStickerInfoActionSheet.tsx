// === Module 18018: showGuildSettingsModalStickerInfoActionSheet ===

// Module 18018 (showGuildSettingsModalStickerInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  ({ guildId, stickerId } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18019, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, {
    guildId,
    stickerId,
    hideActionSheet() {
      ActionSheetActionCreatorsDefault.hideActionSheet(GuildSettingsModalStickerInfoActionSheet);
    }
  });
};