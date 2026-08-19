// discord_app/modules/core/native/handleAppStateChanged.tsx
import timestampDefault from "../../debug/Logger.tsx";
import serializeDefault from "../../tti_analytics/TTITracker.tsx";
import isTracingDefault from "../../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import setSystemTheme from "../../user_settings/ThemeActionCreators.tsx";
import createRTCConnection from "../../../stores/RTCConnectionStore.tsx";
import getDeviceMetadata from "../../tti_analytics/native/TTIAnalyticsUtils.tsx";
import _modDef17115 from "../../../actions/native/BundleUpdaterActionCreators.tsx";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import getState from "../../../stores/native/AppStateStore.tsx";
import ME from "../../../Constants.tsx";

require = fn;
({ AnalyticEvents: c5, AppStates: closure_6 } = ME);
let closure_7 = new timestampDefault("index.native.tsx");
const tmp3 = new timestampDefault("index.native.tsx");
let result = require("obj132").fileFinishedImporting("modules/core/native/handleAppStateChanged.tsx");

export default function handleAppStateChanged(state) {
  state = state.getState();
  let obj = isTracingDefault;
  obj.markAndLog(closure_7, "\u{1F3C3}", "AppState changing from " + state + " to " + state);
  obj = { type: "APP_STATE_UPDATE", state };
  dispatcherDefault.dispatch(obj);
  let isAuthenticatedResult = state === constants2.BACKGROUND && state === constants2.ACTIVE;
  if (isAuthenticatedResult) {
    isAuthenticatedResult = authenticated.isAuthenticated();
  }
  if (isAuthenticatedResult) {
    isAuthenticatedResult = createRTCConnection.default.isDisconnected();
    const _default = createRTCConnection.default;
  }
  if (isAuthenticatedResult) {
    let tmp2Result = _modDef17115;
    tmp2Result.deferUpdate();
  }
  if (state === constants2.ACTIVE) {
    getDeviceMetadata.trackAppOpened("launcher");
    const result = setSystemTheme.setSystemThemeIfNeeded();
  }
  tmp2Result = serializeDefault;
  tmp2Result.appStateChanged(state);
  if (tmp8) {
    expandEventPropertiesDefault.track(constants.APP_BACKGROUND, {});
    const tmp2Result1 = expandEventPropertiesDefault;
  }
  tmp8 = state === constants2.ACTIVE && state !== constants2.ACTIVE;
};