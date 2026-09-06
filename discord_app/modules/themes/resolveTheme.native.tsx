// discord_app/modules/themes/resolveTheme.native.tsx
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import ClientThemesUtils from "../client_themes/ClientThemesUtils.tsx";
import AuthenticationUtils from "../../utils/AuthenticationUtils.tsx";
import CustomThemeMobileStore from "../client_themes/native/CustomThemeMobileStore.tsx";
import SelectivelySyncedUserSettingsStore from "../user_settings/SelectivelySyncedUserSettingsStore.tsx";
import UnsyncedUserSettingsStore from "../user_settings/UnsyncedUserSettingsStore.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";

require = fn;
const ThemeConstants = fn(1186);
({
  PROTO_THEME_MAP_MOBILE_REFRESH: metroRequire,
  SystemTheme: closure_7,
  SystemThemeState: closure_8,
} = ThemeConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/resolveTheme.native.tsx");

export default function resolveTheme(arg0, arg1) {
  const previewTheme = CustomThemeMobileStore.getPreviewTheme();
  if (undefined !== previewTheme) {
    return previewTheme.baseTheme;
  } else {
    if (!obj6.isAuthenticated()) {
      if (arg0 !== constants.NO_PREFERENCE) {
        let tmp17Result = ClientThemesUtils;
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
      let customUserThemeSettings = prop;
    } else if (appearance != null) {
      const clientThemeSettings = appearance.clientThemeSettings;
      if (clientThemeSettings != null) {
        customUserThemeSettings = clientThemeSettings.customUserThemeSettings;
      }
    }
    if (null != theme) {
      tmp17Result = ClientThemesUtils;
      return tmp17Result.resolveThemeWithCustomSettings(theme, customUserThemeSettings);
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
          let themeWithCustomSettings = ClientThemesUtils.resolveThemeWithCustomSettings(
            arg1[arg0],
            customUserThemeSettings,
          );
          const tmp17Result1 = ClientThemesUtils;
        }
        return themeWithCustomSettings;
      }
      themeWithCustomSettings = ClientThemesUtils.resolveThemeWithCustomSettings(
        timestampProducer[theme1],
        customUserThemeSettings,
      );
      const tmp17Result2 = ClientThemesUtils;
    }
    obj6 = AuthenticationUtils;
  }
}
