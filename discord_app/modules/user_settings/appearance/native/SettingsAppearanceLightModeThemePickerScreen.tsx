// discord_app/modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import ThemeTypesDefault from "SettingsAppearanceThemePickerScreen.tsx";
import { SystemTheme } from "../../ThemeConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting(
  "modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx",
);

export default function SettingsAppearanceLightModeThemePickerScreen() {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.NoFvjZ);
  return jsx(ThemeTypesDefault, { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null });
}
