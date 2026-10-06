// === Module 12486: RpcNotificationSettingsStore ===

// Module 12486 (RpcNotificationSettingsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const Store = get_initializedDefault.Store;
class RpcNotificationSettingsStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore);
  }
  areSlayerNotificationsSuppressed() {
    for (const key10002 in closure_1) {
      if (closure_1[key10002] !== AuthenticationStore.getId()) {
        continue;
      } else {
        let flag = true;
        return true;
      }
    }
    return false;
  }
}
const prototype = RpcNotificationSettingsStore.prototype;
RpcNotificationSettingsStore.displayName = "RpcNotificationSettingsStore";
const obj = {
  RPC_APP_DISCONNECTED: function handleRpcAppDisconnected(arg0) {
    delete closure_1[arg0.socketId];
  },
  SET_RPC_NOTIFICATION_SETTINGS: function handleSetRpcNotificationSettings(suppressNotifications) {
    delete closure_1[suppressNotifications.socketId];
    if (suppressNotifications.suppressNotifications) {
      closure_1[suppressNotifications.socketId] = suppressNotifications.targetUserId;
    }
  }
};
const rpcNotificationSettingsStore = new RpcNotificationSettingsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/notifications/RpcNotificationSettingsStore.tsx");

export default rpcNotificationSettingsStore;