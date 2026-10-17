// === Module 11138: openPlaintextFilePreview ===

// Module 11138 (openPlaintextFilePreview)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export const openPlaintextFilePreview = function openPlaintextFilePreview(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11139, dependencyMap.paths), merged, PlaintextFilePreview);
};