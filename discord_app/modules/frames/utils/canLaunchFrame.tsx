// === Module 9660: canLaunchFrame ===

// Module 9660 (canLaunchFrame)
import Constants from "Constants" /* 1074 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 9011 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9443 */;
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