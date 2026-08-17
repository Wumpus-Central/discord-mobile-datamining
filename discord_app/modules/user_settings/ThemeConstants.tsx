// discord_app/modules/user_settings/ThemeConstants.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";

const ThemeTypes = ME.ThemeTypes;
let obj = { DARK: "dark", LIGHT: "light", NO_PREFERENCE: "unknown" };
obj = { [obj.DARK]: ThemeTypes.DARKER, [obj.LIGHT]: ThemeTypes.LIGHT, [obj.NO_PREFERENCE]: ThemeTypes.DARKER };
obj = { [obj.DARK]: ThemeTypes.DARK, [obj.LIGHT]: ThemeTypes.LIGHT, [obj.NO_PREFERENCE]: ThemeTypes.DARK };
const obj1 = { [obj.DARK]: ThemeTypes.DARKER, [obj.LIGHT]: ThemeTypes.LIGHT, [obj.NO_PREFERENCE]: ThemeTypes.DARKER };
const obj2 = { [create.Theme.UNSET]: ThemeTypes.DARK, [create.Theme.DARK]: ThemeTypes.DARK, [create.Theme.DARKER]: ThemeTypes.DARK, [create.Theme.LIGHT]: ThemeTypes.LIGHT, [create.Theme.MIDNIGHT]: ThemeTypes.DARK };
const obj3 = { [create.Theme.UNSET]: ThemeTypes.DARKER, [create.Theme.DARK]: ThemeTypes.DARK, [create.Theme.DARKER]: ThemeTypes.DARKER, [create.Theme.LIGHT]: ThemeTypes.LIGHT, [create.Theme.MIDNIGHT]: ThemeTypes.MIDNIGHT };
const obj4 = { [create.Theme.UNSET]: ThemeTypes.DARKER, [create.Theme.DARK]: ThemeTypes.DARKER, [create.Theme.DARKER]: ThemeTypes.DARKER, [create.Theme.LIGHT]: ThemeTypes.LIGHT, [create.Theme.MIDNIGHT]: ThemeTypes.MIDNIGHT };
const obj5 = { [create.Theme.UNSET]: ThemeTypes.DARKER, [create.Theme.DARK]: ThemeTypes.DARK, [create.Theme.DARKER]: ThemeTypes.DARKER, [create.Theme.LIGHT]: ThemeTypes.LIGHT, [create.Theme.MIDNIGHT]: ThemeTypes.MIDNIGHT };
const result = set.fileFinishedImporting("modules/user_settings/ThemeConstants.tsx");

export const SystemThemeState = { UNSET: 0, [0]: "UNSET", OFF: 1, [1]: "OFF", ON: 2, [2]: "ON" };
export const SystemTheme = obj;
export const ActiveThemeType = { CUSTOM: "custom", CLIENT: "client", SYSTEM: "system", DEFAULT: "default" };
export const THEME_PREFERENCES_MOBILE = obj;
export const THEME_PREFERENCES_WEB = obj;
export const THEME_PREFERENCES_WEB_REFRESH = obj1;
export const PROTO_THEME_MAP_WEB = obj2;
export const PROTO_THEME_MAP_WEB_REFRESH = obj3;
export const PROTO_THEME_MAP_MOBILE = obj4;
export const PROTO_THEME_MAP_MOBILE_REFRESH = obj5;