// === Module 7480: showForLaterModal ===

// Module 7480 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7481 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 7482 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    MessageRemindersSeenStorage.markRemindersSeen();
    const tmpResult = MessageRemindersSeenStorage;
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7483, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
  const obj = { type: BOOKMARK };
};