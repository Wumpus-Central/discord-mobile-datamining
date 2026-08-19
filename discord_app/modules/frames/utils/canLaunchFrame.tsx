// === Module 8704: canLaunchFrame ===

// Module 8704 (canLaunchFrame)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getApplicationFlags from "getApplicationFlags" /* 7873 */;
import getShelfBadgeTypeIfActive from "getShelfBadgeTypeIfActive" /* 8447 */;

const ApplicationFlags = ME.ApplicationFlags;
const result = obj132.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let tmpResult = getApplicationFlags;
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      tmpResult = getApplicationFlags;
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = getShelfBadgeTypeIfActive;
  }
  return false;
};