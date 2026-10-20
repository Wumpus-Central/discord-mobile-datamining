// === Module 11622: openConjureModal ===

// Module 11622 (openConjureModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/builder/native/openConjureModal.tsx");

export default function openConjureModal(guildId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { guildId };
  obj.pushLazy(asyncRequireImpl(11623, dependencyMap.paths), obj2, "conjure_modal_" + guildId);
};