// discord_app/stores/SelfPresenceStoreManager.tsx
import dispatcherDefault from "../Dispatcher.tsx";
import initializeDefault from "../lib/AutomaticLifecycleManager.tsx";
import filterPlayingActivities from "SelfPresenceStore.tsx";

function handleChange() {
  const obj = { type: "SELF_PRESENCE_STORE_UPDATE", status: store.getStatus(), activities: store.getActivities(true), hiddenActivities: store.getHiddenActivities() };
  obj.dispatch(obj);
}
initializeDefault;
let prototype = function SelfPresenceStoreManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.stores = new Map().set(closure_2, handleChange);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("obj132").fileFinishedImporting("stores/SelfPresenceStoreManager.tsx");

export default prototype;