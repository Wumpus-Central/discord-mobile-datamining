import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import reset from "reset";
import SystemThemeState from "SystemThemeState";

let closure_6;
let error;
const require = arg1;
function useActiveThemeType() {
  const items = [reset];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => reset.hasCustomTheme());
  const obj = require(589) /* initialize */;
  const items1 = [isSyncedModeThemesEnabled];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => null != gradientPreset.gradientPreset);
  const tmp3 = importDefault(4135)();
  const obj2 = require(589) /* initialize */;
  const items2 = [CHANNEL_SIDEBAR_WIDTH];
  let type;
  const stateFromStores2 = require(589) /* initialize */.useStateFromStores(items2, () => useSystemTheme.useSystemTheme);
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
const result = require("reset").fileFinishedImporting("modules/client_themes/native/useActiveTheme.tsx");

export const useIsCustomThemeActive = function useIsCustomThemeActive() {
  return useActiveThemeType() === constants2.CUSTOM;
};
export const useIsClientThemeOrCustomThemeActive = function useIsClientThemeOrCustomThemeActive() {
  const tmp = useActiveThemeType();
  return tmp === constants2.CLIENT || tmp === constants2.CUSTOM;
};
export { useActiveThemeType };