// === Module 8448: useSlayerStorefrontDevApplicationIdOverride ===

// Module 8448 (useSlayerStorefrontDevApplicationIdOverride)
import react from "react" /* 576 */;
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore" /* 8449 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  const tmp = closure_2((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
});
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export const useSlayerStorefrontDevApplicationIdOverride = tmp2;