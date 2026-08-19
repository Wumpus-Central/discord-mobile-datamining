// === Module 1366: isPerModeThemingActive ===

// Module 1366 (isPerModeThemingActive)
import closure_0 from "handleThemeChange" /* 1302 */;
import closure_1 from "CHANNEL_SIDEBAR_WIDTH" /* 1304 */;
import { SystemThemeState } from "SystemThemeState" /* 1305 */;

let result = require("set").fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive(isSyncedModeThemesEnabled) {
  let result = useSystemTheme.useSystemTheme === SystemThemeState.ON;
  if (result) {
    result = sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
  }
  if (result) {
    result = isSyncedModeThemesEnabled();
  }
  return result;
};