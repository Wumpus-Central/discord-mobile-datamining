import "noop";
import addApplication from "addApplication";
import map from "map";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/frames/panel/native/FramePanelController.tsx");

export default function FramePanelController(children) {
  let connectedActivityAppId;
  let currentApp;
  let hasConnectedActivity;
  let mode;
  let orientationLockStateForApp;
  let obj = require(589) /* initialize */;
  const items = [map, addApplication];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let obj = store;
    const activityPanelMode = store.getActivityPanelMode();
    const connectedFrame = store.getConnectedFrame();
    let applicationId;
    if (connectedFrame != null) {
      applicationId = connectedFrame.applicationId;
    }
    obj = { mode: activityPanelMode, hasConnectedActivity: null != connectedFrame, connectedActivityAppId: applicationId, currentApp: null, orientationLockStateForApp: null };
    let application;
    if (null != applicationId) {
      application = application.getApplication(applicationId);
    }
    obj[3] = application;
    let orientationLockStateForApp;
    if (null != applicationId) {
      orientationLockStateForApp = obj.getOrientationLockStateForApp(applicationId);
    }
    obj[4] = orientationLockStateForApp;
    return obj;
  }, []);
  ({ mode, hasConnectedActivity, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  obj = { context: null, orientationLockStateForApp: null, mode: null, hasConnectedActivity: null, connectedActivityAppId: null, currentApp: null, updateActivityPanelMode: null, children: null };
  obj[0] = importDefault(15986);
  obj[1] = orientationLockStateForApp;
  obj[2] = mode;
  obj[3] = hasConnectedActivity;
  obj[4] = connectedActivityAppId;
  obj[5] = currentApp;
  obj[6] = importDefault(10510).updateFramePanelMode;
  obj[7] = children.children;
  return jsx(require(15952) /* BaseActivityPanelController */.BaseActivityPanelController, { context: null, orientationLockStateForApp: null, mode: null, hasConnectedActivity: null, connectedActivityAppId: null, currentApp: null, updateActivityPanelMode: null, children: null });
};