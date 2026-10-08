// === Module 10077: ? ===

// Module 10077
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import useMaybeFetchCollectiblesCategoriesShared from "useMaybeFetchCollectiblesCategoriesShared" /* 10078 */;
import DevSettingsStore from "DevSettingsStore" /* 5089 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useMaybeFetchCollectiblesCategories(paymentGateway, arg1) {
  const cResult = c.c(8);
  paymentGateway = undefined;
  if (paymentGateway != null) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DevSettingsStore];
    const fn = function n() {
      return { noCache: DevSettingsStore.get("shop_disable_cache"), includeUnpublished: DevSettingsStore.get("shop_include_unpublished") };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp5, tmp6);
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
          if (cResult[6] === logPerf) {
            let tmp11 = cResult[7];
          }
          const tmpResult2 = useMaybeFetchCollectiblesCategoriesShared;
          let noOp;
          if (paymentGateway != null) {
            noOp = paymentGateway.noOp;
          }
          let skipFetch;
          if (paymentGateway != null) {
            skipFetch = paymentGateway.skipFetch;
          }
          return tmpResult2.useMaybeFetchCollectiblesCategoriesShared(tmp11, noOp, arg1, skipFetch);
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
  const tmpResult = initialize;
}) : (function useMaybeFetchCollectiblesCategories(paymentGateway, arg1) {
  paymentGateway = undefined;
  if (paymentGateway != null) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  const items = [DevSettingsStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ noCache: DevSettingsStore.get("shop_disable_cache"), includeUnpublished: DevSettingsStore.get("shop_include_unpublished") }));
  ({ noCache, includeUnpublished } = stateFromStoresObject);
  const obj3 = { noCache, includeUnpublished, paymentGateway, countryCode: null, logPerf: null };
  let countryCode;
  if (paymentGateway != null) {
    countryCode = paymentGateway.countryCode;
  }
  obj3.countryCode = countryCode;
  let logPerf;
  if (paymentGateway != null) {
    logPerf = paymentGateway.logPerf;
  }
  obj3.logPerf = logPerf;
  let noOp;
  if (paymentGateway != null) {
    noOp = paymentGateway.noOp;
  }
  let skipFetch;
  if (paymentGateway != null) {
    skipFetch = paymentGateway.skipFetch;
  }
  return useMaybeFetchCollectiblesCategoriesShared.useMaybeFetchCollectiblesCategoriesShared(obj3, noOp, arg1, skipFetch);
});