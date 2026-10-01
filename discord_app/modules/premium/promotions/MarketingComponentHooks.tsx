// === Module 10411: MarketingComponentHooks ===

// Module 10411 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import themes from "themes" /* 4567 */;
import useThemeDefault from "useTheme" /* 4776 */;
import AccessibilityStore from "AccessibilityStore" /* 4834 */;

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