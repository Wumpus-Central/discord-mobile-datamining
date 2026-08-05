// discord_app/modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = require("../../../actions/ModalActionCreators.tsx");
  obj = { incomingPendingRequestCount };
  obj.pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(9168, dependencyMap.paths), obj);
};