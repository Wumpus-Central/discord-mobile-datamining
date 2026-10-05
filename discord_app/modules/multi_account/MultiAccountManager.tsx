// discord_app/modules/multi_account/MultiAccountManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import GatewaySocket from "../gateway/GatewaySocket.tsx";
import UserStore from "../../stores/UserStore.tsx";
import MultiAccountSwitchStore from "MultiAccountSwitchStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

class MultiAccountManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      LOGOUT(arg0) {
        return require.handleLogout(arg0);
      },
      MULTI_ACCOUNT_SWITCH_START(targetUserId) {
        return require.handleMultiAccountSwitchStart(targetUserId);
      },
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      const switchResult = MultiAccountSwitchStore.getSwitchResult();
      if (null != switchResult) {
        const currentUser = UserStore.getCurrentUser();
        if (null != currentUser) {
          let obj2;
          if (switchResult.success) {
            require.onSwitchSuccess(currentUser, switchResult.navigateHome);
            obj2 = require;
          } else {
            require.onSwitchError(currentUser);
            obj2 = require;
          }
          const obj3 = GatewaySocket;
          const result = obj3.setAccountSwitchUserId(null);
          obj2.onSwitchComplete();
        }
      }
    };
    return applyArgumentsResult;
  }
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    this.handleConnectionOpen();
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  }
  handleLogout(isSwitchingAccount) {
    if (isSwitchingAccount.isSwitchingAccount) {
      const self = this;
      this.onSwitchStart();
    }
  }
  handleMultiAccountSwitchStart(targetUserId) {
    const obj = GatewaySocket;
    const result = obj.setAccountSwitchUserId(targetUserId.targetUserId);
  }
}
const prototype = MultiAccountManager.prototype;
let result = size.fileFinishedImporting("modules/multi_account/MultiAccountManager.tsx");

export default MultiAccountManager;
