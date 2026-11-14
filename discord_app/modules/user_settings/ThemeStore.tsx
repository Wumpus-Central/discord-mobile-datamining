// === Module 1192: ThemeStore ===

// Module 1192 (ThemeStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import mapValuesDefault from "mapValues" /* 582 */;
import getSystemThemeDefault from "getSystemTheme" /* 1230 */;
import resolveThemeDefault from "resolveTheme" /* 1237 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 5136 */;
import updateBackgroundColorDefault from "updateBackgroundColor" /* 16587 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1193 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;

require = fn;
function handleThemeChange() {
  const tmp3 = resolveThemeDefault(systemTheme, obj2, c17);
  DARK = ThemeTypes.DARK;
  let hasItem = typeof tmp3 === "string";
  if (typeof tmp3 === "string") {
    hasItem = set.has(tmp3);
  }
  if (hasItem) {
    DARK = tmp3;
  }
  let flag = DARK !== DARK;
  if (flag) {
    updateBackgroundColorDefault(DARK);
    flag = true;
  }
  return flag;
}
const ThemeConstants = fn(1195);
({ SystemTheme: closure_6, THEME_PREFERENCES_MOBILE, THEME_PREFERENCES_WEB_REFRESH } = ThemeConstants);
const UserSettingsDelay = fn(1082).UserSettingsDelay;
const ThemeTypes = fn(1072).ThemeTypes;
let obj = { UNSET: 0, [0]: "UNSET", SET: 1, [1]: "SET" };
const UNSET = obj.UNSET;
const set = new Set(Object.values(ThemeTypes));
let obj2 = {};
let merged = Object.assign(THEME_PREFERENCES_MOBILE);
let tmp5 = getSystemThemeDefault();
let systemTheme = tmp5;
let DARK = obj2[tmp5];
let syncedClientThemes = {};
let c17 = false;
const PersistedStore = initializeDefault.PersistedStore;
class ThemeStore extends PersistedStore {
}
const prototype = ThemeStore.prototype;
prototype["initialize"] = function initialize(theme) {
  let theme1;
  if (theme != null) {
    theme1 = theme.theme;
  }
  if (null != theme1) {
    const SET = obj.SET;
    if (null != theme.preferences) {
      const preferences = theme.preferences;
      obj2 = mapValuesDefault(THEME_PREFERENCES_MOBILE, (arg0, arg1) => {
        let hasItem = typeof tmp === "string";
        if (typeof preferences[arg1] === "string") {
          hasItem = set.has(tmp);
        }
        let tmp3 = arg0;
        if (hasItem) {
          tmp3 = tmp;
        }
        return tmp3;
      });
    }
    theme = theme.theme;
    DARK = obj2[constants.DARK];
    if (DARK === undefined) {
      DARK = ThemeTypes.DARK;
    }
    let hasItem = typeof theme === "string";
    if (typeof theme === "string") {
      hasItem = set.has(theme);
    }
    if (hasItem) {
      DARK = theme;
    }
    updateBackgroundColorDefault(DARK);
    if (null != theme.syncedClientThemes) {
      syncedClientThemes = theme.syncedClientThemes;
    }
    if (null != theme.syncedThemesEnabled) {
      syncedThemesEnabled = theme.syncedThemesEnabled;
    }
  }
  this.waitFor(UnsyncedUserSettingsStore, SelectivelySyncedUserSettingsStore, UserSettingsProtoStore);
};
prototype["getState"] = function getState() {
  return { theme: this.theme, preferences: obj2, syncedClientThemes, syncedThemesEnabled, status: UNSET };
};
Object.defineProperty(prototype, "theme", {
  get: function theme() {
    return DARK;
  },
  set: undefined
});
Object.defineProperty(prototype, "systemTheme", {
  get: function systemTheme() {
    return systemTheme;
  },
  set: undefined
});
prototype["themePreferenceForSystemTheme"] = function themePreferenceForSystemTheme(item10084) {
  return obj2[item10084];
};
prototype["getSyncedClientTheme"] = function getSyncedClientTheme(systemTheme) {
  return syncedClientThemes[systemTheme];
};
prototype["isSameAsDeviceThemeEnabled"] = function isSameAsDeviceThemeEnabled() {
  return c17;
};
ThemeStore.displayName = "ThemeStore";
ThemeStore.persistKey = "ThemeStore";
const items = [
  (theme) => {
    if ("amoled" === theme.theme) {
      theme = ThemeTypes.ONYX;
    } else {
      theme = theme.theme;
    }
    obj = {};
    const merged = Object.assign(theme);
    obj.theme = theme;
    return obj;
  },
  (preferences) => {
    let tmp = preferences;
    if (null != preferences.preferences) {
      tmp = preferences;
      if (preferences.preferences[constants.DARK] === ThemeTypes.ASH) {
        obj = {};
        const merged = Object.assign(preferences);
        obj2 = {};
        const merged1 = Object.assign(preferences.preferences);
        obj2[tmp2.DARK] = tmp3.DARK;
        obj.preferences = obj2;
        tmp = obj;
      }
    }
    return tmp;
  },
  (preferences) => {
    if (null == preferences.preferences) {
      preferences = preferences.preferences;
    } else {
      preferences = mapValuesDefault(THEME_PREFERENCES_MOBILE, (arg0, arg1) => {
        let hasItem = typeof tmp === "string";
        if (typeof preferences[arg1] === "string") {
          hasItem = set.has(tmp);
        }
        let tmp3 = arg0;
        if (hasItem) {
          tmp3 = tmp;
        }
        return tmp3;
      });
    }
    if (null == preferences.theme) {
      let theme1 = preferences.theme;
    } else {
      const theme = preferences.theme;
      theme1 = undefined;
      if (preferences != null) {
        theme1 = preferences[constants.DARK];
      }
      if (theme1 === undefined) {
        theme1 = ThemeTypes.DARK;
      }
      let hasItem = typeof theme === "string";
      if (typeof theme === "string") {
        hasItem = set.has(theme);
      }
      if (hasItem) {
        theme1 = theme;
      }
    }
    obj = {};
    const merged = Object.assign(preferences);
    obj.theme = theme1;
    obj.preferences = preferences;
    return obj;
  }
];
ThemeStore.migrations = items;
const themeStore = new ThemeStore(DispatcherDefault, {
  CACHE_LOADED: handleThemeChange,
  CONNECTION_OPEN: function handleConnectionOpen() {
    if (UnsyncedUserSettingsStore.darkSidebar) {
      const appearance = UserSettingsProtoStore.settings.appearance;
      let darkSidebar;
      if (appearance != null) {
        darkSidebar = appearance.darkSidebar;
      }
      if (!darkSidebar) {
        const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
        PreloadedUserSettingsActionCreators.updateAsync("appearance", async (arg0) => {
          arg0.darkSidebar = true;
        }, UserSettingsDelay.INFREQUENT_USER_ACTION);
      }
      obj2 = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { darkSidebar: false } };
      DispatcherDefault.dispatch(obj2);
    }
    const tmp13 = resolveThemeDefault(systemTheme, obj2, c17);
    DARK = ThemeTypes.DARK;
    let hasItem = typeof tmp13 === "string";
    if (typeof tmp13 === "string") {
      hasItem = set.has(tmp13);
    }
    if (hasItem) {
      DARK = tmp13;
    }
    let flag = DARK !== DARK;
    if (flag) {
      updateBackgroundColorDefault(DARK);
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogOut(isSwitchingAccount) {
    closure_16 = {};
    c17 = false;
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
    let tmp = !isSwitchingAccount;
    if (!isSwitchingAccount) {
      const tmp7 = resolveThemeDefault(systemTheme, obj2, c17);
      DARK = ThemeTypes.DARK;
      let hasItem = typeof tmp7 === "string";
      if (typeof tmp7 === "string") {
        hasItem = set.has(tmp7);
      }
      if (hasItem) {
        DARK = tmp7;
      }
      let flag = DARK !== DARK;
      if (flag) {
        updateBackgroundColorDefault(DARK);
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  },
  OVERLAY_INITIALIZE: handleThemeChange,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function handleSelectivelySyncedUserSettingsUpdate() {
    const tmp3 = resolveThemeDefault(systemTheme, obj2, c17);
    DARK = ThemeTypes.DARK;
    let hasItem = typeof tmp3 === "string";
    if (typeof tmp3 === "string") {
      hasItem = set.has(tmp3);
    }
    if (hasItem) {
      DARK = tmp3;
    }
    let flag = DARK !== DARK;
    if (flag) {
      updateBackgroundColorDefault(DARK);
      flag = true;
    }
    return flag;
  },
  UNSYNCED_USER_SETTINGS_UPDATE: handleThemeChange,
  USER_SETTINGS_PROTO_UPDATE: handleThemeChange,
  RESET_PREVIEW_CLIENT_THEME: handleThemeChange,
  SYSTEM_THEME_CHANGE: function handleSystemThemeChange(systemTheme) {
    systemTheme = systemTheme.systemTheme;
    const tmp3 = resolveThemeDefault(systemTheme, obj2, c17);
    DARK = ThemeTypes.DARK;
    let hasItem = typeof tmp3 === "string";
    if (typeof tmp3 === "string") {
      hasItem = set.has(tmp3);
    }
    if (hasItem) {
      DARK = tmp3;
    }
    let flag = DARK !== DARK;
    if (flag) {
      updateBackgroundColorDefault(DARK);
      flag = true;
    }
    return flag;
  },
  UPDATE_THEME_PREFERENCES: function handleUpdateThemePreferences(preferences) {
    const merged = Object.assign(closure_13);
    const merged1 = Object.assign(preferences.preferences);
    closure_13 = mapValuesDefault(THEME_PREFERENCES_MOBILE, (arg0, arg1) => {
      let hasItem = typeof tmp === "string";
      if (typeof preferences[arg1] === "string") {
        hasItem = set.has(tmp);
      }
      let tmp3 = arg0;
      if (hasItem) {
        tmp3 = tmp;
      }
      return tmp3;
    });
    const tmp5 = resolveThemeDefault(systemTheme, closure_13, c17);
    DARK = ThemeTypes.DARK;
    let hasItem = typeof tmp5 === "string";
    if (typeof tmp5 === "string") {
      hasItem = set.has(tmp5);
    }
    if (hasItem) {
      DARK = tmp5;
    }
    let flag = DARK !== DARK;
    if (flag) {
      updateBackgroundColorDefault(DARK);
      flag = true;
    }
    return flag;
  },
  UPDATE_SYNCED_CLIENT_THEME: function handleUpdateSyncedClientTheme(systemTheme) {
    obj = {};
    const merged = Object.assign(closure_16);
    obj[systemTheme.systemTheme] = systemTheme.clientTheme;
    closure_16 = obj;
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
    let tmp = c17;
    if (!c17) {
      tmp = null != syncedClientThemes[constants.LIGHT];
    }
    if (!tmp) {
      tmp = null != syncedClientThemes[constants.DARK];
    }
    syncedClientThemes = {};
    c17 = false;
    return tmp;
  },
  SET_THEME_OVERRIDE: function handleSetThemeOverride(arg0) {
    const tmp3 = resolveThemeDefault(systemTheme, obj2, c17);
    DARK = ThemeTypes.DARK;
    let hasItem = typeof tmp3 === "string";
    if (typeof tmp3 === "string") {
      hasItem = set.has(tmp3);
    }
    if (hasItem) {
      DARK = tmp3;
    }
    let flag = DARK !== DARK;
    if (flag) {
      updateBackgroundColorDefault(DARK);
      flag = true;
    }
    return flag;
  },
  CLEAR_THEME_OVERRIDE: function handleClearThemeOverride() {
    const tmp3 = resolveThemeDefault(systemTheme, obj2, c17);
    DARK = ThemeTypes.DARK;
    let hasItem = typeof tmp3 === "string";
    if (typeof tmp3 === "string") {
      hasItem = set.has(tmp3);
    }
    if (hasItem) {
      DARK = tmp3;
    }
    let flag = DARK !== DARK;
    if (flag) {
      updateBackgroundColorDefault(DARK);
      flag = true;
    }
    return flag;
  },
  REFRESH_THEME: function handleRefresh() {
    const tmp3 = resolveThemeDefault(systemTheme, obj2, c17);
    DARK = ThemeTypes.DARK;
    let hasItem = typeof tmp3 === "string";
    if (typeof tmp3 === "string") {
      hasItem = set.has(tmp3);
    }
    if (hasItem) {
      DARK = tmp3;
    }
    let flag = DARK !== DARK;
    if (flag) {
      updateBackgroundColorDefault(DARK);
      flag = true;
    }
    return flag;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/ThemeStore.tsx");

export default themeStore;