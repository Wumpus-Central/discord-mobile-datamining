// discord_app/modules/storefront/hooks/useGetOrFetchStorefrontPrices.tsx
import StorefrontActionCreators from "../StorefrontActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/hooks/useGetOrFetchStorefrontPrices.tsx");

export const useGetOrFetchStorefrontPricesForApplicationId = function useGetOrFetchStorefrontPricesForApplicationId(
  applicationId,
) {
  applicationId = applicationId.applicationId;
  const items = [applicationId];
  const effect = noop.useEffect(() => {
    if (null != applicationId) {
      const obj = { applicationId: tmp };
      const storefrontPricesForApplicationId = obj.fetchStorefrontPricesForApplicationId(obj);
    }
  }, items);
};
export const useGetOrFetchStorefrontPricesForSkuIds = function useGetOrFetchStorefrontPricesForSkuIds(skuIds) {
  skuIds = skuIds.skuIds;
  const items = [skuIds];
  const effect = noop.useEffect(() => {
    if (0 !== skuIds.length) {
      const obj = { skuIds: tmp };
      const storefrontPricesForSkuIds = obj.fetchStorefrontPricesForSkuIds(obj);
    }
  }, items);
};
