// discord_app/modules/polls/native/PollCreationModalActionCreators.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../../actions/ModalActionCreators.tsx";

let c3 = "create-poll-modal";
const result = obj132.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  _modDef5260.pushLazy(asyncRequireImpl(11373, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  _modDef5260.popWithKey(c3);
};