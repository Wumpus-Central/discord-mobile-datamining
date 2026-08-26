// === Module 10767: tryLaunchAsFrame ===

// Module 10767 (tryLaunchAsFrame)
import canLaunchFrame from "canLaunchFrame" /* 10752 */;
import _launchFrameOnNativeDefault from "_launchFrameOnNative" /* 10753 */;
import closure_3 from "addApplication" /* 4485 */;
import { MAIN_SURFACE } from "FrameLayoutModes" /* 10750 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  application = application.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    let obj = canLaunchFrame;
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { applicationId: null, surface: null };
    obj[0] = applicationId;
    obj[1] = MAIN_SURFACE;
    _launchFrameOnNativeDefault.launchFrame(obj);
    flag = true;
    const obj2 = _launchFrameOnNativeDefault;
  }
  return flag;
};