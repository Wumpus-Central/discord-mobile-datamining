// === Module 13628: GatewaySocketSingleton ===

// Module 13628 (GatewaySocketSingleton)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import DiscordNativeDefault from "DiscordNative" /* 4182 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 7757 */;
import DiscordAppStateDefault from "DiscordAppState" /* 11300 */;
import GatewaySocketDefault from "GatewaySocket" /* 13630 */;
import LocalPresenceStateManagerDefault from "LocalPresenceStateManager" /* 13670 */;
import LocalVoiceStateManagerDefault from "LocalVoiceStateManager" /* 13673 */;
import MultiAccountSwitchStore from "MultiAccountSwitchStore" /* 13629 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NetworkUtils from "NetworkUtils" /* 1461 */;

let closure_5 = new LoggerDefault("ConnectionStore");
const socket = new GatewaySocketDefault();
const tmp3 = new LocalPresenceStateManagerDefault(socket);
const initialState = tmp3;
const tmp2 = new LoggerDefault("ConnectionStore");
socket.handleIdentify = () => {
  const token = AuthenticationStore.getToken();
  let obj = { hasToken: null != token };
  closure_5.verbose("handleIdentify called", obj);
  if (null == token) {
    return null;
  } else {
    const state = DiscordAppStateDefault.getState();
    const installationForTracking = obj.getInstallationForTracking();
    obj = { token, userId: null, properties: null, presence: null };
    let id = obj.getId();
    if (id == null) {
      id = MultiAccountSwitchStore.getTargetUserId();
    }
    obj.userId = id;
    const obj1 = {};
    const merged = Object.assign(AnalyticsUtilsDefault.getSuperProperties());
    obj1.client_app_state = state;
    obj1.is_fast_connect = false;
    const tmp12Result = AnalyticsUtilsDefault;
    obj1.gateway_connect_reasons = RequestGatewaySocketAll.describeConnectionReasons();
    if (null != installationForTracking) {
      const obj2 = { installation_id: installationForTracking };
      let obj3 = obj2;
    } else {
      obj3 = {};
    }
    const merged1 = Object.assign(obj3);
    obj.properties = obj1;
    obj.presence = initialState.getInitialState();
    return obj;
  }
};
const PlatformUtils = fn(1115);
if (PlatformUtils.isDesktop()) {
  const powerMonitor = DiscordNativeDefault.powerMonitor;
  powerMonitor.on("resume", () => {
    obj.expeditedHeartbeat(5000, "power monitor resumed");
  });
}
NetworkUtils.addOfflineCallback(() => {
  obj.networkStateChange(15000, "network detected offline.", false);
});
NetworkUtils.addOnlineCallback(() => {
  obj.networkStateChange(5000, "network detected online.");
});
socket.on("disconnect", (arg0) => {
  ({ code, reason } = arg0);
  DispatcherDefault.dispatch({ type: "CONNECTION_CLOSED", code, reason });
});
socket.on("close", (arg0) => {
  ({ code, reason } = arg0);
  DispatcherDefault.dispatch({ type: "CONNECTION_INTERRUPTED", code, reason });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/gateway/GatewaySocketSingleton.tsx");

export { socket };
export const localPresenceState = tmp3;
export const localVoiceState = new LocalVoiceStateManagerDefault(socket);