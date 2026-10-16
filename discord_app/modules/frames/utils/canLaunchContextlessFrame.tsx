// === Module 11141: canLaunchContextlessFrame ===

// Module 11141 (canLaunchContextlessFrame)
import Constants from "Constants" /* 1087 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2032 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 7261 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9483 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
let result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export const canLaunchContextlessFrame = function canLaunchContextlessFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let result = EmbeddedSurfaceUtils.supportsEmbeddedSurface(application, EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN);
      const tmpResult = EmbeddedSurfaceUtils;
      if (result) {
        result = tmpResult2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return result;
    }
    obj = AppLauncherUtils;
  }
  return false;
};