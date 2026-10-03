// === Module 4725: isPerModeThemingActive ===

// Module 4725 (isPerModeThemingActive)
import ThemeStore from "ThemeStore" /* 1193 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1195 */;

const SystemThemeState = fn(1196).SystemThemeState;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  let result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON;
  if (result) {
    result = ThemeStore.isSameAsDeviceThemeEnabled();
  }
  return result;
};