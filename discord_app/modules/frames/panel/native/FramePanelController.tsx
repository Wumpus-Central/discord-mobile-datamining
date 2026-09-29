// === Module 17051: FramePanelController ===

// Module 17051 (FramePanelController)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8925 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17052 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import FramesStore from "FramesStore" /* 8664 */;

const require = fn;
const asLaunched = fn(8665).asLaunched;
const ActivityPanelModes = fn(8667).ActivityPanelModes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelController.tsx");

export default function FramePanelController(children) {
  let mainFrameId;
  const items = [FramesStore, ApplicationStore];
  const stateFromStoresObject = mainFrameId(504).useStateFromStoresObject(items, () => {
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
  let obj = mainFrameId(504);
  return jsx(mainFrameId(17018).BaseActivityPanelController, { context: FramePanelStateContextDefault, orientationLockStateForApp, mode, hasConnectedActivity: null != mainFrameId, connectedActivityAppId, currentApp, updateActivityPanelMode: callback, children: children.children });
};