// === Module 10780: tryLaunchAsFrame ===

// Module 10780 (tryLaunchAsFrame)
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 10768 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10769 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;

require = fn;
const MAIN_SURFACE = fn(10767).MAIN_SURFACE;
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