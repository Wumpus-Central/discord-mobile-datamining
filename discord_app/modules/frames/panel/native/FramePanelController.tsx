// === Module 16856: FramePanelController ===

// Module 16856 (FramePanelController)
import contextDefault from "context" /* 16857 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "addApplication" /* 4519 */;
import closure_5 from "map" /* 9477 */;
import { asLaunched } from "FrameLayoutModes" /* 9478 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 9479 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/frames/panel/native/FramePanelController.tsx");

export default function FramePanelController(children) {
  let mainFrameId;
  let obj = mainFrameId(586);
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
      closure_1_1(closure_1_2[7]).updateFramePanelMode(tmp, PIP);
      const obj = closure_1_1(closure_1_2[7]);
    }
  }, items1);
  obj = { context: contextDefault, orientationLockStateForApp, mode, hasConnectedActivity: null != mainFrameId, connectedActivityAppId, currentApp, updateActivityPanelMode: callback, children: children.children };
  return jsx(mainFrameId(16823).BaseActivityPanelController, { context: contextDefault, orientationLockStateForApp, mode, hasConnectedActivity: null != mainFrameId, connectedActivityAppId, currentApp, updateActivityPanelMode: callback, children: children.children });
};