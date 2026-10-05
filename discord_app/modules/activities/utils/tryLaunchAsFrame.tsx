// discord_app/modules/activities/utils/tryLaunchAsFrame.tsx
import FramesConstants from "../../frames/FramesConstants.tsx";
import FramesActionCreatorsDefault from "../../frames/FramesActionCreators.native.tsx";
import canLaunchContextlessFrame from "../../frames/utils/canLaunchContextlessFrame.tsx";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const MAIN_SURFACE = FramesConstants.MAIN_SURFACE;
const result = size.fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  let analyticsContext;
  let customId;
  let referrerId;
  applicationId = applicationId.applicationId;
  ({ customId, referrerId, analyticsContext } = applicationId);
  const application = ApplicationStore.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    const obj = canLaunchContextlessFrame;
    tmp2 = !obj.canLaunchContextlessFrame(application);
  }
  let flag = !tmp2;
  if (flag) {
    const obj3 = { applicationId, surface: MAIN_SURFACE, customId, referrerId, analyticsContext };
    const obj2 = FramesActionCreatorsDefault;
    obj2.launchFrame(obj3);
    flag = true;
  }
  return flag;
};
