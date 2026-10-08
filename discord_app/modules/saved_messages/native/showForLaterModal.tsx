// === Module 12656: showForLaterModal ===

// Module 12656 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9633 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 12657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    MessageRemindersSeenStorage.markRemindersSeen();
    const tmpResult = MessageRemindersSeenStorage;
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12658, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
  const obj = { type: BOOKMARK };
};