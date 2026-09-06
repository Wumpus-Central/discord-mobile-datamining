// discord_app/modules/devtools/design_toggles/DesignTogglesActions.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import DesignTogglesStore from "DesignTogglesStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/design_toggles/DesignTogglesActions.tsx");

export const toggle = function toggle(toggle, flag) {
  let tmp = flag;
  if (typeof flag !== "boolean") {
    tmp = !DesignTogglesStore.get(toggle);
  }
  const obj = { type: "DEV_TOOLS_DESIGN_TOGGLE_SET", toggle, value: tmp };
  obj.dispatch(obj);
};
export const clearAll = function clearAll() {
  for (const key10005 in DesignTogglesStore.all()) {
    let flag = false;
    if (typeof false !== "boolean") {
      flag = !DesignTogglesStore.get(key10005);
    }
    let obj = DispatcherDefault;
    obj = { type: "DEV_TOOLS_DESIGN_TOGGLE_SET", toggle: key10005, value: flag };
    let dispatchResult = obj.dispatch(obj);
    continue;
  }
};
