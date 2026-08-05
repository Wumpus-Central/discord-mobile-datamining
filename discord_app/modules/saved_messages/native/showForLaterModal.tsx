// discord_app/modules/saved_messages/native/showForLaterModal.tsx
import { asyncRequireImpl } from "../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = ModalActionCreators;
  obj = { type: BOOKMARK };
  obj.pushLazy(asyncRequireImpl(8163, dependencyMap.paths), obj, "for-later-modal", { presentation: "modal" });
};