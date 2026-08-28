// === Module 17092: showGuildSettingsStickerCreateModal ===

// Module 17092 (showGuildSettingsStickerCreateModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;
import _modDef4689 from "module_4689" /* 4689 */;

const result = set.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4689.pushLazy(asyncRequireImpl(17093, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};