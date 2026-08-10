// discord_app/modules/core/native/handleAppStateChanged.tsx
import fetchFingerprint from "fetchFingerprint";
import getState from "getState";
import ME from "ME";
import { isTracing } from "../../../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";
import { createRTCConnection } from "../../../stores/RTCConnectionStore.tsx";
import { getDeviceMetadata } from "../../tti_analytics/native/TTIAnalyticsUtils.tsx";
import { setSystemTheme } from "../../user_settings/ThemeActionCreators.tsx";

let c5;
let closure_6;
const require = arg1;
({ AnalyticEvents: c5, AppStates: closure_6 } = ME);
const error = new require("timestamp")("index.native.tsx");
const tmp3 = new require("timestamp")("index.native.tsx");
let result = require("ME").fileFinishedImporting("modules/core/native/handleAppStateChanged.tsx");

export default function handleAppStateChanged(state) {
  state = state.getState();
  let obj = isTracing;
  obj.markAndLog(closure_7, "\u{1F3C3}", "AppState changing from " + state + " to " + state);
  obj = { type: "APP_STATE_UPDATE", state };
  dispatcher.dispatch(obj);
  let isAuthenticatedResult = state === constants2.BACKGROUND && state === tmp6.ACTIVE;
  if (isAuthenticatedResult) {
    isAuthenticatedResult = authenticated.isAuthenticated();
  }
  if (isAuthenticatedResult) {
    isAuthenticatedResult = createRTCConnection.default.isDisconnected();
    const _default = createRTCConnection.default;
  }
  if (isAuthenticatedResult) {
    let tmp2Result = tmp2(16981);
    tmp2Result.deferUpdate();
  }
  if (state === constants2.ACTIVE) {
    getDeviceMetadata.trackAppOpened("launcher");
    const obj5 = getDeviceMetadata;
    const result = setSystemTheme.setSystemThemeIfNeeded();
    const obj6 = setSystemTheme;
  }
  tmp2Result = tmp2(9);
  tmp2Result.appStateChanged(state);
  if (tmp8) {
    tmp2(698).track(constants.APP_BACKGROUND, {});
    const tmp2Result1 = tmp2(698);
  }
};