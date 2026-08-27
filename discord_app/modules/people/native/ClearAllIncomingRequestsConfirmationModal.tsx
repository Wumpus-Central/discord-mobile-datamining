// discord_app/modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4676 from "../../../actions/ModalActionCreators.tsx";

const result = set.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  let obj = _modDef4676;
  obj = { incomingPendingRequestCount };
  obj.pushLazy(asyncRequireImpl(8987, dependencyMap.paths), obj);
};