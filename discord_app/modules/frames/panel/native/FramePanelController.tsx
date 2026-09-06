// discord_app/modules/frames/panel/native/FramePanelController.tsx
import FramesActionCreatorsDefault from "../../FramesActionCreators.native.tsx";
import FramePanelStateContextDefault from "FramePanelStateContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import FramesStore from "../../FramesStore.tsx";

const require = fn;
const asLaunched = fn(9511).asLaunched;
const ActivityPanelModes = fn(9505).ActivityPanelModes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelController.tsx");

export default function FramePanelController(children) {
  let mainFrameId;
  let obj = mainFrameId(504);
  const items = [FramesStore, ApplicationStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const tmp = asLaunched(mainFrame.getMainFrame());
    let mode;
    if (tmp != null) {
      mode = tmp.data.activityPanelMode;
    }
    if (mode == null) {
      mode = constants.DISCONNECTED;
    }
    let connectedActivityAppId;
    if (tmp != null) {
      connectedActivityAppId = tmp.applicationId;
    }
    let currentApp;
    if (null != connectedActivityAppId) {
      currentApp = application.getApplication(connectedActivityAppId);
    }
    let orientationLockStateForApp;
    if (tmp != null) {
      orientationLockStateForApp = tmp.data.orientationLock;
    }
    mainFrameId = undefined;
    if (tmp != null) {
      mainFrameId = tmp.id;
    }
    return { mainFrameId, mode, connectedActivityAppId, currentApp, orientationLockStateForApp };
  }, []);
  mainFrameId = stateFromStoresObject.mainFrameId;
  const items1 = [mainFrameId];
  ({ mode, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  const callback = noop.useCallback((PIP) => {
    if (null != mainFrameId) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp, PIP);
    }
  }, items1);
  obj = {
    context: FramePanelStateContextDefault,
    orientationLockStateForApp,
    mode,
    hasConnectedActivity: null != mainFrameId,
    connectedActivityAppId,
    currentApp,
    updateActivityPanelMode: callback,
    children: children.children,
  };
  return jsx(mainFrameId(17007).BaseActivityPanelController, {
    context: FramePanelStateContextDefault,
    orientationLockStateForApp,
    mode,
    hasConnectedActivity: null != mainFrameId,
    connectedActivityAppId,
    currentApp,
    updateActivityPanelMode: callback,
    children: children.children,
  });
}
