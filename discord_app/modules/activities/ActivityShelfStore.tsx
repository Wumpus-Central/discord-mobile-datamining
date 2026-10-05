// discord_app/modules/activities/ActivityShelfStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = { usageByApplicationId: {}, shelfOrder: [] };
const PersistedStore = get_initializedDefault.PersistedStore;
class ActivityShelfStore extends PersistedStore {
  initialize(arg0) {
    let obj = arg0;
    const obj2 = { usageByApplicationId: {}, shelfOrder: [] };
    if (arg0 == null) {
      obj = {};
    }
    const merged = Object.assign(obj);
    closure_0 = obj2;
  }
  getState() {
    return closure_0;
  }
}
const prototype = ActivityShelfStore.prototype;
ActivityShelfStore.displayName = "ActivityShelfStore";
ActivityShelfStore.persistKey = "ActivityShelfStore";
let obj = {
  LOGOUT: function reset() {
    closure_0 = { usageByApplicationId: {}, shelfOrder: [] };
  },
};
const activityShelfStore = new ActivityShelfStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/activities/ActivityShelfStore.tsx");

export default activityShelfStore;
