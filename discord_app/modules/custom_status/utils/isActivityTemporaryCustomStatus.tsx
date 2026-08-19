// discord_app/modules/custom_status/utils/isActivityTemporaryCustomStatus.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";

const ActivityTypes = ME.ActivityTypes;
const result = obj132.fileFinishedImporting("modules/custom_status/utils/isActivityTemporaryCustomStatus.tsx");

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