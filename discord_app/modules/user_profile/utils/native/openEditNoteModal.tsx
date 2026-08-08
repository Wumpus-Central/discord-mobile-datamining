// discord_app/modules/user_profile/utils/native/openEditNoteModal.tsx
import { asyncRequireImpl } from "../../../../../_runtime/01988_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(closure_0) {
  ModalActionCreators.pushLazy(asyncRequireImpl(12332, dependencyMap.paths), closure_0, undefined, { presentation: "modal" });
};