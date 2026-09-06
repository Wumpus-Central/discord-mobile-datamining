// === Module 13628: handleIdentify ===

// Module 13628 (handleIdentify)
import timestampDefault from "timestamp" /* 3 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import setDefault from "set" /* 4182 */;
import setRequestedByAll from "setRequestedBy" /* 7757 */;
import _modDef11300 from "module_11300" /* 11300 */;
import noopDefault from "noop" /* 13630 */;
import getInitialStateDefault from "getInitialState" /* 13670 */;
import guildIdDefault from "guildId" /* 13673 */;
import closure_3 from "initialize" /* 13629 */;
import closure_4 from "fetchFingerprint" /* 502 */;
import set from "set" /* 1115 */;
import importDefaultResult from "awaitOnline" /* 1461 */;

let closure_5 = new timestampDefault("ConnectionStore");
let obj = new noopDefault();
const tmp3 = new getInitialStateDefault(obj);
let closure_7 = tmp3;
const tmp2 = new timestampDefault("ConnectionStore");
obj.handleIdentify = () => {
  obj = token;
  token = token.getToken();
  obj = { hasToken: null != token };
  closure_5.verbose("handleIdentify called", obj);
  if (null == token) {
    return null;
  } else {
    const state = _modDef11300.getState();
    const installationForTracking = obj.getInstallationForTracking();
    obj = { token: null, userId: null, properties: null, presence: null };
    obj[0] = token;
    let id = obj.getId();
    if (id == null) {
      id = targetUserId.getTargetUserId();
    }
    obj[1] = id;
    obj1 = {};
    const obj8 = _modDef11300;
    const tmp12 = importDefault;
    const merged = Object.assign(expandEventPropertiesDefault.getSuperProperties());
    obj1.client_app_state = state;
    obj1.is_fast_connect = false;
    const tmp12Result = expandEventPropertiesDefault;
    obj1.gateway_connect_reasons = setRequestedByAll.describeConnectionReasons();
    if (null != installationForTracking) {
      const obj2 = { installation_id: null };
      obj2[0] = installationForTracking;
      let obj3 = obj2;
    } else {
      obj3 = {};
    }
    const merged1 = Object.assign(obj3);
    obj[2] = obj1;
    obj[3] = initialState.getInitialState();
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