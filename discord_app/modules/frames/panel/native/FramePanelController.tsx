// === Module 17122: FramePanelController ===

// Module 17122 (FramePanelController)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9598 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17123 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4834 */;
import FramesStore from "FramesStore" /* 9601 */;

const require = fn;
const asLaunched = fn(9602).asLaunched;
const ActivityPanelModes = fn(9596).ActivityPanelModes;
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
  obj = { context: FramePanelStateContextDefault, orientationLockStateForApp, mode, hasConnectedActivity: null != mainFrameId, connectedActivityAppId, currentApp, updateActivityPanelMode: callback, children: children.children };
  return jsx(mainFrameId(17089).BaseActivityPanelController, { context: FramePanelStateContextDefault, orientationLockStateForApp, mode, hasConnectedActivity: null != mainFrameId, connectedActivityAppId, currentApp, updateActivityPanelMode: callback, children: children.children });
};