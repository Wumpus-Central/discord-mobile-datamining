// === Module 11629: useLaunchingActivityButtonState ===

// Module 11629 (useLaunchingActivityButtonState)
import closure_3 from "noop" /* 19 */;
import closure_4 from "participantFromServer" /* 1390 */;
import closure_5 from "map" /* 9385 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_launcher/utils/useLaunchingActivityButtonState.tsx");

export default function useLaunchingActivityButtonState(applicationId) {
  applicationId = applicationId.applicationId;
  ({ context: importDefault, onSubmissionComplete } = applicationId);
  let stateFromStores1;
  closure_4 = undefined;
  let obj = applicationId(onSubmissionComplete[3]);
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  const items = [closure_4];
  const stateFromStores = applicationId(onSubmissionComplete[4]).useStateFromStores(items, () => {
    let id;
    if ("channel" === closure_1.type) {
      id = closure_1.channel.id;
    }
    return launchState.getLaunchState(applicationId, id);
  });
  const obj2 = applicationId(onSubmissionComplete[4]);
  let tmp = applicationId;
  const items1 = [closure_5];
  stateFromStores1 = applicationId(onSubmissionComplete[4]).useStateFromStores(items1, () => {
    const mainFrame = closure_1_5.getMainFrame();
    let state;
    if (mainFrame != null) {
      state = mainFrame.state;
    }
    let tmp3 = "loading" === state;
    if (tmp3) {
      tmp3 = mainFrame.applicationId === applicationId;
    }
    return tmp3;
  });
  if (null == getOrFetchApplication) {
    stateFromStores1 = null != stateFromStores && stateFromStores.isLaunching && stateFromStores.componentId === applicationId.launchingComponentId;
    const tmp6 = null != stateFromStores && stateFromStores.isLaunching && stateFromStores.componentId === applicationId.launchingComponentId;
  } else {
    const tmpResult = tmp(tmp2[5]);
  }
  let tmp7 = importDefault(tmp2[6])(stateFromStores1);
  closure_4 = tmp7;
  const items2 = [stateFromStores1, tmp7, onSubmissionComplete];
  const effect = stateFromStores1.useEffect(() => {
    let tmp = !stateFromStores1;
    if (!stateFromStores1) {
      tmp = closure_4;
    }
    if (tmp) {
      if (onSubmissionComplete != null) {
        tmp2();
      }
    }
  }, items2);
  obj = { submitting: stateFromStores1, wasSubmitting: null };
  if (tmp7 == null) {
    tmp7 = null;
  }
  obj[1] = tmp7;
  return obj;
};