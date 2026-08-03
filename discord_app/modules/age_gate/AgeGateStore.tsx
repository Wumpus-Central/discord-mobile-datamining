import { AGE_GATE_REGISTER_TIMEOUT_MS } from "result";
import { Store } from "initialize";

let c0 = false;
class AgeGateStore extends Store {
}
AgeGateStore.prototype["isUnderageAnonymous"] = function isUnderageAnonymous() {
  return c0;
};
AgeGateStore.displayName = "AgeGateStore";
const ageGateStore = new AgeGateStore(require("dispatcher"), {
  AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function handleMarkUnderageAnonymous() {
    let c0 = true;
    const timestamp = Date.now();
  },
  LOGIN_SUCCESS: function handleLogin() {
    let c0 = false;
  }
});
const result = require("dispatcher").fileFinishedImporting("modules/age_gate/AgeGateStore.tsx");

export default ageGateStore;