// discord_app/modules/conjure/builder/native/openConjureModal.tsx
import asyncRequireImpl from "../../../../../_runtime/01999_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId };
  obj.pushLazy(asyncRequireImpl(11747, dependencyMap.paths), obj2, "conjure_modal_" + guildId);
}
