// === Module 12090: PollCreationModalActionCreators ===

// Module 12090 (PollCreationModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import size from "module_2" /* 2 */;

let c3 = "create-poll-modal";
const result = size.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12091, dependencyMap.paths), merged, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
};