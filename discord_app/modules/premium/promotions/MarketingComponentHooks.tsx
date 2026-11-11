// discord_app/modules/premium/promotions/MarketingComponentHooks.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import themes from "../../../design/utils/shared/themes.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

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
