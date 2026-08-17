// discord_app/modules/user_settings/defs/native/useSyncedModeThemeName.tsx
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import closure_3 from "../../ThemeStore.tsx";
import { BACKGROUND_GRADIENT_PRESETS_MAP as closure_4 } from "../../../client_themes/ClientThemesConstants.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/useSyncedModeThemeName.tsx");

export const useSyncedModeThemeName = function useSyncedModeThemeName(DARK) {
  const _require = DARK;
  importDefault = useIsMobileVisualRefreshExperimentEnabledDefault("useSyncedModeThemeName");
  const items = [closure_3];
  return _initialize.useStateFromStores(items, () => {
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