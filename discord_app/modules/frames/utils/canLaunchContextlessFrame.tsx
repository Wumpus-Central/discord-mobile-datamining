// === Module 11890: canLaunchContextlessFrame ===

// Module 11890 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5799 */;
import getFrameSurfaces from "getFrameSurfaces" /* 11850 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const frameSurfaces = getFrameSurfaces.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}