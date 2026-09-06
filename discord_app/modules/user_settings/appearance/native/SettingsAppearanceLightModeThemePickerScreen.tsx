// discord_app/modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx
import util from "../../../../intl/index.native.tsx";
import SettingsAppearanceThemePickerScreenDefault from "SettingsAppearanceThemePickerScreen.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const SystemTheme = fn(1186).SystemTheme;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx",
);

export default function SettingsAppearanceLightModeThemePickerScreen() {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro", headerTitle: null };
  const intl = util.intl;
  obj.headerTitle = intl.string(util.t.NoFvjZ);
  return jsx(SettingsAppearanceThemePickerScreenDefault, {
    mode: SystemTheme.LIGHT,
    themeSelector: "nitro",
    headerTitle: null,
  });
}
