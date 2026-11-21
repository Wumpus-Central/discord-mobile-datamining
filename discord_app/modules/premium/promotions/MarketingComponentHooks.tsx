// === Module 9505: MarketingComponentHooks ===

// Module 9505 (MarketingComponentHooks)
import initialize from "initialize" /* 504 */;
import themes from "themes" /* 4935 */;
import useThemeDefault from "useTheme" /* 5122 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  const tmp = useThemeDefault();
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let isThemeDarkResult = themes.isThemeDark(tmp);
  if (!isThemeDarkResult) {
    isThemeDarkResult = true === arg1;
  }
  if (null == asset) {
    return null;
  }
}
export function getThemeAndReducedMotionAwareAssetUrl(lightStaticUrl, arg1, arg2) {
  if (null == lightStaticUrl) {
    return null;
  }
}