// === Module 1184: ThemeConstants ===

// Module 1184 (ThemeConstants)
import Constants from "Constants" /* 1074 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1185 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
const obj = { DARK: "dark", LIGHT: "light", NO_PREFERENCE: "unknown" };
const obj2 = { [obj.DARK]: ThemeTypes.DARK, [obj.LIGHT]: ThemeTypes.LIGHT, [obj.NO_PREFERENCE]: ThemeTypes.DARK };
const obj3 = { [obj.DARK]: ThemeTypes.DARK, [obj.LIGHT]: ThemeTypes.LIGHT, [obj.NO_PREFERENCE]: ThemeTypes.DARK };
const obj4 = { [obj.DARK]: ThemeTypes.DARK, [obj.LIGHT]: ThemeTypes.LIGHT, [obj.NO_PREFERENCE]: ThemeTypes.DARK };
const obj5 = { [preloaded_user_settings.Theme.UNSET]: ThemeTypes.DARK, [preloaded_user_settings.Theme.DARK]: ThemeTypes.ASH, [preloaded_user_settings.Theme.DARKER]: ThemeTypes.DARK, [preloaded_user_settings.Theme.LIGHT]: ThemeTypes.LIGHT, [preloaded_user_settings.Theme.MIDNIGHT]: ThemeTypes.DARK };
const obj6 = { [preloaded_user_settings.Theme.UNSET]: ThemeTypes.DARK, [preloaded_user_settings.Theme.DARK]: ThemeTypes.ASH, [preloaded_user_settings.Theme.DARKER]: ThemeTypes.DARK, [preloaded_user_settings.Theme.LIGHT]: ThemeTypes.LIGHT, [preloaded_user_settings.Theme.MIDNIGHT]: ThemeTypes.ONYX };
const result = size.fileFinishedImporting("modules/user_settings/ThemeConstants.tsx");

export const SystemThemeState = { UNSET: 0, [0]: "UNSET", OFF: 1, [1]: "OFF", ON: 2, [2]: "ON" };
export const SystemTheme = obj;
export const ActiveThemeType = { CUSTOM: "custom", CLIENT: "client", SYSTEM: "system", DEFAULT: "default" };
export const THEME_PREFERENCES_MOBILE = obj2;
export const THEME_PREFERENCES_WEB = obj3;
export const THEME_PREFERENCES_WEB_REFRESH = obj4;
export const PROTO_THEME_MAP_WEB = obj5;
export const PROTO_THEME_MAP_WEB_REFRESH = obj6;
export const PROTO_THEME_MAP_MOBILE_REFRESH = { [preloaded_user_settings.Theme.UNSET]: ThemeTypes.DARK, [preloaded_user_settings.Theme.DARK]: ThemeTypes.ASH, [preloaded_user_settings.Theme.DARKER]: ThemeTypes.DARK, [preloaded_user_settings.Theme.LIGHT]: ThemeTypes.LIGHT, [preloaded_user_settings.Theme.MIDNIGHT]: ThemeTypes.ONYX };