// === Module 17900: handleAppStateChanged ===

// Module 17900 (handleAppStateChanged)
import LoggerDefault from "Logger" /* 3 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4408 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7475 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AppStateStore from "AppStateStore" /* 1895 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AppStates: metroRequire } = Constants);
let closure_7 = new LoggerDefault("index.native.tsx");
const size = fn(2);
let result = size.fileFinishedImporting("modules/core/native/handleAppStateChanged.tsx");

export default function handleAppStateChanged(state) {
  state = AppStateStore.getState();
  let obj = AppStartPerformanceDefault;
  obj.markAndLog(closure_7, "\u{1F3C3}", "AppState changing from " + state + " to " + state);
  obj = { type: "APP_STATE_UPDATE", state };
  DispatcherDefault.dispatch(obj);
  let isAuthenticatedResult = state === constants2.BACKGROUND && state === tmp6.ACTIVE;
  if (isAuthenticatedResult) {
    isAuthenticatedResult = AuthenticationStore.isAuthenticated();
  }
  if (isAuthenticatedResult) {
    isAuthenticatedResult = RTCConnectionStore.default.isDisconnected();
    const _default = RTCConnectionStore.default;
  }
  if (isAuthenticatedResult) {
    let tmp2Result = tmp2(17899);
    tmp2Result.deferUpdate();
  }
  if (state === constants2.ACTIVE) {
    TTIAnalyticsUtils.trackAppOpened("launcher");
    const result = ThemeActionCreators.setSystemThemeIfNeeded();
  }
  tmp2Result = tmp2(9);
  tmp2Result.appStateChanged(state);
  if (tmp8) {
    tmp2(1242).track(constants.APP_BACKGROUND, {});
    const tmp2Result1 = tmp2(1242);
  }
};