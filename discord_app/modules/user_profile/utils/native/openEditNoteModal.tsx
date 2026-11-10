// discord_app/modules/user_profile/utils/native/openEditNoteModal.tsx
import asyncRequireImpl from "../../../../../_runtime/02118_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15172, dependencyMap.paths), merged, undefined, {
    presentation: "modal",
  });
}
