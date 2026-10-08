// === Module 18082: showGuildSettingsStickerCreateModal ===

// Module 18082 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18083, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};