// discord_app/modules/client_themes/ClientThemesUtils.tsx
import set from "../../../_runtime/00002_set.js";
import sum from "../../../discord_common/js/shared/Constants.tsx";
import SystemThemeState from "../user_settings/ThemeConstants.tsx";
import ThemeTypes2 from "ClientThemesConstants.tsx";
import AccessibilityAnnouncer from "../../design/shared.tsx";

let closure_2 = ThemeTypes2.REFRESH_STANDARD_BACKGROUND_THEMES;
let closure_3 = SystemThemeState.PROTO_THEME_MAP_WEB_REFRESH;
const ThemeTypes = sum.ThemeTypes;
const result = set.fileFinishedImporting("modules/client_themes/ClientThemesUtils.tsx");

export const getThemeForColor = function getThemeForColor(l) {
  if (l.l <= 0.3) {
    let LIGHT = ThemeTypes.DARKER;
  } else {
    LIGHT = ThemeTypes.LIGHT;
  }
  return LIGHT;
};
export const getCustomThemeBaseTheme = function getCustomThemeBaseTheme(theme) {
  return AccessibilityAnnouncer.isThemeDark(theme) ? ThemeTypes.DARKER : ThemeTypes.LIGHT;
};
export const hasCustomTheme = function hasCustomTheme(colors) {
  let tmp = null != colors;
  if (tmp) {
    tmp = colors.colors.length > 0;
  }
  return tmp;
};
export const resolveThemeWithCustomSettings = function resolveThemeWithCustomSettings(theme, customUserThemeSettings) {
  let tmp = null != customUserThemeSettings;
  if (tmp) {
    tmp = customUserThemeSettings.colors.length > 0;
  }
  if (!tmp) {
    return theme;
  } else {
    AccessibilityAnnouncer.isThemeDark(theme) ? ThemeTypes.DARKER : ThemeTypes.LIGHT;
    const obj = AccessibilityAnnouncer;
  }
};
export const getLinearGradientForBackgroundGradient = function getLinearGradientForBackgroundGradient(gradientPreset) {
  ({ angle, colors } = gradientPreset);
  const mapped = colors.map((arg0) => {
    ({ token, stop } = arg0);
    return "" + callback(table[4]).unsafe_getResolvedRawColor(token, { saturation: 1 }) + " " + stop + "%";
  });
  return "linear-gradient(" + angle + "deg, " + mapped.join(", ") + ")";
};
export const areThemesEqualForGradientThemes = function areThemesEqualForGradientThemes(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    let tmp3 = arg0 === ThemeTypes.DARK && arg1 === tmp2.DARKER;
    if (!tmp3) {
      tmp3 = arg0 === tmp2.DARKER && arg1 === tmp2.DARK;
      const tmp4 = arg0 === tmp2.DARKER && arg1 === tmp2.DARK;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const getBaseTheme = function getBaseTheme(arg0) {
  return AccessibilityAnnouncer.isThemeDark(table[arg0]) ? ThemeTypes.DARKER : ThemeTypes.LIGHT;
};
export const getThemeName = function getThemeName(DARK) {
  closure_0 = DARK;
  const found = closure_2.find((theme) => theme.theme === closure_0);
  let str;
  if (found != null) {
    str = found.getName();
  }
  if (str == null) {
    str = "";
  }
  return str;
};
