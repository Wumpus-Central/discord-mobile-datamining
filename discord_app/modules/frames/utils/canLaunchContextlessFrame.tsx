// === Module 10043: canLaunchContextlessFrame ===

// Module 10043 (canLaunchContextlessFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5656 */;
import getFrameSurfaces from "getFrameSurfaces" /* 10044 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export function canLaunchContextlessFrame(application) {
  const frameSurfaces = getFrameSurfaces.getFrameSurfaces(application);
  return frameSurfaces.has(EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
}