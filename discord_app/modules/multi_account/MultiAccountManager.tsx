// discord_app/modules/multi_account/MultiAccountManager.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import initialize from "initialize";
import "initialize";
import { dispatcher } from "../../Dispatcher.tsx";
import { noop } from "../gateway/GatewaySocket.tsx";

let require = arg1;
class MultiAccountManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      LOGOUT(arg0) {
            return applyArgumentsResult.handleLogout(arg0);
          },
      MULTI_ACCOUNT_SWITCH_START(targetUserId) {
            return applyArgumentsResult.handleMultiAccountSwitchStart(targetUserId);
          }
    };
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      let switchResult = outer1_4.getSwitchResult();
      if (null != switchResult) {
        const currentUser = outer1_3.getCurrentUser();
        if (null != currentUser) {
          let obj = closure_0;
          if (switchResult.success) {
            switchResult = obj.onSwitchSuccess(currentUser, switchResult.navigateHome);
            let obj2 = obj;
          } else {
            obj.onSwitchError(currentUser);
            obj2 = obj;
          }
          obj = applyArgumentsResult(outer1_2[4]);
          const result = obj.setAccountSwitchUserId(null);
          obj2.onSwitchComplete();
        }
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = MultiAccountManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = dispatcher.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  this.handleConnectionOpen();
};
prototype["_terminate"] = function _terminate() {
  dispatcher.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
};
prototype["handleLogout"] = function handleLogout(isSwitchingAccount) {
  if (isSwitchingAccount.isSwitchingAccount) {
    const self = this;
    this.onSwitchStart();
  }
};
prototype["handleMultiAccountSwitchStart"] = function handleMultiAccountSwitchStart(targetUserId) {
  const result = noop /* noop */.setAccountSwitchUserId(targetUserId.targetUserId);
};
let result = require("initialize").fileFinishedImporting("modules/multi_account/MultiAccountManager.tsx");

export default MultiAccountManager;