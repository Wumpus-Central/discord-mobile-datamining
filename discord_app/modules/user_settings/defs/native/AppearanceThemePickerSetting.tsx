// discord_app/modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import ThemeStore from "../../ThemeStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Ksh3ik);
  },
  parent: fn(7975).MobileUserSettings.APPEARANCE,
  usePredicate: function useIsSingleThemePickerVisible() {
    const items = [ThemeStore];
    return !initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing: fn(15261).useAppearanceSettingTrailing,
  screen: {
    route: fn(1074).UserSettingsSections.APPEARANCE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceThemePickerScreen").default;
    },
  },
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx");

export default SettingBuilders;
