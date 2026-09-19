// discord_app/modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10009, dependencyMap.paths), { incomingPendingRequestCount });
}
