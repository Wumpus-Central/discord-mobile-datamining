// discord_app/modules/client_themes/ClientThemesUtils.tsx
import shims from "../../../discord_common/js/packages/tokens/shims.native.tsx";
import Constants from "../../../discord_common/js/shared/Constants.tsx";
import ThemeConstants from "../user_settings/ThemeConstants.tsx";
import ClientThemesConstants from "ClientThemesConstants.tsx";
import shared from "../../design/shared.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_2 = ClientThemesConstants.REFRESH_STANDARD_BACKGROUND_THEMES;
let closure_3 = ThemeConstants.PROTO_THEME_MAP_WEB_REFRESH;
const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("modules/client_themes/ClientThemesUtils.tsx");

export const getThemeForColor = function getThemeForColor(l) {
  if (l.l <= 0.3) {
    let LIGHT = ThemeTypes.DARKER;
  } else {
    LIGHT = ThemeTypes.LIGHT;
  }
  return LIGHT;
};
export const getCustomThemeBaseTheme = function getCustomThemeBaseTheme(theme) {
  return shared.isThemeDark(theme) ? ThemeTypes.DARKER : ThemeTypes.LIGHT;
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
    shared.isThemeDark(theme) ? ThemeTypes.DARKER : ThemeTypes.LIGHT;
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
  return shared.isThemeDark(closure_3[arg0]) ? ThemeTypes.DARKER : ThemeTypes.LIGHT;
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
