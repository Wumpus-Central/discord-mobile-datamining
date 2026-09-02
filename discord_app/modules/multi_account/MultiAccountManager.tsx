// === Module 17242: _initialize ===

// Module 17242 (_initialize)
import dispatcherDefault from "dispatcher" /* 706 */;
import initializeDefault from "initialize" /* 5494 */;
import noop from "noop" /* 13508 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import closure_4 from "initialize" /* 13597 */;

require = arg1;
initializeDefault;
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
      let switchResult = closure_1_4.getSwitchResult();
      if (null != switchResult) {
        const currentUser = closure_1_3.getCurrentUser();
        if (null != currentUser) {
          let obj = closure_0;
          if (switchResult.success) {
            switchResult = obj.onSwitchSuccess(currentUser, switchResult.navigateHome);
            let obj2 = obj;
          } else {
            obj.onSwitchError(currentUser);
            obj2 = obj;
          }
          obj = applyArgumentsResult(closure_1_2[4]);
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
  const subscription = dispatcherDefault.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
  this.handleConnectionOpen();
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
};
prototype["handleLogout"] = function handleLogout(isSwitchingAccount) {
  if (isSwitchingAccount.isSwitchingAccount) {
    const self = this;
    this.onSwitchStart();
  }
};
prototype["handleMultiAccountSwitchStart"] = function handleMultiAccountSwitchStart(targetUserId) {
  const result = noop.setAccountSwitchUserId(targetUserId.targetUserId);
};
let result = require("set").fileFinishedImporting("modules/multi_account/MultiAccountManager.tsx");

export default MultiAccountManager;