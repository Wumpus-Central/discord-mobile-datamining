// === Module 16905: handleConnectionOpen ===

// Module 16905 (handleConnectionOpen)
import initializeDefault from "initialize" /* 5438 */;
import handleLogoutDefault from "handleLogout" /* 6004 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import closure_4 from "handleUpdateUser" /* 1384 */;
import ME from "ME" /* 676 */;

const require = arg1;
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
            closure_1_1(closure_1_2[5]).logout("login_required_account_manager", closure_1_6.LOGIN);
            const obj = closure_1_1(closure_1_2[5]);
          }
        };
        currentUser(6197).openUserSettings(obj);
        const obj2 = currentUser(6197);
      }
    }
    if (result1) {
      obj = handleLogoutDefault;
      obj.logout("login_required_account_manager", constants2.LOGIN);
    }
  }
};
const loginRequiredActionManager = new LoginRequiredActionManager();
let result = require("set").fileFinishedImporting("modules/auth/native/LoginRequiredActionManager.tsx");

export default loginRequiredActionManager;