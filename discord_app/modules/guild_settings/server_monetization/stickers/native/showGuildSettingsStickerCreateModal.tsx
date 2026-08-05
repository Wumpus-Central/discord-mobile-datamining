// discord_app/modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  require("../../../../action_sheet/native/ActionSheetActionCreators.tsx").hideActionSheet();
  const obj = require("../../../../action_sheet/native/ActionSheetActionCreators.tsx");
  require("../../../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(16533, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};