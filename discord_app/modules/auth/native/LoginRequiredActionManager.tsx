// === Module 19679: LoginRequiredActionManager ===

// Module 19679 (LoginRequiredActionManager)
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6860 */;
import UserStore from "UserStore" /* 1385 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 4983 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7407 */;

const require = fn;
const Constants = fn(1072);
({ LoginRequiredActions: hasOwnProperty, Routes: metroRequire, UserSettingsSections: closure_7 } = Constants);
class LoginRequiredActionManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleConnectionOpen };
    return applyArgumentsResult;
  }
}
LoginRequiredActionManager.prototype["handleConnectionOpen"] = function handleConnectionOpen() {
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    items = [constants.UPDATE_PASSWORD];
    const result = LoginRequiredActionStore.wasLoginAttemptedInSession(currentUser.id);
    const result1 = LoginRequiredActionStore.requiredActionsIncludes(currentUser.id, items);
    if (result) {
      if (result1) {
        const obj3 = {
          screen: constants3.ACCOUNT_CHANGE_PASSWORD,
          params: { isLoginRequiredAction: true },
          onClose() {
                  items = [constants.UPDATE_PASSWORD];
                  if (LoginRequiredActionStore.requiredActionsIncludes(currentUser.id, items)) {
                    AuthenticationActionCreatorsDefault.logout("login_required_account_manager", constants2.LOGIN);
                  }
                }
        };
        currentUser(7687).openUserSettings(obj3);
        const obj2 = currentUser(7687);
      }
    }
    if (result1) {
      AuthenticationActionCreatorsDefault.logout("login_required_account_manager", constants2.LOGIN);
    }
  }
};
const loginRequiredActionManager = new LoginRequiredActionManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/LoginRequiredActionManager.tsx");

export default loginRequiredActionManager;