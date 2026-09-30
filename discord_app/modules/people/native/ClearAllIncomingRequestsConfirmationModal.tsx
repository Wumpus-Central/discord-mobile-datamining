// === Module 9400: people/ClearAllIncomingRequestsConfirmationModal ===

// Module 9400 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9401, dependencyMap.paths), { incomingPendingRequestCount });
};