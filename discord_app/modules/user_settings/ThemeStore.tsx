// === Module 1193: ThemeStore ===

// Module 1193 (ThemeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import getSystemThemeDefault from "getSystemTheme" /* 1230 */;
import resolveThemeDefault from "resolveTheme" /* 1237 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2033 */;
import updateBackgroundColorDefault from "updateBackgroundColor" /* 13916 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1194 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1195 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ThemeConstants from "ThemeConstants" /* 1196 */;
import size from "module_2" /* 2 */;

let syncedClientThemes;

let THEME_PREFERENCES_MOBILE;
let THEME_PREFERENCES_WEB_REFRESH;
let metroRequire;
function handleThemeChange() {
  const tmp3 = resolveThemeDefault(systemTheme, THEME_PREFERENCES_MOBILE, c15);
  let flag = tmp3 !== closure_13;
  if (flag) {
    closure_13 = tmp3;
    updateBackgroundColorDefault(closure_13);
    flag = true;
  }
  return flag;
}
({ SystemTheme: metroRequire, THEME_PREFERENCES_WEB_REFRESH, THEME_PREFERENCES_MOBILE } = ThemeConstants);
const UserSettingsDelay = UserSettingsConstants.UserSettingsDelay;
const ThemeTypes = Constants.ThemeTypes;
let obj = { UNSET: 0, [0]: "UNSET", SET: 1, [1]: "SET" };
let SET = obj.UNSET;
let tmp3 = getSystemThemeDefault();
let systemTheme = tmp3;
let closure_13 = THEME_PREFERENCES_MOBILE[tmp3];
const authStore2 = {};
let c15 = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class ThemeStore extends PersistedStore {
  initialize(theme) {
    theme = undefined;
    if (theme != null) {
      theme = theme.theme;
    }
    if (null != theme) {
      SET = obj.SET;
      const theme2 = theme.theme;
      updateBackgroundColorDefault(theme2);
      if (null != theme.preferences) {
        THEME_PREFERENCES_MOBILE = theme.preferences;
      }
      if (null != theme.syncedClientThemes) {
        syncedClientThemes = theme.syncedClientThemes;
      }
      if (null != theme.syncedThemesEnabled) {
        let c15 = theme.syncedThemesEnabled;
      }
    }
    this.waitFor(UnsyncedUserSettingsStore, SelectivelySyncedUserSettingsStore, UserSettingsProtoStore);
  }
  getState() {
    return { theme: this.theme, preferences: THEME_PREFERENCES_MOBILE, syncedClientThemes, syncedThemesEnabled, status: SET };
  }
  themePreferenceForSystemTheme(stateFromStores) {
    return THEME_PREFERENCES_MOBILE[stateFromStores];
  }
  getSyncedClientTheme(systemTheme) {
    return syncedClientThemes[systemTheme];
  }
  isSameAsDeviceThemeEnabled() {
    return c15;
  }
}
const prototype = ThemeStore.prototype;
Object.defineProperty(prototype, "theme", {
  get: function theme() {
    return closure_13;
  },
  set: undefined
});
Object.defineProperty(prototype, "systemTheme", {
  get: function systemTheme() {
    return systemTheme;
  },
  set: undefined
});
ThemeStore.displayName = "ThemeStore";
ThemeStore.persistKey = "ThemeStore";
const items = [
  (theme) => {
    let ONYX = theme.theme;
    if ("amoled" === ONYX) {
      ONYX = ThemeTypes.ONYX;
    }
    obj = { theme: ONYX };
    const merged = Object.assign(theme);
    return obj;
  },
  (preferences) => {
    let obj2;
    let tmp = preferences;
    if (null != preferences.preferences) {
      tmp = preferences;
      if (preferences.preferences[metroRequire.DARK] === ThemeTypes.ASH) {
        obj = { preferences: obj2 };
        const merged = Object.assign(preferences);
        obj2 = {};
        const merged1 = Object.assign(preferences.preferences);
        obj2[tmp2.DARK] = tmp3.DARK;
        tmp = obj;
      }
    }
    return tmp;
  }
];
ThemeStore.migrations = items;
let obj2 = {
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
      obj = DispatcherDefault;
      obj.wait(() => {
        obj = DispatcherDefault;
        obj.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { darkSidebar: false } });
      });
    }
    const tmp13 = resolveThemeDefault(systemTheme, THEME_PREFERENCES_MOBILE, c15);
    let flag = tmp13 !== closure_13;
    if (flag) {
      closure_13 = tmp13;
      updateBackgroundColorDefault(closure_13);
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogOut(isSwitchingAccount) {
    let closure_14 = {};
    let c15 = false;
    let tmp = !isSwitchingAccount.isSwitchingAccount;
    if (tmp) {
      const tmp7 = resolveThemeDefault(systemTheme, THEME_PREFERENCES_MOBILE, c15);
      let flag = tmp7 !== closure_13;
      if (flag) {
        closure_13 = tmp7;
        updateBackgroundColorDefault(closure_13);
        flag = true;
      }
      tmp = flag;
    }
    return tmp;
  },
  OVERLAY_INITIALIZE: handleThemeChange,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function handleSelectivelySyncedUserSettingsUpdate() {
    const tmp3 = resolveThemeDefault(systemTheme, THEME_PREFERENCES_MOBILE, c15);
    let flag = tmp3 !== closure_13;
    if (flag) {
      closure_13 = tmp3;
      updateBackgroundColorDefault(closure_13);
      flag = true;
    }
    return flag;
  },
  UNSYNCED_USER_SETTINGS_UPDATE: handleThemeChange,
  USER_SETTINGS_PROTO_UPDATE: handleThemeChange,
  RESET_PREVIEW_CLIENT_THEME: handleThemeChange,
  SYSTEM_THEME_CHANGE: function handleSystemThemeChange(systemTheme) {
    systemTheme = systemTheme.systemTheme;
    const tmp3 = resolveThemeDefault(systemTheme, THEME_PREFERENCES_MOBILE, c15);
    let flag = tmp3 !== closure_13;
    if (flag) {
      closure_13 = tmp3;
      updateBackgroundColorDefault(closure_13);
      flag = true;
    }
    return flag;
  },
  UPDATE_THEME_PREFERENCES: function handleUpdateThemePreferences(preferences) {
    obj = {};
    const merged = Object.assign(THEME_PREFERENCES_MOBILE);
    const merged1 = Object.assign(preferences.preferences);
    THEME_PREFERENCES_MOBILE = obj;
    const tmp5 = resolveThemeDefault(systemTheme, THEME_PREFERENCES_MOBILE, c15);
    let flag = tmp5 !== closure_13;
    if (flag) {
      closure_13 = tmp5;
      updateBackgroundColorDefault(closure_13);
      flag = true;
    }
    return flag;
  },
  UPDATE_SYNCED_CLIENT_THEME: function handleUpdateSyncedClientTheme(systemTheme) {
    obj = {};
    const merged = Object.assign(closure_14);
    obj[systemTheme.systemTheme] = systemTheme.clientTheme;
    closure_14 = obj;
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
    const tmp = c15 || null != syncedClientThemes[metroRequire.LIGHT] || null != syncedClientThemes[metroRequire.DARK];
    syncedClientThemes = {};
    c15 = false;
    return tmp;
  },
  SET_THEME_OVERRIDE: function handleSetThemeOverride(arg0) {
    const tmp3 = resolveThemeDefault(systemTheme, THEME_PREFERENCES_MOBILE, c15);
    let flag = tmp3 !== closure_13;
    if (flag) {
      closure_13 = tmp3;
      updateBackgroundColorDefault(closure_13);
      flag = true;
    }
    return flag;
  },
  CLEAR_THEME_OVERRIDE: function handleClearThemeOverride() {
    const tmp3 = resolveThemeDefault(systemTheme, THEME_PREFERENCES_MOBILE, c15);
    let flag = tmp3 !== closure_13;
    if (flag) {
      closure_13 = tmp3;
      updateBackgroundColorDefault(closure_13);
      flag = true;
    }
    return flag;
  },
  REFRESH_THEME: function handleRefresh() {
    const tmp3 = resolveThemeDefault(systemTheme, THEME_PREFERENCES_MOBILE, c15);
    let flag = tmp3 !== closure_13;
    if (flag) {
      closure_13 = tmp3;
      updateBackgroundColorDefault(closure_13);
      flag = true;
    }
    return flag;
  }
};
const themeStore = new ThemeStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/user_settings/ThemeStore.tsx");

export default themeStore;