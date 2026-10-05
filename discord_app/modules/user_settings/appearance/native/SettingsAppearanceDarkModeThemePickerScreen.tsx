// === Module 15127: SettingsAppearanceDarkModeThemePickerScreen ===

// Module 15127 (SettingsAppearanceDarkModeThemePickerScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import ThemeConstants from "ThemeConstants" /* 1196 */;
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen" /* 15086 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SystemTheme = ThemeConstants.SystemTheme;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    SettingsAppearanceThemePickerScreenDefault;
    const intl = intl2.intl;
    const tmp9 = <tmp7 mode={SystemTheme.DARK} themeSelector="nitro" headerTitle={intl.string(intl2.t["EgvHH/"])} />;
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  SettingsAppearanceThemePickerScreenDefault;
  const intl = intl2.intl;
  return <tmp mode={SystemTheme.DARK} themeSelector="nitro" headerTitle={intl.string(intl2.t["EgvHH/"])} />;
});
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx");

export default tmp3;