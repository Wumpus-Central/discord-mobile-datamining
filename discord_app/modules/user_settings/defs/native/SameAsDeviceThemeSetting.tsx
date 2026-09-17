// === Module 15419: SameAsDeviceThemeSetting ===

// Module 15419 (SameAsDeviceThemeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import UserSettingsAppearanceThemeUtils from "UserSettingsAppearanceThemeUtils" /* 15289 */;
import ThemeStore from "ThemeStore" /* 1182 */;

require = fn;
const SettingBuilders = fn(11622);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.c445ix);
  },
  parent: fn(8111).MobileUserSettings.APPEARANCE,
  useValue: function useSameAsDeviceThemeValue() {
    const items = [ThemeStore];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  onValueChange: function onSameAsDeviceThemeValueChange(arg0) {
    const obj = UserSettingsAppearanceThemeUtils;
    if (arg0) {
      const result = obj.enableSameAsDeviceTheme();
    } else {
      const result1 = obj.disableSameAsDeviceTheme();
    }
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t["+tBsvs"]);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SameAsDeviceThemeSetting.tsx");

export default toggle;