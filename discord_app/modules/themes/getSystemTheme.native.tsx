// === Module 1339: getSystemTheme ===

// Module 1339 (getSystemTheme)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import SystemThemeState from "SystemThemeState" /* 1305 */;

const Appearance = get_ActivityIndicator.Appearance;
const SystemTheme = SystemThemeState.SystemTheme;
const result = obj132.fileFinishedImporting("modules/themes/getSystemTheme.native.tsx");

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