// discord_app/modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import ThemeStore from "../../ThemeStore.tsx";

require = fn;
const SettingBuilders = fn(11937);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Ksh3ik);
  },
  parent: fn(8712).MobileUserSettings.APPEARANCE,
  usePredicate: function useIsSingleThemePickerVisible() {
    items = [ThemeStore];
    return !initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing: fn(16664).useAppearanceSettingTrailing,
  screen: {
    route: fn(1071).UserSettingsSections.APPEARANCE_THEME_PICKER,
    getComponent() {
      return require("SettingsAppearanceThemePickerScreen").default;
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx");

export default route;
