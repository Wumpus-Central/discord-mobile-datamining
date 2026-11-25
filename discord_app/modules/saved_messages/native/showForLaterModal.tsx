// === Module 11665: showForLaterModal ===

// Module 11665 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11666 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11667 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    MessageRemindersSeenStorage.markRemindersSeen();
    const tmpResult = MessageRemindersSeenStorage;
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11668, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
  const obj = { type: BOOKMARK };
}