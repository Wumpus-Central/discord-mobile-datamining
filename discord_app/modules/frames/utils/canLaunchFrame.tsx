// discord_app/modules/frames/utils/canLaunchFrame.tsx
import { ApplicationFlags } from "ME";

const result = require("getApplicationFlags").fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let tmpResult = tmp(7510);
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      tmpResult = tmp(7510);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = require("../../app_launcher/utils/AppLauncherUtils.tsx") /* getShelfBadgeTypeIfActive */;
  }
  return false;
};