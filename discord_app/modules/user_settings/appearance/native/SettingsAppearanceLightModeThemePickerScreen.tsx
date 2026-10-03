// === Module 15121: SettingsAppearanceLightModeThemePickerScreen ===

// Module 15121 (SettingsAppearanceLightModeThemePickerScreen)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen" /* 15082 */;
import noop from "module_19" /* 19 */;

require = fn;
const SystemTheme = fn(1196).SystemTheme;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
    const intl = util.intl;
    obj2.headerTitle = intl.string(util.t.NoFvjZ);
    const tmp9 = jsx(SettingsAppearanceThemePickerScreenDefault, { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null });
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
  const intl = util.intl;
  obj.headerTitle = intl.string(util.t.NoFvjZ);
  return jsx(SettingsAppearanceThemePickerScreenDefault, { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null });
});