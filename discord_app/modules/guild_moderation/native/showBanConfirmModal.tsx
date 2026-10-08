// === Module 11468: showBanConfirmModal ===

// Module 11468 (showBanConfirmModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_moderation/native/showBanConfirmModal.tsx");

export default function showBanConfirmModal(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11469, dependencyMap.paths), merged);
};