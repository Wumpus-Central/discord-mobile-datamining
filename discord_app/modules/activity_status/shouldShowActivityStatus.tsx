// discord_app/modules/activity_status/shouldShowActivityStatus.tsx
import Constants from "../../Constants.tsx";
import Constants2 from "../../../discord_common/js/shared/Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ActivityTypes = Constants.ActivityTypes;
const StatusTypes = Constants2.StatusTypes;
const result = size.fileFinishedImporting("modules/activity_status/shouldShowActivityStatus.tsx");

export default function shouldShowActivityStatus(arg0) {
  ({ activities, status } = arg0);
  if (status !== StatusTypes.OFFLINE) {
    if (status !== StatusTypes.INVISIBLE) {
      if (activities != null) {
        const found = activities.filter((type) => type.type !== constants.HANG_STATUS);
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
