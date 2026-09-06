// discord_app/modules/app_launcher/utils/useLaunchingActivityButtonState.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import FramesStore from "../../frames/FramesStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/utils/useLaunchingActivityButtonState.tsx");

export default function useLaunchingActivityButtonState(applicationId) {
  applicationId = applicationId.applicationId;
  ({ context: importDefault, onSubmissionComplete } = applicationId);
  closure_4 = undefined;
  let obj = applicationId(onSubmissionComplete[3]);
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId);
  const items = [closure_4];
  const stateFromStores = applicationId(onSubmissionComplete[4]).useStateFromStores(items, () => {
    let id;
    if ("channel" === importDefault.type) {
      id = importDefault.channel.id;
    }
    return EmbeddedActivitiesStore.getLaunchState(applicationId, id);
  });
  const obj2 = applicationId(onSubmissionComplete[4]);
  let tmp = applicationId;
  const items1 = [FramesStore];
  let stateFromStores1 = applicationId(onSubmissionComplete[4]).useStateFromStores(items1, () => {
    const mainFrame = FramesStore.getMainFrame();
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
    stateFromStores1 =
      null != stateFromStores &&
      stateFromStores.isLaunching &&
      stateFromStores.componentId === applicationId.launchingComponentId;
    const tmp6 =
      null != stateFromStores &&
      stateFromStores.isLaunching &&
      stateFromStores.componentId === applicationId.launchingComponentId;
  } else {
    const tmpResult = tmp(tmp2[5]);
  }
  let tmp7 = require("usePrevious")(stateFromStores1);
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
  obj.wasSubmitting = tmp7;
  return obj;
}
