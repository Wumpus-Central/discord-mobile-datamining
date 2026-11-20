// === Module 15630: isLeftBuilderPreviewFrame ===

// Module 15630 (isLeftBuilderPreviewFrame)
import isConjureApplicationDefault from "isConjureApplication" /* 6513 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 6824 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 14613 */;

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