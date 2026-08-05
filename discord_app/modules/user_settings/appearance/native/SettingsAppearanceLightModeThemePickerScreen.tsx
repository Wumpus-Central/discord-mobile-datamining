// discord_app/modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx
import "noop";
import { SystemTheme } from "SystemThemeState";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default function SettingsAppearanceLightModeThemePickerScreen() {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.NoFvjZ);
  return jsx(require("SettingsAppearanceThemePickerScreen.tsx"), { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null });
};