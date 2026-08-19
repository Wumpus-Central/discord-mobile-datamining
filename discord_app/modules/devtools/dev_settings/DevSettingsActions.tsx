// discord_app/modules/devtools/dev_settings/DevSettingsActions.tsx
import dispatcherDefault from "../../../Dispatcher.tsx";
import getUserAgnosticState from "DevSettingsStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/devtools/dev_settings/DevSettingsActions.tsx");

export const toggle = function toggle(toggle, flag) {
  let tmp = flag;
  if (typeof flag !== "boolean") {
    tmp = !store.get(toggle);
  }
  const obj = { type: "DEV_TOOLS_DEV_SETTING_SET", toggle, value: tmp };
  obj.dispatch(obj);
};
export const clearAll = function clearAll() {
  for (const key10005 in closure_2.enabled()) {
    let flag = false;
    if (typeof false !== "boolean") {
      flag = !store.get(key10005);
    }
    let obj = dispatcherDefault;
    obj = { type: "DEV_TOOLS_DEV_SETTING_SET", toggle: null, value: null };
    obj[1] = key10005;
    obj[2] = flag;
    let dispatchResult = obj.dispatch(obj);
    continue;
  }
};