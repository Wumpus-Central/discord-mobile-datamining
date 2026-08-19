// === Module 1345: resolveTheme ===

// Module 1345 (resolveTheme)
import create from "create" /* 1306 */;
import getThemeForColor from "getThemeForColor" /* 1347 */;
import useIsMobileVisualRefreshExperimentEnabled from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import getToken from "getToken" /* 1371 */;
import reset from "reset" /* 1346 */;
import initialize from "initialize" /* 1303 */;
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH" /* 1304 */;
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed" /* 1340 */;
import SystemThemeState from "SystemThemeState" /* 1305 */;

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