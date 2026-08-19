// discord_app/modules/themes/resolveTheme.native.tsx
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import getThemeForColor from "../client_themes/ClientThemesUtils.tsx";
import useIsMobileVisualRefreshExperimentEnabled from "experiments/MobileVisualRefreshExperiment.tsx";
import getToken from "../../utils/AuthenticationUtils.tsx";
import reset from "../client_themes/native/CustomThemeMobileStore.tsx";
import initialize from "../user_settings/SelectivelySyncedUserSettingsStore.tsx";
import CHANNEL_SIDEBAR_WIDTH from "../user_settings/UnsyncedUserSettingsStore.tsx";
import handleConnectionClosedOrResumed from "../user_settings/UserSettingsProtoStore.tsx";
import SystemThemeState from "../user_settings/ThemeConstants.tsx";

require = fn;
({ PROTO_THEME_MAP_MOBILE: closure_6, PROTO_THEME_MAP_MOBILE_REFRESH: error, SystemTheme: closure_8, SystemThemeState: c9 } = SystemThemeState);
const result = require("obj132").fileFinishedImporting("modules/themes/resolveTheme.native.tsx");

export default function resolveTheme(arg0, arg1) {
  previewTheme = previewTheme.getPreviewTheme();
  if (undefined !== previewTheme) {
    return previewTheme.baseTheme;
  } else {
    if (!obj7.isAuthenticated()) {
      if (arg0 !== constants.NO_PREFERENCE) {
        let tmp16Result = getThemeForColor;
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
      tmp16Result = getThemeForColor;
      return tmp16Result.resolveThemeWithCustomSettings(theme, customUserThemeSettings);
    } else {
      let theme1;
      if (appearance != null) {
        theme1 = appearance.theme;
      }
      if (theme1 == null) {
        theme1 = create.Theme.UNSET;
      }
      if (theme1 === create.Theme.UNSET) {
        if (arg0 !== constants.NO_PREFERENCE) {
          return getThemeForColor.resolveThemeWithCustomSettings(arg1[arg0], customUserThemeSettings);
        }
      }
      const tmp16Result2 = useIsMobileVisualRefreshExperimentEnabled;
      const tmp12 = useIsMobileVisualRefreshExperimentEnabled.isMobileVisualRefreshEnabled("resolveTheme") ? closure_7 : closure_6;
      return getThemeForColor.resolveThemeWithCustomSettings(tmp12[theme1], customUserThemeSettings);
    }
    obj7 = getToken;
  }
  obj = previewTheme;
};