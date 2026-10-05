// discord_app/modules/themes/getSystemTheme.native.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import ThemeConstants from "../user_settings/ThemeConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Appearance = react_native.Appearance;
const SystemTheme = ThemeConstants.SystemTheme;
const result = size.fileFinishedImporting("modules/themes/getSystemTheme.native.tsx");

export default function getSystemTheme() {
  const colorScheme = Appearance.getColorScheme();
  if ("light" === colorScheme) {
    return SystemTheme.LIGHT;
  } else if ("dark" === colorScheme) {
    return SystemTheme.DARK;
  } else {
    return SystemTheme.NO_PREFERENCE;
  }
}
