// discord_app/modules/user_settings/isPerModeThemingActive.tsx
import handleThemeChange from "ThemeStore.tsx";
import CHANNEL_SIDEBAR_WIDTH from "UnsyncedUserSettingsStore.tsx";
import { SystemThemeState } from "ThemeConstants.tsx";

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