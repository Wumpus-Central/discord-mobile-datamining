// discord_app/modules/guild_moderation/native/showKickConfirmModal.tsx
const result = require("KickConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showKickConfirmModal.tsx");

export default function showKickConfirmModal(closure_0) {
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").hideActionSheet();
  const obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  require("../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(11168, dependencyMap.paths), closure_0);
};