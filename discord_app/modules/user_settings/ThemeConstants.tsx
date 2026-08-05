// discord_app/modules/user_settings/ThemeConstants.tsx
import { ThemeTypes } from "ME";

let obj = { DARK: "dark", LIGHT: "light", NO_PREFERENCE: "unknown" };
obj = { [obj.DARK]: ThemeTypes.DARKER, [obj.LIGHT]: ThemeTypes.LIGHT, [obj.NO_PREFERENCE]: ThemeTypes.DARKER };
obj = { [obj.DARK]: ThemeTypes.DARK, [obj.LIGHT]: ThemeTypes.LIGHT, [obj.NO_PREFERENCE]: ThemeTypes.DARK };
const obj1 = { [obj.DARK]: ThemeTypes.DARKER, [obj.LIGHT]: ThemeTypes.LIGHT, [obj.NO_PREFERENCE]: ThemeTypes.DARKER };
const obj2 = { [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.UNSET]: ThemeTypes.DARK, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.DARK]: ThemeTypes.DARK, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.DARKER]: ThemeTypes.DARK, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.LIGHT]: ThemeTypes.LIGHT, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.MIDNIGHT]: ThemeTypes.DARK };
const obj3 = { [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.UNSET]: ThemeTypes.DARKER, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.DARK]: ThemeTypes.DARK, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.DARKER]: ThemeTypes.DARKER, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.LIGHT]: ThemeTypes.LIGHT, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.MIDNIGHT]: ThemeTypes.MIDNIGHT };
const obj4 = { [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.UNSET]: ThemeTypes.DARKER, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.DARK]: ThemeTypes.DARKER, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.DARKER]: ThemeTypes.DARKER, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.LIGHT]: ThemeTypes.LIGHT, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.MIDNIGHT]: ThemeTypes.MIDNIGHT };
const obj5 = { [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.UNSET]: ThemeTypes.DARKER, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.DARK]: ThemeTypes.DARK, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.DARKER]: ThemeTypes.DARKER, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.LIGHT]: ThemeTypes.LIGHT, [require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx").Theme.MIDNIGHT]: ThemeTypes.MIDNIGHT };
const result = require("set").fileFinishedImporting("modules/user_settings/ThemeConstants.tsx");

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