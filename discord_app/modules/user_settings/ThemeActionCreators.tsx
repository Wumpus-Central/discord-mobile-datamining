// discord_app/modules/user_settings/ThemeActionCreators.tsx
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import { SystemThemeState } from "SystemThemeState";

const result = require("dispatcher").fileFinishedImporting("modules/user_settings/ThemeActionCreators.tsx");

export const setSystemTheme = function setSystemTheme(DARK) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "SYSTEM_THEME_CHANGE", systemTheme: DARK };
  obj.dispatch(obj);
};
export const setSystemThemeIfNeeded = function setSystemThemeIfNeeded() {
  if (useSystemTheme.useSystemTheme !== SystemThemeState.OFF) {
    let obj = require("../../Dispatcher.tsx");
    obj = { type: "SYSTEM_THEME_CHANGE", systemTheme: null };
    obj[1] = require("../themes/getSystemTheme.native.tsx")();
    obj.dispatch(obj);
    const tmp3 = require("../themes/getSystemTheme.native.tsx")();
  }
};
export const setUseSystemTheme = function setUseSystemTheme(OFF) {
  let obj = require("../../Dispatcher.tsx");
  obj = { useSystemTheme: OFF };
  obj.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: obj });
};
export const updateThemePreferences = function updateThemePreferences(preferences) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "UPDATE_THEME_PREFERENCES", preferences };
  obj.dispatch(obj);
};
export const updateSyncedClientTheme = function updateSyncedClientTheme(systemTheme, clientTheme) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "UPDATE_SYNCED_CLIENT_THEME", systemTheme, clientTheme };
  obj.dispatch(obj);
};
export const clearSyncedClientThemes = function clearSyncedClientThemes() {
  require("../../Dispatcher.tsx").dispatch({ type: "CLEAR_SYNCED_CLIENT_THEMES" });
};
export const setSameAsDeviceThemeEnabled = function setSameAsDeviceThemeEnabled(enabled) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "SET_SAME_AS_DEVICE_THEME_ENABLED", enabled };
  obj.dispatch(obj);
};
export const setThemeOverride = function setThemeOverride(theme) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "SET_THEME_OVERRIDE", theme };
  obj.dispatch(obj);
};
export const clearThemeOverride = function clearThemeOverride() {
  require("../../Dispatcher.tsx").dispatch({ type: "CLEAR_THEME_OVERRIDE" });
};
export const refreshTheme = function refreshTheme() {
  require("../../Dispatcher.tsx").dispatch({ type: "REFRESH_THEME" });
};