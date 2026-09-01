// === Module 11795: openEditPollCreationImageAltTextModal ===

// Module 11795 (openEditPollCreationImageAltTextModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4723 from "module_4723" /* 4723 */;

let c3 = "edit-poll-creation-image-alt-text-modal";
const result = set.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(closure_0) {
  _modDef4723.pushLazy(asyncRequireImpl(11796, dependencyMap.paths), closure_0, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  _modDef4723.popWithKey(c3);
};