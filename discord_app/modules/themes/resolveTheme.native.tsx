// === Module 1226: resolveTheme ===

// Module 1226 (resolveTheme)
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1228 */;
import AuthenticationUtils from "AuthenticationUtils" /* 7081 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1227 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1183 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;

require = fn;
const ThemeConstants = fn(1185);
({ PROTO_THEME_MAP_MOBILE_REFRESH: metroRequire, SystemTheme: closure_7, SystemThemeState: closure_8 } = ThemeConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/resolveTheme.native.tsx");

export default function resolveTheme(arg0, arg1) {
  const previewTheme = CustomThemeMobileStore.getPreviewTheme();
  if (undefined !== previewTheme) {
    return previewTheme.baseTheme;
  } else {
    if (!obj6.isAuthenticated()) {
      if (arg0 !== constants.NO_PREFERENCE) {
        return ClientThemesUtils.resolveThemeWithCustomSettings(arg1[arg0], CustomThemeMobileStore.getCustomTheme());
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
      let customUserThemeSettings = prop;
    } else if (appearance != null) {
      const clientThemeSettings = appearance.clientThemeSettings;
      if (clientThemeSettings != null) {
        customUserThemeSettings = clientThemeSettings.customUserThemeSettings;
      }
    }
    if (null != theme) {
      return ClientThemesUtils.resolveThemeWithCustomSettings(theme, customUserThemeSettings);
    } else {
      let theme1;
      if (appearance != null) {
        theme1 = appearance.theme;
      }
      if (theme1 == null) {
        theme1 = preloaded_user_settings.Theme.UNSET;
      }
      if (theme1 === preloaded_user_settings.Theme.UNSET) {
        if (arg0 !== constants.NO_PREFERENCE) {
          let themeWithCustomSettings = ClientThemesUtils.resolveThemeWithCustomSettings(arg1[arg0], customUserThemeSettings);
          const tmp17Result5 = ClientThemesUtils;
        }
        return themeWithCustomSettings;
      }
      themeWithCustomSettings = ClientThemesUtils.resolveThemeWithCustomSettings(timestampProducer[theme1], customUserThemeSettings);
      const tmp17Result6 = ClientThemesUtils;
    }
    obj6 = AuthenticationUtils;
  }
};