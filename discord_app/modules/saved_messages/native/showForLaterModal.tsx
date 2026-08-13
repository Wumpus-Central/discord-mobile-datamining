// discord_app/modules/saved_messages/native/showForLaterModal.tsx
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { SavedMessageSortTypes } from "../SavedMessagesTypes.tsx";
const result = require("module_4550").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    tmp(8429).markRemindersSeen();
    const tmpResult = tmp(8429);
  }
  ModalActionCreators.pushLazy(asyncRequireImpl(8430, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};