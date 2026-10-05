// === Module 18094: handleAppStateChanged ===

// Module 18094 (handleAppStateChanged)
import LoggerDefault from "Logger" /* 3 */;
import TTITrackerDefault from "TTITracker" /* 9 */;
import AppStartPerformanceDefault from "AppStartPerformance" /* 10 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4726 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 6984 */;
import BundleUpdaterActionCreatorsDefault from "BundleUpdaterActionCreators" /* 18093 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ AnalyticEvents: hasOwnProperty, AppStates: metroRequire } = Constants);
let closure_7 = new LoggerDefault("index.native.tsx");
new LoggerDefault("index.native.tsx");
let result = size.fileFinishedImporting("modules/core/native/handleAppStateChanged.tsx");

export default function handleAppStateChanged(state) {
  state = AppStateStore.getState();
  const obj = AppStartPerformanceDefault;
  obj.markAndLog(closure_7, "\u{1F3C3}", "AppState changing from " + state + " to " + state);
  const obj2 = DispatcherDefault;
  const obj3 = { type: "APP_STATE_UPDATE", state };
  obj2.dispatch(obj3);
  let isAuthenticatedResult = state === metroRequire.BACKGROUND && state === metroRequire.ACTIVE;
  const tmp8 = state === metroRequire.ACTIVE && state !== metroRequire.ACTIVE;
  if (isAuthenticatedResult) {
    isAuthenticatedResult = AuthenticationStore.isAuthenticated();
  }
  if (isAuthenticatedResult) {
    const _default = RTCConnectionStore.default;
    isAuthenticatedResult = _default.isDisconnected();
  }
  if (isAuthenticatedResult) {
    const tmp2Result = BundleUpdaterActionCreatorsDefault;
    tmp2Result.deferUpdate();
  }
  if (state === metroRequire.ACTIVE) {
    const obj5 = TTIAnalyticsUtils;
    obj5.trackAppOpened("launcher");
    const obj6 = ThemeActionCreators;
    const result = obj6.setSystemThemeIfNeeded();
  }
  const tmp2Result3 = TTITrackerDefault;
  tmp2Result3.appStateChanged(state);
  if (tmp8) {
    const tmp2Result4 = AnalyticsUtilsDefault;
    tmp2Result4.track(hasOwnProperty.APP_BACKGROUND, {});
  }
};