// discord_app/modules/user_settings/ThemeStore.tsx
import initialize from "initialize";
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import SystemThemeState from "SystemThemeState";
import { UserSettingsDelay } from "MAX_FAVORITES";
import { ThemeTypes } from "ME";
import { PersistedStore } from "initialize";
import { dispatcher } from "../../Dispatcher.tsx";
import { resolveTheme } from "../themes/resolveTheme.native.tsx";
import { updateBackgroundColor } from "../themes/updateBackgroundColor.native.tsx";
import { updateUserGuildSettings } from "UserSettingsProtoActionCreators.tsx";

let THEME_PREFERENCES_MOBILE;
let THEME_PREFERENCES_WEB_REFRESH;
let closure_6;
const require = arg1;
function handleThemeChange() {
  const tmp3 = resolveTheme(closure_12, THEME_PREFERENCES_MOBILE);
  let flag = tmp3 !== closure_13;
  if (flag) {
    closure_13 = tmp3;
    updateBackgroundColor(closure_13);
    flag = true;
  }
  return flag;
}
({ SystemTheme: closure_6, THEME_PREFERENCES_WEB_REFRESH, THEME_PREFERENCES_MOBILE } = SystemThemeState);
let obj = { UNSET: 0, [0]: "UNSET", SET: 1, [1]: "SET" };
const UNSET = obj.UNSET;
let tmp3 = require("getSystemTheme")();
let closure_12 = tmp3;
let closure_13 = THEME_PREFERENCES_MOBILE[tmp3];
let closure_14 = {};
let c15 = false;
class ThemeStore extends PersistedStore {
}
const prototype = ThemeStore.prototype;
prototype["initialize"] = function initialize(theme) {
  theme = undefined;
  if (theme != null) {
    theme = theme.theme;
  }
  if (null != theme) {
    const SET = obj.SET;
    theme = theme.theme;
    updateBackgroundColor(theme);
    if (null != theme.preferences) {
      const preferences = theme.preferences;
    }
    if (null != theme.syncedClientThemes) {
      const syncedClientThemes = theme.syncedClientThemes;
    }
    if (null != theme.syncedThemesEnabled) {
      const syncedThemesEnabled = theme.syncedThemesEnabled;
    }
  }
  this.waitFor(CHANNEL_SIDEBAR_WIDTH, initialize, handleConnectionClosedOrResumed);
};
prototype["getState"] = function getState() {
  return { theme: this.theme, preferences: THEME_PREFERENCES_MOBILE, syncedClientThemes: closure_14, syncedThemesEnabled: c15, status: UNSET };
};
Object.defineProperty(prototype, "theme", {
  get: function theme(arg0, items) {
    return closure_13;
  },
  set: undefined
});
Object.defineProperty(prototype, "systemTheme", {
  get: function systemTheme() {
    return closure_12;
  },
  set: undefined
});
prototype["themePreferenceForSystemTheme"] = function themePreferenceForSystemTheme(closure_0) {
  return THEME_PREFERENCES_MOBILE[closure_0];
};
prototype["getSyncedClientTheme"] = function getSyncedClientTheme(systemTheme) {
  return dependencyMap[systemTheme];
};
prototype["isSameAsDeviceThemeEnabled"] = function isSameAsDeviceThemeEnabled() {
  return c15;
};
ThemeStore.displayName = "ThemeStore";
ThemeStore.persistKey = "ThemeStore";
const items = [
  (theme) => {
    let str = theme.theme;
    if ("amoled" === str) {
      str = "midnight";
    }
    const obj = {};
    const merged = Object.assign(theme);
    obj.theme = str;
    return obj;
  },
  (preferences) => {
    let tmp = preferences;
    if (null != preferences.preferences) {
      tmp = preferences;
      if (preferences.preferences[constants.DARK] === ThemeTypes.DARK) {
        let obj = {};
        const merged = Object.assign(preferences);
        obj = {};
        const merged1 = Object.assign(preferences.preferences);
        obj[tmp2.DARK] = tmp3.DARKER;
        obj.preferences = obj;
        tmp = obj;
      }
    }
    return tmp;
  }
];
ThemeStore.migrations = items;
obj = {
  CACHE_LOADED: handleThemeChange,
  CONNECTION_OPEN: function handleConnectionOpen() {
    if (darkSidebar.darkSidebar) {
      const appearance = settings.settings.appearance;
      darkSidebar = undefined;
      if (appearance != null) {
        darkSidebar = appearance.darkSidebar;
      }
      if (!darkSidebar) {
        const PreloadedUserSettingsActionCreators = updateUserGuildSettings.PreloadedUserSettingsActionCreators;
        PreloadedUserSettingsActionCreators.updateAsync("appearance", (arg0) => {
          arg0.darkSidebar = true;
        }, UserSettingsDelay.INFREQUENT_USER_ACTION);
      }
      dispatcher.wait(() => {
        callback(table[11]).dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { darkSidebar: false } });
      });
      const obj = dispatcher;
    }
    const tmp13 = resolveTheme(closure_12, THEME_PREFERENCES_MOBILE);
    let flag = tmp13 !== closure_13;
    if (flag) {
      closure_13 = tmp13;
      updateBackgroundColor(closure_13);
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogOut(isSwitchingAccount) {
    let closure_14 = {};
    let c15 = false;
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
    let tmp = !isSwitchingAccount;
    if (!isSwitchingAccount) {
      const tmp6 = resolveTheme(closure_12, THEME_PREFERENCES_MOBILE);
      let flag = tmp6 !== closure_13;
      if (flag) {
        closure_13 = tmp6;
        tmp2(1354)(closure_13);
        flag = true;
      }
      tmp = flag;
      tmp2 = importDefault;
    }
    return tmp;
  },
  OVERLAY_INITIALIZE: handleThemeChange,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function handleSelectivelySyncedUserSettingsUpdate() {
    const tmp3 = resolveTheme(closure_12, THEME_PREFERENCES_MOBILE);
    let flag = tmp3 !== closure_13;
    if (flag) {
      closure_13 = tmp3;
      updateBackgroundColor(closure_13);
      flag = true;
    }
    return flag;
  },
  UNSYNCED_USER_SETTINGS_UPDATE: handleThemeChange,
  USER_SETTINGS_PROTO_UPDATE: handleThemeChange,
  RESET_PREVIEW_CLIENT_THEME: handleThemeChange,
  SYSTEM_THEME_CHANGE: function handleSystemThemeChange(systemTheme) {
    systemTheme = systemTheme.systemTheme;
    const tmp3 = resolveTheme(systemTheme, THEME_PREFERENCES_MOBILE);
    let flag = tmp3 !== closure_13;
    if (flag) {
      closure_13 = tmp3;
      updateBackgroundColor(closure_13);
      flag = true;
    }
    return flag;
  },
  UPDATE_THEME_PREFERENCES: function handleUpdateThemePreferences(preferences) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(preferences.preferences);
    const tmp5 = resolveTheme(closure_12, obj);
    let flag = tmp5 !== closure_13;
    if (flag) {
      closure_13 = tmp5;
      updateBackgroundColor(closure_13);
      flag = true;
    }
    return flag;
  },
  UPDATE_SYNCED_CLIENT_THEME: function handleUpdateSyncedClientTheme(systemTheme) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[systemTheme.systemTheme] = systemTheme.clientTheme;
    return true;
  },
  SET_SAME_AS_DEVICE_THEME_ENABLED: function handleSetSameAsDeviceThemeEnabled(enabled) {
    let flag = enabled !== enabled.enabled;
    if (flag) {
      enabled = enabled.enabled;
      flag = true;
    }
    return flag;
  },
  CLEAR_SYNCED_CLIENT_THEMES: function handleClearSyncedClientThemes() {
    let tmp = c15;
    if (!c15) {
      tmp = null != dependencyMap[constants.LIGHT];
    }
    if (!tmp) {
      tmp = null != dependencyMap[constants.DARK];
    }
    dependencyMap = {};
    c15 = false;
    return tmp;
  },
  SET_THEME_OVERRIDE: function handleSetThemeOverride(arg0) {
    const tmp3 = resolveTheme(closure_12, THEME_PREFERENCES_MOBILE);
    let flag = tmp3 !== closure_13;
    if (flag) {
      closure_13 = tmp3;
      updateBackgroundColor(closure_13);
      flag = true;
    }
    return flag;
  },
  CLEAR_THEME_OVERRIDE: function handleClearThemeOverride() {
    const tmp3 = resolveTheme(closure_12, THEME_PREFERENCES_MOBILE);
    let flag = tmp3 !== closure_13;
    if (flag) {
      closure_13 = tmp3;
      updateBackgroundColor(closure_13);
      flag = true;
    }
    return flag;
  },
  REFRESH_THEME: function handleRefresh() {
    const tmp3 = resolveTheme(closure_12, THEME_PREFERENCES_MOBILE);
    let flag = tmp3 !== closure_13;
    if (flag) {
      closure_13 = tmp3;
      updateBackgroundColor(closure_13);
      flag = true;
    }
    return flag;
  }
};
const themeStore = new ThemeStore(require("dispatcher"), obj);
const result = require("handleConnectionClosedOrResumed").fileFinishedImporting("modules/user_settings/ThemeStore.tsx");

export default themeStore;