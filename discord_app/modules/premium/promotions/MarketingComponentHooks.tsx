// === Module 10304: useThemeAndReducedMotionAwareAssetUrl ===

// Module 10304 (useThemeAndReducedMotionAwareAssetUrl)
import initialize from "initialize" /* 589 */;
import isThemeLight from "isThemeLight" /* 1364 */;
import useThemeDefault from "useTheme" /* 4310 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export const useThemeAndReducedMotionAwareAssetUrl = function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  const tmp2 = useThemeDefault();
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (null == asset) {
    return null;
  } else {
    const tmp3Result = isThemeLight;
  }
};