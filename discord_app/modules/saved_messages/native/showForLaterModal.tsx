// === Module 7859: showForLaterModal ===

// Module 7859 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7860 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7861).markRemindersSeen();
    const tmpResult = tmp(7861);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7862, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};