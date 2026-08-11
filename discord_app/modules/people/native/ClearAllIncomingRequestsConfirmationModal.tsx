// discord_app/modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = ModalActionCreators;
  obj = { incomingPendingRequestCount };
  obj.pushLazy(asyncRequireImpl(9256, dependencyMap.paths), obj);
};