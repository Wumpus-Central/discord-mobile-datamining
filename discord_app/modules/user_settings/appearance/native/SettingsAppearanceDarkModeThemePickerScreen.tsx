// discord_app/modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx
import "noop";
import { SystemTheme } from "SystemThemeState";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx");

export default function SettingsAppearanceDarkModeThemePickerScreen() {
  const obj = { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["EgvHH/"]);
  return jsx(require("SettingsAppearanceThemePickerScreen.tsx"), { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null });
};