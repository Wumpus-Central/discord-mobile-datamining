// === Module 11440: openEditPollCreationImageAltTextModal ===

// Module 11440 (openEditPollCreationImageAltTextModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef5265 from "module_5265" /* 5265 */;

let c3 = "edit-poll-creation-image-alt-text-modal";
const result = set.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(closure_0) {
  _modDef5265.pushLazy(asyncRequireImpl(11441, dependencyMap.paths), closure_0, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  _modDef5265.popWithKey(c3);
};