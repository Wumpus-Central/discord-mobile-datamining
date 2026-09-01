// discord_app/modules/user_settings/defs/native/LightModeThemeSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useSyncedModeThemeName from "useSyncedModeThemeName.tsx";
import closure_2 from "../../ThemeStore.tsx";
import { SystemTheme } from "../../ThemeConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { SettingsAppearanceLightModeThemePickerScreen } from "../../appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.NoFvjZ);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.LIGHT);
  },
  screen: createToggle,
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_LIGHT_MODE_THEME_PICKER,
  getComponent() {
    return SettingsAppearanceLightModeThemePickerScreen /* SettingsAppearanceLightModeThemePickerScreen */.default;
  },
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/LightModeThemeSetting.tsx");

export default createToggle;
