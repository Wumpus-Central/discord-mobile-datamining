// === Module 15394: MobileOrbCheckoutFlow ===

// Module 15394 (MobileOrbCheckoutFlow)
import size from "module_2" /* 2 */;

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