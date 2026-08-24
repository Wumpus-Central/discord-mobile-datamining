// discord_app/modules/themes/getSystemTheme.native.tsx
import set from "../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import SystemThemeState from "../user_settings/ThemeConstants.tsx";

const Appearance = get_ActivityIndicator.Appearance;
const SystemTheme = SystemThemeState.SystemTheme;
const result = set.fileFinishedImporting("modules/themes/getSystemTheme.native.tsx");

export default function getSystemTheme() {
  const colorScheme = Appearance.getColorScheme();
  if ("light" === colorScheme) {
    return SystemTheme.LIGHT;
  } else if ("dark" === colorScheme) {
    return SystemTheme.DARK;
  } else {
    return SystemTheme.NO_PREFERENCE;
  }
};