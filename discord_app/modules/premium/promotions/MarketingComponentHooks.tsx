// discord_app/modules/premium/promotions/MarketingComponentHooks.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import themes from "../../../design/utils/shared/themes.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (lightStaticUrl, arg1) => {
      let tmp5;
      let tmp6;
      let useReducedMotion;
      const obj = react;
      const cResult = obj.c(2);
      const tmp4 = useThemeDefault();
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      let tmp9 = null;
      if (null != lightStaticUrl) {
        const tmpResult2 = themes;
        if (!tmpResult2.isThemeDark(tmp4)) {
          let tmp11;
          const tmp10 = arg1;
          if (!tmp10) {
            tmp11 = stateFromStores ? lightStaticUrl.lightStaticUrl : lightStaticUrl.lightUrl;
          }
          tmp9 = tmp11;
        }
        tmp11 = stateFromStores ? lightStaticUrl.darkStaticUrl : lightStaticUrl.darkUrl;
      }
      return tmp9;
    }
  : (lightStaticUrl, arg1) => {
      let useReducedMotion;
      const items = [AccessibilityStore];
      const tmp2 = useThemeDefault();
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      let tmp5 = null;
      if (null != lightStaticUrl) {
        const tmp3Result = themes;
        if (!tmp3Result.isThemeDark(tmp2)) {
          let tmp7;
          const tmp6 = arg1;
          if (!tmp6) {
            tmp7 = stateFromStores ? lightStaticUrl.lightStaticUrl : lightStaticUrl.lightUrl;
          }
          tmp5 = tmp7;
        }
        tmp7 = stateFromStores ? lightStaticUrl.darkStaticUrl : lightStaticUrl.darkUrl;
      }
      return tmp5;
    };
const result = size.fileFinishedImporting("modules/premium/promotions/MarketingComponentHooks.tsx");

export const useThemeAndReducedMotionAwareAssetUrl = tmp2;
