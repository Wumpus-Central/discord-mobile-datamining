// discord_app/modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx
import set from "../../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../../_runtime/02009_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef4723 from "../../../../../actions/ModalActionCreators.tsx";

const result = set.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4723.pushLazy(asyncRequireImpl(17162, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};