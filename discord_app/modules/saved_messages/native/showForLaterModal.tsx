// === Module 7859: showForLaterModal ===

// Module 7859 (showForLaterModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;
import SavedMessageSortTypes from "SavedMessageSortTypes" /* 7860 */;

const result = set.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7861).markRemindersSeen();
    const tmpResult = tmp(7861);
  }
  _modDef4763.pushLazy(asyncRequireImpl(7862, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};