// === Module 4443: getUserAgnosticState ===

// Module 4443 (getUserAgnosticState)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let obj = { MESSAGING: 0, [0]: "MESSAGING", OVERLAYS: 1, [1]: "OVERLAYS", PREMIUM: 2, [2]: "PREMIUM", REPORTING: 3, [3]: "REPORTING", APP_COLLECTIONS: 4, [4]: "APP_COLLECTIONS", SHOP: 5, [5]: "SHOP", LIBDISCORE: 6, [6]: "LIBDISCORE" };
obj = { visual_effect_view_overrides: obj, obscure_blur_effect_explicit_content_enabled: obj1, obscure_blur_effect_gore_content_enabled: obj2, obscure_blur_effect_self_harm_content_enabled: obj3, explicit_media_redaction_ignore_pending_scan: obj4, analytics_debugger: obj5, idle_status_indicator: obj6, highlight_mana_text: obj7, upload_fail_50: obj8, send_fail_100: obj9, preview_own_typing_indicator: obj10, premium_roadblocks: obj11, force_mock_iap: obj12, iar_testing: obj13, iar_skip_api_report_submit: obj14, iar_show_report_sub_type_labels: obj15, only_show_preview_app_collections: obj16, disable_app_collections_cache: obj17, shop_disable_cache: obj18, shop_include_unpublished: obj19, shop_show_debug_overlay: obj20, bypass_google_sku_sync: obj21, libdiscore_verbose_telemetry_logging: obj22 };
obj = { label: "Blur view overrides for designers to test with", category: obj.OVERLAYS };
let closure_1 = {};
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class DevSettingsStore extends DeviceSettingsStore {
}
const prototype = DevSettingsStore.prototype;
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
    if (!flag) {
      continue;
    } else {
      let tmp = closure_1;
      closure_1[key10005] = flag;
      continue;
    }
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
prototype["enabled"] = function enabled() {
  return closure_1;
};
prototype["allByCategory"] = function allByCategory(PREMIUM) {
  closure_0 = PREMIUM;
  const entries = Object.entries(closure_0);
  const found = entries.filter((arg0) => {
    [, tmp] = arg0;
    return tmp.category === closure_0;
  });
  return found.map((arg0) => {
    [tmp, tmp2] = arg0;
    const items = [tmp, , ];
    let flag = table[tmp];
    if (flag == null) {
      flag = false;
    }
    items[1] = flag;
    items[2] = tmp2;
    return items;
  });
};
DevSettingsStore.displayName = "DevToolsDevSettingsStore";
DevSettingsStore.persistKey = "DevToolsDevSettingsStore";
const devSettingsStore = new DevSettingsStore(dispatcherDefault, {
  DEV_TOOLS_DEV_SETTING_SET: function handleSet(value) {
    if (false !== value.value) {
      closure_1[value.toggle] = value.value;
    } else {
      const toggle = value.toggle;
      delete tmp2[tmp];
    }
  }
});
const result = require("set").fileFinishedImporting("modules/devtools/dev_settings/DevSettingsStore.tsx");

export default devSettingsStore;
export const DevSettingsCategory = obj;
export const CATEGORY_LABELS = { [obj.REPORTING]: "Reporting Toggles", [obj.OVERLAYS]: "Dev Overlays", [obj.MESSAGING]: "Messaging Toggles", [obj.APP_COLLECTIONS]: "App Collections Toggles", [obj.PREMIUM]: "Premium Toggles", [obj.SHOP]: "Shop Toggles", [obj.LIBDISCORE]: "Libdiscore Toggles" };
export const toggles = obj;