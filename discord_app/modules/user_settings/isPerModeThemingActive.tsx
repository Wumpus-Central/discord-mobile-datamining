// === Module 4407: isPerModeThemingActive ===

// Module 4407 (isPerModeThemingActive)
import ThemeStore from "ThemeStore" /* 1183 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;

const SystemThemeState = fn(1186).SystemThemeState;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  let result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON;
  if (result) {
    result = ThemeStore.isSameAsDeviceThemeEnabled();
  }
  return result;
};