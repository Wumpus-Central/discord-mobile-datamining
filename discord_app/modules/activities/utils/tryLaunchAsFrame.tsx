// === Module 11256: tryLaunchAsFrame ===

// Module 11256 (tryLaunchAsFrame)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11042 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 11220 */;
import ApplicationStore from "ApplicationStore" /* 5540 */;

require = fn;
const MAIN_SURFACE = fn(6296).MAIN_SURFACE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  ({ launch, analyticsContext } = applicationId);
  const application = ApplicationStore.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    tmp2 = !canLaunchContextlessFrame.canLaunchContextlessFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    const obj3 = { applicationId, surface: MAIN_SURFACE, launch, analyticsContext };
    FramesActionCreatorsDefault.launchFrame(obj3);
    flag = true;
  }
  return flag;
};