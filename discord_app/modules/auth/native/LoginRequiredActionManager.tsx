// discord_app/modules/auth/native/LoginRequiredActionManager.tsx
import AuthenticationActionCreatorsDefault from "../../../actions/AuthenticationActionCreators.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import LoginRequiredActionStore from "../LoginRequiredActionStore.tsx";
import Constants from "../../../Constants.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ LoginRequiredActions: hasOwnProperty, Routes: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
class LoginRequiredActionManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleConnectionOpen };
    return applyArgumentsResult;
  }
  handleConnectionOpen() {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      let items = [constants.UPDATE_PASSWORD];
      const result = LoginRequiredActionStore.wasLoginAttemptedInSession(currentUser.id);
      const result1 = LoginRequiredActionStore.requiredActionsIncludes(currentUser.id, items);
      if (result) {
        if (result1) {
          const obj3 = {
            screen: constants3.ACCOUNT_CHANGE_PASSWORD,
            params: { isLoginRequiredAction: true },
            onClose() {
              const items = [hasOwnProperty.UPDATE_PASSWORD];
              if (LoginRequiredActionStore.requiredActionsIncludes(currentUser.id, items)) {
                const obj = AuthenticationActionCreatorsDefault;
                obj.logout("login_required_account_manager", metroRequire.LOGIN);
              }
            },
          };
          const obj2 = currentUser(6885);
          obj2.openUserSettings(obj3);
        }
      }
      if (result1) {
        let obj = AuthenticationActionCreatorsDefault;
        obj.logout("login_required_account_manager", constants2.LOGIN);
      }
    }
  }
}
const prototype = LoginRequiredActionManager.prototype;
const loginRequiredActionManager = new LoginRequiredActionManager();
let result = size.fileFinishedImporting("modules/auth/native/LoginRequiredActionManager.tsx");

export default loginRequiredActionManager;
