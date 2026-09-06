// === Module 4408: ThemeActionCreators ===

// Module 4408 (ThemeActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import getSystemThemeDefault from "getSystemTheme" /* 1220 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;

const SystemThemeState = fn(1186).SystemThemeState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/ThemeActionCreators.tsx");

export const setSystemTheme = function setSystemTheme(DARK) {
  const obj = { type: "SYSTEM_THEME_CHANGE", systemTheme: DARK };
  obj.dispatch(obj);
};
export const setSystemThemeIfNeeded = function setSystemThemeIfNeeded() {
  if (UnsyncedUserSettingsStore.useSystemTheme !== SystemThemeState.OFF) {
    const obj = { type: "SYSTEM_THEME_CHANGE", systemTheme: getSystemThemeDefault() };
    obj.dispatch(obj);
    const tmp3 = getSystemThemeDefault();
  }
};
export const setUseSystemTheme = function setUseSystemTheme(OFF) {
  let obj = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: null };
  obj = { useSystemTheme: OFF };
  obj.settings = obj;
  obj.dispatch(obj);
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
  DispatcherDefault.dispatch({ type: "CLEAR_SYNCED_CLIENT_THEMES" });
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
  DispatcherDefault.dispatch({ type: "CLEAR_THEME_OVERRIDE" });
};
export const refreshTheme = function refreshTheme() {
  DispatcherDefault.dispatch({ type: "REFRESH_THEME" });
};