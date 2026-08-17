// discord_app/modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx
import initialize from "initialize" /* 589 */;
import useMaybeFetchCollectiblesCategoriesShared from "useMaybeFetchCollectiblesCategoriesShared" /* 8392 */;
import closure_2 from "getUserAgnosticState" /* 4737 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx");

export default function useMaybeFetchCollectiblesCategories(paymentGateway) {
  paymentGateway = undefined;
  if (paymentGateway != null) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  let obj = initialize;
  const items = [closure_2];
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
  return useMaybeFetchCollectiblesCategoriesShared.useMaybeFetchCollectiblesCategoriesShared(obj, noOp, arg1);
};