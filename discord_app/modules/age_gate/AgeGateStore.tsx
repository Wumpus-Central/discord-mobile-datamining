// === Module 15471: isUnderageAnonymous ===

// Module 15471 (isUnderageAnonymous)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import result2 from "result" /* 1221 */;

const AGE_GATE_REGISTER_TIMEOUT_MS = result2.AGE_GATE_REGISTER_TIMEOUT_MS;
let c0 = false;
const Store = initializeDefault.Store;
class AgeGateStore extends Store {
}
AgeGateStore.prototype["isUnderageAnonymous"] = function isUnderageAnonymous() {
  return c0;
};
AgeGateStore.displayName = "AgeGateStore";
const ageGateStore = new AgeGateStore(dispatcherDefault, {
  AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function handleMarkUnderageAnonymous() {
    c0 = true;
    const timestamp = Date.now();
  },
  LOGIN_SUCCESS: function handleLogin() {
    c0 = false;
  }
});
const result = set.fileFinishedImporting("modules/age_gate/AgeGateStore.tsx");

export default ageGateStore;