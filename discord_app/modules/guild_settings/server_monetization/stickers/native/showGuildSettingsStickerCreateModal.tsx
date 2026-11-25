// === Module 19936: showGuildSettingsStickerCreateModal ===

// Module 19936 (showGuildSettingsStickerCreateModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(19937, dependencyMap.paths), merged, "guild-settings-sticker-create", { presentation: "modal" });
};