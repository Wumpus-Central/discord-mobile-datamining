// === Module 15327: isActivityPermanentCustomStatus ===

// Module 15327 (isActivityPermanentCustomStatus)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const ActivityTypes = ME.ActivityTypes;
const result = obj132.fileFinishedImporting("modules/custom_status/utils/isActivityPermanentCustomStatus.tsx");

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