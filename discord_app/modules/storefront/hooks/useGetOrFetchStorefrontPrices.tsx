// === Module 8472: useGetOrFetchStorefrontPrices ===

// Module 8472 (useGetOrFetchStorefrontPrices)
import StorefrontActionCreators from "StorefrontActionCreators" /* 8473 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let applicationId, skuIds;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  let tmp2;
  let tmp3;
  let obj = applicationId(576);
  const cResult = obj.c(3);
  applicationId = applicationId.applicationId;
  if (cResult[0] !== applicationId) {
    const fn = function c() {
      if (null != applicationId) {
        const obj2 = { applicationId: tmp };
        const obj = StorefrontActionCreators;
        const storefrontPricesForApplicationId = obj.fetchStorefrontPricesForApplicationId(obj2);
      }
    };
    const items = [applicationId];
    cResult[0] = applicationId;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : ((applicationId) => {
  applicationId = applicationId.applicationId;
  const items = [applicationId];
  const effect = react.useEffect(() => {
    if (null != applicationId) {
      const obj2 = { applicationId: tmp };
      const obj = StorefrontActionCreators;
      const storefrontPricesForApplicationId = obj.fetchStorefrontPricesForApplicationId(obj2);
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuIds) => {
  let tmp2;
  let tmp3;
  let obj = skuIds(576);
  const cResult = obj.c(3);
  skuIds = skuIds.skuIds;
  if (cResult[0] !== skuIds) {
    const fn = function c() {
      if (0 !== skuIds.length) {
        const obj2 = { skuIds: tmp };
        const obj = StorefrontActionCreators;
        const storefrontPricesForSkuIds = obj.fetchStorefrontPricesForSkuIds(obj2);
      }
    };
    const items = [skuIds];
    cResult[0] = skuIds;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : ((skuIds) => {
  skuIds = skuIds.skuIds;
  const items = [skuIds];
  const effect = react.useEffect(() => {
    if (0 !== skuIds.length) {
      const obj2 = { skuIds: tmp };
      const obj = StorefrontActionCreators;
      const storefrontPricesForSkuIds = obj.fetchStorefrontPricesForSkuIds(obj2);
    }
  }, items);
});
const result = size.fileFinishedImporting("modules/storefront/hooks/useGetOrFetchStorefrontPrices.tsx");

export const useGetOrFetchStorefrontPricesForApplicationId = tmp2;
export const useGetOrFetchStorefrontPricesForSkuIds = tmp3;