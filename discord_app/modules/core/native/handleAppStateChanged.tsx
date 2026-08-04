import fetchFingerprint from "fetchFingerprint";
import getState from "getState";
import ME from "ME";

let c5;
let closure_6;
const require = arg1;
({ AnalyticEvents: c5, AppStates: closure_6 } = ME);
const error = new require("timestamp")("index.native.tsx");
const tmp3 = new require("timestamp")("index.native.tsx");
let result = require("ME").fileFinishedImporting("modules/core/native/handleAppStateChanged.tsx");

export default function handleAppStateChanged(state) {
  state = state.getState();
  let obj = importDefault(10);
  obj.markAndLog(closure_7, "\u{1F3C3}", "AppState changing from " + state + " to " + state);
  obj = { type: "APP_STATE_UPDATE", state };
  importDefault(709).dispatch(obj);
  let isAuthenticatedResult = state === constants2.BACKGROUND && state === tmp6.ACTIVE;
  if (isAuthenticatedResult) {
    isAuthenticatedResult = authenticated.isAuthenticated();
  }
  if (isAuthenticatedResult) {
    isAuthenticatedResult = require(4356) /* createRTCConnection */.default.isDisconnected();
    const _default = require(4356) /* createRTCConnection */.default;
  }
  if (isAuthenticatedResult) {
    let tmp2Result = tmp2(16854);
    tmp2Result.deferUpdate();
  }
  if (state === constants2.ACTIVE) {
    require(6843) /* getDeviceMetadata */.trackAppOpened("launcher");
    const obj5 = require(6843) /* getDeviceMetadata */;
    const result = require(4127) /* setSystemTheme */.setSystemThemeIfNeeded();
    const obj6 = require(4127) /* setSystemTheme */;
  }
  tmp2Result = tmp2(9);
  tmp2Result.appStateChanged(state);
  if (tmp8) {
    tmp2(698).track(constants.APP_BACKGROUND, {});
    const tmp2Result1 = tmp2(698);
  }
};