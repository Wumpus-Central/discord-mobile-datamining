// === Module 7505: showForLaterModal ===

// Module 7505 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7506 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 7507 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    const tmpResult = MessageRemindersSeenStorage;
    tmpResult.markRemindersSeen();
  }
  const obj = { type: BOOKMARK };
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(7508, dependencyMap.paths), obj, "for-later-modal", { presentation: "modal" });
};