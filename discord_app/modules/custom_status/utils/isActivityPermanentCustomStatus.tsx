// === Module 15900: isActivityPermanentCustomStatus ===

// Module 15900 (isActivityPermanentCustomStatus)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;

const ActivityTypes = ME.ActivityTypes;
const result = set.fileFinishedImporting("modules/custom_status/utils/isActivityPermanentCustomStatus.tsx");

export const isActivityPermanentCustomStatus = function isActivityPermanentCustomStatus(type) {
  let tmp = type.type === ActivityTypes.CUSTOM_STATUS;
  if (tmp) {
    const timestamps = type.timestamps;
    let end;
    if (timestamps != null) {
      end = timestamps.end;
    }
    tmp = null == end;
  }
  return tmp;
};