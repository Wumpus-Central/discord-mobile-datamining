// discord_app/modules/user_settings/isPerModeThemingActive.tsx
import closure_0 from "ThemeStore.tsx";
import closure_1 from "UnsyncedUserSettingsStore.tsx";
import { SystemThemeState } from "ThemeConstants.tsx";

let result = require("set").fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  let result = useSystemTheme.useSystemTheme === SystemThemeState.ON;
  if (result) {
    result = sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
  }
  return result;
};