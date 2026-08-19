// discord_app/modules/auth/native/LoginRequiredActionManager.tsx
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import handleLogoutDefault from "../../../actions/AuthenticationActionCreators.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import handleUpdateUser from "../LoginRequiredActionStore.tsx";
import ME from "../../../Constants.tsx";

const require = fn;
({ LoginRequiredActions: c5, Routes: closure_6, UserSettingsSections: error } = ME);
initializeDefault;
class LoginRequiredActionManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleConnectionOpen };
    return applyArgumentsResult;
  }
}
LoginRequiredActionManager.prototype["handleConnectionOpen"] = function handleConnectionOpen() {
  currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    let items = [constants.UPDATE_PASSWORD];
    const result = closure_4.wasLoginAttemptedInSession(currentUser.id);
    const result1 = closure_4.requiredActionsIncludes(currentUser.id, items);
    if (result) {
      if (result1) {
        let obj = { screen: null, params: null, onClose: null };
        obj[0] = constants3.ACCOUNT_CHANGE_PASSWORD;
        obj[1] = { isLoginRequiredAction: true };
        obj[2] = function onClose() {
          const items = [closure_1_5.UPDATE_PASSWORD];
          if (closure_1_4.requiredActionsIncludes(currentUser.id, items)) {
            handleLogoutDefault.logout("login_required_account_manager", closure_1_6.LOGIN);
          }
        };
        currentUser(7360).openUserSettings(obj);
        const obj2 = currentUser(7360);
      }
    }
    if (result1) {
      obj = handleLogoutDefault;
      obj.logout("login_required_account_manager", constants2.LOGIN);
    }
  }
};
const loginRequiredActionManager = new LoginRequiredActionManager();
let result = require("obj132").fileFinishedImporting("modules/auth/native/LoginRequiredActionManager.tsx");

export default loginRequiredActionManager;