// discord_app/modules/notifications/RpcNotificationSettingsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const rpcNotificationSettingsStore = new RpcNotificationSettingsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/notifications/RpcNotificationSettingsStore.tsx");

export default rpcNotificationSettingsStore;
