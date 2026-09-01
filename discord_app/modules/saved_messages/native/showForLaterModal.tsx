// === Module 7603: showForLaterModal ===

// Module 7603 (showForLaterModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4723 from "module_4723" /* 4723 */;
import SavedMessageSortTypes from "SavedMessageSortTypes" /* 7604 */;

const result = set.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7605).markRemindersSeen();
    const tmpResult = tmp(7605);
  }
  _modDef4723.pushLazy(asyncRequireImpl(7606, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};