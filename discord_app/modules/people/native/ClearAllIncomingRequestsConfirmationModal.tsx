// discord_app/modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx
import { asyncRequireImpl } from "../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = ModalActionCreators;
  obj = { incomingPendingRequestCount };
  obj.pushLazy(asyncRequireImpl /* asyncRequireImpl */(9168, dependencyMap.paths), obj);
};