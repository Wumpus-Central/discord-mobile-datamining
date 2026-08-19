// === Module 4222: setSystemTheme ===

// Module 4222 (setSystemTheme)
import dispatcherDefault from "dispatcher" /* 709 */;
import getSystemThemeDefault from "getSystemTheme" /* 1339 */;
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH" /* 1304 */;
import { SystemThemeState } from "SystemThemeState" /* 1305 */;

const result = require("obj132").fileFinishedImporting("modules/user_settings/ThemeActionCreators.tsx");

export const setSystemTheme = function setSystemTheme(DARK) {
  const obj = { type: "SYSTEM_THEME_CHANGE", systemTheme: DARK };
  obj.dispatch(obj);
};
export const setSystemThemeIfNeeded = function setSystemThemeIfNeeded() {
  if (useSystemTheme.useSystemTheme !== SystemThemeState.OFF) {
    const obj = { type: "SYSTEM_THEME_CHANGE", systemTheme: null };
    obj[1] = getSystemThemeDefault();
    obj.dispatch(obj);
    const tmp3 = getSystemThemeDefault();
  }
};
export const setUseSystemTheme = function setUseSystemTheme(OFF) {
  const obj = { useSystemTheme: OFF };
  obj.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: obj });
};
export const updateThemePreferences = function updateThemePreferences(preferences) {
  const obj = { type: "UPDATE_THEME_PREFERENCES", preferences };
  obj.dispatch(obj);
};
export const updateSyncedClientTheme = function updateSyncedClientTheme(systemTheme, clientTheme) {
  const obj = { type: "UPDATE_SYNCED_CLIENT_THEME", systemTheme, clientTheme };
  obj.dispatch(obj);
};
export const clearSyncedClientThemes = function clearSyncedClientThemes() {
  dispatcherDefault.dispatch({ type: "CLEAR_SYNCED_CLIENT_THEMES" });
};
export const setSameAsDeviceThemeEnabled = function setSameAsDeviceThemeEnabled(enabled) {
  const obj = { type: "SET_SAME_AS_DEVICE_THEME_ENABLED", enabled };
  obj.dispatch(obj);
};
export const setThemeOverride = function setThemeOverride(theme) {
  const obj = { type: "SET_THEME_OVERRIDE", theme };
  obj.dispatch(obj);
};
export const clearThemeOverride = function clearThemeOverride() {
  dispatcherDefault.dispatch({ type: "CLEAR_THEME_OVERRIDE" });
};
export const refreshTheme = function refreshTheme() {
  dispatcherDefault.dispatch({ type: "REFRESH_THEME" });
};