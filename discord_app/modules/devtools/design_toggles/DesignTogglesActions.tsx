// === Module 15162: toggle ===

// Module 15162 (toggle)
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "getUserAgnosticState" /* 5294 */;

const result = require("set").fileFinishedImporting("modules/devtools/design_toggles/DesignTogglesActions.tsx");

export const toggle = function toggle(toggle, flag) {
  let tmp = flag;
  if (typeof flag !== "boolean") {
    tmp = !store.get(toggle);
  }
  let obj = dispatcherDefault;
  obj = { type: "DEV_TOOLS_DESIGN_TOGGLE_SET", toggle, value: tmp };
  obj.dispatch(obj);
};
export const clearAll = function clearAll() {
  for (const key10005 in closure_2.all()) {
    let tmp4 = key10005;
    let flag = false;
    if (typeof false !== "boolean") {
      let tmp5 = store;
      flag = !store.get(key10005);
    }
    let tmp = importDefault;
    let tmp2 = dependencyMap;
    let obj = dispatcherDefault;
    obj = { type: "DEV_TOOLS_DESIGN_TOGGLE_SET", toggle: null, value: null };
    obj[1] = key10005;
    obj[2] = flag;
    let dispatchResult = obj.dispatch(obj);
    continue;
  }
};