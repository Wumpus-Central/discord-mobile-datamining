// === Module 17008: showGuildSettingsStickerCreateModal ===

// Module 17008 (showGuildSettingsStickerCreateModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;
import _modDef4675 from "module_4675" /* 4675 */;

const result = set.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4675.pushLazy(asyncRequireImpl(17009, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};