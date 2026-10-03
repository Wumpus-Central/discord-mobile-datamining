// === Module 8995: tryLaunchAsFrame ===

// Module 8995 (tryLaunchAsFrame)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8986 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 8994 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;

require = fn;
const MAIN_SURFACE = fn(8704).MAIN_SURFACE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  ({ customId, referrerId, analyticsContext } = applicationId);
  const application = ApplicationStore.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    tmp2 = !canLaunchContextlessFrame.canLaunchContextlessFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    const obj3 = { applicationId, surface: MAIN_SURFACE, customId, referrerId, analyticsContext };
    FramesActionCreatorsDefault.launchFrame(obj3);
    flag = true;
  }
  return flag;
};