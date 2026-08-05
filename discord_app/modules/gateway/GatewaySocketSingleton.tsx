// discord_app/modules/gateway/GatewaySocketSingleton.tsx
import fetchFingerprint from "fetchFingerprint";
import set from "set";
import importDefaultResult from "awaitOnline";
import set from "noop";
import { dispatcher } from "../../Dispatcher.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { DiscordAppState.native } from "../app_state/DiscordAppState.native.tsx";

let c4 = new require("getInitialState")("ConnectionStore");
let obj = new require("noop")();
const tmp3 = new require("getInitialState")(obj);
let closure_6 = tmp3;
const tmp2 = new require("getInitialState")("ConnectionStore");
obj.handleIdentify = () => {
  let obj = token;
  token = token.getToken();
  obj = { hasToken: null != token };
  tmp2.verbose("handleIdentify called", obj);
  if (null == token) {
    return null;
  } else {
    const state = DiscordAppState.native.getState();
    const installationForTracking = obj.getInstallationForTracking();
    obj = { token: null, properties: null, presence: null };
    obj[0] = token;
    const obj1 = {};
    const obj5 = DiscordAppState.native;
    const merged = Object.assign(expandEventProperties.getSuperProperties());
    obj1.client_app_state = state;
    obj1.is_fast_connect = false;
    const obj8 = expandEventProperties;
    obj1.gateway_connect_reasons = importAll(675).describeConnectionReasons();
    if (null != installationForTracking) {
      const obj2 = { installation_id: null };
      obj2[0] = installationForTracking;
      let obj3 = obj2;
    } else {
      obj3 = {};
    }
    const merged1 = Object.assign(obj3);
    obj[1] = obj1;
    obj[2] = obj1.getInitialState();
    return obj;
  }
};
if (set.isDesktop()) {
  const powerMonitor = require("set").powerMonitor;
  powerMonitor.on("resume", () => {
    obj.expeditedHeartbeat(5000, "power monitor resumed");
  });
}
const tmp4 = new require("guildId")(obj);
require("awaitOnline").addOfflineCallback(() => {
  obj.networkStateChange(15000, "network detected offline.", false);
});
require("awaitOnline").addOnlineCallback(() => {
  obj.networkStateChange(5000, "network detected online.");
});
obj.on("disconnect", (arg0) => {
  let code;
  let reason;
  ({ code, reason } = arg0);
  dispatcher.dispatch({ type: "CONNECTION_CLOSED", code, reason });
});
obj.on("close", (arg0) => {
  let code;
  let reason;
  ({ code, reason } = arg0);
  dispatcher.dispatch({ type: "CONNECTION_INTERRUPTED", code, reason });
});
const result = set.fileFinishedImporting("modules/gateway/GatewaySocketSingleton.tsx");

export const socket = obj;
export const localPresenceState = tmp3;
export const localVoiceState = tmp4;