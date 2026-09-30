// === Module 11913: EditPollCreationImageAltTextModalActionCreators ===

// Module 11913 (EditPollCreationImageAltTextModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

let c3 = "edit-poll-creation-image-alt-text-modal";
const result = size.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11914, dependencyMap.paths), merged, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
};