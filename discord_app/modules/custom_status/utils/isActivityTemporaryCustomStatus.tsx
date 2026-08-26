// === Module 15501: isActivityTemporaryCustomStatus ===

// Module 15501 (isActivityTemporaryCustomStatus)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const ActivityTypes = ME.ActivityTypes;
const result = set.fileFinishedImporting("modules/custom_status/utils/isActivityTemporaryCustomStatus.tsx");

export const isActivityTemporaryCustomStatus = function isActivityTemporaryCustomStatus(type) {
  let tmp = type.type === ActivityTypes.CUSTOM_STATUS;
  if (tmp) {
    const timestamps = type.timestamps;
    let end;
    if (timestamps != null) {
      end = timestamps.end;
    }
    tmp = null != end;
  }
  if (tmp) {
    const timestamps2 = type.timestamps;
    let end1;
    if (timestamps2 != null) {
      end1 = timestamps2.end;
    }
    tmp = end1 > 0;
  }
  return tmp;
};