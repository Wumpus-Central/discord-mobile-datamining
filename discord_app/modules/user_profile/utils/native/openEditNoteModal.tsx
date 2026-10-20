// === Module 14160: openEditNoteModal ===

// Module 14160 (openEditNoteModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14161, dependencyMap.paths), merged, undefined, { presentation: "modal" });
};