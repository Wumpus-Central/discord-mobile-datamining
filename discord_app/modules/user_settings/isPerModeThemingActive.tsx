// === Module 4965: isPerModeThemingActive ===

// Module 4965 (isPerModeThemingActive)
import ThemeStore from "ThemeStore" /* 1205 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1207 */;

const SystemThemeState = fn(1208).SystemThemeState;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  let result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON;
  if (result) {
    result = ThemeStore.isSameAsDeviceThemeEnabled();
  }
  return result;
};