// discord_app/modules/themes/resolveTheme.native.tsx
import getToken from "../../utils/AuthenticationUtils.tsx";
import closure_2 from "../client_themes/native/CustomThemeMobileStore.tsx";
import closure_3 from "../user_settings/SelectivelySyncedUserSettingsStore.tsx";
import closure_4 from "../user_settings/UnsyncedUserSettingsStore.tsx";
import closure_5 from "../user_settings/UserSettingsProtoStore.tsx";
import SystemThemeState from "../user_settings/ThemeConstants.tsx";

require = arg1;
({ PROTO_THEME_MAP_MOBILE: closure_6, PROTO_THEME_MAP_MOBILE_REFRESH: error, SystemTheme: closure_8, SystemThemeState: c9 } = SystemThemeState);
const result = require("set").fileFinishedImporting("modules/themes/resolveTheme.native.tsx");

export default function resolveTheme(arg0, arg1) {
  previewTheme = previewTheme.getPreviewTheme();
  if (undefined !== previewTheme) {
    return previewTheme.baseTheme;
  } else {
    if (!obj7.isAuthenticated()) {
      if (arg0 !== constants.NO_PREFERENCE) {
        let tmp16Result = tmp16(1347);
        return tmp16Result.resolveThemeWithCustomSettings(arg1[arg0], obj.getCustomTheme());
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
      tmp16Result = tmp16(1347);
      return tmp16Result.resolveThemeWithCustomSettings(theme, customUserThemeSettings);
    } else {
      let theme1;
      if (appearance != null) {
        theme1 = appearance.theme;
      }
      if (theme1 == null) {
        theme1 = tmp16(1306).Theme.UNSET;
      }
      if (theme1 === tmp16(1306).Theme.UNSET) {
        if (arg0 !== constants.NO_PREFERENCE) {
          return tmp16(1347).resolveThemeWithCustomSettings(arg1[arg0], customUserThemeSettings);
        }
      }
      const tmp16Result2 = tmp16(1367);
      const tmp12 = tmp16(1367).isMobileVisualRefreshEnabled("resolveTheme") ? closure_7 : closure_6;
      return tmp16(1347).resolveThemeWithCustomSettings(tmp12[theme1], customUserThemeSettings);
    }
    obj7 = getToken;
  }
  obj = previewTheme;
};