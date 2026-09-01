// === Module 13285: handleIdentify ===

// Module 13285 (handleIdentify)
import timestampDefault from "timestamp" /* 3 */;
import setRequestedByAll from "setRequestedBy" /* 675 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import setDefault from "set" /* 4104 */;
import _modDef10937 from "module_10937" /* 10937 */;
import noopDefault from "noop" /* 13286 */;
import getInitialStateDefault from "getInitialState" /* 13326 */;
import guildIdDefault from "guildId" /* 13329 */;
import closure_3 from "fetchFingerprint" /* 1218 */;
import set from "set" /* 500 */;
import importDefaultResult from "awaitOnline" /* 1473 */;

let closure_4 = new timestampDefault("ConnectionStore");
let obj = new noopDefault();
const tmp3 = new getInitialStateDefault(obj);
let closure_6 = tmp3;
const tmp2 = new timestampDefault("ConnectionStore");
obj.handleIdentify = () => {
  obj = token;
  token = token.getToken();
  obj = { hasToken: null != token };
  closure_4.verbose("handleIdentify called", obj);
  if (null == token) {
    return null;
  } else {
    const state = _modDef10937.getState();
    const installationForTracking = obj.getInstallationForTracking();
    obj = { token: null, properties: null, presence: null };
    obj[0] = token;
    obj1 = {};
    const obj5 = _modDef10937;
    const merged = Object.assign(expandEventPropertiesDefault.getSuperProperties());
    obj1.client_app_state = state;
    obj1.is_fast_connect = false;
    const obj8 = expandEventPropertiesDefault;
    obj1.gateway_connect_reasons = setRequestedByAll.describeConnectionReasons();
    if (null != installationForTracking) {
      const obj2 = { installation_id: null };
      obj2[0] = installationForTracking;
      let obj3 = obj2;
    } else {
      obj3 = {};
    }
    const merged1 = Object.assign(obj3);
    obj[1] = obj1;
    obj[2] = initialState.getInitialState();
    return obj;
  }
};
if (set.isDesktop()) {
  const powerMonitor = setDefault.powerMonitor;
  powerMonitor.on("resume", () => {
    obj.expeditedHeartbeat(5000, "power monitor resumed");
  });
}
const tmp4 = new guildIdDefault(obj);
importDefaultResult.addOfflineCallback(() => {
  obj.networkStateChange(15000, "network detected offline.", false);
});
importDefaultResult.addOnlineCallback(() => {
  obj.networkStateChange(5000, "network detected online.");
});
obj.on("disconnect", (arg0) => {
  ({ code, reason } = arg0);
  dispatcherDefault.dispatch({ type: "CONNECTION_CLOSED", code, reason });
});
obj.on("close", (arg0) => {
  ({ code, reason } = arg0);
  dispatcherDefault.dispatch({ type: "CONNECTION_INTERRUPTED", code, reason });
});
const result = set.fileFinishedImporting("modules/gateway/GatewaySocketSingleton.tsx");

export const socket = obj;
export const localPresenceState = tmp3;
export const localVoiceState = tmp4;