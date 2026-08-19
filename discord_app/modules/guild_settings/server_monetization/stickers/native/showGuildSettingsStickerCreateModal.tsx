// === Module 16798: showGuildSettingsStickerCreateModal ===

// Module 16798 (showGuildSettingsStickerCreateModal)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import _modDef5260 from "module_5260" /* 5260 */;

const result = obj132.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  _modDef5260.pushLazy(asyncRequireImpl(16799, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};