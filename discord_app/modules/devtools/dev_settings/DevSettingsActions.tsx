import getUserAgnosticState from "getUserAgnosticState";

const result = require("set").fileFinishedImporting("modules/devtools/dev_settings/DevSettingsActions.tsx");

export const toggle = function toggle(toggle, flag) {
  let tmp = flag;
  if (typeof flag !== "boolean") {
    tmp = !store.get(toggle);
  }
  let obj = importDefault(709);
  obj = { type: "DEV_TOOLS_DEV_SETTING_SET", toggle, value: tmp };
  obj.dispatch(obj);
};
export const clearAll = function clearAll() {
  for (const key10005 in getUserAgnosticState.enabled()) {
    let tmp4 = key10005;
    let flag = false;
    if (typeof false !== "boolean") {
      let tmp5 = store;
      flag = !store.get(key10005);
    }
    let tmp = importDefault;
    let tmp2 = dependencyMap;
    let obj = importDefault(709);
    obj = { type: "DEV_TOOLS_DEV_SETTING_SET", toggle: null, value: null };
    obj[1] = key10005;
    obj[2] = flag;
    let dispatchResult = obj.dispatch(obj);
    continue;
  }
};