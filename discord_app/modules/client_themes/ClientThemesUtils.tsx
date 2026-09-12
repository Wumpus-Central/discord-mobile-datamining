// === Module 1229: ClientThemesUtils ===

// Module 1229 (ClientThemesUtils)
import shims from "shims" /* 575 */;
import Constants from "Constants" /* 1085 */;
import ThemeConstants from "ThemeConstants" /* 1186 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1230 */;
import shared from "shared" /* 4488 */;
import size from "module_2" /* 2 */;

let closure_2 = ClientThemesConstants.REFRESH_STANDARD_BACKGROUND_THEMES;
let closure_3 = ThemeConstants.PROTO_THEME_MAP_WEB_REFRESH;
const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("modules/client_themes/ClientThemesUtils.tsx");

export const getThemeForColor = function getThemeForColor(l) {
  if (l.l <= 0.3) {
    let LIGHT = ThemeTypes.DARK;
  } else {
    LIGHT = ThemeTypes.LIGHT;
  }
  return LIGHT;
};
export const getCustomThemeBaseTheme = function getCustomThemeBaseTheme(theme) {
  return shared.isThemeDark(theme) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
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
    shared.isThemeDark(theme) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
  }
};
export const getLinearGradientForBackgroundGradient = function getLinearGradientForBackgroundGradient(gradientPreset) {
  ({ angle, colors } = gradientPreset);
  const mapped = colors.map((item) => {
    ({ token, stop } = item);
    return "" + shims.unsafe_getResolvedRawColor(token, { saturation: 1 }) + " " + stop + "%";
  });
  return "linear-gradient(" + angle + "deg, " + mapped.join(", ") + ")";
};
export const areThemesEqualForGradientThemes = function areThemesEqualForGradientThemes(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    let tmp3 = arg0 === ThemeTypes.ASH && arg1 === ThemeTypes.DARK;
    if (!tmp3) {
      tmp3 = arg0 === ThemeTypes.DARK && arg1 === ThemeTypes.ASH;
      const tmp4 = arg0 === ThemeTypes.DARK && arg1 === ThemeTypes.ASH;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const getBaseTheme = function getBaseTheme(UNSET) {
  return shared.isThemeDark(closure_3[UNSET]) ? ThemeTypes.DARK : ThemeTypes.LIGHT;
};
export const getThemeName = function getThemeName(ASH) {
  closure_0 = ASH;
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