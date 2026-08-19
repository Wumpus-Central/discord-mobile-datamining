// discord_app/modules/saved_messages/native/showForLaterModal.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../../actions/ModalActionCreators.tsx";
import SavedMessageSortTypes from "../SavedMessagesTypes.tsx";
import getRemindersLastSeenAt from "../message_reminders/native/MessageRemindersSeenStorage.tsx";

const result = obj132.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    getRemindersLastSeenAt.markRemindersSeen();
    const tmpResult = getRemindersLastSeenAt;
  }
  _modDef5260.pushLazy(asyncRequireImpl(8491, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};