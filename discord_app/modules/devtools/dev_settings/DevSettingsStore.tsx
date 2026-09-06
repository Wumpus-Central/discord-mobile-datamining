// === Module 4559: DevSettingsStore ===

// Module 4559 (DevSettingsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let toggles = { MESSAGING: 0, [0]: "MESSAGING", OVERLAYS: 1, [1]: "OVERLAYS", PREMIUM: 2, [2]: "PREMIUM", REPORTING: 3, [3]: "REPORTING", APP_COLLECTIONS: 4, [4]: "APP_COLLECTIONS", SHOP: 5, [5]: "SHOP", LIBDISCORE: 6, [6]: "LIBDISCORE" };
toggles = { visual_effect_view_overrides: { label: "Blur view overrides for designers to test with", category: toggles.OVERLAYS }, obscure_blur_effect_explicit_content_enabled: { label: "Force explicit content obscure blur effect on for message media and embeds", category: toggles.OVERLAYS }, obscure_blur_effect_gore_content_enabled: { label: "Force gore content obscure blur effect on for message media and embeds", category: toggles.OVERLAYS }, obscure_blur_effect_self_harm_content_enabled: { label: "Force self harm content obscure blur effect on for message media and embeds", category: toggles.OVERLAYS }, explicit_media_redaction_ignore_pending_scan: { label: "Ignore pending scan on explicit media", category: toggles.OVERLAYS }, analytics_debugger: { label: "Enable analytics debugger view", category: toggles.OVERLAYS }, idle_status_indicator: { label: "Enable idle status indicator", category: toggles.OVERLAYS }, highlight_mana_text: { label: "Mana Text Migration Highlighter. Green: migrated Text/Heading. Dashed red: migrated but a caller style overrides the variant, so it will not move with the experiment. Solid red: unmigrated LegacyText. Yellow: TextStyleSheet read directly (experiment-reachable, not migrated); requires an app restart to take effect.", category: toggles.OVERLAYS }, upload_fail_50: { label: "Uploads: Fail 50% of uploads with 500 status after a 1 second delay", category: toggles.MESSAGING }, send_fail_100: { label: "Send: Fail with 500 status", category: toggles.MESSAGING }, preview_own_typing_indicator: { label: "Typing Indicator: always show the chat typing indicator as if you were typing", category: toggles.MESSAGING }, premium_roadblocks: { label: "Enable all new premium roadblocks", category: toggles.PREMIUM }, force_mock_iap: { label: "[iOS] Force mock IAP products", category: toggles.PREMIUM }, iar_testing: { label: "Enable staff only test iar menu options", category: toggles.REPORTING }, iar_skip_api_report_submit: { label: "Enable to skip calling the API to skip submitting actual IAR reports", category: toggles.REPORTING }, iar_show_report_sub_type_labels: { label: "Show IAR report sub type labels", category: toggles.REPORTING }, only_show_preview_app_collections: { label: "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.", category: toggles.APP_COLLECTIONS }, disable_app_collections_cache: { label: "Disable application collections cache so that you can see updates to collections immediately.", category: toggles.APP_COLLECTIONS }, shop_disable_cache: { label: "Disable collectibles shop cache", category: toggles.SHOP }, shop_include_unpublished: { label: "Show unpublished items in collectibles shop", category: toggles.SHOP }, shop_show_debug_overlay: { label: "Show debug log overlay in collectibles shop", category: toggles.SHOP }, bypass_google_sku_sync: { label: "[Android] Bypass Google SKU sync in collectibles shop", category: toggles.SHOP }, libdiscore_verbose_telemetry_logging: { label: "Enable verbose telemetry logging for libdiscore", category: toggles.LIBDISCORE } };
let toggleStates = {};
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class DevSettingsStore extends DeviceSettingsStore {
}
const prototype = DevSettingsStore.prototype;
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
    if (!flag) {
      continue;
    } else {
      closure_1[key10005] = flag;
      continue;
    }
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
prototype["enabled"] = function enabled() {
  return closure_1;
};
prototype["allByCategory"] = function allByCategory(PREMIUM) {
  closure_0 = PREMIUM;
  const entries = Object.entries(closure_0);
  const found = entries.filter((item) => {
    [, tmp] = item;
    return tmp.category === closure_0;
  });
  return found.map((item) => {
    [tmp, tmp2] = item;
    const items = [tmp, , ];
    let flag = toggleStates[tmp];
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
toggles = {
  DEV_TOOLS_DEV_SETTING_SET: function handleSet(value) {
    if (false !== value.value) {
      closure_1[value.toggle] = value.value;
    } else {
      const toggle = value.toggle;
      delete tmp2[tmp];
    }
  }
};
const devSettingsStore = new DevSettingsStore(DispatcherDefault, toggles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/dev_settings/DevSettingsStore.tsx");

export default devSettingsStore;
export const DevSettingsCategory = toggles;
export const CATEGORY_LABELS = { [toggles.REPORTING]: "Reporting Toggles", [toggles.OVERLAYS]: "Dev Overlays", [toggles.MESSAGING]: "Messaging Toggles", [toggles.APP_COLLECTIONS]: "App Collections Toggles", [toggles.PREMIUM]: "Premium Toggles", [toggles.SHOP]: "Shop Toggles", [toggles.LIBDISCORE]: "Libdiscore Toggles" };
export { toggles };