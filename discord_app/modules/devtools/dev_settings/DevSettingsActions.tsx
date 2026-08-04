// discord_app/modules/devtools/dev_settings/DevSettingsActions.tsx
import getUserAgnosticState from "getUserAgnosticState";

const result = require("set").fileFinishedImporting("modules/devtools/dev_settings/DevSettingsActions.tsx");

export const toggle = function toggle(toggle) {
  let tmp = arg1;
  if (typeof arg1 !== "T") {
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
    if (typeof false !== "T") {
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