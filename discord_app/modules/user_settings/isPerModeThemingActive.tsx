// === Module 4407: isPerModeThemingActive ===

// Module 4407 (isPerModeThemingActive)
import closure_0 from "handleThemeChange" /* 1183 */;
import closure_1 from "CHANNEL_SIDEBAR_WIDTH" /* 1185 */;
import { SystemThemeState } from "SystemThemeState" /* 1186 */;

let result = require("set").fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  let result = useSystemTheme.useSystemTheme === SystemThemeState.ON;
  if (result) {
    result = sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
  }
  return result;
};