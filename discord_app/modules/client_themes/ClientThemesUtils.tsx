// discord_app/modules/client_themes/ClientThemesUtils.tsx
import ThemeTypes from "ThemeTypes";
import SystemThemeState from "SystemThemeState";
import { ThemeTypes } from "sum";

let PROTO_THEME_MAP_WEB_REFRESH;
let c3;
let c4;
let obj1;
({ LEGACY_STANDARD_BACKGROUND_THEMES: obj1, REFRESH_STANDARD_BACKGROUND_THEMES: c3 } = ThemeTypes);
({ PROTO_THEME_MAP_MOBILE: c4, PROTO_THEME_MAP_WEB_REFRESH } = SystemThemeState);
const result = require("sum").fileFinishedImporting("modules/client_themes/ClientThemesUtils.tsx");

export const getThemeForColor = function getThemeForColor(l) {
  if (l.l <= 0.3) {
    let LIGHT = ThemeTypes.DARK;
  } else {
    LIGHT = ThemeTypes.LIGHT;
  }
  return LIGHT;
};
export const getLinearGradientForBackgroundGradient = function getLinearGradientForBackgroundGradient(gradientPreset) {
  let angle;
  let colors;
  ({ angle, colors } = gradientPreset);
  const mapped = colors.map((arg0) => {
    let stop;
    let token;
    ({ token, stop } = arg0);
    return "" + callback(table[3]).unsafe_getResolvedRawColor(token, { saturation: 1 }) + " " + stop + "%";
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
  return table[arg0];
};
export const getThemeName = function getThemeName(DARK, closure_1) {
  let closure_0 = DARK;
  const found = closure_1 ? closure_3 : closure_2.find((theme) => theme.theme === closure_0);
  let str;
  if (found != null) {
    str = found.getName();
  }
  if (str == null) {
    str = "";
  }
  return str;
};