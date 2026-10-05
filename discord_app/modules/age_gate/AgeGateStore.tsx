// discord_app/modules/age_gate/AgeGateStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AgeGateConstants from "AgeGateConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AGE_GATE_REGISTER_TIMEOUT_MS = AgeGateConstants.AGE_GATE_REGISTER_TIMEOUT_MS;
let c0 = false;
const Store = get_initializedDefault.Store;
class AgeGateStore extends Store {
  isUnderageAnonymous() {
    return c0;
  }
}
const prototype = AgeGateStore.prototype;
AgeGateStore.displayName = "AgeGateStore";
const obj = {
  AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function handleMarkUnderageAnonymous() {
    c0 = true;
    const timestamp = Date.now();
  },
  LOGIN_SUCCESS: function handleLogin() {
    c0 = false;
  },
};
const ageGateStore = new AgeGateStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateStore.tsx");

export default ageGateStore;
