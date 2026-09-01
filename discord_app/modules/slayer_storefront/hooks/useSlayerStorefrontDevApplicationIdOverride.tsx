// discord_app/modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx
import set from "../../../../_runtime/00002_set.js";
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore.tsx";

let closure_0 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const result = set.fileFinishedImporting(
  "modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx",
);

export const useSlayerStorefrontDevApplicationIdOverride = function useSlayerStorefrontDevApplicationIdOverride() {
  const tmp = callback((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
};
