// === Module 7494: showForLaterModal ===

// Module 7494 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7495 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 7496 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    const tmpResult = MessageRemindersSeenStorage;
    tmpResult.markRemindersSeen();
  }
  const obj = { type: BOOKMARK };
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(7497, dependencyMap.paths), obj, "for-later-modal", { presentation: "modal" });
};