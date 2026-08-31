// === Module 7571: showForLaterModal ===

// Module 7571 (showForLaterModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4691 from "module_4691" /* 4691 */;
import SavedMessageSortTypes from "SavedMessageSortTypes" /* 7572 */;

const result = set.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7573).markRemindersSeen();
    const tmpResult = tmp(7573);
  }
  _modDef4691.pushLazy(asyncRequireImpl(7574, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};