// === Module 13180: EditPollCreationImageAltTextModalActionCreators ===

// Module 13180 (EditPollCreationImageAltTextModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

let c3 = "edit-poll-creation-image-alt-text-modal";
const result = size.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export function openEditPollCreationImageAltTextModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13181, dependencyMap.paths), merged, c3);
}
export function closeEditPollCreationImageAltTextModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
}