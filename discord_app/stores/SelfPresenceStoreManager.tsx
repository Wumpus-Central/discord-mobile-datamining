// discord_app/stores/SelfPresenceStoreManager.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import SelfPresenceStore from "SelfPresenceStore.tsx";
import AutomaticLifecycleManager from "../lib/AutomaticLifecycleManager.tsx";

function handleChange() {
  const obj = {
    type: "SELF_PRESENCE_STORE_UPDATE",
    status: SelfPresenceStore.getStatus(),
    activities: SelfPresenceStore.getActivities(true),
    hiddenActivities: SelfPresenceStore.getHiddenActivities(),
  };
  obj.dispatch(obj);
}
let prototype = function SelfPresenceStoreManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.stores = new Map().set(SelfPresenceStore, handleChange);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("stores/SelfPresenceStoreManager.tsx");

export default prototype;
