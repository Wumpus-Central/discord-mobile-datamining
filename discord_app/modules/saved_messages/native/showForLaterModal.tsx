// === Module 8488: showForLaterModal ===

// Module 8488 (showForLaterModal)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;
import SavedMessageSortTypes from "SavedMessageSortTypes" /* 8489 */;
import getRemindersLastSeenAt from "getRemindersLastSeenAt" /* 8490 */;

const result = obj132.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    getRemindersLastSeenAt.markRemindersSeen();
    const tmpResult = getRemindersLastSeenAt;
  }
  _modDef5260.pushLazy(asyncRequireImpl(8491, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};