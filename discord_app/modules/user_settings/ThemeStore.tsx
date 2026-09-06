// discord_app/modules/user_settings/ThemeStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import getSystemThemeDefault from "../themes/getSystemTheme.native.tsx";
import resolveThemeDefault from "../themes/resolveTheme.native.tsx";
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators.tsx";
import updateBackgroundColorDefault from "../themes/updateBackgroundColor.native.tsx";
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore.tsx";
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore.tsx";
import UserSettingsProtoStore from "UserSettingsProtoStore.tsx";

require = fn;
function handleThemeChange() {
  const tmp3 = resolveThemeDefault(systemTheme, obj, c15);
  let flag = tmp3 !== closure_13;
  if (flag) {
    closure_13 = tmp3;
    updateBackgroundColorDefault(closure_13);
    flag = true;
  }
  return flag;
}
const ThemeConstants = fn(1186);
({ SystemTheme: metroRequire, THEME_PREFERENCES_WEB_REFRESH, THEME_PREFERENCES_MOBILE } = ThemeConstants);
const UserSettingsDelay = fn(1084).UserSettingsDelay;
const ThemeTypes = fn(1074).ThemeTypes;
let obj = { UNSET: 0, [0]: "UNSET", SET: 1, [1]: "SET" };
let SET = obj.UNSET;
obj = THEME_PREFERENCES_MOBILE;
let tmp3 = getSystemThemeDefault();
let systemTheme = tmp3;
let closure_13 = obj[tmp3];
let syncedClientThemes = {};
let c15 = false;
const PersistedStore = initializeDefault.PersistedStore;
class ThemeStore extends PersistedStore {}
const prototype = ThemeStore.prototype;
prototype["initialize"] = function initialize(theme) {
  theme = undefined;
  if (theme != null) {
    theme = theme.theme;
  }
  if (null != theme) {
    SET = obj.SET;
    const theme2 = theme.theme;
    updateBackgroundColorDefault(theme2);
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
  obj = { theme: this.theme, preferences: obj, syncedClientThemes, syncedThemesEnabled, status: SET };
  return obj;
};
Object.defineProperty(prototype, "theme", {
  get: function theme() {
    return closure_13;
  },
  set: undefined,
});
Object.defineProperty(prototype, "systemTheme", {
  get: function systemTheme() {
    return systemTheme;
  },
  set: undefined,
});
prototype["themePreferenceForSystemTheme"] = function themePreferenceForSystemTheme(systemTheme) {
  return obj[systemTheme];
};
prototype["getSyncedClientTheme"] = function getSyncedClientTheme(systemTheme) {
  return syncedClientThemes[systemTheme];
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
    obj = {};
    const merged = Object.assign(theme);
    obj.theme = str;
    return obj;
  },
  (preferences) => {
    let tmp = preferences;
    if (null != preferences.preferences) {
      tmp = preferences;
      if (preferences.preferences[constants.DARK] === ThemeTypes.DARK) {
        obj = {};
        const merged = Object.assign(preferences);
        obj = {};
        const merged1 = Object.assign(preferences.preferences);
        obj[tmp2.DARK] = tmp3.DARKER;
        obj.preferences = obj;
        tmp = obj;
      }
    }
    return tmp;
  },
];
ThemeStore.migrations = items;
obj = {
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
        PreloadedUserSettingsActionCreators.updateAsync(
          "appearance",
          async (arg0) => {
            arg0.darkSidebar = true;
          },
          UserSettingsDelay.INFREQUENT_USER_ACTION,
        );
      }
      obj = DispatcherDefault;
      obj.wait(() => {
        DispatcherDefault.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { darkSidebar: false } });
      });
    }
    const tmp13 = resolveThemeDefault(systemTheme, obj, c15);
    let flag = tmp13 !== closure_13;
    if (flag) {
      closure_13 = tmp13;
      updateBackgroundColorDefault(closure_13);
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogOut(isSwitchingAccount) {
    closure_14 = {};
    c15 = false;
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
    let tmp = !isSwitchingAccount;
    if (!isSwitchingAccount) {
      const tmp7 = resolveThemeDefault(systemTheme, obj, c15);
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
    const tmp3 = resolveThemeDefault(systemTheme, obj, c15);
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
    const tmp3 = resolveThemeDefault(systemTheme, obj, c15);
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
    const merged = Object.assign(obj);
    const merged1 = Object.assign(preferences.preferences);
    const tmp5 = resolveThemeDefault(systemTheme, obj, c15);
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
    let tmp = c15;
    if (!c15) {
      tmp = null != syncedClientThemes[constants.LIGHT];
    }
    if (!tmp) {
      tmp = null != syncedClientThemes[constants.DARK];
    }
    syncedClientThemes = {};
    c15 = false;
    return tmp;
  },
  SET_THEME_OVERRIDE: function handleSetThemeOverride(arg0) {
    const tmp3 = resolveThemeDefault(systemTheme, obj, c15);
    let flag = tmp3 !== closure_13;
    if (flag) {
      closure_13 = tmp3;
      updateBackgroundColorDefault(closure_13);
      flag = true;
    }
    return flag;
  },
  CLEAR_THEME_OVERRIDE: function handleClearThemeOverride() {
    const tmp3 = resolveThemeDefault(systemTheme, obj, c15);
    let flag = tmp3 !== closure_13;
    if (flag) {
      closure_13 = tmp3;
      updateBackgroundColorDefault(closure_13);
      flag = true;
    }
    return flag;
  },
  REFRESH_THEME: function handleRefresh() {
    const tmp3 = resolveThemeDefault(systemTheme, obj, c15);
    let flag = tmp3 !== closure_13;
    if (flag) {
      closure_13 = tmp3;
      updateBackgroundColorDefault(closure_13);
      flag = true;
    }
    return flag;
  },
};
const themeStore = new ThemeStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/ThemeStore.tsx");

export default themeStore;
