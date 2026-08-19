// discord_app/modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef5260 from "../../../../../actions/ModalActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  _modDef5260.pushLazy(asyncRequireImpl(16799, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};