// === Module 17676: showGuildSettingsModalStickerInfoActionSheet ===

// Module 17676 (showGuildSettingsModalStickerInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import size from "module_2" /* 2 */;

const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx");

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(arg0) {
  ({ guildId, stickerId } = arg0);
  const obj = {
    guildId,
    stickerId,
    hideActionSheet() {
      ActionSheetActionCreatorsDefault.hideActionSheet(GuildSettingsModalStickerInfoActionSheet);
    }
  };
  obj.openLazy(asyncRequireImpl(17677, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, obj);
};