// === Module 13111: PollCreationModalActionCreators ===

// Module 13111 (PollCreationModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

let c3 = "create-poll-modal";
const result = size.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export function openCreatePollModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13112, dependencyMap.paths), merged, c3);
}
export function closeCreatePollModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
}