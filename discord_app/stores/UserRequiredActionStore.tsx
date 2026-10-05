// === Module 2044: UserRequiredActionStore ===

// Module 2044 (UserRequiredActionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

function handleRequiredAction(requiredAction) {
  requiredAction = requiredAction.requiredAction;
}
let requiredAction = null;
const Store = get_initializedDefault.Store;
class UserRequiredActionStore extends Store {
  hasAction() {
    return null != requiredAction;
  }
  getAction() {
    return requiredAction;
  }
}
const prototype = UserRequiredActionStore.prototype;
UserRequiredActionStore.displayName = "UserRequiredActionStore";
const obj = { CONNECTION_OPEN: handleRequiredAction, USER_REQUIRED_ACTION_UPDATE: handleRequiredAction };
const userRequiredActionStore = new UserRequiredActionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/UserRequiredActionStore.tsx");

export default userRequiredActionStore;