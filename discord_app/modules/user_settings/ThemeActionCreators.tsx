// === Module 5079: ThemeActionCreators ===

// Module 5079 (ThemeActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import getSystemThemeDefault from "getSystemTheme" /* 1230 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;

const SystemThemeState = fn(1195).SystemThemeState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/ThemeActionCreators.tsx");

export function setSystemTheme(DARK) {
  DispatcherDefault.dispatch({ type: "SYSTEM_THEME_CHANGE", systemTheme: DARK });
}
export function setSystemThemeIfNeeded() {
  if (UnsyncedUserSettingsStore.useSystemTheme !== SystemThemeState.OFF) {
    const tmp3 = getSystemThemeDefault();
    const obj2 = { type: "SYSTEM_THEME_CHANGE", systemTheme: tmp3 };
    DispatcherDefault.dispatch(obj2);
  }
}
export function setUseSystemTheme(OFF) {
  const obj2 = { type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { useSystemTheme: OFF } };
  DispatcherDefault.dispatch(obj2);
}
export function updateThemePreferences(preferences) {
  DispatcherDefault.dispatch({ type: "UPDATE_THEME_PREFERENCES", preferences });
}
export function updateSyncedClientTheme(systemTheme, clientTheme) {
  DispatcherDefault.dispatch({ type: "UPDATE_SYNCED_CLIENT_THEME", systemTheme, clientTheme });
}
export function clearSyncedClientThemes() {
  DispatcherDefault.dispatch({ type: "CLEAR_SYNCED_CLIENT_THEMES" });
}
export function setSameAsDeviceThemeEnabled(enabled) {
  DispatcherDefault.dispatch({ type: "SET_SAME_AS_DEVICE_THEME_ENABLED", enabled });
}
export function setThemeOverride(theme) {
  DispatcherDefault.dispatch({ type: "SET_THEME_OVERRIDE", theme });
}
export function clearThemeOverride() {
  DispatcherDefault.dispatch({ type: "CLEAR_THEME_OVERRIDE" });
}
export function refreshTheme() {
  DispatcherDefault.dispatch({ type: "REFRESH_THEME" });
}