// discord_app/modules/core/native/handleAppStateChanged.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import TTITrackerDefault from "../../tti_analytics/TTITracker.tsx";
import AppStartPerformanceDefault from "../../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ThemeActionCreators from "../../user_settings/ThemeActionCreators.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import TTIAnalyticsUtils from "../../tti_analytics/native/TTIAnalyticsUtils.tsx";
import BundleUpdaterActionCreatorsDefault from "../../../actions/native/BundleUpdaterActionCreators.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
