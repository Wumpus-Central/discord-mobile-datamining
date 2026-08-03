import noop from "noop";
import participantFromServer from "participantFromServer";
import map from "map";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/app_launcher/utils/useLaunchingActivityButtonState.tsx");

export default function useLaunchingActivityButtonState(applicationId) {
  let importDefault;
  let onSubmissionComplete;
  applicationId = applicationId.applicationId;
  ({ context: importDefault, onSubmissionComplete } = applicationId);
  let stateFromStores1;
  let c4;
  let obj = applicationId(onSubmissionComplete[3]);
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  const items = [c4];
  const stateFromStores = applicationId(onSubmissionComplete[4]).useStateFromStores(items, () => {
    let id;
    if ("channel" === closure_1.type) {
      id = closure_1.channel.id;
    }
    return _undefined.getLaunchState(applicationId, id);
  });
  const obj2 = applicationId(onSubmissionComplete[4]);
  let tmp = applicationId;
  const items1 = [map];
  stateFromStores1 = applicationId(onSubmissionComplete[4]).useStateFromStores(items1, () => outer1_5.isLaunchingFrame(applicationId));
  if (null == getOrFetchApplication) {
    stateFromStores1 = null != stateFromStores && stateFromStores.isLaunching && stateFromStores.componentId === applicationId.launchingComponentId;
    const tmp6 = null != stateFromStores && stateFromStores.isLaunching && stateFromStores.componentId === applicationId.launchingComponentId;
  } else {
    const tmpResult = tmp(tmp2[5]);
  }
  let tmp7 = importDefault(tmp2[6])(stateFromStores1);
  c4 = tmp7;
  const items2 = [stateFromStores1, tmp7, onSubmissionComplete];
  const effect = stateFromStores1.useEffect(() => {
    let tmp = !stateFromStores1;
    if (!stateFromStores1) {
      tmp = c4;
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