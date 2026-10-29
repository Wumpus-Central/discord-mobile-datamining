// === Module 18565: isConjureAppChannelFrame ===

// Module 18565 (isConjureAppChannelFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5664 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6841 */;
import conjurePreviewSurface from "conjurePreviewSurface" /* 10840 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/background_frames/isConjureAppChannelFrame.tsx");

export default function isConjureAppChannelFrame(surface) {
  let tmp3 = surface.surface.type === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL;
  if (tmp3) {
    tmp3 = !conjurePreviewSurface.isConjurePreviewSurface(surface.surface);
    const tmpResult = conjurePreviewSurface;
  }
  if (tmp3) {
    tmp3 = isConjureApplicationDefault(surface.applicationId);
  }
  return tmp3;
};