// === Module 11204: openPlaintextFilePreview ===

// Module 11204 (openPlaintextFilePreview)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export const openPlaintextFilePreview = function openPlaintextFilePreview(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11205, dependencyMap.paths), merged, PlaintextFilePreview);
};