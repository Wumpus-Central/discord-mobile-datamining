// === Module 9440: people/ClearAllIncomingRequestsConfirmationModal ===

// Module 9440 (people/ClearAllIncomingRequestsConfirmationModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmationModal.tsx");

export default function openClearAllIncomingRequestsConfirmationModal(incomingPendingRequestCount) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9441, dependencyMap.paths), { incomingPendingRequestCount });
};