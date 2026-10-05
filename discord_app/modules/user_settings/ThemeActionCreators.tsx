// discord_app/modules/user_settings/ThemeActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import ThemeConstants from "ThemeConstants.tsx";
import getSystemThemeDefault from "../themes/getSystemTheme.native.tsx";
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const SystemThemeState = ThemeConstants.SystemThemeState;
const result = size.fileFinishedImporting("modules/user_settings/ThemeActionCreators.tsx");

export const setSystemTheme = function setSystemTheme(DARK) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SYSTEM_THEME_CHANGE", systemTheme: DARK };
  obj.dispatch(obj2);
};
export const setSystemThemeIfNeeded = function setSystemThemeIfNeeded() {
  if (UnsyncedUserSettingsStore.useSystemTheme !== SystemThemeState.OFF) {
    const obj2 = { type: "SYSTEM_THEME_CHANGE", systemTheme: getSystemThemeDefault() };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
};
export const setUseSystemTheme = function setUseSystemTheme(OFF) {
  let obj3;
  const obj2 = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: obj3 };
  obj3 = { useSystemTheme: OFF };
  const obj = DispatcherDefault;
  obj.dispatch(obj2);
};
export const updateThemePreferences = function updateThemePreferences(preferences) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UPDATE_THEME_PREFERENCES", preferences };
  obj.dispatch(obj2);
};
export const updateSyncedClientTheme = function updateSyncedClientTheme(systemTheme, clientTheme) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UPDATE_SYNCED_CLIENT_THEME", systemTheme, clientTheme };
  obj.dispatch(obj2);
};
export const clearSyncedClientThemes = function clearSyncedClientThemes() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CLEAR_SYNCED_CLIENT_THEMES" });
};
export const setSameAsDeviceThemeEnabled = function setSameAsDeviceThemeEnabled(enabled) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SET_SAME_AS_DEVICE_THEME_ENABLED", enabled };
  obj.dispatch(obj2);
};
export const setThemeOverride = function setThemeOverride(theme) {
  const obj = DispatcherDefault;
  const obj2 = { type: "SET_THEME_OVERRIDE", theme };
  obj.dispatch(obj2);
};
export const clearThemeOverride = function clearThemeOverride() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CLEAR_THEME_OVERRIDE" });
};
export const refreshTheme = function refreshTheme() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "REFRESH_THEME" });
};
