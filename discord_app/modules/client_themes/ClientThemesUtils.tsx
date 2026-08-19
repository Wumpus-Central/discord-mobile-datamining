// === Module 1347: getThemeForColor ===

// Module 1347 (getThemeForColor)
import obj132 from "obj132" /* 2 */;
import sum from "sum" /* 505 */;
import SystemThemeState from "SystemThemeState" /* 1305 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import ThemeTypes from "ThemeTypes" /* 1348 */;

({ LEGACY_STANDARD_BACKGROUND_THEMES: obj1, REFRESH_STANDARD_BACKGROUND_THEMES: c3 } = ThemeTypes);
let closure_4 = SystemThemeState.PROTO_THEME_MAP_WEB_REFRESH;
ThemeTypes = sum.ThemeTypes;
const result = obj132.fileFinishedImporting("modules/client_themes/ClientThemesUtils.tsx");

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
  }
};
export const getLinearGradientForBackgroundGradient = function getLinearGradientForBackgroundGradient(gradientPreset) {
  ({ angle, colors } = gradientPreset);
  const mapped = colors.map((item, index) => {
    ({ token, stop } = item);
    return "" + callback(table[4]).unsafe_getResolvedRawColor(token, { saturation: 1 }) + " " + stop + "%";
  });
  return "linear-gradient(" + angle + "deg, " + mapped.join(", ") + ")";
};
export const areThemesEqualForGradientThemes = function areThemesEqualForGradientThemes(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    let tmp3 = arg0 === ThemeTypes.DARK && arg1 === ThemeTypes.DARKER;
    if (!tmp3) {
      tmp3 = arg0 === ThemeTypes.DARKER && arg1 === ThemeTypes.DARK;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const getBaseTheme = function getBaseTheme(arg0) {
  return AccessibilityAnnouncer.isThemeDark(table[arg0]) ? ThemeTypes.DARKER : ThemeTypes.LIGHT;
};
export const getThemeName = function getThemeName(DARK, closure_1) {
  closure_0 = DARK;
  const found = closure_1 ? closure_3 : closure_2.find((item, index) => item.theme === closure_0);
  let str;
  if (found != null) {
    str = found.getName();
  }
  if (str == null) {
    str = "";
  }
  return str;
};