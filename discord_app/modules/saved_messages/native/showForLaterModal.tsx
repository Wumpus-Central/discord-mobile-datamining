// === Module 7932: showForLaterModal ===

// Module 7932 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7933 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 7934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    MessageRemindersSeenStorage.markRemindersSeen();
    const tmpResult = MessageRemindersSeenStorage;
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7935, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
  const obj = { type: BOOKMARK };
};