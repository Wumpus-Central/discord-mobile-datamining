import { asyncRequireImpl } from "../../../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../../actions/ModalActionCreators.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
// discord_app/modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx
const result = require("GuildSettingsStickerCreateModal").fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/showGuildSettingsStickerCreateModal.tsx");

export default function showGuildSettingsStickerCreateModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALF.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALF;
  ModalActionCreators.pushLazy(asyncRequireImpl /* asyncRequireImpl */(16533, dependencyMap.paths), closure_0, "guild-settings-sticker-create", { presentation: "modal" });
};