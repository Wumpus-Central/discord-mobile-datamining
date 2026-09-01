// discord_app/modules/premium/promotions/MarketingComponentHooks.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import isThemeLight from "../../../design/utils/shared/themes.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import closure_3 from "../../a11y/AccessibilityStore.tsx";

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
