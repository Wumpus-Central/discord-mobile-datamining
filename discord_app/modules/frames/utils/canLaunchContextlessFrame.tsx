// discord_app/modules/frames/utils/canLaunchContextlessFrame.tsx
import Constants from "../../../Constants.tsx";
import EmbeddedSurfaceUtils from "../../applications/utils/EmbeddedSurfaceUtils.tsx";
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import AppLauncherUtils from "../../app_launcher/utils/AppLauncherUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ApplicationFlags = Constants.ApplicationFlags;
let result = size.fileFinishedImporting("modules/frames/utils/canLaunchContextlessFrame.tsx");

export const canLaunchContextlessFrame = function canLaunchContextlessFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let result = EmbeddedSurfaceUtils.supportsEmbeddedSurface(
        application,
        EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN,
      );
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
