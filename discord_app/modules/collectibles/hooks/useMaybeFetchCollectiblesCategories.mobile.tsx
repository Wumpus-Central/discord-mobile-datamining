// === Module 10188: ? ===

// Module 10188
import initialize from "initialize" /* 504 */;
import useMaybeFetchCollectiblesCategoriesShared from "useMaybeFetchCollectiblesCategoriesShared" /* 10189 */;
import DevSettingsStore from "DevSettingsStore" /* 4828 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx");

export default function useMaybeFetchCollectiblesCategories(paymentGateway, arg1) {
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
};