import mergeGuildAvatar from "mergeGuildAvatar";
import handleUpdateUser from "handleUpdateUser";
import ME from "ME";
import "initialize";

let c5;
let closure_6;
let error;
const require = arg1;
({ LoginRequiredActions: c5, Routes: closure_6, UserSettingsSections: error } = ME);
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
    const result = handleUpdateUser.wasLoginAttemptedInSession(currentUser.id);
    const result1 = handleUpdateUser.requiredActionsIncludes(currentUser.id, items);
    if (result) {
      if (result1) {
        let obj = { screen: null, params: null, onClose: null };
        obj[0] = constants3.ACCOUNT_CHANGE_PASSWORD;
        obj[1] = { isLoginRequiredAction: true };
        obj[2] = function onClose() {
          const items = [outer1_5.UPDATE_PASSWORD];
          if (outer1_4.requiredActionsIncludes(currentUser.id, items)) {
            outer1_1(outer1_2[5]).logout("login_required_account_manager", outer1_6.LOGIN);
            const obj = outer1_1(outer1_2[5]);
          }
        };
        currentUser(5925).openUserSettings(obj);
        const obj2 = currentUser(5925);
      }
    }
    if (result1) {
      obj = importDefault(5736);
      obj.logout("login_required_account_manager", constants2.LOGIN);
    }
  }
};
const loginRequiredActionManager = new LoginRequiredActionManager();
let result = require("ME").fileFinishedImporting("modules/auth/native/LoginRequiredActionManager.tsx");

export default loginRequiredActionManager;