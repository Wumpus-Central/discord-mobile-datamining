// discord_app/modules/premium/promotions/MarketingComponentHooks.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import themes from "../../../design/utils/shared/themes.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export const useThemeAndReducedMotionAwareAssetUrl = ReactCompilerGating.isReactCompilerEnabled()
  ? (lightStaticUrl, arg1) => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function u() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmp4 = useThemeDefault();
      const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
      if (null == lightStaticUrl) {
        return null;
      } else {
        const tmpResult2 = themes;
      }
      const tmpResult = initialize;
    }
  : (lightStaticUrl, arg1) => {
      const tmp2 = useThemeDefault();
      const items = [AccessibilityStore];
      const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      if (null == lightStaticUrl) {
        return null;
      } else {
        const tmp3Result = themes;
      }
    };
