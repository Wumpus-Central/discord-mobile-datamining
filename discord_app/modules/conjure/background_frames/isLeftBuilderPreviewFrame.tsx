// === Module 15953: isLeftBuilderPreviewFrame ===

// Module 15953 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6945 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 7677 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14740 */;

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