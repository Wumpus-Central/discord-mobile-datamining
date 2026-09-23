// === Module 4675: ThemeActionCreators ===

// Module 4675 (ThemeActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import getSystemThemeDefault from "getSystemTheme" /* 1219 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;

const SystemThemeState = fn(1185).SystemThemeState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/ThemeActionCreators.tsx");

export const setSystemTheme = function setSystemTheme(DARK) {
  DispatcherDefault.dispatch({ type: "SYSTEM_THEME_CHANGE", systemTheme: DARK });
};
export const setSystemThemeIfNeeded = function setSystemThemeIfNeeded() {
  if (UnsyncedUserSettingsStore.useSystemTheme !== SystemThemeState.OFF) {
    const tmp3 = getSystemThemeDefault();
    const obj2 = { type: "SYSTEM_THEME_CHANGE", systemTheme: tmp3 };
    DispatcherDefault.dispatch(obj2);
  }
};
export const setUseSystemTheme = function setUseSystemTheme(OFF) {
  const obj2 = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { useSystemTheme: OFF } };
  DispatcherDefault.dispatch(obj2);
};
export const updateThemePreferences = function updateThemePreferences(preferences) {
  DispatcherDefault.dispatch({ type: "UPDATE_THEME_PREFERENCES", preferences });
};
export const updateSyncedClientTheme = function updateSyncedClientTheme(systemTheme, clientTheme) {
  DispatcherDefault.dispatch({ type: "UPDATE_SYNCED_CLIENT_THEME", systemTheme, clientTheme });
};
export const clearSyncedClientThemes = function clearSyncedClientThemes() {
  DispatcherDefault.dispatch({ type: "CLEAR_SYNCED_CLIENT_THEMES" });
};
export const setSameAsDeviceThemeEnabled = function setSameAsDeviceThemeEnabled(enabled) {
  DispatcherDefault.dispatch({ type: "SET_SAME_AS_DEVICE_THEME_ENABLED", enabled });
};
export const setThemeOverride = function setThemeOverride(theme) {
  DispatcherDefault.dispatch({ type: "SET_THEME_OVERRIDE", theme });
};
export const clearThemeOverride = function clearThemeOverride() {
  DispatcherDefault.dispatch({ type: "CLEAR_THEME_OVERRIDE" });
};
export const refreshTheme = function refreshTheme() {
  DispatcherDefault.dispatch({ type: "REFRESH_THEME" });
};