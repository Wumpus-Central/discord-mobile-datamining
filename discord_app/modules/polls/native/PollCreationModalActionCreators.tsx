// === Module 13690: PollCreationModalActionCreators ===

// Module 13690 (PollCreationModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

let c3 = "create-poll-modal";
const result = size.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export function openCreatePollModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13691, dependencyMap.paths), merged, c3);
}
export function closeCreatePollModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
}