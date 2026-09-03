// === Module 12024: openEditPollCreationImageAltTextModal ===

// Module 12024 (openEditPollCreationImageAltTextModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4724 from "module_4724" /* 4724 */;

let c3 = "edit-poll-creation-image-alt-text-modal";
const result = set.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(closure_0) {
  _modDef4724.pushLazy(asyncRequireImpl(12025, dependencyMap.paths), closure_0, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  _modDef4724.popWithKey(c3);
};