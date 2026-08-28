// === Module 7550: showForLaterModal ===

// Module 7550 (showForLaterModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;
import SavedMessageSortTypes from "SavedMessageSortTypes" /* 7551 */;

const result = set.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7552).markRemindersSeen();
    const tmpResult = tmp(7552);
  }
  _modDef4689.pushLazy(asyncRequireImpl(7553, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};