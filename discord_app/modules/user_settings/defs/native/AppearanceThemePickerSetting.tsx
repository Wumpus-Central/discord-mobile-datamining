// discord_app/modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import closure_2 from "../../ThemeStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { ThemeTypes } from "../../appearance/native/SettingsAppearanceThemePickerScreen.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Ksh3ik);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate: function useIsSingleThemePickerVisible() {
    const items = [closure_2];
    return !initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing: require("useAppearanceSettingTrailing").useAppearanceSettingTrailing,
  screen: createToggle,
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_THEME_PICKER,
  getComponent() {
    return ThemeTypes /* ThemeTypes */.default;
  },
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting(
  "modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx",
);

export default createToggle;
