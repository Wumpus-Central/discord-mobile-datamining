import { asyncRequireImpl } from "../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
// discord_app/modules/saved_messages/native/showForLaterModal.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = ModalActionCreators;
  obj = { type: BOOKMARK };
  obj.pushLazy(asyncRequireImpl /* asyncRequireImpl */(8191, dependencyMap.paths), obj, "for-later-modal", { presentation: "modal" });
};