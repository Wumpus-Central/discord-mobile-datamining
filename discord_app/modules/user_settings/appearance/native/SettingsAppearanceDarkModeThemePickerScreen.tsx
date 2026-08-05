import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { ThemeTypes } from "SettingsAppearanceThemePickerScreen.tsx";
// discord_app/modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx
import "noop";
import { SystemTheme } from "SystemThemeState";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx");

export default function SettingsAppearanceDarkModeThemePickerScreen() {
  const obj = { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[2] = intl.string(getSystemLocale /* getSystemLocale */.t["EgvHH/"]);
  return jsx(ThemeTypes, { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null });
};