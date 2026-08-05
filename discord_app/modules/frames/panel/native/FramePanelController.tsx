// discord_app/modules/frames/panel/native/FramePanelController.tsx
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
  let obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
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
  obj[0] = require("FramePanelStateContext.tsx");
  obj[1] = orientationLockStateForApp;
  obj[2] = mode;
  obj[3] = hasConnectedActivity;
  obj[4] = connectedActivityAppId;
  obj[5] = currentApp;
  obj[6] = require("../../FramesActionCreators.native.tsx").updateFramePanelMode;
  obj[7] = children.children;
  return jsx(require("../../../activities/panel/native/ActivityPanelController.tsx") /* BaseActivityPanelController */.BaseActivityPanelController, { context: null, orientationLockStateForApp: null, mode: null, hasConnectedActivity: null, connectedActivityAppId: null, currentApp: null, updateActivityPanelMode: null, children: null });
};