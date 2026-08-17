// discord_app/modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx
import set from "set" /* 2 */;
import useSlayerStorefrontDevOverrideStore from "useSlayerStorefrontDevOverrideStore" /* 9201 */;

let closure_0 = useSlayerStorefrontDevOverrideStore.useSlayerStorefrontDevOverrideStore;
const result = set.fileFinishedImporting("modules/slayer_storefront/hooks/useSlayerStorefrontDevApplicationIdOverride.tsx");

export const useSlayerStorefrontDevApplicationIdOverride = function useSlayerStorefrontDevApplicationIdOverride() {
  const tmp = callback((overrideApplicationId) => overrideApplicationId.overrideApplicationId);
  return tmp;
};