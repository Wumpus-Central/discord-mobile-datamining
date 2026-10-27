// === Module 12818: showBanConfirmModal ===

// Module 12818 (showBanConfirmModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12819, dependencyMap.paths), merged);
};