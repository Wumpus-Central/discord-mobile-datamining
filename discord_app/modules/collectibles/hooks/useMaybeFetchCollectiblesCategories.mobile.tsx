// === Module 10467: ? ===

// Module 10467
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import useMaybeFetchCollectiblesCategoriesShared2 from "useMaybeFetchCollectiblesCategoriesShared" /* 10468 */;
import DevSettingsStore from "DevSettingsStore" /* 4889 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let paymentGateway;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((paymentGateway, arg1) => {
  let includeUnpublished;
  let noCache;
  let tmp5;
  let tmp6;
  let obj = react;
  const cResult = obj.c(8);
  paymentGateway = undefined;
  if (paymentGateway != null) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevSettingsStore];
    const fn = function l() {
      const obj = { noCache: DevSettingsStore.get("shop_disable_cache"), includeUnpublished: DevSettingsStore.get("shop_include_unpublished") };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
  ({ noCache, includeUnpublished } = stateFromStoresObject);
  let countryCode;
  if (paymentGateway != null) {
    countryCode = paymentGateway.countryCode;
  }
  let logPerf;
  if (paymentGateway != null) {
    logPerf = paymentGateway.logPerf;
  }
  if (cResult[2] === includeUnpublished) {
    if (cResult[3] === noCache) {
      if (cResult[4] === paymentGateway) {
        if (cResult[5] === countryCode) {
          let tmp11;
          if (cResult[6] === logPerf) {
            tmp11 = cResult[7];
          }
          let noOp;
          const useMaybeFetchCollectiblesCategoriesShared = useMaybeFetchCollectiblesCategoriesShared2.useMaybeFetchCollectiblesCategoriesShared;
          const tmpResult2 = useMaybeFetchCollectiblesCategoriesShared2;
          if (paymentGateway != null) {
            noOp = paymentGateway.noOp;
          }
          let skipFetch;
          if (paymentGateway != null) {
            skipFetch = paymentGateway.skipFetch;
          }
          return useMaybeFetchCollectiblesCategoriesShared(tmp11, noOp, arg1, skipFetch);
        }
      }
    }
  }
  const obj2 = { noCache, includeUnpublished, paymentGateway, countryCode, logPerf };
  cResult[2] = includeUnpublished;
  cResult[3] = noCache;
  cResult[4] = paymentGateway;
  cResult[5] = countryCode;
  cResult[6] = logPerf;
  cResult[7] = obj2;
  tmp11 = obj2;
}) : ((paymentGateway, arg1) => {
  let countryCode;
  let includeUnpublished;
  let logPerf;
  let noCache;
  paymentGateway = undefined;
  if (paymentGateway != null) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  let obj = get_initialized;
  const items = [DevSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { noCache: DevSettingsStore.get("shop_disable_cache"), includeUnpublished: DevSettingsStore.get("shop_include_unpublished") };
    return obj;
  });
  ({ noCache, includeUnpublished } = stateFromStoresObject);
  const obj2 = { noCache, includeUnpublished, paymentGateway, countryCode, logPerf };
  countryCode = undefined;
  const useMaybeFetchCollectiblesCategoriesShared = useMaybeFetchCollectiblesCategoriesShared2.useMaybeFetchCollectiblesCategoriesShared;
  useMaybeFetchCollectiblesCategoriesShared2;
  if (paymentGateway != null) {
    countryCode = paymentGateway.countryCode;
  }
  logPerf = undefined;
  if (paymentGateway != null) {
    logPerf = paymentGateway.logPerf;
  }
  let noOp;
  if (paymentGateway != null) {
    noOp = paymentGateway.noOp;
  }
  let skipFetch;
  if (paymentGateway != null) {
    skipFetch = paymentGateway.skipFetch;
  }
  return useMaybeFetchCollectiblesCategoriesShared(obj2, noOp, arg1, skipFetch);
});
const result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx");

export default tmp2;