// discord_app/modules/themes/getSystemTheme.native.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import ThemeConstants from "../user_settings/ThemeConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Appearance = _mod17.Appearance;
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
