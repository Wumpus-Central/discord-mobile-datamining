// === Module 18426: openConjureFirstShareModal ===

// Module 18426 (openConjureFirstShareModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureFirstShareModal.tsx");

export default function openConjureFirstShareModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18427, dependencyMap.paths), merged, "ConjureFirstShareModal");
};