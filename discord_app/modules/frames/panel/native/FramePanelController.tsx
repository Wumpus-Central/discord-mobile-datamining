// === Module 16259: FramePanelController ===

// Module 16259 (FramePanelController)
import _launchFrameOnNativeDefault from "_launchFrameOnNative" /* 8705 */;
import contextDefault from "context" /* 16260 */;
import noop from "noop" /* 19 */;
import addApplication from "addApplication" /* 4478 */;
import map from "map" /* 8708 */;
import { asLaunched } from "FrameLayoutModes" /* 8709 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 8703 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/frames/panel/native/FramePanelController.tsx");

export default function FramePanelController(children) {
  let mainFrameId;
  let obj = mainFrameId(589);
  const items = [closure_5, closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const tmp = callback(mainFrame.getMainFrame());
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
  const callback = React.useCallback((PIP) => {
    if (null != mainFrameId) {
      _launchFrameOnNativeDefault.updateFramePanelMode(tmp, PIP);
    }
  }, items1);
  obj = { context: contextDefault, orientationLockStateForApp, mode, hasConnectedActivity: null != mainFrameId, connectedActivityAppId, currentApp, updateActivityPanelMode: callback, children: children.children };
  return jsx(mainFrameId(16226).BaseActivityPanelController, { context: contextDefault, orientationLockStateForApp, mode, hasConnectedActivity: null != mainFrameId, connectedActivityAppId, currentApp, updateActivityPanelMode: callback, children: children.children });
};