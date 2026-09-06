// discord_app/modules/saved_messages/native/showForLaterModal.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import SavedMessagesTypes from "../SavedMessagesTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7861).markRemindersSeen();
    const tmpResult = tmp(7861);
  }
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(7862, dependencyMap.paths),
    { type: BOOKMARK },
    "for-later-modal",
    { presentation: "modal" },
  );
};
