// === Module 1220: getSystemTheme ===

// Module 1220 (getSystemTheme)
import _mod17 from "module_17" /* 17 */;
import ThemeConstants from "ThemeConstants" /* 1186 */;
import size from "module_2" /* 2 */;

const Appearance = _mod17.Appearance;
const SystemTheme = ThemeConstants.SystemTheme;
const result = size.fileFinishedImporting("modules/themes/getSystemTheme.native.tsx");

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