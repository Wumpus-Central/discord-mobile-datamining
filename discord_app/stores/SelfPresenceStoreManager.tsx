// discord_app/stores/SelfPresenceStoreManager.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import SelfPresenceStore from "SelfPresenceStore.tsx";
import AutomaticLifecycleManager from "../lib/AutomaticLifecycleManager.tsx";

function handleChange() {
  const obj = DispatcherDefault;
  obj.dispatch({
    type: "SELF_PRESENCE_STORE_UPDATE",
    status: SelfPresenceStore.getStatus(),
    activities: SelfPresenceStore.getActivities(true),
    hiddenActivities: SelfPresenceStore.getHiddenActivities(),
  });
}
const prototype = function SelfPresenceStoreManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.stores = new Map().set(SelfPresenceStore, handleChange);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("stores/SelfPresenceStoreManager.tsx");

export default prototype1;
