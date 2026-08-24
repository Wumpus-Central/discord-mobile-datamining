// discord_app/modules/saved_messages/native/showForLaterModal.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef5265 from "../../../actions/ModalActionCreators.tsx";
import SavedMessageSortTypes from "../SavedMessagesTypes.tsx";

const result = set.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    tmp(8529).markRemindersSeen();
    const tmpResult = tmp(8529);
  }
  _modDef5265.pushLazy(asyncRequireImpl(8530, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};