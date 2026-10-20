// === Module 12121: EditPollCreationImageAltTextModalActionCreators ===

// Module 12121 (EditPollCreationImageAltTextModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import size from "module_2" /* 2 */;

let c3 = "edit-poll-creation-image-alt-text-modal";
const result = size.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12122, dependencyMap.paths), merged, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
};