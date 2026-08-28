// discord_app/modules/saved_messages/native/showForLaterModal.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02010_asyncRequireImpl.js";
import _modDef4689 from "../../../actions/ModalActionCreators.tsx";
import SavedMessageSortTypes from "../SavedMessagesTypes.tsx";

const result = set.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7552).markRemindersSeen();
    const tmpResult = tmp(7552);
  }
  _modDef4689.pushLazy(asyncRequireImpl(7553, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};