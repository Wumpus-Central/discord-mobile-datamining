// === Module 9601: tryLaunchAsFrame ===

// Module 9601 (tryLaunchAsFrame)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9577 */;
import canLaunchFrame from "canLaunchFrame" /* 9600 */;
import ApplicationStore from "ApplicationStore" /* 4984 */;

require = fn;
const MAIN_SURFACE = fn(9319).MAIN_SURFACE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  ({ customId, referrerId, analyticsContext } = applicationId);
  const application = ApplicationStore.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    tmp2 = !canLaunchFrame.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    const obj3 = { applicationId, surface: MAIN_SURFACE, customId, referrerId, analyticsContext };
    FramesActionCreatorsDefault.launchFrame(obj3);
    flag = true;
  }
  return flag;
};