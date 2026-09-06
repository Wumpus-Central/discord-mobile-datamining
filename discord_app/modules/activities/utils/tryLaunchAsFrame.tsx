// discord_app/modules/activities/utils/tryLaunchAsFrame.tsx
import canLaunchFrame from "../../frames/utils/canLaunchFrame.tsx";
import FramesActionCreatorsDefault from "../../frames/FramesActionCreators.native.tsx";
import ApplicationStore from "../../applications/ApplicationStore.tsx";

require = fn;
const MAIN_SURFACE = fn(9511).MAIN_SURFACE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  ({ customId, referrerId, analyticsContext } = applicationId);
  const application = ApplicationStore.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    let obj = canLaunchFrame;
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { applicationId, surface: MAIN_SURFACE, customId, referrerId, analyticsContext };
    FramesActionCreatorsDefault.launchFrame(obj);
    flag = true;
  }
  return flag;
};
