// discord_app/modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
let c3 = "edit-poll-creation-image-alt-text-modal";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/polls/native/EditPollCreationImageAltTextModalActionCreators.tsx");

export const openEditPollCreationImageAltTextModal = function openEditPollCreationImageAltTextModal(closure_0) {
  ModalActionCreators.pushLazy(asyncRequireImpl(11656, dependencyMap.paths), closure_0, c3);
};
export const closeEditPollCreationImageAltTextModal = function closeEditPollCreationImageAltTextModal() {
  ModalActionCreators.popWithKey(c3);
};