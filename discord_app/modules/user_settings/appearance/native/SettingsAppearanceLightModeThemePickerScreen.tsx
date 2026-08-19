// === Module 14651: SettingsAppearanceLightModeThemePickerScreen ===

// Module 14651 (SettingsAppearanceLightModeThemePickerScreen)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ThemeTypesDefault from "ThemeTypes" /* 14612 */;
import { SystemTheme } from "SystemThemeState" /* 1305 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default function SettingsAppearanceLightModeThemePickerScreen() {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.NoFvjZ);
  return jsx(ThemeTypesDefault, { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null });
};