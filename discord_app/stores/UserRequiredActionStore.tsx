// discord_app/stores/UserRequiredActionStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

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
