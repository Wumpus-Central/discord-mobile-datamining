// === Module 9483: canLaunchFrame ===

// Module 9483 (canLaunchFrame)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getShelfBadgeTypeIfActive from "getShelfBadgeTypeIfActive" /* 8153 */;

const ApplicationFlags = ME.ApplicationFlags;
const result = set.fileFinishedImporting("modules/frames/utils/canLaunchFrame.tsx");

export const canLaunchFrame = function canLaunchFrame(application) {
  if (null != application) {
    if (obj.isRealApplication(application)) {
      let tmpResult = tmp(8445);
      let hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.EMBEDDED);
      tmpResult = tmp(8445);
      if (hasApplicationFlagResult) {
        hasApplicationFlagResult = tmpResult.hasApplicationFlag(application, ApplicationFlags.CONTEXTLESS_ACTIVITY);
      }
      return hasApplicationFlagResult;
    }
    obj = getShelfBadgeTypeIfActive;
  }
  return false;
};