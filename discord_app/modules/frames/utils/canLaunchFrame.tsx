// discord_app/modules/frames/utils/canLaunchFrame.tsx
import Constants from "../../../Constants.tsx";
import AppLauncherUtils from "../../app_launcher/utils/AppLauncherUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let tmpResult = tmp(8856);
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      tmpResult = tmp(8856);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = AppLauncherUtils;
  }
  return false;
};
