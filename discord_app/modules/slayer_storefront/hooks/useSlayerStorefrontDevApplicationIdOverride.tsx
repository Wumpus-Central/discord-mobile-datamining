// === Module 8967: useSlayerStorefrontDevApplicationIdOverride ===

// Module 8967 (useSlayerStorefrontDevApplicationIdOverride)
import c from "c" /* 576 */;
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore" /* 8968 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export const useSlayerStorefrontDevApplicationIdOverride = ReactCompilerGating.isReactCompilerEnabled() ? (function useSlayerStorefrontDevApplicationIdOverride() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(overrideApplicationId) {
      return overrideApplicationId.overrideApplicationId;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp3 = closure_2(first);
  return tmp3;
}) : (function useSlayerStorefrontDevApplicationIdOverride() {
  const tmp = closure_2((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
});