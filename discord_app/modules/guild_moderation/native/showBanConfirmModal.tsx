// discord_app/modules/guild_moderation/native/showBanConfirmModal.tsx
const result = require("BanConfirmModal").fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(closure_0) {
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").hideActionSheet();
  const obj = require("../../action_sheet/native/ActionSheetActionCreators.tsx");
  require("../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(11170, dependencyMap.paths), closure_0);
};