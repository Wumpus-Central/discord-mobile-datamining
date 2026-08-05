// discord_app/modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx
let c3 = "edit-poll-creation-image-alt-text-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(closure_0) {
  require("../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(11512, dependencyMap.paths), closure_0, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  require("../../../actions/ModalActionCreators.tsx").popWithKey(c3);
};