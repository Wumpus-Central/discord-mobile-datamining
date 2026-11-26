// === Module 13163: PollCreationModalActionCreators ===

// Module 13163 (PollCreationModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

let c3 = "create-poll-modal";
const result = size.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export function openCreatePollModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13164, dependencyMap.paths), merged, c3);
}
export function closeCreatePollModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
}