// discord_app/modules/activities/utils/tryLaunchAsFrame.tsx
import canLaunchFrame from "../../frames/utils/canLaunchFrame.tsx";
import _launchFrameOnNativeDefault from "../../frames/FramesActionCreators.native.tsx";
import addApplication from "../../applications/ApplicationStore.tsx";
import { MAIN_SURFACE } from "../../frames/FramesConstants.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

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
  }
  return flag;
};