// === Module 14561: openConjureFirstShareModal ===

// Module 14561 (openConjureFirstShareModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureFirstShareModal.tsx");

export default function openConjureFirstShareModal(merged) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14562, dependencyMap.paths), merged, "ConjureFirstShareModal");
};