// discord_app/modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef4763 from "../../../actions/ModalActionCreators.tsx";

let c3 = "edit-poll-creation-image-alt-text-modal";
const result = set.fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(closure_0) {
  _modDef4763.pushLazy(asyncRequireImpl(12229, dependencyMap.paths), closure_0, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  _modDef4763.popWithKey(c3);
};
