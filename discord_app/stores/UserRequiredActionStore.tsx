// === Module 1366: handleRequiredAction ===

// Module 1366 (handleRequiredAction)
import { Store } from "initialize";

function handleRequiredAction(requiredAction) {
  requiredAction = requiredAction.requiredAction;
}
let c0 = null;
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
const userRequiredActionStore = new UserRequiredActionStore(require("dispatcher"), { CONNECTION_OPEN: handleRequiredAction, USER_REQUIRED_ACTION_UPDATE: handleRequiredAction });
const result = require("set").fileFinishedImporting("stores/UserRequiredActionStore.tsx");

export default userRequiredActionStore;