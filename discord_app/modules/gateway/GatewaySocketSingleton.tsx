// discord_app/modules/gateway/GatewaySocketSingleton.tsx
import LoggerDefault from "../debug/Logger.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import DiscordNativeDefault from "../../lib/DiscordNative.tsx";
import RequestGatewaySocketAll from "RequestGatewaySocket.tsx";
import DiscordAppStateDefault from "../app_state/DiscordAppState.native.tsx";
import GatewaySocketDefault from "GatewaySocket.tsx";
import LocalPresenceStateManagerDefault from "LocalPresenceStateManager.tsx";
import LocalVoiceStateManagerDefault from "LocalVoiceStateManager.tsx";
import MultiAccountSwitchStore from "../multi_account/MultiAccountSwitchStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import NetworkUtils_mod from "../../utils/NetworkUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_5 = new LoggerDefault("ConnectionStore");
new LoggerDefault("ConnectionStore");
const socket = new GatewaySocketDefault();
const tmp3 = new LocalPresenceStateManagerDefault(socket);
const initialState = tmp3;
socket.handleIdentify = () => {
  let id;
  let obj4;
  let obj5;
  const token = AuthenticationStore.getToken();
  const obj2 = { hasToken: null != token };
  closure_5.verbose("handleIdentify called", obj2);
  if (null == token) {
    return null;
  } else {
    let obj7;
    const obj8 = DiscordAppStateDefault;
    const state = obj8.getState();
    const installationForTracking = AuthenticationStore.getInstallationForTracking();
    const obj3 = { token, userId: id, properties: obj4, presence: initialState.getInitialState() };
    id = AuthenticationStore.getId();
    if (id == null) {
      id = MultiAccountSwitchStore.getTargetUserId();
    }
    obj4 = {
      client_app_state: state,
      is_fast_connect: false,
      gateway_connect_reasons: obj5.describeConnectionReasons(),
    };
    const tmp12Result = AnalyticsUtilsDefault;
    const merged = Object.assign(tmp12Result.getSuperProperties());
    obj5 = RequestGatewaySocketAll;
    if (null != installationForTracking) {
      obj7 = { installation_id: installationForTracking };
      const obj6 = { installation_id: installationForTracking };
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    return obj3;
  }
};
const tmp4 = new LocalVoiceStateManagerDefault(socket);
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
NetworkUtils = NetworkUtils_mod;
NetworkUtils.addOnlineCallback(() => {
  obj.networkStateChange(5000, "network detected online.");
});
socket.on("disconnect", (arg0) => {
  let code;
  let reason;
  ({ code, reason } = arg0);
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CONNECTION_CLOSED", code, reason });
});
socket.on("close", (arg0) => {
  let code;
  let reason;
  ({ code, reason } = arg0);
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CONNECTION_INTERRUPTED", code, reason });
});
const result = size.fileFinishedImporting("modules/gateway/GatewaySocketSingleton.tsx");

export { socket };
export const localPresenceState = tmp3;
export const localVoiceState = tmp4;
