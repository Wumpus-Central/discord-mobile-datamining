// === Module 9581: useGetOrFetchStorefrontPrices ===

// Module 9581 (useGetOrFetchStorefrontPrices)
import StorefrontActionCreators from "StorefrontActionCreators" /* 9582 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/hooks/useGetOrFetchStorefrontPrices.tsx");

export function useGetOrFetchStorefrontPricesForApplicationId(applicationId) {
  applicationId = applicationId.applicationId;
  items = [applicationId];
  const effect = noop.useEffect(() => {
    if (null != applicationId) {
      const obj2 = { applicationId: tmp };
      const storefrontPricesForApplicationId = StorefrontActionCreators.fetchStorefrontPricesForApplicationId(obj2);
    }
  }, items);
}
export function useGetOrFetchStorefrontPricesForSkuIds(skuIds) {
  skuIds = skuIds.skuIds;
  items = [skuIds];
  const effect = noop.useEffect(() => {
    if (0 !== skuIds.length) {
      const obj2 = { skuIds: tmp };
      const storefrontPricesForSkuIds = StorefrontActionCreators.fetchStorefrontPricesForSkuIds(obj2);
    }
  }, items);
}