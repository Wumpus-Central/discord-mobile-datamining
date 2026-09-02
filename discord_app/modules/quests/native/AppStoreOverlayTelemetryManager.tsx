// === Module 11317: handleAppStateUpdate ===

// Module 11317 (handleAppStateUpdate)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import set2 from "set" /* 1234 */;
import initializeDefault from "initialize" /* 5494 */;

const AnalyticEvents = ME.AnalyticEvents;
let c3 = null;
let c4 = null;
initializeDefault;
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
  const isAndroidResult = set2.isAndroid();
  if (isAndroidResult) {
    return !isAndroidResult;
  } else {
    let flag = null != _null;
    if (flag) {
      if (state !== tmp(688).AppStates.ACTIVE) {
        flag = false;
        if (state === tmp(688).AppStates.BACKGROUND) {
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
const result = set.fileFinishedImporting("modules/quests/native/AppStoreOverlayTelemetryManager.tsx");

export default appStoreOverlayTelemetryManager;
export function setAppStoreOverlayOpen(arg0) {
  closure_3 = arg0;
}
export function clearAppStoreOverlayOpen() {
  c3 = null;
  c4 = null;
}