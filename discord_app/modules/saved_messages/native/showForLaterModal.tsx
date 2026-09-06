// discord_app/modules/saved_messages/native/showForLaterModal.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import SavedMessagesTypes from "../SavedMessagesTypes.tsx";
import MessageRemindersSeenStorage from "../message_reminders/native/MessageRemindersSeenStorage.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    MessageRemindersSeenStorage.markRemindersSeen();
    const tmpResult = MessageRemindersSeenStorage;
  }
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(7862, dependencyMap.paths),
    { type: BOOKMARK },
    "for-later-modal",
    { presentation: "modal" },
  );
  const obj = { type: BOOKMARK };
};
