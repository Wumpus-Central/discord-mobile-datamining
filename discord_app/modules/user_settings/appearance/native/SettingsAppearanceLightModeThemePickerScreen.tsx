// discord_app/modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx
import "noop";
import { SystemTheme } from "SystemThemeState";
import { jsx } from "jsxProd";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { ThemeTypes } from "SettingsAppearanceThemePickerScreen.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default function SettingsAppearanceLightModeThemePickerScreen() {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.NoFvjZ);
  return jsx(ThemeTypes, { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null });
};