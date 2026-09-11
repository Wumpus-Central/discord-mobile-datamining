// === Module 10842: MarketingComponentHooks ===

// Module 10842 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import themes from "themes" /* 4315 */;
import useThemeDefault from "useTheme" /* 4541 */;
import AccessibilityStore from "AccessibilityStore" /* 4598 */;

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