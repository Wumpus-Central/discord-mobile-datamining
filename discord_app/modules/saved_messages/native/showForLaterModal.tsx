// === Module 13798: showForLaterModal ===

// Module 13798 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10078 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    MessageRemindersSeenStorage.markRemindersSeen();
    const tmpResult = MessageRemindersSeenStorage;
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13800, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
  const obj = { type: BOOKMARK };
};