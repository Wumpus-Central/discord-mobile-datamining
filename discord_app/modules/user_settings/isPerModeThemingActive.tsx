// === Module 4678: isPerModeThemingActive ===

// Module 4678 (isPerModeThemingActive)
import ThemeStore from "ThemeStore" /* 1182 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;

const SystemThemeState = fn(1185).SystemThemeState;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  let result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON;
  if (result) {
    result = ThemeStore.isSameAsDeviceThemeEnabled();
  }
  return result;
};