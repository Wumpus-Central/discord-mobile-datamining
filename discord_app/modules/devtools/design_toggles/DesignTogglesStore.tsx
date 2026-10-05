// discord_app/modules/devtools/design_toggles/DesignTogglesStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const toggles = {
  enable_recently_active: "Enable recently active channels",
  theme_setting_in_account_sheet: "Show theme settings in the Account action sheet",
  nav_experiment_server_drawer_enabled: "[NavI] Enable expandable server drawer",
  show_icymi_debug_scores: "Show ICYMI debug scores",
  channel_list_scrim: "Dim the channel list when chat appears",
  mana_radio_large_variant: "Larger Radio",
  mana_checkbox_large_variant: "Larger Checkbox",
  mana_switch_large_variant: "Larger Switch",
  show_header_debug_info: "Show header component debug overlays",
};
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class DesignTogglesStore extends DeviceSettingsStore {
  getUserAgnosticState() {
    return { toggleStates };
  }
  initialize(toggleStates) {
    for (const key10005 in obj) {
      let flag;
      if (toggleStates != null) {
        toggleStates = toggleStates.toggleStates;
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
  }
  get(arg0) {
    let flag = toggleStates[arg0];
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  set(arg0, arg1) {
    toggleStates[arg0] = arg1;
    return arg1;
  }
  all() {
    return toggleStates;
  }
  allWithDescriptions() {
    const entries = Object.entries(toggleStates);
    return entries.map((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      const items = [tmp, tmp2, toggles[tmp]];
      return items;
    });
  }
}
const prototype = DesignTogglesStore.prototype;
DesignTogglesStore.displayName = "DevToolsDesignTogglesStore";
DesignTogglesStore.persistKey = "DevToolsDesignTogglesStore";
const obj2 = {
  DEV_TOOLS_DESIGN_TOGGLE_SET: function handleSet(toggle) {
    toggleStates[toggle.toggle] = toggle.value;
  },
};
const designTogglesStore = new DesignTogglesStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/devtools/design_toggles/DesignTogglesStore.tsx");

export default designTogglesStore;
export { toggles };
