// discord_app/modules/devtools/design_toggles/DesignTogglesStore.tsx
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let obj = { enable_recently_active: "Enable recently active channels", theme_setting_in_account_sheet: "Show theme settings in the Account action sheet", nav_experiment_server_drawer_enabled: "[NavI] Enable expandable server drawer", show_icymi_debug_scores: "Show ICYMI debug scores", channel_list_scrim: "Dim the channel list when chat appears", mana_radio_large_variant: "Larger Radio", mana_checkbox_large_variant: "Larger Checkbox", mana_switch_large_variant: "Larger Switch", show_header_debug_info: "Show header component debug overlays" };
let closure_1 = {};
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class DesignTogglesStore extends DeviceSettingsStore {
}
const prototype = DesignTogglesStore.prototype;
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { toggleStates: closure_1 };
};
prototype["initialize"] = function initialize(toggleStates) {
  for (const key10005 in obj) {
    let tmp2 = key10005;
    let flag;
    if (arg0 != null) {
      toggleStates = arg0.toggleStates;
      if (toggleStates != null) {
        flag = toggleStates[key10005];
      }
    }
    if (flag == null) {
      flag = false;
    }
    let tmp = closure_1;
    closure_1[key10005] = flag;
    continue;
  }
};
prototype["get"] = function get(arg0) {
  let flag = table[arg0];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["set"] = function set(arg0, arg1) {
  closure_1[arg0] = arg1;
  return arg1;
};
prototype["all"] = function all(items) {
  return closure_1;
};
prototype["allWithDescriptions"] = function allWithDescriptions() {
  const entries = Object.entries(closure_1);
  return entries.map((arg0) => {
    [tmp, tmp2] = arg0;
    const items = [tmp, tmp2, table[tmp]];
    return items;
  });
};
DesignTogglesStore.displayName = "DevToolsDesignTogglesStore";
DesignTogglesStore.persistKey = "DevToolsDesignTogglesStore";
obj = {
  DEV_TOOLS_DESIGN_TOGGLE_SET: function handleSet(toggle) {
    closure_1[toggle.toggle] = toggle.value;
  }
};
const designTogglesStore = new DesignTogglesStore(dispatcherDefault, obj);
const result = require("set").fileFinishedImporting("modules/devtools/design_toggles/DesignTogglesStore.tsx");

export default designTogglesStore;
export const toggles = obj;