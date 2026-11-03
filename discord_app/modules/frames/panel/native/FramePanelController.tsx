// === Module 19312: FramePanelController ===

// Module 19312 (FramePanelController)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11065 */;
import conjureBackgroundFrames from "conjureBackgroundFrames" /* 16509 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 19313 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2167 */;
import FramesStore from "FramesStore" /* 6966 */;

require = fn;
const asLaunched = fn(6967).asLaunched;
const ActivityPanelModes = fn(5777).ActivityPanelModes;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelController.tsx");

export default function FramePanelController(children) {
  let mainFrameId;
  items = [FramesStore, ApplicationStore];
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
      const frame = FramesStore.getFrame(mainFrameId);
      let result = PIP === ActivityPanelModes.PANEL && null != frame;
      if (result) {
        result = conjureBackgroundFrames.returnToConjureFrameSurface(frame);
      }
      if (!result) {
        FramesActionCreatorsDefault.updateFramePanelMode(mainFrameId, PIP);
      }
    }
  }, items1);
  let obj = mainFrameId(504);
  return jsx(mainFrameId(19285).BaseActivityPanelController, { context: FramePanelStateContextDefault, orientationLockStateForApp, mode, hasConnectedActivity: null != mainFrameId, connectedActivityAppId, currentApp, updateActivityPanelMode: callback, children: children.children });
};