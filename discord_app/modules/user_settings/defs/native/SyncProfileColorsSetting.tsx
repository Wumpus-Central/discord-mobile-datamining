// === Module 18081: SyncProfileColorsSetting ===

// Module 18081 (SyncProfileColorsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import AccessibilityStore from "AccessibilityStore" /* 5311 */;

require = fn;
const SettingBuilders = fn(12612);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["sSY+mD"]);
  },
  parent: fn(9213).MobileUserSettings.ACCESSIBILITY,
  useValue: function useProfileColorsSettingValue() {
    items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
  },
  onValueChange: fn(16924).toggleSyncProfileThemeWithUserTheme
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncProfileColorsSetting.tsx");

export default toggle;