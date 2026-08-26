// === Module 15825: shouldShowActivityStatus ===

// Module 15825 (shouldShowActivityStatus)
import set from "set" /* 2 */;
import sum from "sum" /* 505 */;
import ME from "ME" /* 676 */;

const ActivityTypes = ME.ActivityTypes;
const StatusTypes = sum.StatusTypes;
const result = set.fileFinishedImporting("modules/activity_status/shouldShowActivityStatus.tsx");

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
};