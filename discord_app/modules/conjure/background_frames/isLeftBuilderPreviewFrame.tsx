// === Module 15902: isLeftBuilderPreviewFrame ===

// Module 15902 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6914 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7646 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14687 */;

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