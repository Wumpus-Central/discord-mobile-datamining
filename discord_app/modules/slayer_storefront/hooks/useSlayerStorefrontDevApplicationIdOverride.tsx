// discord_app/modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx",
);

export const useSlayerStorefrontDevApplicationIdOverride = function useSlayerStorefrontDevApplicationIdOverride() {
  const tmp = closure_0((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
};
