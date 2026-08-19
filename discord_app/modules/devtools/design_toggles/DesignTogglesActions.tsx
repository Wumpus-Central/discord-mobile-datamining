// === Module 15162: toggle ===

// Module 15162 (toggle)
import dispatcherDefault from "dispatcher" /* 709 */;
import getUserAgnosticState from "getUserAgnosticState" /* 5294 */;

const result = require("obj132").fileFinishedImporting("modules/devtools/design_toggles/DesignTogglesActions.tsx");

export const toggle = function toggle(toggle, flag) {
  let tmp = flag;
  if (typeof flag !== "boolean") {
    tmp = !store.get(toggle);
  }
  const obj = { type: "DEV_TOOLS_DESIGN_TOGGLE_SET", toggle, value: tmp };
  obj.dispatch(obj);
};
export const clearAll = function clearAll() {
  for (const key10005 in closure_2.all()) {
    let flag = false;
    if (typeof false !== "boolean") {
      flag = !store.get(key10005);
    }
    let obj = dispatcherDefault;
    obj = { type: "DEV_TOOLS_DESIGN_TOGGLE_SET", toggle: null, value: null };
    obj[1] = key10005;
    obj[2] = flag;
    let dispatchResult = obj.dispatch(obj);
    continue;
  }
};