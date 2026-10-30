// === Module 18407: shouldShowActivityStatus ===

// Module 18407 (shouldShowActivityStatus)
import Constants from "Constants" /* 1083 */;
import ActivityTypes from "ActivityTypes" /* 5757 */;
import size from "module_2" /* 2 */;

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
};