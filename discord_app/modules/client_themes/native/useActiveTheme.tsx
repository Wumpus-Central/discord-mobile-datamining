// === Module 7565: useActiveThemeType ===

// Module 7565 (useActiveThemeType)
import initialize from "initialize" /* 589 */;
import getGuildIdFromNavigationStateDefault from "getGuildIdFromNavigationState" /* 4299 */;
import closure_3 from "CHANNEL_SIDEBAR_WIDTH" /* 1304 */;
import closure_4 from "isSyncedModeThemesEnabled" /* 4266 */;
import closure_5 from "reset" /* 1346 */;
import SystemThemeState from "SystemThemeState" /* 1305 */;

require = arg1;
function useActiveThemeType() {
  const items = [closure_5];
  const stateFromStores = initialize.useStateFromStores(items, () => closure_5.hasCustomTheme());
  const obj = initialize;
  const items1 = [closure_4];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => null != gradientPreset.gradientPreset);
  const tmp3 = getGuildIdFromNavigationStateDefault();
  const obj2 = initialize;
  const items2 = [closure_3];
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
({ SystemThemeState: closure_6, ActiveThemeType: error } = SystemThemeState);
const result = require("set").fileFinishedImporting("modules/client_themes/native/useActiveTheme.tsx");

export const useIsCustomThemeActive = function useIsCustomThemeActive() {
  return useActiveThemeType() === constants2.CUSTOM;
};
export const useIsClientThemeOrCustomThemeActive = function useIsClientThemeOrCustomThemeActive() {
  const tmp = useActiveThemeType();
  return tmp === constants2.CLIENT || tmp === constants2.CUSTOM;
};
export { useActiveThemeType };