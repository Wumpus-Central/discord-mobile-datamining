// === Module 7614: showForLaterModal ===

// Module 7614 (showForLaterModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4724 from "module_4724" /* 4724 */;
import SavedMessageSortTypes from "SavedMessageSortTypes" /* 7615 */;

const result = set.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7616).markRemindersSeen();
    const tmpResult = tmp(7616);
  }
  _modDef4724.pushLazy(asyncRequireImpl(7617, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};