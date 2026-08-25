// === Module 8535: showForLaterModal ===

// Module 8535 (showForLaterModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;
import SavedMessageSortTypes from "SavedMessageSortTypes" /* 8536 */;

const result = set.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    tmp(8537).markRemindersSeen();
    const tmpResult = tmp(8537);
  }
  _modDef4611.pushLazy(asyncRequireImpl(8538, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};