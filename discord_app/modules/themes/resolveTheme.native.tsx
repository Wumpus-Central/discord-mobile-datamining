// discord_app/modules/themes/resolveTheme.native.tsx
import getToken from "../../utils/AuthenticationUtils.tsx";
import closure_2 from "../client_themes/native/CustomThemeMobileStore.tsx";
import closure_3 from "../user_settings/SelectivelySyncedUserSettingsStore.tsx";
import closure_4 from "../user_settings/UnsyncedUserSettingsStore.tsx";
import closure_5 from "../user_settings/UserSettingsProtoStore.tsx";
import SystemThemeState from "../user_settings/ThemeConstants.tsx";

require = arg1;
({ PROTO_THEME_MAP_MOBILE_REFRESH: closure_6, SystemTheme: error, SystemThemeState: closure_8 } = SystemThemeState);
const result = require("set").fileFinishedImporting("modules/themes/resolveTheme.native.tsx");

export default function resolveTheme(arg0, arg1) {
  previewTheme = previewTheme.getPreviewTheme();
  if (undefined !== previewTheme) {
    return previewTheme.baseTheme;
  } else {
    if (!obj6.isAuthenticated()) {
      if (arg0 !== constants.NO_PREFERENCE) {
        let tmp17Result = tmp17(1347);
        return tmp17Result.resolveThemeWithCustomSettings(arg1[arg0], previewTheme.getCustomTheme());
      }
    }
    appearanceSettings = appearanceSettings.getAppearanceSettings();
    let theme;
    if (appearanceSettings != null) {
      theme = appearanceSettings.theme;
    }
    const appearance = settings.settings.appearance;
    if (null != appearanceSettings) {
      const clientThemeSettings2 = appearanceSettings.clientThemeSettings;
      let prop;
      if (clientThemeSettings2 != null) {
        prop = clientThemeSettings2.customUserThemeSettings;
      }
      let customUserThemeSettings = prop;
    } else if (appearance != null) {
      const clientThemeSettings = appearance.clientThemeSettings;
      if (clientThemeSettings != null) {
        customUserThemeSettings = clientThemeSettings.customUserThemeSettings;
      }
    }
    if (null != theme) {
      tmp17Result = tmp17(1347);
      return tmp17Result.resolveThemeWithCustomSettings(theme, customUserThemeSettings);
    } else {
      let theme1;
      if (appearance != null) {
        theme1 = appearance.theme;
      }
      if (theme1 == null) {
        theme1 = tmp17(1306).Theme.UNSET;
      }
      if (theme1 === tmp17(1306).Theme.UNSET) {
        if (arg0 !== constants.NO_PREFERENCE) {
          let themeWithCustomSettings = tmp17(1347).resolveThemeWithCustomSettings(arg1[arg0], customUserThemeSettings);
          const tmp17Result1 = tmp17(1347);
        }
        return themeWithCustomSettings;
      }
      themeWithCustomSettings = tmp17(1347).resolveThemeWithCustomSettings(table[theme1], customUserThemeSettings);
      const tmp17Result2 = tmp17(1347);
    }
    obj6 = getToken;
  }
}
