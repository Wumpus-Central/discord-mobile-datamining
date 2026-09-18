// === Module 9744: canLaunchFrame ===

// Module 9744 (canLaunchFrame)
import Constants from "Constants" /* 1074 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 9095 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9527 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      const tmpResult = ApplicationFlagUtils;
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult2.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = AppLauncherUtils;
  }
  return false;
};