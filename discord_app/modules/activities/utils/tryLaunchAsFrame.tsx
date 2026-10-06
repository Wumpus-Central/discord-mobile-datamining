// === Module 9028: tryLaunchAsFrame ===

// Module 9028 (tryLaunchAsFrame)
import FramesConstants from "FramesConstants" /* 8738 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9019 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 9027 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import size from "module_2" /* 2 */;

const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
const result = size.fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  let analyticsContext;
  let customId;
  let referrerId;
  applicationId = applicationId.applicationId;
  ({ customId, referrerId, analyticsContext } = applicationId);
  const application = ApplicationStore.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    const obj = canLaunchContextlessFrame;
    tmp2 = !obj.canLaunchContextlessFrame(application);
  }
  let flag = !tmp2;
  if (flag) {
    const obj3 = { applicationId, surface: MAIN_SURFACE, customId, referrerId, analyticsContext };
    const obj2 = FramesActionCreatorsDefault;
    obj2.launchFrame(obj3);
    flag = true;
  }
  return flag;
};