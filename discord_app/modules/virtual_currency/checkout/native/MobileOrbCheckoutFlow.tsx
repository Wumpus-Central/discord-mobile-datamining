// discord_app/modules/virtual_currency/checkout/native/MobileOrbCheckoutFlow.tsx
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/MobileOrbCheckoutFlow.tsx");

export function getMobileCheckoutFlow(arg0) {
  ({ sku, product, usesCollectiblesDetails } = arg0);
  if (null != product) {
    const obj = { scenario: "collectibles", product };
    return obj;
  }
  if (null != sku) {
    if (!usesCollectiblesDetails) {
      let obj2 = { scenario: "commerce", sku };
    }
  }
  obj2 = { scenario: "loading" };
}
