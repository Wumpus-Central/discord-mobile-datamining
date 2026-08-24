// === Module 8527: showForLaterModal ===

// Module 8527 (showForLaterModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef5265 from "module_5265" /* 5265 */;
import SavedMessageSortTypes from "SavedMessageSortTypes" /* 8528 */;

const result = set.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    tmp(8529).markRemindersSeen();
    const tmpResult = tmp(8529);
  }
  _modDef5265.pushLazy(asyncRequireImpl(8530, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};