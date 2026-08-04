const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  importDefault(4253).hideActionSheet();
  const obj = importDefault(4253);
  importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(16533, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};