// discord_app/modules/saved_messages/native/showForLaterModal.tsx
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;
import SavedMessageSortTypes from "SavedMessageSortTypes" /* 8489 */;

const result = set.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    tmp(8490).markRemindersSeen();
    const tmpResult = tmp(8490);
  }
  _modDef5260.pushLazy(asyncRequireImpl(8491, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};