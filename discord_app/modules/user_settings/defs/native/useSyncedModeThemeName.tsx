// discord_app/modules/user_settings/defs/native/useSyncedModeThemeName.tsx
import handleThemeChange from "handleThemeChange";
import { BACKGROUND_GRADIENT_PRESETS_MAP as closure_4 } from "items1";

const require = arg1;
const result = require("useIsMobileVisualRefreshExperimentEnabled").fileFinishedImporting("modules/user_settings/defs/native/useSyncedModeThemeName.tsx");

export const useSyncedModeThemeName = function useSyncedModeThemeName(DARK) {
  const _require = DARK;
  importDefault = importDefault(1348)("useSyncedModeThemeName");
  const items = [handleThemeChange];
  return _require(589).useStateFromStores(items, () => {
    const syncedClientTheme = outer1_3.getSyncedClientTheme(DARK);
    const themeName = DARK(outer1_2[4]).getThemeName(outer1_3.themePreferenceForSystemTheme(DARK), callback);
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
        if (outer1_4[syncedClientTheme.backgroundGradientPresetId] != null) {
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