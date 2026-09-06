// === Module 15305: SettingsAppearanceLightModeThemePickerScreen ===

// Module 15305 (SettingsAppearanceLightModeThemePickerScreen)
import util from "util" /* 1114 */;
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen" /* 15266 */;
import noop from "module_19" /* 19 */;

require = fn;
const SystemTheme = fn(1186).SystemTheme;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default function SettingsAppearanceLightModeThemePickerScreen() {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
  const intl = util.intl;
  obj.headerTitle = intl.string(util.t.NoFvjZ);
  return jsx(SettingsAppearanceThemePickerScreenDefault, { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null });
};