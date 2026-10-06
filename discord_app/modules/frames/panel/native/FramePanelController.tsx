// discord_app/modules/frames/panel/native/FramePanelController.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import FramesConstants from "../../FramesConstants.tsx";
import ActivityPanelConstants from "../../../activities/panel/ActivityPanelConstants.tsx";
import FramesActionCreatorsDefault from "../../FramesActionCreators.native.tsx";
import FramePanelStateContextDefault from "FramePanelStateContext.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import FramesStore from "../../FramesStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let children;

const asLaunched = FramesConstants.asLaunched;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let application;
      let connectedActivityAppId;
      let currentApp;
      let mainFrame;
      let mainFrameId;
      let mode;
      let orientationLockStateForApp;
      let tmp10;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp = mainFrameId;
      let obj = mainFrameId(576);
      const cResult = obj.c(13);
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
      const tmpResult = tmp(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5, tmp6);
      mainFrameId = stateFromStoresObject.mainFrameId;
      ({ mode, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
      if (cResult[3] !== mainFrameId) {
        const fn2 = function y(PIP) {
          if (null != mainFrameId) {
            const obj = FramesActionCreatorsDefault;
            obj.updateFramePanelMode(tmp, PIP);
          }
        };
        cResult[3] = mainFrameId;
        cResult[4] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === children) {
        if (cResult[6] === connectedActivityAppId) {
          if (cResult[7] === currentApp) {
            if (cResult[8] === mode) {
              if (cResult[9] === orientationLockStateForApp) {
                if ((cResult[10] === null) != mainFrameId) {
                  let tmp12;
                  if (cResult[11] === tmp10) {
                    tmp12 = cResult[12];
                  }
                  return tmp12;
                }
              }
            }
          }
        }
      }
      const BaseActivityPanelController = tmp(17190).BaseActivityPanelController;
      const tmp13 = (
        <BaseActivityPanelController
          context={FramePanelStateContextDefault}
          orientationLockStateForApp={orientationLockStateForApp}
          mode={mode}
          hasConnectedActivity={null != mainFrameId}
          connectedActivityAppId={connectedActivityAppId}
          currentApp={currentApp}
          updateActivityPanelMode={tmp10}
        >
          {children}
        </BaseActivityPanelController>
      );
      cResult[5] = children;
      cResult[6] = connectedActivityAppId;
      cResult[7] = currentApp;
      cResult[8] = mode;
      cResult[9] = orientationLockStateForApp;
      cResult[10] = null != mainFrameId;
      cResult[11] = tmp10;
      cResult[12] = tmp13;
      tmp12 = tmp13;
    }
  : (children) => {
      let application;
      let connectedActivityAppId;
      let currentApp;
      let mainFrame;
      let mode;
      let orientationLockStateForApp;
      let mainFrameId;
      children = children.children;
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
      const callback = react.useCallback((PIP) => {
        if (null != mainFrameId) {
          const obj = FramesActionCreatorsDefault;
          obj.updateFramePanelMode(tmp, PIP);
        }
      }, items1);
      const BaseActivityPanelController = mainFrameId(17190).BaseActivityPanelController;
      return (
        <BaseActivityPanelController
          context={FramePanelStateContextDefault}
          orientationLockStateForApp={orientationLockStateForApp}
          mode={mode}
          hasConnectedActivity={null != mainFrameId}
          connectedActivityAppId={connectedActivityAppId}
          currentApp={currentApp}
          updateActivityPanelMode={callback}
        >
          {children}
        </BaseActivityPanelController>
      );
    };
const result = size.fileFinishedImporting("modules/frames/panel/native/FramePanelController.tsx");

export default tmp2;
