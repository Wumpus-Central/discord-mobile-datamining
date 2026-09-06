// discord_app/modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import useMaybeFetchCollectiblesCategoriesShared from "useMaybeFetchCollectiblesCategoriesShared.tsx";
import DevSettingsStore from "../../devtools/dev_settings/DevSettingsStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx");

export default function useMaybeFetchCollectiblesCategories(paymentGateway, arg1) {
  paymentGateway = undefined;
  if (paymentGateway != null) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  let obj = initialize;
  const items = [DevSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    noCache: DevSettingsStore.get("shop_disable_cache"),
    includeUnpublished: DevSettingsStore.get("shop_include_unpublished"),
  }));
  ({ noCache, includeUnpublished } = stateFromStoresObject);
  obj = { noCache, includeUnpublished, paymentGateway, countryCode: null, logPerf: null };
  let countryCode;
  if (paymentGateway != null) {
    countryCode = paymentGateway.countryCode;
  }
  obj.countryCode = countryCode;
  let logPerf;
  if (paymentGateway != null) {
    logPerf = paymentGateway.logPerf;
  }
  obj.logPerf = logPerf;
  let noOp;
  if (paymentGateway != null) {
    noOp = paymentGateway.noOp;
  }
  let skipFetch;
  if (paymentGateway != null) {
    skipFetch = paymentGateway.skipFetch;
  }
  return useMaybeFetchCollectiblesCategoriesShared.useMaybeFetchCollectiblesCategoriesShared(
    obj,
    noOp,
    arg1,
    skipFetch,
  );
}
