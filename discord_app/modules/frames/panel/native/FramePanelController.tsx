// discord_app/modules/frames/panel/native/FramePanelController.tsx
import "noop";
import addApplication from "addApplication";
import map from "map";
import { asLaunched } from "FrameLayoutModes";
import { ActivityPanelModes } from "ActivityPanelModes";
import { jsx } from "jsxProd";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { BaseActivityPanelController } from "../../../activities/panel/native/ActivityPanelController.tsx";
import { _launchFrameOnNative } from "../../FramesActionCreators.native.tsx";
import { context } from "FramePanelStateContext.tsx";

const require = arg1;
const result = require("map").fileFinishedImporting("modules/frames/panel/native/FramePanelController.tsx");

export default function FramePanelController(children) {
  let connectedActivityAppId;
  let currentApp;
  let hasConnectedActivity;
  let mode;
  let orientationLockStateForApp;
  let obj = initialize;
  const items = [map, addApplication];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const tmp = callback(mainFrame.getMainFrame());
    let activityPanelMode;
    if (tmp != null) {
      activityPanelMode = tmp.data.activityPanelMode;
    }
    if (activityPanelMode == null) {
      activityPanelMode = constants.DISCONNECTED;
    }
    let applicationId;
    if (tmp != null) {
      applicationId = tmp.applicationId;
    }
    const obj = { mode: activityPanelMode, hasConnectedActivity: null != tmp, connectedActivityAppId: applicationId, currentApp: null, orientationLockStateForApp: null };
    let application;
    if (null != applicationId) {
      application = application.getApplication(applicationId);
    }
    obj[3] = application;
    let orientationLock;
    if (tmp != null) {
      orientationLock = tmp.data.orientationLock;
    }
    obj[4] = orientationLock;
    return obj;
  }, []);
  ({ mode, hasConnectedActivity, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  obj = { context: null, orientationLockStateForApp: null, mode: null, hasConnectedActivity: null, connectedActivityAppId: null, currentApp: null, updateActivityPanelMode: null, children: null };
  obj[0] = context;
  obj[1] = orientationLockStateForApp;
  obj[2] = mode;
  obj[3] = hasConnectedActivity;
  obj[4] = connectedActivityAppId;
  obj[5] = currentApp;
  obj[6] = _launchFrameOnNative.updateFramePanelMode;
  obj[7] = children.children;
  return jsx(BaseActivityPanelController.BaseActivityPanelController, { context: null, orientationLockStateForApp: null, mode: null, hasConnectedActivity: null, connectedActivityAppId: null, currentApp: null, updateActivityPanelMode: null, children: null });
};