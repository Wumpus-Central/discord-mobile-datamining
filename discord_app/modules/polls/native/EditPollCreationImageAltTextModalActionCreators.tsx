let c3 = "edit-poll-creation-image-alt-text-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(closure_0) {
  importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(11512, dependencyMap.paths), closure_0, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  importDefault(4490).popWithKey(c3);
};