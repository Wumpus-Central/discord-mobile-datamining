// === Module 11497: AppStoreOverlayTelemetryManager ===

// Module 11497 (AppStoreOverlayTelemetryManager)
import Constants from "Constants" /* 1074 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let c3 = null;
let c4 = null;
class AppStoreOverlayTelemetryManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      APP_STATE_UPDATE(arg0) {
            return applyArgumentsResult.handleAppStateUpdate(arg0);
          }
    };
    return applyArgumentsResult;
  }
}
AppStoreOverlayTelemetryManager.prototype["handleAppStateUpdate"] = function handleAppStateUpdate(state) {
  state = state.state;
  const isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    return !isAndroidResult;
  } else {
    let flag = null != _null;
    if (flag) {
      if (state !== tmp(1093).AppStates.ACTIVE) {
        flag = false;
        if (state === tmp(1093).AppStates.BACKGROUND) {
          _null.trackOverlayEvent(AnalyticEvents.QUEST_APP_STORE_OVERLAY_BACKGROUNDED);
          const _Date = Date;
          c4 = Date.now();
          flag = false;
        }
      }
      const _Date2 = Date;
      _null.trackOverlayEvent(AnalyticEvents.QUEST_APP_STORE_OVERLAY_RETURNED, Date.now() - c4);
      c4 = null;
      flag = false;
    }
  }
};
const appStoreOverlayTelemetryManager = new AppStoreOverlayTelemetryManager();
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlayTelemetryManager.tsx");

export default appStoreOverlayTelemetryManager;
export function setAppStoreOverlayOpen(arg0) {
  c3 = arg0;
}
export function clearAppStoreOverlayOpen() {
  c3 = null;
  c4 = null;
}