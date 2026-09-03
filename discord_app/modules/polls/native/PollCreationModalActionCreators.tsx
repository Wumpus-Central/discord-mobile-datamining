// discord_app/modules/polls/native/PollCreationModalActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef4724 from "../../../actions/ModalActionCreators.tsx";

let c3 = "create-poll-modal";
const result = set.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  _modDef4724.pushLazy(asyncRequireImpl(11994, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  _modDef4724.popWithKey(c3);
};
