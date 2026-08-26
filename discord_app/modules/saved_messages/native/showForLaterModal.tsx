// === Module 8603: showForLaterModal ===

// Module 8603 (showForLaterModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4675 from "module_4675" /* 4675 */;
import SavedMessageSortTypes from "SavedMessageSortTypes" /* 8604 */;

const result = set.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    tmp(8605).markRemindersSeen();
    const tmpResult = tmp(8605);
  }
  _modDef4675.pushLazy(asyncRequireImpl(8606, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};