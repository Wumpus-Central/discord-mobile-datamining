// === Module 17661: showGuildSettingsStickerCreateModal ===

// Module 17661 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17662, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};