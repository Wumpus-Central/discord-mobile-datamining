// discord_app/modules/devtools/dev_settings/DevSettingsActions.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import DevSettingsStore from "DevSettingsStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/dev_settings/DevSettingsActions.tsx");

export const toggle = function toggle(toggle, flag) {
  let tmp = flag;
  if (typeof flag !== "boolean") {
    tmp = !DevSettingsStore.get(toggle);
  }
  const obj = { type: "DEV_TOOLS_DEV_SETTING_SET", toggle, value: tmp };
  obj.dispatch(obj);
};
export const clearAll = function clearAll() {
  for (const key10005 in DevSettingsStore.enabled()) {
    let flag = false;
    if (typeof false !== "boolean") {
      flag = !DevSettingsStore.get(key10005);
    }
    let obj = DispatcherDefault;
    obj = { type: "DEV_TOOLS_DEV_SETTING_SET", toggle: key10005, value: flag };
    let dispatchResult = obj.dispatch(obj);
    continue;
  }
};
