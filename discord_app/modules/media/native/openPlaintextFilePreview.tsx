// === Module 11807: openPlaintextFilePreview ===

// Module 11807 (openPlaintextFilePreview)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11808, dependencyMap.paths), merged, PlaintextFilePreview);
}