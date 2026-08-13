// discord_app/modules/frames/utils/canLaunchFrame.tsx
import { ApplicationFlags } from "ME";
import { getShelfBadgeTypeIfActive } from "../../app_launcher/utils/AppLauncherUtils.tsx";

const result = require("getApplicationFlags").fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let tmpResult = tmp(7634);
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      tmpResult = tmp(7634);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = getShelfBadgeTypeIfActive;
  }
  return false;
};