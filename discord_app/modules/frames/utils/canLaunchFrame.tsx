// discord_app/modules/frames/utils/canLaunchFrame.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";
import getApplicationFlags from "../../applications/utils/ApplicationFlagUtils.tsx";
import getShelfBadgeTypeIfActive from "../../app_launcher/utils/AppLauncherUtils.tsx";

const ApplicationFlags = ME.ApplicationFlags;
const result = obj132.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let tmpResult = getApplicationFlags;
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      tmpResult = getApplicationFlags;
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = getShelfBadgeTypeIfActive;
  }
  return false;
};