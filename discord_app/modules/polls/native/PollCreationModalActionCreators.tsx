// discord_app/modules/polls/native/PollCreationModalActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4611 from "../../../actions/ModalActionCreators.tsx";

let c3 = "create-poll-modal";
const result = set.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  _modDef4611.pushLazy(asyncRequireImpl(11780, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  _modDef4611.popWithKey(c3);
};