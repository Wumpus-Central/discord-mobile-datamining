// === Module 11282: showForLaterModal ===

// Module 11282 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10311 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11283 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    MessageRemindersSeenStorage.markRemindersSeen();
    const tmpResult = MessageRemindersSeenStorage;
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11284, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
  const obj = { type: BOOKMARK };
}