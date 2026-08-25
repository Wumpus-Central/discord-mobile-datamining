// discord_app/modules/saved_messages/native/showForLaterModal.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4611 from "../../../actions/ModalActionCreators.tsx";
import SavedMessageSortTypes from "../SavedMessagesTypes.tsx";

const result = set.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    tmp(8537).markRemindersSeen();
    const tmpResult = tmp(8537);
  }
  _modDef4611.pushLazy(asyncRequireImpl(8538, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};