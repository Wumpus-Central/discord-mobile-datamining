// === Module 13718: GatewaySocketSingleton ===

// Module 13718 (GatewaySocketSingleton)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import DiscordNativeDefault from "DiscordNative" /* 4257 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 7859 */;
import DiscordAppStateDefault from "DiscordAppState" /* 11434 */;
import GatewaySocketDefault from "GatewaySocket" /* 13720 */;
import LocalPresenceStateManagerDefault from "LocalPresenceStateManager" /* 13760 */;
import LocalVoiceStateManagerDefault from "LocalVoiceStateManager" /* 13763 */;
import MultiAccountSwitchStore from "MultiAccountSwitchStore" /* 13719 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NetworkUtils_mod from "NetworkUtils" /* 1461 */;

let closure_5 = new LoggerDefault("ConnectionStore");
const socket = new GatewaySocketDefault();
const tmp3 = new LocalPresenceStateManagerDefault(socket);
const initialState = tmp3;
const tmp2 = new LoggerDefault("ConnectionStore");
socket.handleIdentify = () => {
  const token = AuthenticationStore.getToken();
  closure_5.verbose("handleIdentify called", { hasToken: null != token });
  if (null == token) {
    return null;
  } else {
    const state = DiscordAppStateDefault.getState();
    const installationForTracking = AuthenticationStore.getInstallationForTracking();
    const obj3 = { token, userId: null, properties: null, presence: null };
    let id = AuthenticationStore.getId();
    if (id == null) {
      id = MultiAccountSwitchStore.getTargetUserId();
    }
    obj3.userId = id;
    const obj4 = {};
    const merged = Object.assign(AnalyticsUtilsDefault.getSuperProperties());
    obj4.client_app_state = state;
    obj4.is_fast_connect = false;
    const tmp12Result = AnalyticsUtilsDefault;
    obj4.gateway_connect_reasons = RequestGatewaySocketAll.describeConnectionReasons();
    if (null != installationForTracking) {
      const obj6 = { installation_id: installationForTracking };
      let obj7 = obj6;
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    obj3.properties = obj4;
    obj3.presence = initialState.getInitialState();
    return obj3;
  }
  const obj2 = { hasToken: null != token };
};
const PlatformUtils = fn(1363);
if (PlatformUtils.isDesktop()) {
  const powerMonitor = DiscordNativeDefault.powerMonitor;
  powerMonitor.on("resume", () => {
    obj.expeditedHeartbeat(5000, "power monitor resumed");
  });
}
let NetworkUtils = NetworkUtils_mod;
NetworkUtils.addOfflineCallback(() => {
  obj.networkStateChange(15000, "network detected offline.", false);
});
let NetworkUtils = NetworkUtils_mod;
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