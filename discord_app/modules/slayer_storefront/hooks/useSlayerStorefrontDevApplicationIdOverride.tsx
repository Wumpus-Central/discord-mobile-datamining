// discord_app/modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx
import react from "../../../../_runtime/00576_react.js";
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(overrideApplicationId) {
          return overrideApplicationId.overrideApplicationId;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      const tmp3 = closure_2(first);
      return tmp3;
    }
  : () => {
      const tmp = closure_2((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
      return tmp;
    };
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx",
);

export const useSlayerStorefrontDevApplicationIdOverride = tmp2;
