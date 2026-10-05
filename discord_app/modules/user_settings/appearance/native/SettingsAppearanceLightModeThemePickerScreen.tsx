// discord_app/modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import ThemeConstants from "../../ThemeConstants.tsx";
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const SystemTheme = ThemeConstants.SystemTheme;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        SettingsAppearanceThemePickerScreenDefault;
        const intl = intl2.intl;
        const tmp9 = <tmp7 mode={SystemTheme.LIGHT} themeSelector="nitro" headerTitle={intl.string(intl2.t.NoFvjZ)} />;
        cResult[0] = tmp9;
        first = tmp9;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      SettingsAppearanceThemePickerScreenDefault;
      const intl = intl2.intl;
      return <tmp mode={SystemTheme.LIGHT} themeSelector="nitro" headerTitle={intl.string(intl2.t.NoFvjZ)} />;
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx",
);

export default tmp3;
