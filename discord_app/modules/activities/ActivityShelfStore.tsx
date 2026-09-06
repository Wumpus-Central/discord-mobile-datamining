// === Module 9519: ActivityShelfStore ===

// Module 9519 (ActivityShelfStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let closure_0 = { usageByApplicationId: {}, shelfOrder: [] };
const PersistedStore = initializeDefault.PersistedStore;
class ActivityShelfStore extends PersistedStore {
}
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
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/ActivityShelfStore.tsx");

export default activityShelfStore;