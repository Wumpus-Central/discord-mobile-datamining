// === Module 17116: handleAppStateChanged ===

// Module 17116 (handleAppStateChanged)
import timestampDefault from "timestamp" /* 3 */;
import serializeDefault from "serialize" /* 9 */;
import isTracingDefault from "isTracing" /* 10 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import setSystemTheme from "setSystemTheme" /* 4222 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import getDeviceMetadata from "getDeviceMetadata" /* 5066 */;
import _modDef17115 from "module_17115" /* 17115 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import getState from "getState" /* 7383 */;
import ME from "ME" /* 676 */;

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