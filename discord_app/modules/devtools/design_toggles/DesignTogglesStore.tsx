// === Module 5627: DesignTogglesStore ===

// Module 5627 (DesignTogglesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let toggles = { enable_recently_active: "Enable recently active channels", theme_setting_in_account_sheet: "Show theme settings in the Account action sheet", nav_experiment_server_drawer_enabled: "[NavI] Enable expandable server drawer", show_icymi_debug_scores: "Show ICYMI debug scores", channel_list_scrim: "Dim the channel list when chat appears", mana_radio_large_variant: "Larger Radio", mana_checkbox_large_variant: "Larger Checkbox", mana_switch_large_variant: "Larger Switch", show_header_debug_info: "Show header component debug overlays" };
let toggleStates = {};
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class DesignTogglesStore extends DeviceSettingsStore {
}
const prototype = DesignTogglesStore.prototype;
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { toggleStates };
};
prototype["initialize"] = function initialize(toggleStates) {
  for (const key10005 in obj) {
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
    closure_1[key10005] = flag;
    continue;
  }
};
prototype["get"] = function get(arg0) {
  let flag = toggleStates[arg0];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["set"] = function set(arg0, arg1) {
  closure_1[arg0] = arg1;
  return arg1;
};
prototype["all"] = function all() {
  return closure_1;
};
prototype["allWithDescriptions"] = function allWithDescriptions() {
  const entries = Object.entries(closure_1);
  return entries.map((item) => {
    [tmp, tmp2] = item;
    const items = [tmp, tmp2, toggles[tmp]];
    return items;
  });
};
DesignTogglesStore.displayName = "DevToolsDesignTogglesStore";
DesignTogglesStore.persistKey = "DevToolsDesignTogglesStore";
toggles = {
  DEV_TOOLS_DESIGN_TOGGLE_SET: function handleSet(toggle) {
    closure_1[toggle.toggle] = toggle.value;
  }
};
const designTogglesStore = new DesignTogglesStore(DispatcherDefault, toggles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/design_toggles/DesignTogglesStore.tsx");

export default designTogglesStore;
export { toggles };