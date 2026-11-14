// === Module 16994: isLeftBuilderPreviewFrame ===

// Module 16994 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 7028 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7339 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 15974 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/background_frames/isLeftBuilderPreviewFrame.tsx");

export default function isLeftBuilderPreviewFrame(surface) {
  let result = conjurePreviewSurface.isConjurePreviewSurface(surface.surface);
  if (result) {
    result = isConjureApplicationDefault(surface.applicationId);
  }
  if (result) {
    result = ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== surface.applicationId;
  }
  return result;
};