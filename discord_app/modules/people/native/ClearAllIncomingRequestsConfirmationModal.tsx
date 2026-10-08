// === Module 7011: people/ClearAllIncomingRequestsConfirmationModal ===

// Module 7011 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7012, dependencyMap.paths), { incomingPendingRequestCount });
};