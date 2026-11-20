// === Module 12968: EditPollCreationImageAltTextModalActionCreators ===

// Module 12968 (EditPollCreationImageAltTextModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

let c3 = "edit-poll-creation-image-alt-text-modal";
const result = size.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export function openEditPollCreationImageAltTextModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12969, dependencyMap.paths), merged, c3);
}
export function closeEditPollCreationImageAltTextModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
}