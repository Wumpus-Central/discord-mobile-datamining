// === Module 16688: isLeftBuilderPreviewFrame ===

// Module 16688 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6909 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 11005 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 11052 */;

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