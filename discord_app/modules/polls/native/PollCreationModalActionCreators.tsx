// === Module 11779: openCreatePollModal ===

// Module 11779 (openCreatePollModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;

let c3 = "create-poll-modal";
const result = set.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  _modDef4611.pushLazy(asyncRequireImpl(11780, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  _modDef4611.popWithKey(c3);
};