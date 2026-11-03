// === Module 12672: PollCreationModalActionCreators ===

// Module 12672 (PollCreationModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import size from "module_2" /* 2 */;

let c3 = "create-poll-modal";
const result = size.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export function openCreatePollModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12673, dependencyMap.paths), merged, c3);
}
export function closeCreatePollModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
}