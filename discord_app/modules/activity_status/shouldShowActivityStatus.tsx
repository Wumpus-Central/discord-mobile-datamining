// discord_app/modules/activity_status/shouldShowActivityStatus.tsx
import Constants from "../../../discord_common/js/shared/Constants.tsx";
import ActivityTypes from "../../../discord_common/js/shared/shared-constants/ActivityTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

const StatusTypes = Constants.StatusTypes;
const result = size.fileFinishedImporting("modules/activity_status/shouldShowActivityStatus.tsx");

export default function shouldShowActivityStatus(arg0) {
  ({ activities, status } = arg0);
  if (status !== StatusTypes.OFFLINE) {
    if (status !== StatusTypes.INVISIBLE) {
      if (activities != null) {
        const found = activities.filter((type) => type.type !== ActivityTypes.ActivityTypes.HANG_STATUS);
      }
      let tmp4 = null != tmp || null != tmp2;
      if (!tmp4) {
        let num;
        if (found != null) {
          num = found.length;
        }
        if (num == null) {
          num = 0;
        }
        tmp4 = num > 0;
      }
      return tmp4;
    }
  }
  return false;
}
