// === Module 9576: canLaunchFrame ===

// Module 9576 (canLaunchFrame)
import Constants from "Constants" /* 1074 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8925 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9358 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let tmpResult = ApplicationFlagUtils;
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      tmpResult = ApplicationFlagUtils;
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = AppLauncherUtils;
  }
  return false;
};