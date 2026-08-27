// === Module 14848: useSyncedModeThemeName ===

// Module 14848 (useSyncedModeThemeName)
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import closure_3 from "handleThemeChange" /* 1302 */;
import { BACKGROUND_GRADIENT_PRESETS_MAP as closure_4 } from "ThemeTypes" /* 1348 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/useSyncedModeThemeName.tsx");

export const useSyncedModeThemeName = function useSyncedModeThemeName(DARK) {
  const _require = DARK;
  importDefault = useIsMobileVisualRefreshExperimentEnabledDefault("useSyncedModeThemeName");
  const items = [closure_3];
  return _require(589).useStateFromStores(items, () => {
    const syncedClientTheme = closure_1_3.getSyncedClientTheme(DARK);
    const themeName = DARK(closure_1_2[4]).getThemeName(closure_1_3.themePreferenceForSystemTheme(DARK), callback);
    let prop;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    if (null != prop) {
      const intl = DARK(tmp3[5]).intl;
      let stringResult = intl.string(callback(tmp3[6]).yl1iMm);
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