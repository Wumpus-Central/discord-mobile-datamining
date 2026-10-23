// === Module 11374: tryLaunchAsFrame ===

// Module 11374 (tryLaunchAsFrame)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10765 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 11341 */;
import openFrameInAppChannelDefault from "openFrameInAppChannel" /* 11375 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;

require = fn;
const MAIN_SURFACE = fn(6774).MAIN_SURFACE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(arg0) {
  ({ applicationId, application } = arg0);
  if (application === undefined) {
    application = ApplicationStore.getApplication(applicationId);
  }
  ({ analyticsContext, preferAppChannel, launch } = arg0);
  if (preferAppChannel === undefined) {
    preferAppChannel = false;
  }
  let tmp2 = null == application;
  if (!tmp2) {
    tmp2 = !canLaunchContextlessFrame.canLaunchContextlessFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    if (preferAppChannel) {
      if (null != application.conjureProjectId) {
        const obj3 = { applicationId, analyticsContext };
        openFrameInAppChannelDefault(obj3);
        flag = true;
      }
    }
    const obj4 = { applicationId, surface: MAIN_SURFACE, launch, analyticsContext };
    FramesActionCreatorsDefault.launchFrame(obj4);
    flag = true;
  }
  return flag;
};