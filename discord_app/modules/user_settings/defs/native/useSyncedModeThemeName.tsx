// === Module 15129: useSyncedModeThemeName ===

// Module 15129 (useSyncedModeThemeName)
import closure_3 from "handleThemeChange" /* 1301 */;
import { BACKGROUND_GRADIENT_PRESETS_MAP as closure_4 } from "ThemeTypes" /* 1347 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/useSyncedModeThemeName.tsx");

export const useSyncedModeThemeName = function useSyncedModeThemeName(DARK) {
  const _require = DARK;
  const items = [closure_3];
  return _require(586).useStateFromStores(items, () => {
    const syncedClientTheme = closure_1_3.getSyncedClientTheme(DARK);
    const themeName = DARK(closure_1_2[3]).getThemeName(closure_1_3.themePreferenceForSystemTheme(DARK));
    let prop;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    if (null != prop) {
      const intl = DARK(tmp3[4]).intl;
      let stringResult = intl.string(closure_1_1(tmp3[5]).yl1iMm);
    } else {
      let prop1;
      if (syncedClientTheme != null) {
        prop1 = syncedClientTheme.backgroundGradientPresetId;
      }
      stringResult = themeName;
      if (null != prop1) {
        let name;
        if (closure_1_4[syncedClientTheme.backgroundGradientPresetId] != null) {
          const getName = tmp9.getName;
          if (getName != null) {
            name = getName();
          }
        }
        if (name == null) {
          name = themeName;
        }
        stringResult = name;
      }
    }
    return stringResult;
  });
};