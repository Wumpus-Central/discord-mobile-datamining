// discord_app/modules/user_settings/isPerModeThemingActive.tsx
import ThemeConstants from "ThemeConstants.tsx";
import ThemeStore from "ThemeStore.tsx";
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const SystemThemeState = ThemeConstants.SystemThemeState;
let result = size.fileFinishedImporting("modules/user_settings/isPerModeThemingActive.tsx");

export const isPerModeThemingActive = function isPerModeThemingActive() {
  const result =
    UnsyncedUserSettingsStore.useSystemTheme === SystemThemeState.ON && ThemeStore.isSameAsDeviceThemeEnabled();
  return result;
};
