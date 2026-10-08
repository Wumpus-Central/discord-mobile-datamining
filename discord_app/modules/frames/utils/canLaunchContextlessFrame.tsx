// === Module 10617: canLaunchContextlessFrame ===

// Module 10617 (canLaunchContextlessFrame)
import Constants from "Constants" /* 1085 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2028 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8586 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9185 */;
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