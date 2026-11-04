// === Module 17642: SyncProfileColorsSetting ===

// Module 17642 (SyncProfileColorsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

require = fn;
const SettingBuilders = fn(11728);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["sSY+mD"]);
  },
  parent: fn(8573).MobileUserSettings.ACCESSIBILITY,
  useValue: function useProfileColorsSettingValue() {
    items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
  },
  onValueChange: fn(16502).toggleSyncProfileThemeWithUserTheme
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncProfileColorsSetting.tsx");

export default toggle;