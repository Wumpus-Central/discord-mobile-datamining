// === Module 11713: showForLaterModal ===

// Module 11713 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11714 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11715 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    MessageRemindersSeenStorage.markRemindersSeen();
    const tmpResult = MessageRemindersSeenStorage;
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11716, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
  const obj = { type: BOOKMARK };
}