// discord_app/modules/user_settings/isPerModeThemingActive.tsx
import ThemeStore from "ThemeStore.tsx";
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore.tsx";

const SystemThemeState = fn(1186).SystemThemeState;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  let result = UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON;
  if (result) {
    result = ThemeStore.isSameAsDeviceThemeEnabled();
  }
  return result;
};
