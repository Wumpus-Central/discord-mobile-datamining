// === Module 1237: resolveTheme ===

// Module 1237 (resolveTheme)
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1239 */;
import AuthenticationUtils from "AuthenticationUtils" /* 7152 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1238 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1194 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1195 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ThemeConstants from "ThemeConstants" /* 1196 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
({ PROTO_THEME_MAP_MOBILE_REFRESH: metroRequire, SystemTheme: metroImportDefault, SystemThemeState: metroImportAll } = ThemeConstants);
const result = size.fileFinishedImporting("modules/themes/resolveTheme.native.tsx");

export default function resolveTheme(arg0, arg1) {
  const previewTheme = CustomThemeMobileStore.getPreviewTheme();
  if (undefined !== previewTheme) {
    return previewTheme.baseTheme;
  } else {
    let customUserThemeSettings;
    const useSystemTheme = UnsyncedUserSettingsStore.useSystemTheme;
    const obj6 = AuthenticationUtils;
    if (!obj6.isAuthenticated()) {
      if (arg0 !== metroImportDefault.NO_PREFERENCE) {
        const tmp17Result = ClientThemesUtils;
        return tmp17Result.resolveThemeWithCustomSettings(arg1[arg0], CustomThemeMobileStore.getCustomTheme());
      }
    }
    const appearanceSettings = SelectivelySyncedUserSettingsStore.getAppearanceSettings();
    let theme;
    if (appearanceSettings != null) {
      theme = appearanceSettings.theme;
    }
    const appearance = UserSettingsProtoStore.settings.appearance;
    if (null != appearanceSettings) {
      const clientThemeSettings2 = appearanceSettings.clientThemeSettings;
      let prop;
      if (clientThemeSettings2 != null) {
        prop = clientThemeSettings2.customUserThemeSettings;
      }
      customUserThemeSettings = prop;
    } else if (appearance != null) {
      const clientThemeSettings = appearance.clientThemeSettings;
      if (clientThemeSettings != null) {
        customUserThemeSettings = clientThemeSettings.customUserThemeSettings;
      }
    }
    if (null != theme) {
      const tmp17Result4 = ClientThemesUtils;
      return tmp17Result4.resolveThemeWithCustomSettings(theme, customUserThemeSettings);
    } else {
      let theme1;
      if (appearance != null) {
        theme1 = appearance.theme;
      }
      if (theme1 == null) {
        theme1 = preloaded_user_settings.Theme.UNSET;
      }
      if (theme1 === preloaded_user_settings.Theme.UNSET) {
        let themeWithCustomSettings;
        if (arg0 !== metroImportDefault.NO_PREFERENCE) {
          const tmp17Result5 = ClientThemesUtils;
          themeWithCustomSettings = tmp17Result5.resolveThemeWithCustomSettings(arg1[arg0], customUserThemeSettings);
        }
        return themeWithCustomSettings;
      }
      const tmp17Result6 = ClientThemesUtils;
      themeWithCustomSettings = tmp17Result6.resolveThemeWithCustomSettings(metroRequire[theme1], customUserThemeSettings);
    }
  }
};