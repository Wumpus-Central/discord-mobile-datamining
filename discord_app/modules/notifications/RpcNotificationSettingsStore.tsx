// discord_app/modules/notifications/RpcNotificationSettingsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

let closure_1 = {};
const Store = initializeDefault.Store;
class RpcNotificationSettingsStore extends Store {}
const prototype = RpcNotificationSettingsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore);
};
prototype["areSlayerNotificationsSuppressed"] = function areSlayerNotificationsSuppressed() {
  for (const key10002 in closure_1) {
    if (closure_1[key10002] !== AuthenticationStore.getId()) {
      continue;
    } else {
      let flag = true;
      return true;
    }
  }
  return false;
};
RpcNotificationSettingsStore.displayName = "RpcNotificationSettingsStore";
const rpcNotificationSettingsStore = new RpcNotificationSettingsStore(DispatcherDefault, {
  RPC_APP_DISCONNECTED: function handleRpcAppDisconnected(arg0) {
    delete tmp2[tmp];
  },
  SET_RPC_NOTIFICATION_SETTINGS: function handleSetRpcNotificationSettings(suppressNotifications) {
    delete tmp2[tmp];
    if (suppressNotifications.suppressNotifications) {
      closure_1[suppressNotifications.socketId] = suppressNotifications.targetUserId;
    }
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/RpcNotificationSettingsStore.tsx");

export default rpcNotificationSettingsStore;
