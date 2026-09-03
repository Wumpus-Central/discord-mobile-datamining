// discord_app/modules/activities/utils/tryLaunchAsFrame.tsx
import _launchFrameOnNativeDefault from "../../frames/FramesActionCreators.native.tsx";
import canLaunchFrame from "../../frames/utils/canLaunchFrame.tsx";
import closure_3 from "../../applications/ApplicationStore.tsx";
import { MAIN_SURFACE } from "../../frames/FramesConstants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  ({ customId, referrerId } = applicationId);
  application = application.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    let obj = canLaunchFrame;
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { applicationId: null, surface: null, customId: null, referrerId: null };
    obj[0] = applicationId;
    obj[1] = MAIN_SURFACE;
    obj[2] = customId;
    obj[3] = referrerId;
    _launchFrameOnNativeDefault.launchFrame(obj);
    flag = true;
    const obj2 = _launchFrameOnNativeDefault;
  }
  return flag;
};
