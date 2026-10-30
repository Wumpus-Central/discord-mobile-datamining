// === Module 18069: isActivityTemporaryCustomStatus ===

// Module 18069 (isActivityTemporaryCustomStatus)
import ActivityTypes from "ActivityTypes" /* 5757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/isActivityTemporaryCustomStatus.tsx");

export function isActivityTemporaryCustomStatus(type) {
  let tmp = type.type === ActivityTypes.ActivityTypes.CUSTOM_STATUS;
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
}