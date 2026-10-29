// === Module 5069: isPerModeThemingActive ===

// Module 5069 (isPerModeThemingActive)
import ThemeStore from "ThemeStore" /* 1204 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1206 */;

const SystemThemeState = fn(1207).SystemThemeState;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export function isPerModeThemingActive() {
  let result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON;
  if (result) {
    result = ThemeStore.isSameAsDeviceThemeEnabled();
  }
  return result;
}