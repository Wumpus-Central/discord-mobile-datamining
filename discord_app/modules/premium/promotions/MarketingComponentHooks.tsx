// === Module 10753: useThemeAndReducedMotionAwareAssetUrl ===

// Module 10753 (useThemeAndReducedMotionAwareAssetUrl)
import initialize from "initialize" /* 504 */;
import isThemeLight from "isThemeLight" /* 4269 */;
import useThemeDefault from "useTheme" /* 4495 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export const useThemeAndReducedMotionAwareAssetUrl = function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  const tmp2 = useThemeDefault();
  const tmp3 = require;
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (null == asset) {
    return null;
  } else {
    const tmp3Result = isThemeLight;
  }
};