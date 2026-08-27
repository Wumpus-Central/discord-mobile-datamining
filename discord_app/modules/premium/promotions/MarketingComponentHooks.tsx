// === Module 10446: useThemeAndReducedMotionAwareAssetUrl ===

// Module 10446 (useThemeAndReducedMotionAwareAssetUrl)
import initialize from "initialize" /* 589 */;
import isThemeLight from "isThemeLight" /* 1364 */;
import useThemeDefault from "useTheme" /* 4380 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4437 */;

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