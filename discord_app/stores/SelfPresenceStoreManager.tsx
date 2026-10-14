// === Module 18284: SelfPresenceStoreManager ===

// Module 18284 (SelfPresenceStoreManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5764 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6812 */;

function handleChange() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "SELF_PRESENCE_STORE_UPDATE", status: SelfPresenceStore.getStatus(), activities: SelfPresenceStore.getActivities(true), hiddenActivities: SelfPresenceStore.getHiddenActivities() });
}
const prototype = function SelfPresenceStoreManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.stores = new Map().set(SelfPresenceStore, handleChange);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("stores/SelfPresenceStoreManager.tsx");

export default prototype1;