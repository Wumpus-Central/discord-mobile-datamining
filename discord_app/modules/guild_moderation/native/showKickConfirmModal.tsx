// discord_app/modules/guild_moderation/native/showKickConfirmModal.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02010_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef4689 from "../../../actions/ModalActionCreators.tsx";

const result = set.fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4689.pushLazy(asyncRequireImpl(11362, dependencyMap.paths), closure_0);
};