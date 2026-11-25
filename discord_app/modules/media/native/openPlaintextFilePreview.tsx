// === Module 12021: openPlaintextFilePreview ===

// Module 12021 (openPlaintextFilePreview)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const PlaintextFilePreview = "PlaintextFilePreview";
const result = size.fileFinishedImporting("modules/media/native/openPlaintextFilePreview.tsx");

export const PLAINTEXT_FILE_PREVIEW_MODAL_KEY = "PlaintextFilePreview";
export function openPlaintextFilePreview(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12022, dependencyMap.paths), merged, PlaintextFilePreview);
}