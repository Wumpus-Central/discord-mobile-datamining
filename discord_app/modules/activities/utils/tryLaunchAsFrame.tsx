// discord_app/modules/activities/utils/tryLaunchAsFrame.tsx
import addApplication from "addApplication";

const require = arg1;
const result = require("_launchFrameOnNative").fileFinishedImporting("modules/activities/utils/tryLaunchAsFrame.tsx");

export const tryLaunchAsFrame = function tryLaunchAsFrame(applicationId) {
  applicationId = applicationId.applicationId;
  application = application.getApplication(applicationId);
  let tmp2 = null == application;
  if (!tmp2) {
    let obj = require(10519) /* canLaunchFrame */;
    tmp2 = !obj.canLaunchFrame(application);
  }
  let flag = !tmp2;
  if (!tmp2) {
    obj = { applicationId: null };
    obj[0] = applicationId;
    importDefault(5698).launchFrame(obj);
    flag = true;
    const obj2 = importDefault(5698);
  }
  return flag;
};