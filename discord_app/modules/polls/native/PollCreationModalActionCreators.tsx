// discord_app/modules/polls/native/PollCreationModalActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef4763 from "../../../actions/ModalActionCreators.tsx";

let c3 = "create-poll-modal";
const result = set.fileFinishedImporting("modules/polls/native/PollCreationModalActionCreators.tsx");

export const openCreatePollModal = function openCreatePollModal(closure_0) {
  _modDef4763.pushLazy(asyncRequireImpl(12198, dependencyMap.paths), closure_0, c3);
};
export const closeCreatePollModal = function closeCreatePollModal() {
  _modDef4763.popWithKey(c3);
};
