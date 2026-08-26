// === Module 10762: initialize ===

// Module 10762 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let closure_0 = { usageByApplicationId: {}, shelfOrder: [] };
const PersistedStore = initializeDefault.PersistedStore;
class ActivityShelfStore extends PersistedStore {
}
const prototype = ActivityShelfStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = arg0;
  obj = { usageByApplicationId: {}, shelfOrder: [] };
  if (arg0 == null) {
    obj = {};
  }
  const merged = Object.assign(obj);
};
prototype["getState"] = function getState() {
  return closure_0;
};
ActivityShelfStore.displayName = "ActivityShelfStore";
ActivityShelfStore.persistKey = "ActivityShelfStore";
const activityShelfStore = new ActivityShelfStore(dispatcherDefault, {
  LOGOUT: function reset() {
    closure_0 = { usageByApplicationId: {}, shelfOrder: [] };
  }
});
const result = require("set").fileFinishedImporting("modules/activities/ActivityShelfStore.tsx");

export default activityShelfStore;