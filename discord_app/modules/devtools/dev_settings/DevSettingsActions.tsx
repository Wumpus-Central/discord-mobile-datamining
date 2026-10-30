// === Module 17629: DevSettingsActions ===

// Module 17629 (DevSettingsActions)
import DispatcherDefault from "Dispatcher" /* 572 */;
import DevSettingsStore from "DevSettingsStore" /* 5622 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/dev_settings/DevSettingsActions.tsx");

export function toggle(toggle, flag) {
  let tmp = flag;
  if (typeof flag !== "boolean") {
    tmp = !DevSettingsStore.get(toggle);
  }
  DispatcherDefault.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle, value: tmp });
  const obj2 = { type: "DEV_TOOLS_DEV_SETTING_SET", toggle, value: tmp };
}
export function clearAll() {
  for (const key10005 in DevSettingsStore.enabled()) {
    let flag = false;
    if (typeof false !== "boolean") {
      flag = !DevSettingsStore.get(key10005);
    }
    let obj = DispatcherDefault;
    let obj2 = { type: "DEV_TOOLS_DEV_SETTING_SET", toggle: key10005, value: flag };
    let dispatchResult = obj.dispatch(obj2);
    continue;
  }
}