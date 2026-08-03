// === Module 8691: useGetOrFetchStorefrontPricesForApplicationId ===

// Module 8691 (useGetOrFetchStorefrontPricesForApplicationId)
import noop from "noop";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/storefront/hooks/useGetOrFetchStorefrontPrices.tsx");

export const useGetOrFetchStorefrontPricesForApplicationId = function useGetOrFetchStorefrontPricesForApplicationId(applicationId) {
  applicationId = applicationId.applicationId;
  const items = [applicationId];
  const effect = React.useEffect(() => {
    if (null != applicationId) {
      let obj = applicationId(outer1_1[1]);
      obj = { applicationId: null };
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
      let obj = skuIds(outer1_1[1]);
      obj = { skuIds: null };
      obj[0] = tmp;
      const storefrontPricesForSkuIds = obj.fetchStorefrontPricesForSkuIds(obj);
    }
  }, items);
};