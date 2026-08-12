// discord_app/modules/guild_moderation/native/showKickConfirmModal.tsx
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALF.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALF;
  ModalActionCreators.pushLazy(asyncRequireImpl(11315, dependencyMap.paths), closure_0);
};