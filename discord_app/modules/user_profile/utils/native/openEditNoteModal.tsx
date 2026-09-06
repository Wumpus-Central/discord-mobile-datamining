// discord_app/modules/user_profile/utils/native/openEditNoteModal.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13057, dependencyMap.paths), merged, undefined, {
    presentation: "modal",
  });
}
