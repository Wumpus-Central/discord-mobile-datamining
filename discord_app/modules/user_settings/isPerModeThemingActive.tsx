// === Module 1366: isPerModeThemingActive ===

// Module 1366 (isPerModeThemingActive)
import handleThemeChange from "handleThemeChange" /* 1302 */;
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH" /* 1304 */;
import { SystemThemeState } from "SystemThemeState" /* 1305 */;

let result = require("obj132").fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

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