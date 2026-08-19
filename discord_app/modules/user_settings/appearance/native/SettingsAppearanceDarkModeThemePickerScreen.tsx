// === Module 14653: SettingsAppearanceDarkModeThemePickerScreen ===

// Module 14653 (SettingsAppearanceDarkModeThemePickerScreen)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ThemeTypesDefault from "ThemeTypes" /* 14612 */;
import { SystemTheme } from "SystemThemeState" /* 1305 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx");

export default function SettingsAppearanceDarkModeThemePickerScreen() {
  const obj = { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["EgvHH/"]);
  return jsx(ThemeTypesDefault, { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null });
};