// discord_app/modules/themes/resolveTheme.native.tsx
import reset from "reset";
import initialize from "initialize";
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import SystemThemeState from "SystemThemeState";
import { getToken } from "../../utils/AuthenticationUtils.tsx";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ PROTO_THEME_MAP_MOBILE: closure_6, PROTO_THEME_MAP_MOBILE_REFRESH: error, SystemTheme: metroImportAll, SystemThemeState: c9 } = SystemThemeState);
const result = require("CHANNEL_SIDEBAR_WIDTH").fileFinishedImporting("modules/themes/resolveTheme.native.tsx");

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