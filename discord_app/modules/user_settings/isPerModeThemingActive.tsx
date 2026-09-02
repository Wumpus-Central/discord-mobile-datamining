// === Module 1365: isPerModeThemingActive ===

// Module 1365 (isPerModeThemingActive)
import closure_0 from "handleThemeChange" /* 1301 */;
import closure_1 from "CHANNEL_SIDEBAR_WIDTH" /* 1303 */;
import { SystemThemeState } from "SystemThemeState" /* 1304 */;

let result = require("set").fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  let result = useSystemTheme.useSystemTheme === SystemThemeState.ON;
  if (result) {
    result = sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
  }
  return result;
};