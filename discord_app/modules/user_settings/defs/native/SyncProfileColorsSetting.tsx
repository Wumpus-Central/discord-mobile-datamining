// === Module 16823: SyncProfileColorsSetting ===

// Module 16823 (SyncProfileColorsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;

require = fn;
const SettingBuilders = fn(11937);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["sSY+mD"]);
  },
  parent: fn(8712).MobileUserSettings.ACCESSIBILITY,
  useValue: function useProfileColorsSettingValue() {
    items = [AccessibilityStore];
    return initialize.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
  },
  onValueChange: fn(15647).toggleSyncProfileThemeWithUserTheme
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncProfileColorsSetting.tsx");

export default toggle;