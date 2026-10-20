// === Module 18832: showGuildSettingsStickerCreateModal ===

// Module 18832 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18833, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};