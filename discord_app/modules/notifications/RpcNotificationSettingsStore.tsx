// discord_app/modules/notifications/RpcNotificationSettingsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";

let closure_1 = {};
const Store = initializeDefault.Store;
class RpcNotificationSettingsStore extends Store {
}
const prototype = RpcNotificationSettingsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_0);
};
prototype["areSlayerNotificationsSuppressed"] = function areSlayerNotificationsSuppressed() {
  for (const key10002 in closure_1) {
    if (table[key10002] !== id.getId()) {
      continue;
    } else {
      let flag = true;
      return true;
    }
  }
  return false;
};
RpcNotificationSettingsStore.displayName = "RpcNotificationSettingsStore";
const rpcNotificationSettingsStore = new RpcNotificationSettingsStore(dispatcherDefault, {
  RPC_APP_DISCONNECTED: function handleRpcAppDisconnected(arg0) {
    delete tmp2[tmp];
  },
  SET_RPC_NOTIFICATION_SETTINGS: function handleSetRpcNotificationSettings(suppressNotifications) {
    delete tmp2[tmp];
    if (suppressNotifications.suppressNotifications) {
      closure_1[suppressNotifications.socketId] = suppressNotifications.targetUserId;
    }
  }
});
const result = require("obj132").fileFinishedImporting("modules/notifications/RpcNotificationSettingsStore.tsx");

export default rpcNotificationSettingsStore;