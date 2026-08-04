// discord_app/modules/themes/resolveTheme.native.tsx
import reset from "reset";
import initialize from "initialize";
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import SystemThemeState from "SystemThemeState";

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
    if (!obj2.isAuthenticated()) {
      if (arg0 !== constants.NO_PREFERENCE) {
        return arg1[arg0];
      }
    }
    appearanceSettings = appearanceSettings.getAppearanceSettings();
    let theme;
    if (appearanceSettings != null) {
      theme = appearanceSettings.theme;
    }
    if (null != theme) {
      return theme;
    } else {
      const appearance = settings.settings.appearance;
      let theme1;
      if (appearance != null) {
        theme1 = appearance.theme;
      }
      if (theme1 == null) {
        theme1 = tmp14(1306).Theme.UNSET;
      }
      if (theme1 === tmp14(1306).Theme.UNSET) {
        if (arg0 !== constants.NO_PREFERENCE) {
          let tmp10 = arg1[arg0];
        }
        return tmp10;
      }
      tmp10 = tmp14(1348).isMobileVisualRefreshEnabled("resolveTheme") ? closure_7 : closure_6[theme1];
      const tmp14Result = tmp14(1348);
    }
    obj2 = require(1352) /* getToken */;
  }
};