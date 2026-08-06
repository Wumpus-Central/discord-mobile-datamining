// discord_app/modules/activities/utils/tryLaunchAsFrame.tsx
import addApplication from "addApplication";
import { MAIN_SURFACE } from "FrameLayoutModes";
import { _launchFrameOnNative } from "../../frames/FramesActionCreators.native.tsx";
import { canLaunchFrame } from "../../frames/utils/canLaunchFrame.tsx";

const require = arg1;
const result = require("canLaunchFrame").fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

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
    _launchFrameOnNative.launchFrame(obj);
    flag = true;
    const obj2 = _launchFrameOnNative;
  }
  return flag;
};