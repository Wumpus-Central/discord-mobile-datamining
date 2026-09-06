// === Module 7874: useActiveTheme ===

// Module 7874 (useActiveTheme)
import initialize from "initialize" /* 504 */;
import useRoutedActiveGuildThemeDefault from "useRoutedActiveGuildTheme" /* 4416 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4379 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1228 */;

require = fn;
function useActiveThemeType() {
  const items = [CustomThemeMobileStore];
  const stateFromStores = initialize.useStateFromStores(items, () => CustomThemeMobileStore.hasCustomTheme());
  const items1 = [ClientThemesBackgroundStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => null != gradientPreset.gradientPreset);
  const tmp3 = useRoutedActiveGuildThemeDefault();
  const items2 = [UnsyncedUserSettingsStore];
  let type;
  const stateFromStores2 = initialize.useStateFromStores(items2, () => useSystemTheme.useSystemTheme);
  if (tmp3 != null) {
    type = tmp3.type;
  }
  if ("custom" === type) {
    let DEFAULT = constants2.CUSTOM;
  } else {
    let type1;
    if (tmp3 != null) {
      type1 = tmp3.type;
    }
    if ("preset" === type1) {
      DEFAULT = constants2.CLIENT;
    } else if (stateFromStores) {
      DEFAULT = constants2.CUSTOM;
    } else if (stateFromStores1) {
      DEFAULT = constants2.CLIENT;
    } else if (stateFromStores2 === constants.ON) {
      DEFAULT = constants2.SYSTEM;
    } else {
      DEFAULT = constants2.DEFAULT;
    }
  }
  return DEFAULT;
}
const ThemeConstants = fn(1186);
({ SystemThemeState: metroRequire, ActiveThemeType: closure_7 } = ThemeConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/useActiveTheme.tsx");

export const useIsCustomThemeActive = function useIsCustomThemeActive() {
  return useActiveThemeType() === constants2.CUSTOM;
};
export const useIsClientThemeOrCustomThemeActive = function useIsClientThemeOrCustomThemeActive() {
  const tmp = useActiveThemeType();
  return tmp === constants2.CLIENT || tmp === constants2.CUSTOM;
};
export { useActiveThemeType };