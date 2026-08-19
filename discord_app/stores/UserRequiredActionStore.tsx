// discord_app/stores/UserRequiredActionStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";

function handleRequiredAction(requiredAction) {
  requiredAction = requiredAction.requiredAction;
}
let c0 = null;
const Store = initializeDefault.Store;
class UserRequiredActionStore extends Store {
}
const prototype = UserRequiredActionStore.prototype;
prototype["hasAction"] = function hasAction() {
  return null != c0;
};
prototype["getAction"] = function getAction() {
  return c0;
};
UserRequiredActionStore.displayName = "UserRequiredActionStore";
const userRequiredActionStore = new UserRequiredActionStore(dispatcherDefault, { CONNECTION_OPEN: handleRequiredAction, USER_REQUIRED_ACTION_UPDATE: handleRequiredAction });
const result = require("obj132").fileFinishedImporting("stores/UserRequiredActionStore.tsx");

export default userRequiredActionStore;