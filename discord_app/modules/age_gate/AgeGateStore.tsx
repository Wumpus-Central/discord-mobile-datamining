// discord_app/modules/age_gate/AgeGateStore.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import result2 from "AgeGateConstants.tsx";

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
const result = obj132.fileFinishedImporting("modules/age_gate/AgeGateStore.tsx");

export default ageGateStore;