// === Module 18051: handleAppStateChanged ===

// Module 18051 (handleAppStateChanged)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4488 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4662 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7582 */;
import BundleUpdaterActionCreatorsDefault from "BundleUpdaterActionCreators" /* 18050 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AppStateStore from "AppStateStore" /* 1896 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AppStates: metroRequire } = Constants);
let closure_7 = new LoggerDefault("index.native.tsx");
const size = fn(2);
let result = size.fileFinishedImporting("modules/core/native/handleAppStateChanged.tsx");

export default function handleAppStateChanged(state) {
  state = AppStateStore.getState();
  AppStartPerformanceDefault.markAndLog(closure_7, "\u{1F3C3}", "AppState changing from " + state + " to " + state);
  DispatcherDefault.dispatch({ type: "APP_STATE_UPDATE", state });
  let isAuthenticatedResult = state === constants2.BACKGROUND && state === constants2.ACTIVE;
  if (isAuthenticatedResult) {
    isAuthenticatedResult = AuthenticationStore.isAuthenticated();
  }
  if (isAuthenticatedResult) {
    isAuthenticatedResult = RTCConnectionStore.default.isDisconnected();
    const _default = RTCConnectionStore.default;
  }
  if (isAuthenticatedResult) {
    BundleUpdaterActionCreatorsDefault.deferUpdate();
    const tmp2Result = BundleUpdaterActionCreatorsDefault;
  }
  if (state === constants2.ACTIVE) {
    TTIAnalyticsUtils.trackAppOpened("launcher");
    const result = ThemeActionCreators.setSystemThemeIfNeeded();
  }
  const obj3 = { type: "APP_STATE_UPDATE", state };
  const tmp8 = state === constants2.ACTIVE && state !== constants2.ACTIVE;
  TTITrackerDefault.appStateChanged(state);
  if (tmp8) {
    AnalyticsUtilsDefault.track(constants.APP_BACKGROUND, {});
    const tmp2Result4 = AnalyticsUtilsDefault;
  }
  const tmp2Result3 = TTITrackerDefault;
};