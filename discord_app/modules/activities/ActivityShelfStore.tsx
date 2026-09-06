// discord_app/modules/activities/ActivityShelfStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

let closure_0 = { usageByApplicationId: {}, shelfOrder: [] };
const PersistedStore = initializeDefault.PersistedStore;
class ActivityShelfStore extends PersistedStore {}
const prototype = ActivityShelfStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = { usageByApplicationId: {}, shelfOrder: [] };
  if (arg0 == null) {
    obj = {};
  }
  const merged = Object.assign(obj);
  closure_0 = obj;
};
prototype["getState"] = function getState() {
  return closure_0;
};
ActivityShelfStore.displayName = "ActivityShelfStore";
ActivityShelfStore.persistKey = "ActivityShelfStore";
const activityShelfStore = new ActivityShelfStore(DispatcherDefault, {
  LOGOUT: function reset() {
    closure_0 = { usageByApplicationId: {}, shelfOrder: [] };
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/ActivityShelfStore.tsx");

export default activityShelfStore;
