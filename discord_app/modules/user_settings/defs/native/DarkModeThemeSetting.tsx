// discord_app/modules/user_settings/defs/native/DarkModeThemeSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import useSyncedModeThemeName from "useSyncedModeThemeName.tsx";
import handleThemeChange from "../../ThemeStore.tsx";
import { SystemTheme } from "../../ThemeConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { SettingsAppearanceDarkModeThemePickerScreen } from "../../appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx";

require = fn;
{
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["EgvHH/"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    let stateFromStores = useIsMobileVisualRefreshExperimentEnabledDefault("DarkModeThemeSetting");
    const items = [closure_3];
    if (stateFromStores) {
      stateFromStores = obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
    }
    return stateFromStores;
  },
  useTrailing() {
    return useSyncedModeThemeName.useSyncedModeThemeName(SystemTheme.DARK);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_DARK_MODE_THEME_PICKER,
  getComponent() {
    return SettingsAppearanceDarkModeThemePickerScreen /* SettingsAppearanceDarkModeThemePickerScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default createToggle;