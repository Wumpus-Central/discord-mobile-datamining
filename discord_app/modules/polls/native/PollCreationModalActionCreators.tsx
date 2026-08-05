// discord_app/modules/polls/native/PollCreationModalActionCreators.tsx
let c3 = "create-poll-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  require("../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(11495, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  require("../../../actions/ModalActionCreators.tsx").popWithKey(c3);
};