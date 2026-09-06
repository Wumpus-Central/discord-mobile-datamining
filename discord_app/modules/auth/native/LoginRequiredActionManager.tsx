// === Module 17414: LoginRequiredActionManager ===

// Module 17414 (LoginRequiredActionManager)
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6593 */;
import UserStore from "UserStore" /* 1371 */;
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 1950 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

const require = fn;
const Constants = fn(1074);
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
    let items = [constants.UPDATE_PASSWORD];
    const result = LoginRequiredActionStore.wasLoginAttemptedInSession(currentUser.id);
    const result1 = LoginRequiredActionStore.requiredActionsIncludes(currentUser.id, items);
    if (result) {
      if (result1) {
        let obj = {
          screen: constants3.ACCOUNT_CHANGE_PASSWORD,
          params: { isLoginRequiredAction: true },
          onClose() {
                  const items = [constants.UPDATE_PASSWORD];
                  if (LoginRequiredActionStore.requiredActionsIncludes(currentUser.id, items)) {
                    AuthenticationActionCreatorsDefault.logout("login_required_account_manager", constants2.LOGIN);
                  }
                }
        };
        currentUser(7382).openUserSettings(obj);
        const obj2 = currentUser(7382);
      }
    }
    if (result1) {
      obj = AuthenticationActionCreatorsDefault;
      obj.logout("login_required_account_manager", constants2.LOGIN);
    }
  }
};
const loginRequiredActionManager = new LoginRequiredActionManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/LoginRequiredActionManager.tsx");

export default loginRequiredActionManager;