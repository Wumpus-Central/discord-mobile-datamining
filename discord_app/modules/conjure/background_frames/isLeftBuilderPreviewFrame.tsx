// === Module 17029: isLeftBuilderPreviewFrame ===

// Module 17029 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 7036 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7349 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 16011 */;

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