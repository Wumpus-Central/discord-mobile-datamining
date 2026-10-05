// === Module 17193: FramePanelController ===

// Module 17193 (FramePanelController)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8986 */;
import FramePanelStateContextDefault from "FramePanelStateContext" /* 17194 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import FramesStore from "FramesStore" /* 8703 */;

const require = fn;
const asLaunched = fn(8704).asLaunched;
const ActivityPanelModes = fn(8705).ActivityPanelModes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelController.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = mainFrameId(576).c(13);
  children = children.children;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore, ApplicationStore];
    const fn = function u() {
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
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  let obj = mainFrameId(576);
  const stateFromStoresObject = mainFrameId(504).useStateFromStoresObject(tmp4, tmp5, tmp6);
  mainFrameId = stateFromStoresObject.mainFrameId;
  ({ mode, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  if (cResult[3] !== mainFrameId) {
    const fn2 = function y(PIP) {
      if (null != mainFrameId) {
        FramesActionCreatorsDefault.updateFramePanelMode(tmp, PIP);
      }
    };
    cResult[3] = mainFrameId;
    cResult[4] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === children) {
    if (cResult[6] === connectedActivityAppId) {
      if (cResult[7] === currentApp) {
        if (cResult[8] === mode) {
          if (cResult[9] === orientationLockStateForApp) {
            if (cResult[10] === tmp11) {
              if (cResult[11] === tmp10) {
                let tmp12 = cResult[12];
              }
              return tmp12;
            }
          }
        }
      }
    }
  }
  const tmpResult = mainFrameId(504);
  const tmp13 = jsx(mainFrameId(17161).BaseActivityPanelController, { context: FramePanelStateContextDefault, orientationLockStateForApp, mode, hasConnectedActivity: null != mainFrameId, connectedActivityAppId, currentApp, updateActivityPanelMode: tmp10, children });
  cResult[5] = children;
  cResult[6] = connectedActivityAppId;
  cResult[7] = currentApp;
  cResult[8] = mode;
  cResult[9] = orientationLockStateForApp;
  cResult[10] = null != mainFrameId;
  cResult[11] = tmp10;
  cResult[12] = tmp13;
  tmp12 = tmp13;
  const obj2 = { context: FramePanelStateContextDefault, orientationLockStateForApp, mode, hasConnectedActivity: null != mainFrameId, connectedActivityAppId, currentApp, updateActivityPanelMode: tmp10, children };
}) : ((children) => {
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
  return jsx(mainFrameId(17161).BaseActivityPanelController, { context: FramePanelStateContextDefault, orientationLockStateForApp, mode, hasConnectedActivity: null != mainFrameId, connectedActivityAppId, currentApp, updateActivityPanelMode: callback, children: children.children });
});