import getUserAgnosticState from "getUserAgnosticState";

const require = arg1;
const result = require("useMaybeFetchCollectiblesCategoriesShared").fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx");

export default function useMaybeFetchCollectiblesCategories(paymentGateway) {
  let includeUnpublished;
  let noCache;
  paymentGateway = undefined;
  if (paymentGateway != null) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  let obj = require(589) /* initialize */;
  const items = [getUserAgnosticState];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ noCache: store.get("shop_disable_cache"), includeUnpublished: store.get("shop_include_unpublished") }));
  ({ noCache, includeUnpublished } = stateFromStoresObject);
  obj = { noCache, includeUnpublished, paymentGateway, countryCode: null, logPerf: null };
  let countryCode;
  if (paymentGateway != null) {
    countryCode = paymentGateway.countryCode;
  }
  obj[3] = countryCode;
  let logPerf;
  if (paymentGateway != null) {
    logPerf = paymentGateway.logPerf;
  }
  obj[4] = logPerf;
  let noOp;
  if (paymentGateway != null) {
    noOp = paymentGateway.noOp;
  }
  return require(8081) /* useMaybeFetchCollectiblesCategoriesShared */.useMaybeFetchCollectiblesCategoriesShared(obj, noOp, arg1);
};