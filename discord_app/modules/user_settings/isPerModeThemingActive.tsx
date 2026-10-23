// === Module 5033: isPerModeThemingActive ===

// Module 5033 (isPerModeThemingActive)
import ThemeStore from "ThemeStore" /* 1207 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1209 */;

const SystemThemeState = fn(1210).SystemThemeState;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  let result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON;
  if (result) {
    result = ThemeStore.isSameAsDeviceThemeEnabled();
  }
  return result;
};