// === Module 10881: MarketingComponentHooks ===

// Module 10881 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import themes from "themes" /* 4345 */;
import useThemeDefault from "useTheme" /* 4571 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export const useThemeAndReducedMotionAwareAssetUrl = function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  const tmp2 = useThemeDefault();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (null == asset) {
    return null;
  } else {
    const tmp3Result = themes;
  }
};