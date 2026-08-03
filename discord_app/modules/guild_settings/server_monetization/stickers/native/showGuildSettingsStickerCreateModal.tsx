// === Module 16500: showGuildSettingsStickerCreateModal ===

// Module 16500 (showGuildSettingsStickerCreateModal)
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  importDefault(4223).hideActionSheet();
  const obj = importDefault(4223);
  importDefault(4461).pushLazy(require(1959) /* asyncRequireImpl */(16501, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};