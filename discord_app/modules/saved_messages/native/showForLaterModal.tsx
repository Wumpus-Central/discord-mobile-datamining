// === Module 7536: showForLaterModal ===

// Module 7536 (showForLaterModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;
import SavedMessageSortTypes from "SavedMessageSortTypes" /* 7537 */;

const result = set.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7538).markRemindersSeen();
    const tmpResult = tmp(7538);
  }
  _modDef4676.pushLazy(asyncRequireImpl(7539, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};