// discord_app/modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import ThemeTypesDefault from "SettingsAppearanceThemePickerScreen.tsx";
import { SystemTheme } from "../../ThemeConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx");

export default function SettingsAppearanceDarkModeThemePickerScreen() {
  const obj = { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["EgvHH/"]);
  return jsx(ThemeTypesDefault, { mode: SystemTheme.DARK, themeSelector: "nitro", headerTitle: null });
};