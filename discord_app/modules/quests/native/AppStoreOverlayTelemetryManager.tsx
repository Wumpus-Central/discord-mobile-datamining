// === Module 10690: handleAppStateUpdate ===

// Module 10690 (handleAppStateUpdate)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import ME from "ME" /* 676 */;
import keys from "keys" /* 691 */;
import initializeDefault from "initialize" /* 5038 */;

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
  const isAndroidResult = obj1322.isAndroid();
  if (isAndroidResult) {
    return !isAndroidResult;
  } else {
    let flag = null != _null;
    if (flag) {
      if (state !== keys.AppStates.ACTIVE) {
        flag = false;
        if (state === keys.AppStates.BACKGROUND) {
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
const result = obj132.fileFinishedImporting("modules/quests/native/AppStoreOverlayTelemetryManager.tsx");

export default appStoreOverlayTelemetryManager;
export function setAppStoreOverlayOpen(arg0) {
  closure_3 = arg0;
}
export function clearAppStoreOverlayOpen() {
  c3 = null;
  c4 = null;
}