// === Module 12069: openPlaintextFilePreview ===

// Module 12069 (openPlaintextFilePreview)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12070, dependencyMap.paths), merged, PlaintextFilePreview);
}