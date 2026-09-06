// discord_app/modules/user_settings/defs/native/SameAsDeviceThemeSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import UserSettingsAppearanceThemeUtils from "../../appearance/native/UserSettingsAppearanceThemeUtils.tsx";
import ThemeStore from "../../ThemeStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.c445ix);
  },
  parent: fn(7975).MobileUserSettings.APPEARANCE,
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
  },
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SameAsDeviceThemeSetting.tsx");

export default SettingBuilders;
