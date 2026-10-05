// discord_app/stores/SelfPresenceStoreManager.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import SelfPresenceStore from "SelfPresenceStore.tsx";
import AutomaticLifecycleManager from "../lib/AutomaticLifecycleManager.tsx";
import size from "../../_runtime/metro/00002__.js";

let map;

function handleChange() {
  const obj = DispatcherDefault;
  const obj2 = {
    type: "SELF_PRESENCE_STORE_UPDATE",
    status: SelfPresenceStore.getStatus(),
    activities: SelfPresenceStore.getActivities(true),
    hiddenActivities: SelfPresenceStore.getHiddenActivities(),
  };
  obj.dispatch(obj2);
}
class SelfPresenceStoreManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    map = new Map();
    applyArgumentsResult.stores = map.set(SelfPresenceStore, handleChange);
    return applyArgumentsResult;
  }
}
const selfPresenceStoreManager = new SelfPresenceStoreManager();
const result = size.fileFinishedImporting("stores/SelfPresenceStoreManager.tsx");

export default selfPresenceStoreManager;
