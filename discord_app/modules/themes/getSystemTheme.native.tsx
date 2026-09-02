// === Module 1338: getSystemTheme ===

// Module 1338 (getSystemTheme)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import SystemThemeState from "SystemThemeState" /* 1304 */;

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