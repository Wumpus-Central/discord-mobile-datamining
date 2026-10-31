// === Module 10623: MarketingComponentHooks ===

// Module 10623 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import themes from "themes" /* 5036 */;
import useThemeDefault from "useTheme" /* 5253 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  const tmp2 = useThemeDefault();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (null == asset) {
    return null;
  } else {
    const tmp3Result = themes;
  }
}