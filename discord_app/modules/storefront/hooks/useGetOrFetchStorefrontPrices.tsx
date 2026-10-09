// === Module 8969: useGetOrFetchStorefrontPrices ===

// Module 8969 (useGetOrFetchStorefrontPrices)
import StorefrontActionCreators from "StorefrontActionCreators" /* 8970 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetOrFetchStorefrontPricesForApplicationId(applicationId) {
  const cResult = applicationId(576).c(3);
  applicationId = applicationId.applicationId;
  if (cResult[0] !== applicationId) {
    const fn = function c() {
      if (null != applicationId) {
        const obj2 = { applicationId: tmp };
        const storefrontPricesForApplicationId = StorefrontActionCreators.fetchStorefrontPricesForApplicationId(obj2);
      }
    };
    const items = [applicationId];
    cResult[0] = applicationId;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : (function useGetOrFetchStorefrontPricesForApplicationId(applicationId) {
  applicationId = applicationId.applicationId;
  const items = [applicationId];
  const effect = noop.useEffect(() => {
    if (null != applicationId) {
      const obj2 = { applicationId: tmp };
      const storefrontPricesForApplicationId = StorefrontActionCreators.fetchStorefrontPricesForApplicationId(obj2);
    }
  }, items);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/hooks/useGetOrFetchStorefrontPrices.tsx");

export const useGetOrFetchStorefrontPricesForApplicationId = tmp2;
export const useGetOrFetchStorefrontPricesForSkuIds = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetOrFetchStorefrontPricesForSkuIds(skuIds) {
  const cResult = skuIds(576).c(3);
  skuIds = skuIds.skuIds;
  if (cResult[0] !== skuIds) {
    const fn = function c() {
      if (0 !== skuIds.length) {
        const obj2 = { skuIds: tmp };
        const storefrontPricesForSkuIds = StorefrontActionCreators.fetchStorefrontPricesForSkuIds(obj2);
      }
    };
    const items = [skuIds];
    cResult[0] = skuIds;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : (function useGetOrFetchStorefrontPricesForSkuIds(skuIds) {
  skuIds = skuIds.skuIds;
  const items = [skuIds];
  const effect = noop.useEffect(() => {
    if (0 !== skuIds.length) {
      const obj2 = { skuIds: tmp };
      const storefrontPricesForSkuIds = StorefrontActionCreators.fetchStorefrontPricesForSkuIds(obj2);
    }
  }, items);
});