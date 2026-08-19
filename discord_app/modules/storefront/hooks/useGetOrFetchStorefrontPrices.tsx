// === Module 9193: useGetOrFetchStorefrontPricesForApplicationId ===

// Module 9193 (useGetOrFetchStorefrontPricesForApplicationId)
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/storefront/hooks/useGetOrFetchStorefrontPrices.tsx");

export const useGetOrFetchStorefrontPricesForApplicationId = function useGetOrFetchStorefrontPricesForApplicationId(applicationId) {
  applicationId = applicationId.applicationId;
  const items = [applicationId];
  const effect = React.useEffect(() => {
    if (null != applicationId) {
      applicationId(dependencyMap[1]);
      const obj = { applicationId: null };
      obj[0] = tmp;
      const storefrontPricesForApplicationId = obj.fetchStorefrontPricesForApplicationId(obj);
    }
  }, items);
};
export const useGetOrFetchStorefrontPricesForSkuIds = function useGetOrFetchStorefrontPricesForSkuIds(skuIds) {
  skuIds = skuIds.skuIds;
  const items = [skuIds];
  const effect = React.useEffect(() => {
    if (0 !== skuIds.length) {
      skuIds(dependencyMap[1]);
      const obj = { skuIds: null };
      obj[0] = tmp;
      const storefrontPricesForSkuIds = obj.fetchStorefrontPricesForSkuIds(obj);
    }
  }, items);
};