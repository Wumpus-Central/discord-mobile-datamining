// discord_app/modules/premium/promotions/MarketingComponentHooks.tsx
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { useTheme } from "../../../hooks/useTheme.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export const useThemeAndReducedMotionAwareAssetUrl = function useThemeAndReducedMotionAwareAssetUrl(asset, arg1) {
  const tmp2 = useTheme();
  const tmp3 = require;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (null == asset) {
    return null;
  } else {
    const tmp3Result = tmp3(3965);
  }
};